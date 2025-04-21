import { JwtAuthGuard } from 'src/auth/passport/jwt-auth-guard';
import { InvoiceService } from './invoice.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';
import { AuthRequest } from 'src/auth/auth.type';

@Controller()
export class InvoiceController {
  private readonly logger = new Logger(InvoiceController.name);

  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(JwtAuthGuard)
  @Get('invoices')
  getAllInvoices(@Request() req: AuthRequest) {
    const userId = Number(req?.user?.sub);
    if (isNaN(userId)) {
      this.logger.error('Invalid user ID');
      throw new HttpException('Invalid user ID', HttpStatus.UNAUTHORIZED);
    }
    return this.invoiceService.getAllInvoicesByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('invoices/:id')
  getInvoice(
    @Request() req: AuthRequest,
    @Param('id') invoiceId: InvoiceDto['id'],
  ) {
    const userId = Number(req?.user?.sub);
    if (isNaN(userId)) {
      this.logger.warn('Invalid user ID');
      throw new HttpException('Invalid user ID', HttpStatus.UNAUTHORIZED);
    }

    if (isNaN(Number(invoiceId))) {
      this.logger.warn('Invalid invoice ID');
      throw new HttpException('Invalid invoice ID', HttpStatus.BAD_REQUEST);
    }
    if (Number(invoiceId) <= 0) {
      this.logger.warn('Invoice ID must be greater than 0');
      throw new HttpException(
        'Invoice ID must be greater than 0',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.invoiceService.getInvoiceById(userId, Number(invoiceId));
  }
}
