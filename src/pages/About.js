import React, {useState, useEffect} from "react";

const About = () => {
  
  const [var1, setVar]=useState(0)
  const [mar, setMar]=useState(1)
  const [sar, setSar] = useState(1000000)
  const [dar, setDar] = useState(1000000)


  //useeffect, renders only on add
  useEffect(()=>{
    console.log("One instance of Addition too place")
  },[var1])


  useEffect(()=>{
    console.log("One instance of Multiplication too place")
  },[mar])


  useEffect(()=>{
    console.log("One instance of Subtraction too place")
  },[sar])


  useEffect(()=>{
    console.log("One instance of Division too place")
  },[dar])

  //addition
  const handlechange=()=>{
    setVar(var1+1)
  }

  //multiplication
  const mult=()=>{
    setMar(mar*2)
  }

  //subtraction
  const subt=()=>{
    setSar(sar-1)
  }

  //division
  const divi=()=>{
    setDar(dar/2)
  }
  return (
    <div >
      <div className="bg-info"></div>
      <div>
        <h1> you clicked me for addition : {var1}</h1>
        <h1> you clicked me for multiplication : {mar}</h1>
        <h1> you clicked me for subtraction : {sar}</h1>
        <h1> you clicked me for division : {dar}</h1>



        <button onClick={handlechange}>Addition Button</button>
        <button onClick={mult}>Multiplication Button</button>
        <button onClick={subt}>Subtraction Button</button>
        <button onClick={divi}>Division Button</button>



      </div>
    </div>
  )
}

export default About


