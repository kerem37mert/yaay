import  "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;