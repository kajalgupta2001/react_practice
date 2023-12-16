import React from 'react'
import "../App.css"
import img1 from "../assets/about1.jpg"
import img2 from "../assets/about2.jpg"
import img3 from "../assets/about3.jpg"
import { Hourglass, Trophy, User, Utensils, UtensilsCrossed } from 'lucide-react'

export default function Body() {
    return (
        <>
            <div className="Cooking">
                <div className="container cook-p">
                    <div className="flexbox">
                        <div className="content">
                            <h1>Learn how to cook from your house</h1>
                            <p>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.  Mumquam eius modi tempora incidunt ut labore et.
                            </p>
                            <div className="gridbox">
                                <div className="grid1">
                                    <div className="icon">
                                        <Utensils color='#ffffff' />
                                    </div>
                                    <div className="grid-text">
                                        <h3>Easy Manual</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus.</p>
                                    </div>
                                </div>
                                <div className="grid2">
                                    <div className="icon">
                                        <UtensilsCrossed color='#fff' />
                                    </div>
                                    <div className="grid-text">
                                        <h3>For Everyone
                                        </h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image">
                            <div className="img1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="img2">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ------------------------FEATURES--------------------------------------- */}
            <section class="features">
                <div class=" feature-p">
                    <div class="flex">
                        <div class="left">
                            <img src={img3} alt="" />
                        </div>
                        <div class="right">
                            
                            <h3>Our Features</h3>
                            <h1>Why Choose Us?</h1>
                            <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                      
                            <div class="gridbox">
                                <div class="grid1">
                                    <div class="icon">
                                        <span><Trophy/></span>
                                    </div>
                                    <div class="text">
                                        <h2>We Are Winners of 50 Competitions</h2>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                                    </div>
                                </div>
                                <div class="grid2">
                                    <div class="icon">
                                        <span ><User/></span>
                                    </div>
                                    <div class="text">
                                        <h2>27 Professional Chefs-Trainers</h2>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                                    </div>
                                </div>
                                <div class="grid3">
                                    <div class="icon">
                                        <span><Hourglass/></span>
                                    </div>
                                    <div class="text">
                                        <h2>Guaranteed Fast Employment</h2>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
