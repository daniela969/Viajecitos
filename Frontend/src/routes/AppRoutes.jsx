import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";

function AppRoutes(){

return(

<Routes>

<Route
path="/"
element={<Inicio/>}
/>

<Route
path="/contacto"
element={<Contacto/>}
/>

</Routes>

)

}

export default AppRoutes;