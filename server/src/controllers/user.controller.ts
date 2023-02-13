import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
import { Controller } from '../types';

const prisma = new PrismaClient();

// Если сессия - найти юзера, взять нужные поля и отправить
const getUser: Controller = async (req, res) => {
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
          avatar: {
            select: {
              link: true,
            },
          },
        },
      });
      res.json(user);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const updateUser: Controller = async (req, res) => {
  const id = req.session.userId;
  const { fullName, email, phone, profession, adress } = JSON.parse(
    req.body.data
  );
  const newAvatar = req.file;

  try {
    if (newAvatar) {
      const newName = Date.now() + newAvatar.originalname;
      const path = `${__dirname}/../../public/avatars/${newName}.jpg`;

      // test sharp
      sharp(newAvatar.buffer).resize({ width: 512 }).toFile(path);
      // test sharp

      //await fs.writeFile(path, newAvatar.buffer);
      await prisma.user.update({
        where: { id },
        data: {
          email,
          fullName,
          phone,
          profession,
          adress,
          avatar: {
            update: {
              link: newName || null,
            },
          },
        },
      });
    }
    const newData = await prisma.user.update({
      where: { id },
      data: {
        email,
        fullName,
        phone,
        profession,
        adress,
      },
      select: {
        email: true,
        fullName: true,
        phone: true,
        profession: true,
        adress: true,
        avatar: true,
      },
    });
    res.json(newData);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const logoutUser: Controller = async (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.sendStatus(200);
  });
};

const deleteUser: Controller = async (req, res) => {
  const id = req.session.userId;

  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getUserById: Controller = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        profession: true,
        adress: true,
        avatar: {
          select: {
            link: true,
          },
        },
      },
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getAllUsers: Controller = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        avatar: {
          select: {
            link: true,
          },
        },
      },
    });
    res.json(allUsers);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export {
    getUser,
    updateUser,
    logoutUser,
    deleteUser,
    getUserById,
    getAllUsers,
};

