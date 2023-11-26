import React from 'react'
import {Data} from './ProgramData'
import Card from './Card'
import "./Program.css"

// console.log(Data.filter((item)=>item.Type==='programs'))
export default function Programs() {
  return (
    <div>
        <div className="programcard" >
          {Data.filter((item)=>item.Type==='programs').map((item,index) =>{ 
            return <Card key={index} Data={item} />
          })}
        </div>
       
    </div>
  )
}
