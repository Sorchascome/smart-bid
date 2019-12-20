import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LayoutFooter from '../components/LayoutFooter'
import Regform from '../components/regpage/Regform'

import logo from '../uploads/reglogo.png'
import background from '../uploads/regbg.png'

export default class Regpage extends Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <div className='Regpage' style={{backgroundImage: 'url('+background+')', backgroundSize: 'cover'}}>
                
                <div className="reg_main">

                    <Link to='/'><img className="regLogo" src={logo} href='/' /></Link>
                    
                    <div className="reg_title">Get a personalized <br/>tour of Smart.bid</div>

                    <div className="reg_mid">

                        <Regform />

                        <div className="reg_info">
                            <div className="reg_info_title">
                                Discover our 360 Predictive Hub!
                            </div>

                            <p>Send us your information via the form below and we'll reach out to schedule a demo of our Predictive Hub.</p>
                            
                            <p>We'll show you how smart.bid can grow your business with our 360 Predictive Hub!</p>
                            
                        </div>


                    </div>
                    

                </div>

                <LayoutFooter show={true}/>

            </div>
        )
    }
}
