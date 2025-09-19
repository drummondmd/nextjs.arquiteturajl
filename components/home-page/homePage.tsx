import FooterPage from "./footer";
import HeaderPage from "./header";
import HeroPage from "./hero";
import MainPage from "./main";

import "@/styles/legacy.css"

export default function HomePage() {
    return (
        <>
            <div className="legacy-container">
                <HeaderPage />
                <HeroPage />
                <MainPage />
                <FooterPage />
            </div>
        </>
    )
}