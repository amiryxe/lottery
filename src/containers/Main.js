import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Lottery from '../pages/Lottery';
import Error404 from '../pages/errors/Error404';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import About from '../pages/About';

export default function Main() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Welcome />} exact />
                    <Route path="/lottery" element={<Lottery />} exact />
                    <Route path="/about" element={<About />} exact />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <Footer />
        </>
    )
}