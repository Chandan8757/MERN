import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/Header"
function Main() {
  return (
   <>
  <Header />
  <Outlet />
  <Footer />
  
  </>
  );
}
export default Main;
