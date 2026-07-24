import Usuario from "./Usuario.js";
import Destino from "./Destino.js";
import Paquete from "./Paquete.js";
import Servicio from "./Servicio.js";
import Testimonial from "./Testimonial.js";
import Blog from "./Blog.js";

Usuario.hasMany(Testimonial)
Testimonial.belongsTo(Usuario)

Destino.hasMany(Paquete)
Paquete.belongsTo(Destino)

export { Usuario, Destino, Paquete, Servicio, Testimonial, Blog };
