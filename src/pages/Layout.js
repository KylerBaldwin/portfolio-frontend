import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <div className="text-white bg-zinc-900 max-w-7xl mx-auto">
      <header >
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  )
};

export default Layout;