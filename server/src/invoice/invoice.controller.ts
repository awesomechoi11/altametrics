import { InvoiceService } from './invoice.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly invoiceService: InvoiceService) {}
}
