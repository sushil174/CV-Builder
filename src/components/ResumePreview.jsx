function ResumePreview({info,eduInfo,expInfo}) {
    return (
        <main className="resume-info">
            <div className="resume-general-info">
                <h1>{info.full_name}</h1>
                <div>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                    <p>{info.address}</p>
                </div>
            </div>

            <div className="education-info">
                <h2>Education</h2>
                {   
                    eduInfo.map(edu => (
                        <div key={edu.id}>
                            <p><u>{edu.institute}</u></p>
                            <p><strong>{edu.study}</strong></p>
                            <p>{edu.timeline}</p>
                            <p>{edu.score}</p>
                        </div>  
                    ))
                }
            </div>

            <div className="experience-info">
                <h2>Experience</h2>
                {
                    expInfo.map(work => (
                        <div key={work.id}>
                            <p><u>{work.company}</u></p>
                            <p><strong>{work.position}</strong></p>
                            <p>{work.timeline}</p>
                            <p>{work.description}</p>
                        </div>  
                    ))
                }
            </div>
        </main>
    )
}

export default ResumePreview