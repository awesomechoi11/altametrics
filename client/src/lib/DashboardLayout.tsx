import { AppSidebar } from "@/components/AppSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div className="w-full">
                <DashboardNavbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DashboardLayout;
