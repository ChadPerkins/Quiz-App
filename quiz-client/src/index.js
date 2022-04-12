import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { ContextProvider } from "./hooks/useStateContext";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography:{
        fontFamily: 'IBM Plex Sans'
    }
});

const root = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ContextProvider>
    </React.StrictMode>
);
