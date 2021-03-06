import React, {useContext, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {FormInput} from '../../../components/FormInput'
import ProgressBar from '../../../components/ProgressBar'
import StatusMessage from '../../../components/StatusMessage'
import {UserContext} from '../../../context/UserProvider'
import {VendorContext} from '../../../context/VendorProvider'
import {BoothContext} from '../../../context/BoothProvider'
import {Input} from '../../../components/Input'
import {Button} from '../../../components/Button'
import {TextArea} from '../../../components/TextArea'
import Selection from "../../../components/Selection";
import {
  LandingContainer,
  Logo,
  Subheader,
  Header,
  HeaderWrapper,
  ButtonWrapper,
  FormWrapper,
  Wrapper,
  Row,
  Container,
 
} from "../../../Elements/basic";
import {CheckBox} from '../../../components/CheckBox'
const Paragraph = styled.p `
padding: 10px 5px;
`
const FileButton = styled.input`
	/* width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1; */
`
const FileLable = styled.label`
  font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: #4E92F9;
    display: inline-block;
    margin: 5px;
`
export default function RegistrationForm(props) {
  const {user, updateUser} = useContext(UserContext)
  const {seedBooths} = useContext(BoothContext)
  const {currentVendor, matchVendor, createVendor, storeFile} = useContext(VendorContext)
  const [showSponsorship, setShowSponsorship] = useState(false)
  const {changeState, states} = props
  const [input, setInput] = useState({ 
    name: user.name ? user.name : "",
    organization: "",
    description: "",
    phone: "",
    apt: "",
    street: "",
    apt: "",
    city: "",
    zip: "",
    state: "",
    nonprofit: false,
    vetOwned: false,
    isSponsor: false,
    sponsorshipLevel: null,
    wantToSponsor: false,
    needElectricity: false,
    wantDoubleSpace: false,
    file:null
  })
  useEffect(() => {
    matchVendor()
  }, [])
  // useEffect(() => {
  //   if (currentVendor && currentVendor.repEmail ===user.email){
  //     const nextState = (currentVendor.sponsorship.interested && !currentVendor.sponsorship.finalized) ? states.SPONSOR : states.SELECT
  //     changeState(nextState)
  //   }
  // }, [currentVendor])
 
  const handleChange = (e) => {
    const {name, value} = e.target
    setInput(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleShowSponsorship = (e)=>{
    e.preventDefault()
    setShowSponsorship(true)
  }

  const handleChooseFile = (e) => {
  
    setInput(prev=>({...prev, file: e.target.files[0]}))
  }

const saveLogo = (file)=>{
    const fileName =file.name
    const extension = fileName.split('.')[1]
    storeFile(file, `logos/${input.organization}/${input.organization}.${extension}`)    
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowSponsorship(input.wantToSponsor)
    const currentVendorData = {
      address: {
        street: input.street,
        apt: input.apt,
        city: input.city,
        state: input.state,
        zip: input.zip
      },
      rep: input.name,
      repEmail: user.email,
      description: input.description,
      organization: input.organization,
      booth: {
        primary: {
          name: null,
          finalized: false
        },
        secondary: {
          name: null, 
          finalized: false
        }
      },
      sponsorship: {
        interested: input.wantToSponsor,
        level: input.sponsorshipLevel, 
        finalized: input.isSponsor
      },
      logo: null, 
      
    }
    await createVendor(currentVendorData)
    if (input.file) {
    saveLogo(input.file)
    
    
    
    if (showSponsorship) {
      changeState(states.SPONSOR)
      }
    else{
        changeState(states.SELECT)
      }
  }}
  
  const handleCheck = (e) => {
    const {name, checked} = e.target
    setInput(prev => {
      return {
        ...prev,
        [name]: checked
      }
    })
  }

  return (
    <Container>
      <HeaderWrapper>
        <Subheader>Registration Form</Subheader>
        <Header>Point of Contact</Header>
      </HeaderWrapper>
      <FormWrapper>
        
        <Input
          autocomplete="name"
          labelText="Name"
          name="name"
          type="text"
          value={input.name}
          onChange={handleChange}/>
        <Input
          labelText="Name of organization"
          autocomplete="organization"
          name="organization"
          type="text"
          value={input.organization}
          onChange={handleChange}/>
        <TextArea
          labelText="Brief description of organization"
          name="description"
          rows="4"
          value={input.description}
          onChange={handleChange}></TextArea>
        <Input
          type="phone"
          autocomplete="tel"
          labelText="Phone"
          name="phone"
          value={input.phone}
          onChange={handleChange}/>
        <Input
          labelText="Address"
          autocomplete="street-address"
          name="street"
          type="text"
          value={input.street}
          onChange={handleChange}/>
        <Input
          labelText="City"
          name="city"
          autocomplete="address-level1"
          type="text"
          value={input.city}
          onChange={handleChange}/>
        <Row coloumms="3">
          <Input
            type="text"
            labelText="Apt or suite"
            name="apt"
            value={input.apt}
            onChange={handleChange}/>
          <Input
            type="text"
            labelText="State"
            name="state"
            autocomplete="address-level2"
            value={input.state}
            onChange={handleChange}/>
          <Input
            type="text"
            labelText="Zipcode"
            name="zip"
            auto-complete="postal-code"
            value={input.zip}
            onChange={handleChange}/>
        </Row>
        <Row columns="2">
        <Paragraph>Upload your organization's logo.</Paragraph>
        <FileButton type="file" name="logo" onChange={handleChooseFile}/>
        </Row>
        <CheckBox
          labelText="Organization is veteran owned"
          name="vetOwned"
          checked={input.vetOwned}
          onChange={handleCheck}/>
        <CheckBox
          labelText="Organization is a nonprofit"
          name="nonprofit"
          checked={input.nonprofit}
          onChange={handleCheck}/>
        <CheckBox
          labelText="Organization is a current sponsor of O.P. Vetfest"
          name="isSponsor"
          checked={input.isSponsor}
          onChange={handleCheck}/>
        {input.isSponsor ? 
        <Selection options={["WLA - $250", "AMTRAK - $500", "Bradley - $1000","Stryker - $2500", "Abrams - $5000", "Paladin - $10000"]} value={input.sponsorshipLevel} handleChange={handleChange}/> : null
      }
      {input.isSponsor ? null :
          <CheckBox
          labelText="Interested in becoming a sponsor of O.P. Vetfest"
          name="wantToSponsor"
          checked={input.wantToSponsor}
          onChange={handleCheck}/>}
           <Button buttonText="See sponsorship levels and benifits" buttonStyle="text" onClick={handleShowSponsorship}/>
        <Button buttonText="Continue" buttonStyle="primary" onClick={handleSubmit}/>
      </FormWrapper>
      <StatusMessage
        className={'status-message'}
        message={'Welcome to O.P. Veteran. Now, please continue the registration.'}/>
        {showSponsorship ? <></> : null}
      
    </Container>
  )
}
