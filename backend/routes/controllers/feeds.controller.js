import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getFeeds = async (req, res) => {
  try {
    const feeds = await prisma.feedBack.findMany({
      select: {
        id: true,
        text: true,
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
    });
    console.log(feeds);
    res.json(feeds);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export { getFeeds };
