import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from './pages/ListingPage/ListingPage';
import { Container } from "@mui/system";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BookMark from './pages/BookMarkPage/BookMark';
import SearchComp from './pages/SearchPage/SearchComp';
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <BrowserRouter>
<Header/>
<GlobalProvider>
<div className="app">
 <Container>
          <Routes>
            <Route exact path="/" element={<ListingPage />} />
            <Route exact path="/bookmark" element={<BookMark />} />
            <Route exact path="/search" element={<SearchComp />} />
          </Routes>
        </Container>
    </div>
</GlobalProvider>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
