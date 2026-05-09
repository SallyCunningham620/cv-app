import { useState } from "react";
import '../styles/Experience.css';

function Experience({ onDelete }) {
    const initialInfo = {
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
    };

    const [info, setInfo] = useState(initialInfo);
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete();
    }

    if (!isEditing) {
        return (
            <div className="section">
                <h2>{info.companyName}</h2>
                <p>{info.positionTitle}</p>
                <p>{info.responsibilities}</p>
                <p>{info.startDate}</p>
                <p>{info.endDate}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={handleDelete} style={{marginLeft: '10px'}}>Delete</button>
            </div>
        );
    }

    return (
        <form className="experienceForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Company Name" value={info.companyName} onChange={e => setInfo({...info, companyName: e.target.value})} />
            <input type="text" placeholder="Position Title" value={info.positionTitle} onChange={e => setInfo({...info, positionTitle: e.target.value})} />
            <input type="text" placeholder="Responsibilities" value={info.responsibilities} onChange={e => setInfo({...info, responsibilities: e.target.value})} />
            <input type="date" placeholder="Start Date" value={info.startDate} onChange={e => setInfo({...info, startDate: e.target.value})} />
            <input type="date" placeholder="End Date" value={info.endDate} onChange={e => setInfo({...info, endDate: e.target.value})} />
            <button type="submit">Submit</button>
        </form>
    );
}


export default Experience;