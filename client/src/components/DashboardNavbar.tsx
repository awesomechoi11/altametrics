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
function DashboardNavbar() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="px-4 py-4">
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
                <div className="flex gap-4 items-center max-w-1/2">
                    <Input type="text" placeholder="Search" />
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="ghost">Ghost</Button>
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
