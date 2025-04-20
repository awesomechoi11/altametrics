import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Bell, Moon, Settings } from "lucide-react";
function DashboardNavbar() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="px-4 pr-8 py-4 border-b border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-900">
            <div className="flex justify-between items-center">
                <div className="flex gap-[16px] items-center">
                    <SidebarTrigger />
                    <div className="inline-block">
                        <Breadcrumb>
                            <BreadcrumbList>
                                {location.pathname
                                    .split("/")
                                    .filter((elem) => elem)
                                    .map((path, index) => (
                                        <>
                                            {index !== 0 && (
                                                <BreadcrumbSeparator
                                                    key={path + "seperator"}
                                                />
                                            )}
                                            <BreadcrumbItem key={path}>
                                                <BreadcrumbLink
                                                    href={
                                                        path === "dashboard"
                                                            ? "/dashboard"
                                                            : path
                                                    }
                                                    className="capitalize"
                                                >
                                                    {path}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </>
                                    ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="flex gap-4 items-center max-w-2/3">
                    <Input type="text" placeholder="Search" />
                    <Button variant="ghost">
                        <Bell />
                    </Button>
                    <Button variant="ghost">
                        <Settings />
                    </Button>
                    <Button variant="ghost">
                        <Moon />
                    </Button>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
}
export default DashboardNavbar;
