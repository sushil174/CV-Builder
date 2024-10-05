import { useState } from "react";

function Inputs({labels, itr, onChange, onDelete}) {
    const [isExpand, setExpand] = useState(false)

    function handleExpand() {
        setExpand(!isExpand)
    }

    return (
        <>     
            <div className="header">
                <p>{itr[labels[0].name]}</p>
                <button onClick={handleExpand}><strong>{isExpand ? '-' : '+'}</strong></button>
            </div>

            {
                isExpand && 
                    <ul>
                        {labels.map((l,index) => (
                            <li key={index}>
                                <label>{l.label}</label>
                                <input type="text" name={l.name} value={itr[l.name] || ''} onChange={e => {onChange(itr.id,e)}}/>
                            </li>
                        ))}
                        <button onClick={onDelete(itr.id)}>Delete</button>
                    </ul>
                
            }

        </>
    )
}

export default Inputs