import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import useLocalStorage from 'use-local-storage';


const Layout = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false)

  return (
    <div className="App" data-theme={ isDark ? "dark" : "light" }>
      <Sidebar isDark={isDark} setIsDark={setIsDark}/>
      <Outlet />
    </div>
  )
}

export default Layout;
