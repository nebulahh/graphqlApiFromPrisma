import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient()

async function main() {
  await prisma.message.deleteMany({})
  await prisma.user.deleteMany({})

  await prisma.user.create({
    data: {
      name: 'Jack',
      messages: {
        create: [
          {
            body: 'A note for Jack'
          },
          {
            body: 'Another note for Lekan'
          }
        ]
      }
    }
  });

  await prisma.user.create({
    data: {
      name: 'Ryan',
      messages: {
        create: [
          {
            body: 'A note for Ryan'
          },
          {
            body: 'Another note for Ryan'
          }
        ]
      }
    }
  });

  await prisma.user.create({
    data: {
      name: 'Adam',
      messages: {
        create: [
          {
            body: 'A note for Adam'
          },
          {
            body: 'Another note for Adam'
          }
        ]
      }
    }
  });
}

main().then(() => {
  console.log('Data seeded...');
});