function Education({info,intituteChange, deleteEdu}) {
    return (   
        info.map(edu => (
            <div key={edu.id}>
                <label>Institute </label>
                <input type="text" name="institute" onChange={e => {intituteChange(edu.id,e)}}/>

                <label>Study </label>
                <input type="text" name="study" onChange={e => {intituteChange(edu.id,e)}}/>

                <label>Timeline </label>
                <input type="text" name="timeline" onChange={e => {intituteChange(edu.id,e)}}/>

                <label>score </label>
                <input type="text" name="score" onChange={e => {intituteChange(edu.id,e)}}/>

                <button onClick={deleteEdu(edu.id)}>Delete</button>
            </div>
        ))
    );
}

export default Education