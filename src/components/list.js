import React, {useState,useEffect} from 'react';
import axios from 'axios';

function List(){
    const[data,setData] = useState([1,2]);
    const getData = async () => {
      await axios.get('http://localhost:8080/get')
      .then((Response)=>{
        setData(Response.data);
      })
      .catch((Error) =>{
        console.log(Error);
      })
    }
  
    useEffect(()=>{
      getData();
    },[]);
    return(
        <div>
            {data.map((a,i)=>{
                return(
                    <div  key={i}>
                        <h3>제목: {a.제목}</h3>
                        <p>내용: {a.내용}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List;