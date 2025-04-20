import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'securepassword123',
      Invoice: {
        create: [
          {
            vendor_name: 'Acme Supplies',
            amount: '250.00',
            due_date: new Date('2025-06-15T00:00:00.000Z'),
            description: 'Office chairs purchase',
            paid: false,
          },
          {
            vendor_name: 'Global Hosting',
            amount: '75.50',
            due_date: new Date('2025-05-01T00:00:00.000Z'),
            description: 'Monthly server hosting',
            paid: true,
          },
        ],
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: 'anotherSecureP@ss',
      Invoice: {
        create: [
          {
            vendor_name: 'Zenith Consulting',
            amount: '1200.00',
            due_date: new Date('2025-07-01T00:00:00.000Z'),
            description: 'Quarterly consulting fee',
            paid: false,
          },
          {
            vendor_name: 'Bright Marketing',
            amount: '450.25',
            due_date: new Date('2025-05-20T00:00:00.000Z'),
            description: 'Social media campaign',
            paid: false,
          },
        ],
      },
    },
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
