import { setToken } from "@/lib/store/authStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function useLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useMutation({
        mutationFn: async ({
            username,
            password,
        }: {
            username: string;
            password: string;
        }) => {
            const response = await axios.post(
                "http://localhost:3000/auth/login",
                {
                    username,
                    password,
                }
            );

            return response.data;
        },
        onSuccess: (data) => {
            console.log("success", data);
            dispatch(setToken(data.access_token));
            localStorage.setItem("access_token", data.access_token);
            navigate("/dashboard/invoices");
        },
    });
    return query;
}
