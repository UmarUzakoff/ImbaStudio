import { Layout } from "./components";
import { HomePage, Design, Gallery } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/3D_Designs" element={<Design />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
