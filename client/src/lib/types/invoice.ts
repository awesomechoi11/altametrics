export interface Invoice {
    id: number;
    vendor_name: string;
    amount: string;
    due_date: string;
    description: string;
    user_id: number;
    paid: boolean;
}

export type Invoices = Invoice[];
