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
            message: {
              select: {
                id: true,
                text: true,
                userId: true,
                createdAt: true,
              },
            },
          },
        },
      },
    });
    console.log(chats);
    res.json(chats);
  } catch (err) {
    console.log(err);
  }
};

const newChat = async (req, res) => {
  const { receiverId } = req.body;
  const userId = req.session.userId;

  console.log('newChat ', receiverId, ' ', userId);

  res.sendStatus(200);

  try {
  } catch (err) {
    console.log(err);
  }
};

const postMessage = async (req, res) => {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;

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
  console.log('chatId', chatId);

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
    console.log('chatCheck', chatCheck);
    if (chatCheck.senderId === userId || chatCheck.receiverId === userId) {
      const messages = await prisma.chatAndMessage.findMany({
        where: {
          chatId,
        },
        select: {
          message: true,
        },
      });
      console.log('all messages', messages);
      res.json(messages);
    } else {
      console.log('cant find messages');
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { getChats, newChat, postMessage, getMessages };
