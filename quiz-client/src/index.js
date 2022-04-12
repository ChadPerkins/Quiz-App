import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { ContextProvider } from "./hooks/useStateContext";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
