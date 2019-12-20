import React, { Component } from 'react'
import { CustomInput, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

export default class Regform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname: '',
            lname: '',
            email: '',
            company: '',
            title: '',
            phone: ''
        }
    }
    
    render() {
        return (
            <Form className='regform'>

                <FormGroup>
                    <Label for="fname">First Name*</Label>
                    <Input name="fname" id="fname" />
                </FormGroup>
                <FormGroup>
                    <Label for="lname">Last Name*</Label>
                    <Input name="lname" id="lname" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Business Email Adress*</Label>
                    <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                    <Label for="company">Company*</Label>
                    <Input name="company" id="company" />
                </FormGroup>
                <FormGroup>
                    <Label for="job">Job Title*</Label>
                    <Input name="job" id="job" />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone Number*</Label>
                    <PhoneInput defaultCountry={'us'} inputClass='reg_tel_input form-control' buttonClass='reg_tel_dd' />
                </FormGroup>
                <FormGroup check style={{marginTop: '2.4vw',display: 'inline-flex'}}>
                    <CustomInput type="checkbox" id="reg_checkbox" className='reg_checkbox'/>
                    <FormText className='reg_formtext'>
                        Select this checkbox to access exclusive content and receive occasional 
                        emails from Smart.bid about everything relationship marketing. 
                        By submitting this you accept Smart.bid's privacy and cookie policies.
                    </FormText>
                </FormGroup>

                <button className="button_get_started"><span>Submit</span></button>

            </Form>
        )
    }
}
