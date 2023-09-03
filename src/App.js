 

import React, { useEffect , useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import './sideBar.css'
import Contact from './component/Contact'
 import ChartComponent from './component/chart_componet'

function App() {

  const [ worldWideData,setWorldWideData] = useState([])
  const [ countrySpecificdata , setcountrySpecificdata] = useState([])
  const [ graphdata , setGraphData] = useState([])


  useEffect(()=>{

     //  worldWideData
     fetch('https://disease.sh/v3/covid-19/all')
     .then(response=>response.json())
     .then(result=>setWorldWideData(result))

     // countrySpecificdata
     fetch('https://disease.sh/v3/covid-19/countries')
     .then(response=>response.json())
     .then(result=>setcountrySpecificdata(result))

              //    Graph data
        fetch(' https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        .then(response=>response.json())
        .then(result=>setGraphData(result))

  },[])

   
  return (
    <div>
     
      <div className="sidebar">

        <ul>
  <li>SideBar</li>
          {/* <Contact></Contact> */}
          <Link className='Link' to=''>
            <li>Contacts</li>
          </Link>
          <hr></hr>
           

          <Link className='Link' to='/chartcomponet'>
            <li>Charts component</li>
          </Link>

        </ul>
      </div>
<div style={{marginLeft:'253px',marginTop:'-650px',marginRight:'6px'}}>
<Routes>
        <Route path='' element={<Contact />} />
      
        <Route path='/chartcomponet' element={<ChartComponent data={worldWideData} data1={countrySpecificdata}></ChartComponent>}></Route>
      </Routes>
</div>
      
    </div>
  )
}

export default App

