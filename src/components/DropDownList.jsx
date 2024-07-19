import React, { useState } from "react";
import Select from "react-select";

function DropDown ({data, filter, filterTwo, all}) {
    const [selectedDataValue, setSelectedData] = useState(0)



  

    function handleChange(e) {
        
        setSelectedData(e.target.value)
        console.log(e.target.value)
        const value = e.target.value
        value == 1 && filter() || value == 2 && filterTwo() || value == 0 && all()

    }
     
    return (
        <select className="dropdown__menu" name="filter" value={selectedDataValue} onChange={handleChange}>
        <option value="0">Property Type</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedroom</option>
</select> 

    )
}
 

     
     
export default DropDown;