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

export { getChats, newChat };
