import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about/About";
import { Landing } from "./pages/landing/Landing";
import { PageLayout } from "./components/layout/PageLayout";
import { CssBaseline } from "@mui/material";
import { ColorModeContextProvider } from "./provider/ColorModeProvider";

export function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorModeContextProvider>
  );
}
