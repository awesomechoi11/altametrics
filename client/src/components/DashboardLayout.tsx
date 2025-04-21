import { AppSidebar } from "@/components/AppSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <div className="flex flex-col w-full h-screen overflow-hidden">
                <DashboardNavbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DashboardLayout;
