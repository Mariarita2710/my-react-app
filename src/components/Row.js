import React from "react";

const Row=({row, index, updateRow, deleteRow})=>{
    const handleChanges=(e)=>{//seleziona i campi e li aggiorna ogni volta che c'è un cambiamento nell'input
        const {name, value}=e.target;
        updateRow(index, {...row, [name]: value});
    };


const toggleEnabled=()=>{//alterna lo stato di abilitazione di una riga
    updateRow(index, {...row, enabled: !row.enabled});
};

return (
    <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
        <button onClick={toggleEnabled}>
            {row.enabled ? 'Disable' : 'Enable'} {/*il bottone fa passare la row ad enable/disable*/}
        </button>
        <select name="sign" value={row.sign} onChange={handleChanges} disabled={!row.enabled}>
            <option value="+">+</option>
            <option value="-">-</option> {/*qui andiamo a scegliere il segno della row*/}    
        </select>
        <input type="number" name="value" value={row.value} onChange={handleChanges} disabled={!row.enabled} style={{marginLeft:'8px'}}/>
        <button onClick={()=>deleteRow(index)} style={{marginLeft:'8px'}}>
            delete
        </button>
    </div>
)
};

export default Row;