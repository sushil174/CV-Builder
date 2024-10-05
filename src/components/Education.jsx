import EducationInput from "./Inputs";
function Education({labels,info,intituteChange, deleteEdu, addEdu}) {
    return (   
        <div className="input-education"> 
            <h2>Education Details</h2>
            {
                info.map(edu => (
                    <div key={edu.id}>
                        <EducationInput labels={labels} itr={edu} onChange={intituteChange} onDelete={deleteEdu}/>
                    </div>
                ))
            }
            <button onClick={addEdu}>Add</button>
        </div>
    );
}

export default Education