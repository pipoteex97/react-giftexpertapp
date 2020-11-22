import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGift } from './hooks/useFetchGift';

export const GifGrid = ({categoria}) => {
  
    const {data, loading} = useFetchGift(categoria);
    
    return (
        <>
        <h3 className="animate__animated animate__fadeInDown">{categoria}</h3>

        
        {loading && <p>Cargandoo...</p>}
        
        <div id="caja" className="animate__animated animate__zoomIn">
            
                {data.map(
                    pos => (
                        <GifGridItem key={pos.id} {...pos}/>
                    )
                )}
            
        </div>
        </>
        
    )
}

