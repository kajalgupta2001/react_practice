import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Error404 from './Error404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from './Service/Service'
import Header from './Header'
import User from './User/User'
import SportsBike from './Service/Bike/sportsBike'
import NormalBike from './Service/Bike/normalBike'
import CarService from './Service/carService'
import BikeService from './Service/bikeService'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header expand="lg" />
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "89vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/service'>
                                <Route index Component={Service} />
                                <Route path='car' Component={CarService} />
                                <Route path='bike'>
                                    <Route index Component={BikeService} />
                                    <Route path='sports' element={<SportsBike/>} />
                                    <Route path='normal' element={<NormalBike/>} />
                                </Route>
                            </Route>
                            <Route path='*' element={<Error404 />} />
                            <Route path='/user/:name' element={<User/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
