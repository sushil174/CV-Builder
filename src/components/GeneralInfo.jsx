function GeneralInfo({info, nameChange}) {
    return (
        <ul className="general-info">

            <li>
                <label>Full Name</label>
                <input type="text" name="full_name" value={info.full_name} onChange={nameChange}/>
            </li>

            <li>
                <label>Email</label>
                <input type="text" name="email" value={info.email} onChange={nameChange}/>
            </li>

            <li>
                <label>Phone</label>
                <input type="text" name="phone" value={info.phone} onChange={nameChange}/>
            </li>

            <li>
                <label>Address</label>
                <input type="text" name="address" value={info.address} onChange={nameChange}/>
            </li>
        </ul>
    )
}

export default GeneralInfo