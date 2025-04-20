import { Outlet, useParams } from "react-router";

function InvoicesPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm"> hello</div>
            <Outlet />
        </div>
    );
}

export default InvoicesPage;
