
import React, {useState} from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {


    const [datos, setDatos] = useState(["messi"]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory categoria={setDatos}/>
            <hr/>

            <ul>
                {
                datos.map( pos => {
                    return <GifGrid key={pos} categoria={pos}/>
                })
                }
            </ul>
        </>
    );
}

export default GifExpertApp;