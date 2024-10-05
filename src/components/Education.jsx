function Education({info,intituteChange, deleteEdu, addEdu}) {
    return (   
        <> 
        {info.map(edu => (
            <ul key={edu.id}>

                <li>
                    <label>Institute </label>
                    <input type="text" name="institute" value={edu.institute} onChange={e => {intituteChange(edu.id,e)}}/>
                </li>

                <li>
                    <label>Study </label>
                    <input type="text" name="study" value={edu.study} onChange={e => {intituteChange(edu.id,e)}}/>
                </li>

                <li>
                    <label>Timeline </label>
                    <input type="text" name="timeline" value={edu.timeline} onChange={e => {intituteChange(edu.id,e)}}/>
                </li>

                <li>
                    <label>score </label>
                    <input type="text" name="score" value={edu.score} onChange={e => {intituteChange(edu.id,e)}}/>
                </li>

                <button onClick={deleteEdu(edu.id)}>Delete</button>
                
            </ul>
        ))}
        <button onClick={addEdu}>Add</button>
        </>
    );
}

export default Education