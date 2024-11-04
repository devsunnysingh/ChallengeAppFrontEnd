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
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="month" className="">Month</label>
    <input type="text" id="month" value={month} onChange={(e)=>{
        setMonth(e.target.value)
    }} required></input>
    </div>
    <div>
    <label htmlFor="description" className="">Description</label>
    <textarea type="text" id="description" value={description} onChange={(e)=>{
        setDescription(e.target.value)
    }} required></textarea>
    </div> 
    <button type="submit">Submit</button>      
    </form>
   
    </div>
    );

}
export default AddChallenge;