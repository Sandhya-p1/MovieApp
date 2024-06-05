import Body from "./components/body/body";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="h-screen overflow-scroll w-screen no-scrollbar bg-gray-100 pb-8">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
