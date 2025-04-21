import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { Invoice } from "../types";

function useInvoice(invoiceId: string | undefined) {
    const token = useSelector((state) => state.auth.token);
    const query = useQuery<Invoice>({
        queryKey: ["invoice", invoiceId],
        enabled: !!invoiceId,
        refetchOnMount: true,
        queryFn: async () => {
            const response = await axios.get(
                `http://localhost:3000/invoices/${invoiceId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return response.data;
        },
    });
    return query;
}
export default useInvoice;
