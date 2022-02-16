import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lottery from '../pages/Lottery';
import Error404 from '../pages/errors/Error404';

export default function Main() {
    return (
        <>
            <Router>
                <Routes>

                    <Route path="/lottery" element={<Lottery />} exact />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </>
    )
}