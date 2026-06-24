import {
BrowserRouter,
Routes,
Route
}

from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/services"
element={<Services/>}
/>

<Route
path="/destinations"
element={<Destinations/>}
/>

<Route
path="/packages"
element={<Packages/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App;