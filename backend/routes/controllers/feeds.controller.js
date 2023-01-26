import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getFeeds = async (req, res) => {
  try {
    const feeds = await prisma.feedBack.findMany({
      take: 9,
      orderBy: {
        createdAt: 'desc',
      },
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
    res.json(feeds);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const addFeed = async (req, res) => {
  const { userId, text } = req.body;
  if (req.session.userId === userId) {
    try {
      const response = await prisma.feedBack.create({
        data: {
          userId: userId,
          text,
        },
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
      res.json(response);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};

export { getFeeds, addFeed };
