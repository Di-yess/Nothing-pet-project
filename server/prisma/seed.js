import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const hashPassword = await bcrypt.hash('11', 10);
  const users = [
    { fullName: 'test', email: 'test@test.com', password: hashPassword },
    { fullName: 'Admin', email: 'admin@admin.com', password: hashPassword },
    { fullName: 'Akachi', email: 'user@user.com', password: hashPassword },
    { fullName: 'Name', email: 'onemore@onemore.com', password: hashPassword },
    { fullName: 'Ololo', email: 'ololo@ololo.com', password: hashPassword },
  ];

  const feedBacks = [];
  for (let i = 0; i < 9; i++) {
    feedBacks.push({ text: faker.word.noun(), userId: 1 });
  }

  for (let i = 0; i < users.length; i++) {
    await prisma.user.create({
      data: {
        ...users[i],
        avatar: {
          create: {},
        },
      },
    });
  }

  await prisma.feedBack.createMany({
    data: feedBacks,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// seed user
//   const hashPassword = await bcrypt.hash('11', 10);
//   const users = Array.from({ length: 5 }, () => ({
//     name: faker.name.firstName(),
//     email: faker.internet.email(),
//     password: hashPassword,
//   }));

//   const posts = Array.from({ length: 10 }, () => ({
//     title: faker.word.noun(),
//     text: faker.lorem.text(),
//     userId: Math.floor(Math.random() * 5) + 1,
//   }));

//   await prisma.post.createMany({ data: posts });
//   //await prisma.user.createMany({ data: users });
