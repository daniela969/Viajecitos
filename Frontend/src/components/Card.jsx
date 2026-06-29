
function Card({ titulo, descripcion, icono }) {

return(

<div className="card">

<div className="icon">

{icono}

</div>

<h2>

{titulo}

</h2>

<p>

{descripcion}

</p>

</div>

)

}

export default Card;