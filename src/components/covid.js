import React,{useEffect,useState} from'react';
import './covid.css';
import {NavLink} from 'react-router-dom';
const Covid=()=>{
    const [total,setTotal]=useState();
    let [data,setData]=useState([]);
    const country=['Total','Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','State Unassigned','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal' ];
    const getCovidData=async ()=>{
        try{
            const res=await fetch('https://data.covid19india.org/data.json');
             const temp=await res.json();
             setTotal(temp);
             setData(temp.statewise[0]); 
        }
        catch(e)
        { console.log(e); }
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    const inputHandler=(event)=>{
        let state=event.target.value;
        let i=0;
        for(;i<country.length;i++){if(country[i]===state)break;}
        console.log(i);
        setData(total.statewise[i]); 
      }

    return (
        <>
        <NavLink to="/">Specific</NavLink><br/>
        <NavLink to="/statewise">Statewise</NavLink>
         <div className="section">
           <p className="live">🔴 LIVE</p>
           <p>COVID-19 CORONAVIRUS TRACKER</p>
           <select onChange={inputHandler}>
            {country.map((c,i)=><option key={c}>{c}</option>)}
           </select>
           <ul>
              <li className='card' style={{backgroundColor:'yellow'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>OUR</span>STATE</p>
                       <p className='card__total card__small'>{data.state}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'orange'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>RECOVERED</p>
                       <p className='card__total card__small'>{data.recovered}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'red'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>CONFIRMED</p>
                       <p className='card__total card__small'>{data.confirmed}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'green'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>DEATH</p>
                       <p className='card__total card__small'>{data.deaths}</p>
                    </div>
                 </div>
              </li>
              <li className='card' style={{backgroundColor:'blue'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>ACTIVE</p>
                       <p className='card__total card__small'>{data.active}</p>
                    </div>
                 </div>
              </li><li className='card'  style={{backgroundColor:'purple'}}>
                 <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>LAST</span>UPDATED</p>
                       <p className='card__total card__small' >{data.lastupdatedtime}</p>
                    </div>
                 </div>
              </li>
           </ul>
         </div>
        </>
    )
}

export default Covid