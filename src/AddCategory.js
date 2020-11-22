import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({categoria}) => {
    
    const [valorInput, setInput] = useState("");
    
    const cambiar = (e) => {
        setInput(e.target.value)
        
    }

    const noRecargar = (e) =>{
        e.preventDefault();
        
        console.log("Apretaste el enter "+valorInput+" <- Este");
        if(valorInput.trim().length>2){
            categoria( cats => [valorInput, ...cats]);
        }
        setInput("");
    }

    return (
        <>
            <form onSubmit={noRecargar}>
                <input type="text" value={valorInput} onChange={cambiar} />

            </form>
            
        </>
    )
}



AddCategory.propTypes = {
        categoria : PropTypes.func.isRequired
}




export default AddCategory
