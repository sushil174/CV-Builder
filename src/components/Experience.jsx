import ExperienceInput from "./ExperienceInput";

function Experience({
    info,
    companyChange,
    deleteExp,
    addExp
}) {
    return (   
        <div className="input-experience"> 
        <h2>Experience Details</h2>
        {
            info.map(work => (
                <div key={work.id}>
                    <ExperienceInput work={work} companyChange={companyChange} deleteExp={deleteExp}/>
                </div>
            ))
        }
        {/* {
        info.map(work => (
            <ul key={work.id}>
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
        ))
    } */}
        <button onClick={addExp}>Add</button>
        </div>
    );
}

export default Experience