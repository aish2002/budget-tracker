import React,{useEffect} from "react";
import Leftbar from "../Leftbar/Leftbar";
import axios from "axios";

function Home() {
  //testing server
  useEffect(() => {
    axios.get('/api').then(res => console.log(res))
  }, [])

    return (
      <div >
         <Leftbar/> 
      </div>
    );
  }
  
  export default Home;