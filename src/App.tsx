import {
  Route, Routes
} from "react-router-dom";
import './App.css';
import { Admin } from "./components/admin/Admin";
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { BorrowedBooksUser, BorrowedBooksStats } from "./components/borrowed-books/";
import { Footer, Header } from './components/common/';
import { Library } from "./components/library/Library";
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
            <Route index element={<Library />} />
            <Route path="library" element={<Library />} />
            <Route path="borrowed-book" element={<BorrowedBooksUser />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/admin" element={<Admin />} > 
            <Route index element={<BorrowedBooksStats />} />
            <Route path="library" element={<Library />} />
            <Route path="borrowed-book" element={<BorrowedBooksStats />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </div>
  );
}