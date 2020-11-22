import React from 'react'

export const GifGridItem = ({titulo, imagen}) => {
    
    return (
        <div className="contenido">
            <img src={imagen} alt={titulo}/>
            <p>{titulo}</p>
        </div>
    )
}
