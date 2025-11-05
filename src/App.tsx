import Tab from '../components/Tab';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CurrencyPage from "../components/currency/CurrencyPage";
import FavoritePage from "../components/favorite/FavoritePage"

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-[#F7E5C3] min-h-screen w-[90%] m-auto max-w-[1100px] p-5">
      <div className="flex justify-center pb-5">
        <div className='mr-3 w-[50%]'>
          <Tab label="Currency" active={location.pathname === "/"} onClick={() => navigate("/")} />
        </div>
        <div className='mr-3 w-[50%]'>
          <Tab label="Favorite" active={location.pathname.startsWith("/favorite")} onClick={() => navigate("/favorite")} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<CurrencyPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div >
  );
};

export default App;