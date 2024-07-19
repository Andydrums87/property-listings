import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Switch from "./components/Switch";
import DropDown from "./components/DropDownList"
import Body from './components/Body';
import axios from "axios";
import Buttons from './components/Buttons'


function App() {
  const [data, setData] = useState([]);
  const [allCountryData, setAllCountryData] = useState([]);
  
  useEffect(() => {
      axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
        .then(response => {
          setData(response.data);
          setAllCountryData(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const filter = (button) => {
      const filteredData = allCountryData.filter(item => item.location === button)
      setData(filteredData)
    }

    const allCountries = (button) => {
      setData(allCountryData)
    }

   function superHostFilter () {
    const filtered = data.filter(item => item.superhost === true)
    setData(filtered)
   }

   function reset () {
    setData(allCountryData)
   }
 
    const filterBedroom = () => {
      
      const filteredBedroom = allCountryData.filter(item=>{ return item.capacity.bedroom === 1})
      setData(filteredBedroom)
    }

    function filterTwoBedroom () {

      const twoBedroom = allCountryData.filter(item=>{return item.capacity.bedroom === 2})
      setData(twoBedroom)
   
     
    }

   

    

  

  return (
    <div className="main__body">
    <Header />
    {/* <Nav 
    data={data}
    /> */}
      <div className="nav__container">
           
           <div className="nav__content">
           <Buttons 
          data={data}
          filter={filter}
          all={allCountries}
          />   
          <div className="nav__right">
                        <Switch 
                        data={data}
                        
                        filter={superHostFilter}
                        all={reset}
                        />
                        <DropDown 
                        
                       data={data}
                       filter={filterBedroom}
                       filterTwo={filterTwoBedroom}
                       all={reset}
                      //  filter={filterDropDown}
                        />
           
                        </div>
                       </div>
                       
                   </div>
               
    <Body />
    <Card 
    data={data}
    />
    </div>
   
  )
}

export default App;
