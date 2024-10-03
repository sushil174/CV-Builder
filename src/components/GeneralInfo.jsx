function GeneralInfo({info, nameChange, emailChange, phoneChange, addressChange}) {
    return (
        <div className="general-info">
            <label>Full Name</label>
            <input type="text"  value={info.full_name} onChange={nameChange}/>

            <label>Email</label>
            <input type="text"  value={info.email} onChange={emailChange}/>

            <label>Phone</label>
            <input type="text"  value={info.phone} onChange={phoneChange}/>

            <label>Address</label>
            <input type="text"  value={info.address} onChange={addressChange}/>
        </div>
    )
}

export default GeneralInfo