import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { NotFound } from "../components/notfound/NotFound";
import { About } from "../components/about/About";
import { Home } from "../components/pages/home/Home";
import { useEffect } from "react";
import { History } from "../components/pages/history/History";
import { Settings } from "../components/pages/settings/Settings";


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-pomodoro' element={<About />} />
                <Route path='/history' element={<History />} />
                <Route path='/settings' element={<Settings />} />

                <Route path='*' element={<NotFound />} />
            </Routes>

            <ScrollToTop />
        </BrowserRouter>
    )
}