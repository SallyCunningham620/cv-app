import { useState } from "react";
import '../styles/Education.css';

function Education() {
    const [info, setInfo] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    if (!isEditing) {
        return (
        <div className="section">
            <h2>{info.schoolName}</h2>
            <p>{info.titleOfStudy}</p>
            <p>{info.dateOfStudy}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
        );
    }

    return (
        <form className="educationForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="School Name" value={info.schoolName} onChange={e => setInfo({...info, schoolName: e.target.value})} />
            <input type="text" placeholder="Title of Study" value={info.titleOfStudy} onChange={e => setInfo({...info, titleOfStudy: e.target.value})} />
            <input type="date" placeholder="Date of Study" value={info.dateOfStudy} onChange={e => setInfo({...info, dateOfStudy: e.target.value})} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Education;