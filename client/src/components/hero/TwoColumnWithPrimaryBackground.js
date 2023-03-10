import React ,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import tw from 'twin.macro';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//eslint-disable-next-line
import { css } from 'styled-components/macro';
import Qr from './Qr';

import Header from '../headers/light.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';

import { ReactComponent as SvgDecoratorBlob1 } from '../../images/svg-decorator-blob-1.svg';
import CustomersLogoStripImage from '../../images/customers-logo-strip.png';
import QrAnimation from './QrAnimation';
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const Actions1 = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-center mt-8 `;


const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;

const Orstyle = {
  marginLeft: 230,
  fontSize: 30,
  marginTop: 50,
};

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;


const expensesListResp = async () => {
   await axios.get('http://localhost:4000/app/expenseslist')
}



export default ({
  roundedHeaderButton,
  setInputID,
  inputID

}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =  async () => {
    
    console.log(inputID);
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/tap/getTapDetails',
      data:{
        tapID:inputID
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        console.log("e");
        console.log(response);
      })
      .catch(e=>{
        console.log(e);
        console.log("e");
      })
    
    
   
  
   //console.log(avr);
   
  }
  const [qrcamera,setqrcamera]=useState(false);
  const [qrbuttontext,setqrbuttontext]=useState('Scan the Qr Code');
  const [aviINPut,setaviINPut]=useState("");


  const changeCameraStatus=()=>{
    if(!qrcamera){
      setqrcamera(true);
      setqrbuttontext("Checking for Qr code...")
    }
     
    else{
    setqrcamera(false);
    setqrbuttontext('Scan the Qr Code');
  }

  

  
    console.log("avishkar")
  }
  return (
    <>
    
      <Header roundedHeaderButton={roundedHeaderButton} />
      
    <>
    <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Water Quality Control<span tw="text-primary-500"> for you.</span>
            </Heading>
            <Paragraph>Just Enter the code given on the tap or scan the QR code</Paragraph>
            <Actions>
              <input type="text"   placeholder="Enter Tap ID" onChange={e => setInputID(e.target.value)} />
          
              <button onClick={handleShow}>Get Started</button>
            </Actions>
            <p style={Orstyle}>Or</p>

            <Actions1>
              <hr></hr>

              <PrimaryButton onClick={changeCameraStatus}>{qrbuttontext}</PrimaryButton>
            </Actions1>
            
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              {qrcamera &&
               <Qr tw="min-w-0 w-full max-w-lg xl:max-w-3xl" /> 
              }
             {!qrcamera &&

<QrAnimation tw="min-w-0 w-full max-w-lg xl:max-w-3xl" />


             }
             
            </IllustrationContainer>
          </RightColumn>
          
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>      
    </>
  );
};
