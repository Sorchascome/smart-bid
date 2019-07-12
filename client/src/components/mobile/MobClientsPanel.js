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
import ikibu from '../../uploads/clients/Ikibu.png'
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
import iva from '../../uploads/clients/Ivacy.png'
import sky from '../../uploads/clients/Sky-bet.png'
import bfr from '../../uploads/clients/Betfred.png'
import hms from '../../uploads/clients/Hide-my-Ass.png'
import blogo from '../../uploads/clients/blogo.png'
import cor from '../../uploads/clients/Coral.png'

export default class MobClientsPanel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                <div>
                    <img src={mop}/>
                    <img src={snat}/>
                    <img src={eight}/>
                    <img src={eightcas}/>
                    <img src={beth}/>
                    <img src={seven}/>
                </div>
                <div>
                    <img src={blog}/>
                    <img src={casumo}/>
                    <img src={cgh}/>
                    <img src={evpn}/>
                    <img src={ikibu}/>
                    <img src={lmax}/>
                </div>
                <div>
                    <img src={lbrk}/>
                    <img src={lveg}/>
                    <img src={nvpn}/>
                    <img src={pvpn}/>
                    <img src={puvpn}/>
                    <img src={shark}/>
                </div>
                <div>
                    <img src={whill}/>
                    <img src={ava}/>
                    <img src={betw}/>
                    <img src={betwc}/>
                    <img src={mbet}/>
                    <img src={ojo}/>
                </div>
                <div>
                    <img src={iva}/>
                    <img src={sky}/>
                    <img src={bfr}/>
                    <img src={hms}/>
                    <img src={blogo}/>
                    <img src={cor}/>
                </div>
            </Carousel>
        );
    }
};
