import React, { useState } from "react";
import ReactSwitch from "react-switch";

function Switch({filter, all}) {
        const [checked, setChecked] = useState(false)
  
        const handleChange = (val) => { 
            setChecked(val) 
            checked === true ? all() : filter()
        }

return (

    <div className="switch__btn">
    <ReactSwitch 
    checked={checked}
    onChange={handleChange}
    onColor="#4E80EE"
    offColor="#97A3B6"
    checkedIcon={false}
    uncheckedIcon={false}
     />
    <span className="span__superhost" style={{fontSize: "0.8rem", color: "white"}}>Superhost</span>

    </div>
   
)
}

export default Switch;