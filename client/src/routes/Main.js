/* eslint-disable */
import React, { Component } from 'react'
import * as  MobileDetect from 'mobile-detect'
import { Provider } from 'react-redux'

// Redux store
import store from '../store'

// Components
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import AboutUs from '../components/AboutUs'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

// Tablet
import TabSectionOne from '../components/tablet/TabSectionOne';
import TabSectionTwo from '../components/tablet/TabSectionTwo';
import TabSectionThree from '../components/tablet/TabSectionThree';
import TabSectionFour from '../components/tablet/TabSectionFour';
import TabSectionFive from '../components/tablet/TabSectionFive';
import TabAboutUs from '../components/tablet/TabAboutUs';
import TabClients from '../components/tablet/TabClients';
import TabFooter from '../components/tablet/TabFooter';

// Mobile
import MobSectionOne from '../components/mobile/MobSectionOne';
import MobSectionTwo from '../components/mobile/MobSectionTwo';
import MobSectionThree from '../components/mobile/MobSectionThree';
import MobSectionFour from '../components/mobile/MobSectionFour';
import MobSectionFive from '../components/mobile/MobSectionFive';
import MobAboutUs from '../components/mobile/MobAboutUs'
import MobClients from '../components/mobile/MobClients'
import MobFooter from '../components/mobile/MobFooter'



export default class Main extends Component {
  constructor(props) {
    super(props)

    this.width = 0;
    this.checkMobile = this.checkMobile.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  checkMobile(device) {
    var dev = new MobileDetect(device);
    if(window.innerWidth < 768) {
      let hiddenElems = [...document.querySelectorAll('.hidden, .hidden_alt')];
      hiddenElems.forEach((elem) => {
        elem.classList.remove('hidden', 'hidden_alt', 'slide');
      })

      document.querySelector('.mobile_container').style.display = 'block';
      document.querySelector('.main_container').style.display = 'none';
      document.querySelector('.tablet_container').style.display = 'none';
    } else if (dev.tablet() !== null || (window.innerWidth <= 1366 && window.innerWidth > 768)) {
      let hiddenElems = [...document.querySelectorAll('.hidden, .hidden_alt')];
      hiddenElems.forEach((elem) => {
        elem.classList.remove('hidden', 'hidden_alt', 'slide');
      })

      document.querySelector('.tablet_container').style.display = 'block';
      document.querySelector('.main_container').style.display = 'none';
      document.querySelector('.mobile_container').style.display = 'none';
    } else {
      document.querySelector('.main_container').style.display = 'block';
      document.querySelector('.tablet_container').style.display = 'none';
      document.querySelector('.mobile_container').style.display = 'none';
    }
  }

  resizeHandler() {
    setTimeout(() => {this.forceUpdate()}, 25);
  }

  componentDidMount() {
    this.checkMobile(navigator.userAgent);
    window.addEventListener("orientationchange", this.resizeHandler);
    window.addEventListener("resize", this.resizeHandler);
  }

  componentDidUpdate() {
    this.checkMobile(navigator.userAgent);
  }

  render() {
      return (
        <Provider store={store} >
          <div>
            <div className='main_container'>
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <AboutUs />
              <Clients />
              <Footer />
            </div>
            <div className="tablet_container">
              <TabSectionOne />
              <TabSectionTwo />
              <TabSectionThree />
              <TabSectionFour />
              <TabSectionFive />
              <TabAboutUs />
              <TabClients />
              <TabFooter />      
            </div>
            <div className='mobile_container'>
              <MobSectionOne />
              <MobSectionTwo />
              <MobSectionThree />
              <MobSectionFour />
              <MobSectionFive />
              <MobAboutUs />
              <MobClients />
              <MobFooter />
            </div>
          </div>
        </Provider>
      );
    }
  }
  
