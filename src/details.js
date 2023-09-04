import React from "react";
import { useParams } from "react-router-dom";


function Details ({info}) {
    const obj = useParams ();
   const newdata=info.find(el=>el.id==obj.x)
return (
    <div>
    <p className="description">{newdata.description}</p>
    <iframe
      src={newdata.trailerSrc}
      id="videoFrame"
      className="custom-iframe"
    ></iframe>
  </div>
)
}
export default Details