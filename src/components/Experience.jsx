function Experience({
    info,
    companyChange,
    deleteExp,
    addExp
}) {
    return (   
        <> 
        {info.map(work => (
            <li key={work.id}>
                <label>Company </label>
                <input type="text" name="company" value={work.company} onChange={e => {companyChange(work.id,e)}}/>

                <label>Position </label>
                <input type="text" name="position" value={work.study} onChange={e => {companyChange(work.id,e)}}/>

                <label>Timeline </label>
                <input type="text" name="timeline" value={work.timeline} onChange={e => {companyChange(work.id,e)}}/>

                <label>Description </label>
                <input type="text" name="description" value={work.description} onChange={e => {companyChange(work.id,e)}}/>

                <button onClick={deleteExp(work.id)}>Delete</button>
                
            </li>
        ))}
        <button onClick={addExp}>Add</button>
        </>
    );
}

export default Experience