import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { AllBooks } from "./components/books/AllBooks";
import { BorrowedBooks } from "./components/borrowed-books/BorrowedBooks";
import { Footer, Header } from './components/common/';
import { MainPage } from './components/main-page/MainPage';
import { PageNotFound } from './components/page-not-found/PageNotFound';
import { Profile } from "./components/user/Profile";
import { User } from "./components/user/User";


export const App = () => {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/user" element={<User />} > 
            <Route index element={<BorrowedBooks />} />
            <Route path="borrowed-books" element={<BorrowedBooks />} />
            <Route path="book" element={<AllBooks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}