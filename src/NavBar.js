import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Navbar({onAdd}) {


  const [title, settitle] = useState("") 
  const [description, setdescription] = useState("")
  const [rating, setrating] = useState("")
  const navigate = useNavigate();


  const AddButtonClick = (e) => {
    e.preventDefault();
    onAdd( title, description, rating );
if(title&&description&&rating)
{navigate("/")}
else{alert("input is empty")}
  };



  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        
          <form className="d-flex" onSubmit={AddButtonClick}>
            <input className="form-control me-2" onChange={(e)=>settitle(e.target.value)}/>
            <input className="form-control me-2" onChange={(e)=>setdescription(e.target.value)}/>
            <input className="form-control me-2" type= "number" min={0}
  max={5}  onChange={(e)=>setrating(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">
              Add 
            
            </button>
            </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
