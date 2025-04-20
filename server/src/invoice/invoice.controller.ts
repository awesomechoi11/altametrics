import { JwtAuthGuard } from 'src/auth/passport/jwt-auth-guard';
import { InvoiceService } from './invoice.service';
import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';

@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(JwtAuthGuard)
  @Get('invoices')
  getAllInvoices(@Request() req) {
    return this.invoiceService.getAllInvoicesByUserId(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get('invoices/:id')
  getInvoice(@Request() req, @Param('id') invoiceId: string) {
    return this.invoiceService.getInvoiceById(req.user.sub, Number(invoiceId));
  }
}
