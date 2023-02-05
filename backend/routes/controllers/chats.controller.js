import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getChats = async (req, res) => {
  const userId = req.session.userId;
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

const newChat = async (req, res) => {
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

const postMessage = async (req, res) => {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;
  
  if (!newMessage) res.sendStatus(400);

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

const getMessages = async (req, res) => {
  const chatId = req.params.id ? Number(req.params.id) : null;
  const userId = req.session.userId;

  if (!chatId) res.sendStatus(400);
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
    if (chatCheck.senderId === userId || chatCheck.receiverId === userId) {
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

const readMessages = async (req, res) => {
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

export { getChats, newChat, postMessage, getMessages, readMessages };
