import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoiceService {
  private readonly logger = new Logger(InvoiceService.name);

  constructor(private prismaService: PrismaService) {}

  async getAllInvoicesByUserId(user_id: number): Promise<any> {
    this.logger.verbose(`Fetching all invoices for user: ${user_id}`);

    const invoices = await this.prismaService.invoice.findMany({
      where: { user_id },
    });

    if (!invoices) {
      this.logger.verbose(`No invoices found for user with id ${user_id}`);
    }

    return invoices;
  }

  async getInvoiceById(user_id: number, id: number): Promise<any> {
    this.logger.verbose(`Fetching invoice ${id} for user: ${user_id}`);

    const invoices = await this.prismaService.invoice.findFirst({
      where: { user_id, id },
    });

    if (!invoices) {
      this.logger.verbose(`No invoices found for user with id ${user_id}`);
    }

    return invoices;
  }
}
