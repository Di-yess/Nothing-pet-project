import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Если сессия - найти юзера, взять нужные поля и отправить
const getUser = async (req, res) => {
  try {
    if (req.session.userId) {
      const id = req.session.userId;
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          profession: true,
          adress: true,
          password: true,
          avatar: {
            select: {
              link: true,
            },
          },
        },
      });
      user.img = user.avatar.link;
      delete user.password;
      delete user.avatar;
      console.log(user);
      res.json(user);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const updateUser = async (req, res) => {
  const id = req.session.userId;
  const { fullName, email, phone, profession, adress } = req.body;
  try {
    await prisma.user.update({
      where: { id },
      data: {
        email,
        fullName,
        phone,
        profession,
        adress,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const logoutUser = async (req, res) => {
  console.log('logout');
  req.session.destroy(() => {
    res.clearCookie('LeopardsCookie');
    res.sendStatus(200);
  });
};

export { getUser, updateUser, logoutUser };
