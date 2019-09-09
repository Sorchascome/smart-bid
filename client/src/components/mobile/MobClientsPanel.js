import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Images
import seven from '../../uploads/clients/777.png'
import eight from '../../uploads/clients/888.png'
import eightcas from '../../uploads/clients/888-casino.png'
import beth from '../../uploads/clients/Bethard.png'
import blog from '../../uploads/clients/brands-logos.png'
import casumo from '../../uploads/clients/Casumo.png'
import cgh from '../../uploads/clients/cybergohst.png'
import evpn from '../../uploads/clients/expressvpn.png'
import ikibu from '../../uploads/clients/ikibu.png'
import lmax from '../../uploads/clients/image.png'
import lbrk from '../../uploads/clients/Ladbrokes.png'
import lveg from '../../uploads/clients/Leovegas.png'
import nvpn from '../../uploads/clients/Nord-vpn.png'
import pvpn from '../../uploads/clients/ProtonVPN.png'
import puvpn from '../../uploads/clients/PureVPN.png'
import snat from '../../uploads/clients/sportnation.png'
import shark from '../../uploads/clients/Surfshark.png'
import whill from '../../uploads/clients/William-Hil.png'
import ava from '../../uploads/clients/ava.png'

// Alt Images
import betw from '../../uploads/clients/betway.png'
import betwc from '../../uploads/clients/Betway_V2.png'
import mop from '../../uploads/clients/MoPlay.png'
import mbet from '../../uploads/clients/Mansion-bet.png'
import ojo from '../../uploads/clients/ojo.png'
import iva from '../../uploads/clients/ivacy.png'
import sky from '../../uploads/clients/Sky-bet.png'
import bfr from '../../uploads/clients/Betfred.png'
import hms from '../../uploads/clients/Hide-my-Ass.png'
import blogo from '../../uploads/clients/blogo.png'
import cor from '../../uploads/clients/Coral.png'

export default class MobClientsPanel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                <div className='car_slide'>
                    <img alt="" src={mop}/>
                    <img alt="" src={snat}/>
                    <img alt="" src={eight}/>
                    <img alt="" src={eightcas}/>
                    <img alt="" src={beth}/>
                    <img alt="" src={seven}/>
                </div>
                <div className='car_slide'>
                    <img alt="" src={blog}/>
                    <img alt="" src={casumo}/>
                    <img alt="" src={cgh}/>
                    <img alt="" src={evpn}/>
                    <img alt="" src={ikibu}/>
                    <img alt="" src={lmax}/>
                </div>
                <div className='car_slide'>
                    <img alt="" src={lbrk}/>
                    <img alt="" src={lveg}/>
                    <img alt="" src={nvpn}/>
                    <img alt="" src={pvpn}/>
                    <img alt="" src={puvpn}/>
                    <img alt="" src={shark}/>
                </div>
                <div className='car_slide'>
                    <img alt="" src={whill}/>
                    <img alt="" src={ava}/>
                    <img alt="" src={betw}/>
                    <img alt="" src={betwc}/>
                    <img alt="" src={mbet}/>
                    <img alt="" src={ojo}/>
                </div>
                <div className='car_slide'>
                    <img alt="" src={iva}/>
                    <img alt="" src={sky}/>
                    <img alt="" src={bfr}/>
                    <img alt="" src={hms}/>
                    <img alt="" src={blogo}/>
                    <img alt="" src={cor}/>
                </div>
            </Carousel>
        );
    }
};
