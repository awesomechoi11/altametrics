import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { Auth } from "../types";

function useInvoices() {
    const token = useSelector((state) => state.auth.token);
    const query = useQuery({
        queryKey: ["invoices"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/invoices", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        },
    });
    return query;
}
export default useInvoices;
