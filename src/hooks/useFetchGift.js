import { useEffect, useState } from "react";
import {getGift} from '../helpers/getGift'




export const useFetchGift = (categoria) => {
    
    const [state, setstate] = useState({
        data : [],
        loading : true
    })

    useEffect(() => {
        console.log("En el usefetchgift esta "+categoria)
        getGift(categoria).then(cats => {

            
                setstate({
                    data: cats,
                    loading: false
                })
            

            
        });
    }, [categoria])
        
    

    

    return state;
}
