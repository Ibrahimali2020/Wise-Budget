import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Logo from "./components/Logo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainContent from "./components/MainContent";
import BudgetDetail from "./components/BudgetDetail";
import ContactModal from "./components/ContactModal";
import { useBudget } from "./contexts/BudgetContext";

function App() {
  const { isLoged } = useBudget()
  return (
    <>

      <BrowserRouter>
        <main>
          <div className='container'>
            <Header>
              <Logo />
              <ContactModal />
            </Header>
            <Routes>
              <Route index element={<Welcome />} />

              {isLoged && (
                <Route path="/app" element={<HomePage />} >
                  <Route index element={<MainContent />} />
                  <Route path="budget/:id" element={<BudgetDetail />} />
                </Route>
              )}
            </Routes>
          </div >

          <ToastContainer />

        </main>
      </BrowserRouter>


      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"><path
          fill="#3498db" fillOpacity="1" d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,96C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </>
  );
}

export default App;
