import { useState } from "react";
import axios from 'axios'


export default function AddChallenge({onChallengeAddition}){

    const[month, setMonth] = useState('');
    const[description, setDesc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/challenges', {month, description})
            setMonth('')
            setDesc('')
            onChallengeAddition();
        }
        catch (e){
            console.error(e);
        }
    }

    return (
        <div className="card my-5">
            <div className="card-header">
                Add new Challenge
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="month" className="form-label">
                            Month
                        </label>
                        <input placeholder="e.g. January" type="text" id ="month" value={month} className="form-control" onChange={(nM) => setMonth(nM.target.value)} required></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea placeholder="e.g. Run 10 km" id ="description" value={description} className="form-control" onChange={(nD) => setDesc(nD.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    ) 
}