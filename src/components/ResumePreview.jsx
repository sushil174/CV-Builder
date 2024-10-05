function ResumePreview({info,eduInfo,expInfo}) {
    return (
        <div className="resume-info">
            <div className="resume-general-info">
                <p>{info.full_name}</p>
                <p>{info.email}</p>
                <p>{info.phone}</p>
                <p>{info.address}</p>
            </div>

            <div className="education-info">
                {
                    eduInfo.map(edu => (
                        <div key={edu.id}>
                            <p>Intitute :  {edu.institute}</p>
                            <p>Study :  {edu.study}</p>
                            <p>Timeline :  {edu.timeline}</p>
                            <p>Score :  {edu.score}</p>
                        </div>  
                    ))
                }
            </div>

            <div className="experience-info">
                {
                    expInfo.map(work => (
                        <div key={work.id}>
                            <p>Company :  {work.company}</p>
                            <p>Position :  {work.position}</p>
                            <p>Timeline :  {work.timeline}</p>
                            <p>Description :  {work.description}</p>
                        </div>  
                    ))
                }
            </div>
        </div>
    )
}

export default ResumePreview