import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function App() {
  const[myData,setMyData] = useState([])
  const[myError,setMyError] = useState("")
  

  // use effect with promises function and to catch error we use catch method
  // useEffect(() =>{
  //   axios.get("https://jsonplaceholder.typicode.com/post")
  //   .then((res)=>setMyData(res.data))
  //   .catch((err)=>setMyError(err.message))
  // },[])


  
  // useEffect with async await ,and to catch error we use try and catch method
  useEffect(() =>{
    getApiData();
  },[])

   const getApiData = async() =>{
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setMyData(res.data);
      }
      catch(err){
        setMyError(err.message);
      }      
   }

  return (
    <>
{/* agr error khaali string nahi hai toh means obviously error aya hai toh fir usse show kro neeche line ka mtlb */}
    {myError != "" && <h2>{myError}</h2>}  

    <h1>hey kriti</h1>
    {myData.map((post) =>{
      const {id,title,body} = post
      return ( <div className="card" key={id}>
        <h2>{title.slice(0,50).toUpperCase()}</h2>
        <p>{body.slice(0,150).toUpperCase()}</p>
      </div>
      )
    })}
    </>
  )
}

export default App
