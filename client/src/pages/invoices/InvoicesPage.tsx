import useInvoices from "@/lib/hooks/useInvoices";
import { Outlet } from "react-router";

import InvoicesDatatable from "@/components/InvoicesDatatable";
import ClipLoader from "react-spinners/ClipLoader";

function InvoicesPage() {
    const { data, isSuccess, error } = useInvoices();
    console.log(data, isSuccess, error);
    return (
        <div className="px-12 pr-8 py-12 pb-16">
            <div>
                {isSuccess ? <InvoicesDatatable data={data} /> : <ClipLoader />}
            </div>
            <Outlet />
        </div>
    );
}

export default InvoicesPage;
