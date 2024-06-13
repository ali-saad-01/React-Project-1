import React, {useState, useEffect} from "react";

const AddressApi = () => {
    const [data, setData]=useState(false)
    const [address, setAddress]=useState([])
    useEffect(() => {
        const fetchaddress = async () =>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setAddress(data)


            } catch (error) {
                console.log('The error is:', error)
            }
        }
        fetchaddress()
    
    },[])

    const showData = () => {
        setData(!data)
    }
    return (
        <div className="container-fluid">
            <div className="text-center mt-5 pt-5">

            
            <button className = 'btn btn-primary' onClick={showData}> {data ? 'Hide Address Data' : 'Show Address Data'} 

            </button>
            {data && ( 
                <table className="table mt-3 ">
                <thead>
                    <tr>
                        <th>
                            Name

                        </th>
                        <th>
                            Street
                        </th>
                        <th>
                            Suite
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Zipcode
                        </th>
                        <th>
                            Longitude
                        </th>
                        <th>
                            Lattitude
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {address.map((user) => (<tr key={address.id}>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.address.street}
                        </td>
                        <td>
                            {user.address.suite}
                            
                        </td>
                        <td>
                            {user.address.city}
                        </td>
                        <td>
                            {user.address.zipcode}
                            
                        </td>
                        <td>
                            {user.address.geo.lat}
                            
                        </td>
                        <td>
                            {user.address.geo.lng}
                            
                        </td>
                        </tr>))}
                </tbody>
                </table>)}
        </div>
        </div>
    )
}


export default AddressApi