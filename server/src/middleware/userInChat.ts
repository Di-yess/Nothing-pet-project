import { PrismaClient } from '@prisma/client';
import { MiddleWare } from '../types';
const prisma = new PrismaClient();

const userInChat: MiddleWare = async (req, res, next) => {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;

  if (!newMessage || !chatId) {
    res.status(403).json({ error: 'Message or chatId is invalid' });
    return;
  }

  try {
    const chat = await prisma.chat.findUnique({
      where: { id: chatId },
      select: { senderId: true, receiverId: true },
    });

    if (chat?.senderId !== userId && chat?.receiverId !== userId) {
      res.status(403).json({ error: 'You are not allowed to post message' });
      return;
    }
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { userInChat };
