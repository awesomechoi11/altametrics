import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate, useParams } from "react-router";

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useInvoice from "@/lib/hooks/useInvoice";
import ClipLoader from "react-spinners/ClipLoader";
import moment from "moment";
import { Close } from "@radix-ui/react-dialog";
import { Invoice } from "@/lib/types";
import { Bean } from "./ui/bean";

function InvoicesDialog() {
    const params = useParams();
    const invoiceId = params.invoiceId as string;
    const { data, isSuccess, isError, isPending } = useInvoice(invoiceId);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/dashboard/invoices");
    };
    return (
        <Dialog
            defaultOpen={!!invoiceId}
            onOpenChange={(open) => !open && handleClose()}
        >
            <DialogContent className="sm:max-w-[725px]">
                <DialogHeader>
                    <DialogTitle>View invoice</DialogTitle>
                    <DialogDescription>
                        A detailed view of your invoice.
                    </DialogDescription>
                </DialogHeader>
                {isPending ? (
                    <ClipLoader />
                ) : (
                    <>
                        {isSuccess && !!data && <InvoiceTable invoice={data} />}
                        {isError && <div>Error while fetching data</div>}
                        {isSuccess && !isError && !data && (
                            <div className="text-center text-lg font-semibold text-gray-500 dark:text-gray-400">
                                No invoice found with this id
                            </div>
                        )}
                    </>
                )}

                <DialogFooter>
                    <Close>Close</Close>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function InvoiceTable({ invoice }: { invoice: Invoice }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice Id</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.vendor_name}</TableCell>
                    <TableCell>
                        {moment(invoice.due_date).format("MM/DD/YYYY")}
                    </TableCell>
                    <TableCell>
                        {invoice.paid ? (
                            <Bean className="bg-green-200 text-green-900">
                                True
                            </Bean>
                        ) : (
                            <Bean className="bg-red-200 text-red-900">
                                False
                            </Bean>
                        )}
                    </TableCell>
                    <TableCell className="text-right">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(parseFloat(invoice.amount))}
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell colSpan={5} className="font-normal">
                        {invoice.description}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default InvoicesDialog;
