import { Outlet } from "react-router-dom";
import Header from "../pages/header";

function AppLayout(){
    return (
        <div className="app-layout">
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            </div>
    )
}
export default AppLayout