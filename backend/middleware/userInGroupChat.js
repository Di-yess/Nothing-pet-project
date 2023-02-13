import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function userInGroupChat(req, res, next) {
  const { newMessage, chatId } = req.body;
  const userId = req.session.userId;

  if (!newMessage || !chatId) {
    res.status(403).json({ error: 'Message or chatId is invalid' });
    return;
  }

  try {
    console.log('groupChatId', chatId);
    const chat = await prisma.groupChatAndUser.findFirst({
      where: { groupChatId: chatId, userId },
    });

    if (!chat) {
      res
        .status(403)
        .json({ error: 'You are not allowed to post message in this chat' });
      return;
    }
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { userInGroupChat };
