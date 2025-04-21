import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

interface invoice {
  vendor_name: string;
  amount: string;
  due_date: Date;
  description: string;
  paid: boolean;
}

function generateInvoices() {
  const invoiceCount = faker.number.int({ min: 100, max: 150 });
  const invoices: invoice[] = [];
  for (let i = 0; i < invoiceCount; i++) {
    const invoice = {
      vendor_name: faker.company.name(),
      amount: faker.finance.amount({
        min: 50,
        max: 5000,
        dec: 2,
      }),
      due_date: faker.date.future(),
      description: faker.commerce.productDescription(),
      paid: faker.datatype.boolean(),
    };
    invoices.push(invoice);
  }
  return invoices;
}

async function main() {
  try {
    await prisma.invoice.deleteMany({});
  } catch (e) {
    console.warn('failed to delete invoices – table may not exist yet');
  }
  try {
    await prisma.user.deleteMany({});
  } catch (e) {
    console.warn('failed to delete users – table may not exist yet');
  }

  await prisma.user.upsert({
    where: { email: 'alice@altametrics.com' },
    update: {},
    create: {
      email: 'alice@altametrics.com',
      name: 'Alice',
      password: 'securepassword123',
      Invoice: {
        create: generateInvoices(),
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'bob@altametrics.com' },
    update: {},
    create: {
      email: 'bob@altametrics.com',
      name: 'Bob',
      password: 'anotherSecureP@ss',
      Invoice: {
        create: generateInvoices(),
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
