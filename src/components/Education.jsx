function Education({info,intituteChange, deleteEdu, addEdu}) {
    return (   
        <> 
        {info.map(edu => (
            <div key={edu.id}>
                <label>Institute </label>
                <input type="text" name="institute" value={edu.institute} onChange={e => {intituteChange(edu.id,e)}}/>

                <label>Study </label>
                <input type="text" name="study" value={edu.study} onChange={e => {intituteChange(edu.id,e)}}/>

                <label>Timeline </label>
                <input type="text" name="timeline" value={edu.timeline} onChange={e => {intituteChange(edu.id,e)}}/>

                <label>score </label>
                <input type="text" name="score" value={edu.score} onChange={e => {intituteChange(edu.id,e)}}/>

                <button onClick={deleteEdu(edu.id)}>Delete</button>
                
            </div>
        ))}
        <button onClick={addEdu}>Add</button>
        </>
    );
}

export default Education