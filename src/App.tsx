import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Footer, Header } from './components/common/';
import { MainPage } from './components/main-page/MainPage';
import { PageNotFound } from './components/page-not-found/PageNotFound';


export const App = () => {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}

//  <Login />