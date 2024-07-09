import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/body/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-muted ">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
