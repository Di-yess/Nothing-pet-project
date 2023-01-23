import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // поиск пользователя
    const user = await prisma.user.findUnique({
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
            user.img = user.avatar.link;
            delete user.password;
            delete user.avatar;
            res.json(user);
            //res.sendStatus(201);
          });
        } else {
          res.sendStatus(404);
        }
      } catch (err) {
        console.log(err);
      }
      // Если юзера нет перекинуть на стр регистрации
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
  }
};

const userRegister = async (req, res) => {
  const { fullName, email, password } = req.body;
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
          user.img = user.avatar.link;
          delete user.avatar;
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
