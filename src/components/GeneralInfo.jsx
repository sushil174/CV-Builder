function GeneralInfo({info, nameChange}) {
    return (
        <div className="general-info">
            <label>Full Name</label>
            <input type="text" name="full_name" value={info.full_name} onChange={nameChange}/>

            <label>Email</label>
            <input type="text" name="email" value={info.email} onChange={nameChange}/>

            <label>Phone</label>
            <input type="text" name="phone" value={info.phone} onChange={nameChange}/>

            <label>Address</label>
            <input type="text" name="address" value={info.address} onChange={nameChange}/>
        </div>
    )
}

export default GeneralInfo