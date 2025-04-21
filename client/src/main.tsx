import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./lib/store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import InvoicesPage from "./pages/invoices/InvoicesPage.tsx";
import InvoicesDialog from "./components/InvoicesDialog.tsx";
import DashboardLayout from "./components/DashboardLayout.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route path="invoices" element={<InvoicesPage />}>
                                <Route
                                    path=":invoiceId"
                                    element={<InvoicesDialog />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </StrictMode>
);
