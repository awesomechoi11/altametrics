import { setToken } from "@/lib/store/authStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function useLogin() {
    const dispatch = useDispatch();
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
        },
    });
    return query;
}
