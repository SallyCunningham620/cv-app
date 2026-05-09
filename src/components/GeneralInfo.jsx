import { useState } from "react";
import '../styles/GeneralInfo.css';
function GeneralInfo() {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    if (!isEditing) {
        return (
            <div className="section">
            <h2>{info.name}</h2>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        );
    }

    return (
        <form class="generalInfoForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={info.name} onChange={e => setInfo({...info, name: e.target.value})} />
            <input type="email" placeholder="Email" value={info.email} onChange={e => setInfo({...info, email: e.target.value})} />
            <input type="tel" placeholder="Phone" value={info.phone} onChange={e => setInfo({...info, phone: e.target.value})} />
            <button type="submit">Submit</button>
        </form>
    );
}


export default GeneralInfo;