import { PrismaClient } from '@prisma/client';
import { Controller, INewChatUsers } from '../types';
const prisma = new PrismaClient();

const getChats: Controller = async (req, res) => {
  const userId = req.session?.userId;
  try {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          {
            senderId: userId,
          },
          {
            receiverId: userId,
          },
        ],
      },
      include: {
        sender: {
          select: {
            id: true,
            fullName: true,
            avatar: {
              select: {
                link: true,
              },
            },
          },
        },
        receiver: {
          select: {
            id: true,
            fullName: true,
            avatar: {
              select: {
                link: true,
              },
            },
          },
        },
        messages: {
          select: {
            message: true,
          },
        },
      },
    });
    res.json(chats);
  } catch (err) {
    console.log(err);
  }
};

const newChat: Controller = async (req, res) => {
  const { newPersonId } = req.body;
  const userId = req.session.userId;

  try {
    const checkChat = await prisma.chat.findFirst({
      where: {
        OR: [
          {
            senderId: userId,
            receiverId: newPersonId,
          },
          {
            senderId: newPersonId,
            receiverId: userId,
          },
        ],
      },
    });
    if (!checkChat) {
      const newChat = await prisma.chat.create({
        data: {
          senderId: userId,
          receiverId: newPersonId,
        },
        include: {
          sender: {
            select: {
              id: true,
              fullName: true,
              avatar: {
                select: {
                  link: true,
                },
              },
            },
          },
          receiver: {
            select: {
              id: true,
              fullName: true,
              avatar: {
                select: {
                  link: true,
                },
              },
            },
          },
          messages: {
            select: {
              message: true,
            },
          },
        },
      });
      res.json(newChat);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const postMessage: Controller = async (req, res) => {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    res.sendStatus(401);
    return;
  }

  // message for personal chat
  try {
    const message = await prisma.message.create({
      data: {
        text: newMessage,
        userId,
      },
    });
    await prisma.chatAndMessage.create({
      data: {
        chatId,
        messageId: message.id,
      },
    });
    res.json(message);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getMessages: Controller = async (req, res) => {
  const chatId = req.params.id ? Number(req.params.id) : null;
  const userId = req.session.userId;

  if (!chatId) {
    res.sendStatus(400);
    return;
  }
  // у юзера есть данный чат

  try {
    const chatCheck = await prisma.chat.findUnique({
      where: {
        id: chatId,
      },
    });
    if (!chatCheck) {
      res.sendStatus(400);
    }
    if (chatCheck?.senderId === userId || chatCheck?.receiverId === userId) {
      const messages = await prisma.chatAndMessage.findMany({
        where: {
          chatId,
        },
        select: {
          message: true,
        },
      });
      res.json(messages);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const readMessages: Controller = async (req, res) => {
  const userId = req.session.userId;
  const { chatId } = req.body;

  try {
    const messages = await prisma.chatAndMessage.findMany({
      where: {
        chatId,
        message: { NOT: { userId } },
      },
      include: {
        message: true,
      },
    });

    messages.forEach(async ({ message }) => {
      await prisma.message.update({
        where: {
          id: message.id,
        },
        data: {
          read: true,
        },
      });
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

const findOrCreateChat: Controller = async (req, res) => {
  const { personId } = req.body;
  const userId = req.session.userId;

  try {
    const newOrFindedChat = await prisma.chat.findFirst({
      where: {
        OR: [
          {
            senderId: userId,
            receiverId: personId,
          },
          {
            senderId: personId,
            receiverId: userId,
          },
        ],
      },
    });

    if (newOrFindedChat) {
      res.json(newOrFindedChat.id);
    } else {
      const newChat = await prisma.chat.create({
        data: {
          senderId: userId,
          receiverId: personId,
        },
      });
      res.json(newChat.id);
    }
  } catch (err) {
    console.log(err);
  }
};

const newGroupChat: Controller = async (req, res) => {
  const userId = req.session.userId;
  const { newChatUsers, chatName }: INewChatUsers = req.body;

  if (!userId) {
    res.sendStatus(401);
    return;
  }

  const usersId = newChatUsers.map((user) => ({
    userId: user.id,
  }));
  // добавить админа в собственный чат
  usersId.push({ userId });
  // попытка создать пустой чат
  if (newChatUsers.length === 0) res.sendStatus(400);

  try {
    const newGroupChat = await prisma.groupChat.create({
      data: {
        ownerId: userId,
        name: chatName,
        users: {
          create: usersId,
        },
      },
      select: {
        id: true,
        name: true,
        ownerId: true,
        users: {
          select: {
            user: {
              select: {
                id: true,
                fullName: true,
                avatar: {
                  select: {
                    link: true,
                  },
                },
              },
            },
          },
        },
        messages: {
          select: {
            message: {
              select: {
                id: true,
                text: true,
                userId: true,
                createdAt: true,
                user: {
                  select: {
                    id: true,
                    fullName: true,
                    avatar: {
                      select: {
                        link: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    res.json(newGroupChat);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getGroupChats: Controller = async (req, res) => {
  const userId = req.session.userId;
  try {
    const groupChats = await prisma.groupChatAndUser.findMany({
      where: {
        userId,
      },
      select: {
        groupChat: {
          select: {
            id: true,
            name: true,
            ownerId: true,
            messages: {
              select: {
                message: {
                  select: {
                    id: true,
                    text: true,
                    read: true,
                    userId: true,
                    createdAt: true,
                    user: {
                      select: {
                        id: true,
                        fullName: true,
                        avatar: { select: { link: true } },
                      },
                    },
                  },
                },
              },
            },
            users: {
              select: {
                user: {
                  select: {
                    id: true,
                    fullName: true,
                    avatar: { select: { link: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    res.json(groupChats);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const postGroupMessage: Controller = async (req, res) => {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    res.sendStatus(400);
    return;
  }

  try {
    const message = await prisma.message.create({
      data: {
        text: newMessage,
        userId,
      },
      select: {
        id: true,
        text: true,
        read: true,
        userId: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            fullName: true,
            avatar: { select: { link: true } },
          },
        },
      },
    });

    await prisma.groupChatAndMessage.create({
      data: {
        groupChatId: chatId,
        messageId: message.id,
      },
    });

    res.json(message);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export {
  getChats,
  newChat,
  postMessage,
  getMessages,
  readMessages,
  findOrCreateChat,
  newGroupChat,
  getGroupChats,
  postGroupMessage,
};
