import type { Invoice } from "./invoice";

export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    Invoice: Invoice[];
}
