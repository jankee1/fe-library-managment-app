import {
  Route, Routes
} from "react-router-dom";
import { UserRole } from "../../be-library-managment-app/src/types/user";
import './App.css';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { BorrowedBooksAdmin } from "./components/borrowed-books/admin/BorrowedBooksAdmin";
import { BorrowedBooksUser } from "./components/borrowed-books/user/BorrowedBooksUser";
import { Footer, Header } from './components/common/';
import { CheckRole } from "./components/common/CheckRole";
import { AdminLibrary } from "./components/library/AdminLibrary";
import { UserLibrary } from "./components/library/UserLibrary";
import { MainPage } from './components/main-page/MainPage';
import { PageNotFound } from './components/page-not-found/PageNotFound';
import { Profile } from "./components/user/Profile";

import './App.css';

export const App = () => {


  return (
    <div className="App">
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} >
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />  
              <Route path="*" element={<PageNotFound />} />
            </Route>
            
            <Route path={`/${UserRole.User}`} element={<CheckRole role={UserRole.User} />} > 
              <Route index element={<UserLibrary />} />
              <Route path="library" element={<UserLibrary />} />
              <Route path="borrowed-book" element={<BorrowedBooksUser />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route path={`/${UserRole.Admin}`} element={<CheckRole role={UserRole.Admin} />}> 
              <Route index element={<BorrowedBooksAdmin />} />
              <Route path="library" element={<AdminLibrary />} />
              <Route path="borrowed-book" element={<BorrowedBooksAdmin />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}