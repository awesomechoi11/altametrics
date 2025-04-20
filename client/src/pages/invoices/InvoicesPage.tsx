import useInvoices from "@/lib/hooks/useInvoices";
import { Outlet } from "react-router";

import InvoicesDatatable from "@/components/InvoicesDatatable";
import ClipLoader from "react-spinners/ClipLoader";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

function InvoicesPage() {
    const { data, isSuccess, error } = useInvoices();
    console.log(data, isSuccess, error);
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div>
                {isSuccess ? <InvoicesDatatable data={data} /> : <ClipLoader />}
            </div>
            <Outlet />
        </div>
    );
}

export default InvoicesPage;
