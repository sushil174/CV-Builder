import ExperienceInput from "./Inputs";

function Experience({
    labels,
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
                        <ExperienceInput labels={labels} itr={work} onChange={companyChange} onDelete={deleteExp}/>
                    </div>
                ))
            }
        <button onClick={addExp}>Add</button>
        </div>
    );
}

export default Experience