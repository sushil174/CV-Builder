import { useState } from "react";

function ExperienceInput({work, companyChange, deleteExp}) {
    const [isExpand, setExpand] = useState(false)

    function handleExpand() {
        setExpand(!isExpand)
    }

    return (
        <>     
            <div className="header">
                <p>{work.company}</p>
                <button onClick={handleExpand}>{isExpand ? '-' : '+'}</button>
            </div>

            {
                isExpand && 
                    <ul>
                        <li>
                            <label>Company </label>
                            <input type="text" name="company" value={work.company || ''} onChange={e => {companyChange(work.id,e)}}/>
                        </li>
            
                        <li>
                            <label>Position </label>
                            <input type="text" name="position" value={work.position || ''} onChange={e => {companyChange(work.id,e)}}/>
                        </li>
            
                        <li>
                            <label>Timeline </label>
                            <input type="text" name="timeline" value={work.timeline || ''} onChange={e => {companyChange(work.id,e)}}/>
                        </li>
            
                        <li>
                            <label>Description </label>
                            <input type="text" name="description" value={work.description || ''} onChange={e => {companyChange(work.id,e)}}/>
                        </li>
            
                        <button onClick={deleteExp(work.id)}>Delete</button>
                    </ul>
                
            }

        </>
    )
}

export default ExperienceInput