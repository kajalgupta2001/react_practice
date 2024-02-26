import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

let nameArr = ["Shyam", "Radha", "Krishna", "om"]

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div className='text-center'>
                <h1>Home</h1>
                <ul className='list-inline text-capitalize'>
                    {
                        nameArr.map((e, i)=>{
                            return(
                                <li key={i} role='button' onClick={()=>navigate(`/user/${e}`)}>{e}</li>
                            )
                        })
                    }
                </ul>
                <Button className='ms-2 mb-2' color='danger' onClick={()=>navigate(-1)}>Go Back</Button>
            </div>
        </>
    )
}