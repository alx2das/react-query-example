import React, { FC } from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
        mutations: {
            retry: false
        }
    }
});

const Root: FC = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<Root />);