import { Route, Routes } from "react-router-dom"
import {HomePage} from "../Pages/HomePage"
import { WalletPage } from "../Pages/WalletPage"
import { CryptoPage } from "../Pages/CryptoPage";
import PopulationPage from "../Pages/PopulationPage";

export const  AllRoutes = () => {
    return (
     <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/wallet" element={<WalletPage/>}/>
        <Route path="/population" element={<PopulationPage/>}/>
        <Route path="/crypto" element={<CryptoPage />}/>
     </Routes>
    );
};