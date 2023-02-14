import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Controller, IUser } from '../types';

const prisma = new PrismaClient();

const userLogin: Controller = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.sendStatus(400);

  try {
    // поиск пользователя
    const user: IUser | null = await prisma.user.findUnique({
      where: { email },
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
    // если он существует - проверка
    if (user) {
      try {
        const check = await bcrypt.compare(password, user.password);
        // Если все ок - сессия
        if (check) {
          req.session.userId = user.id;
          req.session.save(() => {
            const { password, ...userWithoutPassword } = user;
            res.json(userWithoutPassword);
          });
        } else {
          res.status(404).json({ error: 'Password is incorrect' });
        }
      } catch (err) {
        console.log(err);
      }
      // Если юзера нет перекинуть на стр регистрации
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const userRegister: Controller = async (req, res) => {
  const { fullName, email, password } = req.body;
  // Проверка в обход форм
  if (!fullName || !email || !password) res.sendStatus(400);
  if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) res.sendStatus(400);

  try {
    // Проверка на наличие такой же почты
    const checkEmail = await prisma.user.findFirst({
      where: { email },
    });
    // Если ее нет создаю юзера
    if (!checkEmail) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          fullName,
          password: hash,
          avatar: {
            create: {},
          },
        },
      });
      // создаем и находим user и отправляем
      // с необходимыми полями
      const user = await prisma.user.findUnique({
        where: {
          id: newUser.id,
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
      if (user) {
        req.session.userId = user.id;
        req.session.save(() => {
          // дописать аватар
          res.json(user);
        });
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
  }
};

export { userLogin, userRegister };
