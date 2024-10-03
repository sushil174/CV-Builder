function ResumePreview({info}) {
    return (
        <div className="resume-info">
            <div className="resume-general-info">
                <p>{info.full_name}</p>
                <p>{info.email}</p>
                <p>{info.phone}</p>
                <p>{info.address}</p>
            </div>
        </div>
    )
}

export default ResumePreview