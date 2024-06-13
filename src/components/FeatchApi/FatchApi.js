import React, {useState, useEffect} from 'react'



const FatchApi = () => {
    const [data, setData]=useState(false)
    const [data1, setData1]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            const data = await response.json();
            console.log("the data is--->:",data)
            setData1 (data)
            setData(false); // Set loading to false after data is fetched
          } catch (error) {
            
            setData(true);
          }
        };
    
        fetchData(); // Call the fetchData function
      }, []);
      
  return (
    <div>
        
        <table className='table table-bordered mt-5 ml-2 mr-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {data1.map( (user)=>(<tr key={data1.id}>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.age}
                </td>
                <td>
                    {user.email}
                </td>
            </tr>))}
        </tbody>
        </table>
    </div>
  )
}

export default FatchApi