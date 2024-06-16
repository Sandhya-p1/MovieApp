import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/body/footer";

function App() {
  return (
    <div className="h-full overflow-scroll w-screen no-scrollbar bg-gray-100 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
