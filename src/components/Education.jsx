function Education({info,intituteChange}) {
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
            </div>
        ))
    );
}

export default Education