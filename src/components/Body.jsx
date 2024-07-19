import React from "react";


function Body (props) {
    // const [data, setData] = useState([]);
    // const [isAvailable, setIsAvailable] = useState(false)
    // const [allCountryData, setAllCountryData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
    //       .then(response => {
    //         setData(response.data);
    //         setAllCountryData(response.data)
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }, []);

    //   function createCard(item) {
    //     return (
    //         <Card 
    //     key={item.id}
    //     image={item.image}
    //     title={item.title}
    //     description={item.description}
    //     price={item.price}
    //     rating={item.rating}
    //     location={item.location}
    //     bedrooms={item.capacity.bedroom}
    //     people={item.capacity.people}
    //     /> 
    //     )
       
      

    
    return (
       
         <div>
            <h1 id="body__title">Over 200 stays.{props.title}</h1>
            
          {/* <div className="card__container">
         {data.map(createCard)}
          </div> */}
         </div>
         
    )
}

export default Body;