import { useState } from "react";
import axios from "axios";

function AddChallenge({onChallengeAdded}){
    const [month,setMonth]=useState('');
    const [description,setDescription]=useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response=await axios.post('http://localhost:8080/challenges',
                {month,description}
            )
            setMonth('');
            setDescription('');
            onChallengeAdded();
            
        } catch (error) {
            console.log(error);
        }
    };
    return(
    <div className="card my-5">
    <div className="card-header m-1">
        Add a new Challenge for each month
    </div>
    <div className="card-body">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="month" className="form-label">Month</label>
    <input type="text" id="month" className="form-control" value={month} onChange={(e)=>{
        setMonth(e.target.value)
    }} required></input>
    </div>
    <div>
    <label htmlFor="description"className="form-label">Description</label>
    <textarea type="text" id="description" className="form-control mb-2" value={description} onChange={(e)=>{
        setDescription(e.target.value)
    }} required></textarea>
    </div> 
    <button type="submit" className="btn btn-primary btn-lg">Submit</button>      
    </form>
    </div>
   
    </div>
    );

}
export default AddChallenge;