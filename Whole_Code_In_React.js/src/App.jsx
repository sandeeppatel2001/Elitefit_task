import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <Homepage /> */}
    </>
  );
}

export default App;
