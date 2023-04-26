import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
import {
  FAQItemCollection,
  Features4x1,
  Features4x1Collection,
  FeaturesText2x2,
  ProfileUpdate, 
  SocialPost
 } from './ui-components';
 import { Amplify } from "aws-amplify";
 import React, { useState } from 'react';

import './App.css';
import {Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

import awsconfig from './aws-exports';
 import { withAuthenticator } from "@aws-amplify/ui-react";
 import { Header } from "./Header";
 import { Footer } from "./Footer";
 import { SignInHeader } from "./SignInHeader";
 import { SignInFooter } from "./SignInFooter";
 import {
  HeroLayout3, ProfileCard, Features2x3
 } from './ui-components';
 import {
  DetailedUserInfoUpdateForm 
 } from './ui-components';
 import { NavBar } from './ui-components';

 
 import awsExports from "./aws-exports";
 Amplify.configure(awsExports);
//  Amplify.configure(awsconfig);
 Amplify.addPluggable(new AmazonAIPredictionsProvider());
 
 function TextIdentification() {
   const [response, setResponse] = useState("You can add the document by uploading directly from the app ")
 
   function identifyFromFile(event) {
     setResponse('Scanning Resumé...');
     const { target: { files } } = event;
     const [file,] = files || [];
 
     if (!file) {
       return;
     }
     Predictions.identify({
       text: {
         source: {
           file,
         },
         format: "ALL", // Available options "PLAIN", "FORM", "TABLE", "ALL"
       }
     }).then(({text: { fullText }}) => {
       setResponse(fullText)
       
     })
       .catch(err => setResponse(JSON.stringify(err, null, 2)))
   }
 
   return (
     <div className="Text" style={{margin: "25px"}}>
       <div>
         <h3>Upload your Resume here!</h3>
         <input type="file" onChange={identifyFromFile}></input>
         <p>{response}</p>
       </div>
     </div>
   );
 }

 
 export function App({ signOut, user }) {
   return (
    <>
    <div><NavBar>
</NavBar>
</div>
    <div><FAQItemCollection/></div>
    <div><Features4x1Collection/></div> 
    <div><TextIdentification/></div>
    <div><SocialPost/></div>
    
    
    {/* <div><HeroLayout3/></div> */}
    {/* <div><ProfileCard/></div>    */}
       {/* <div><DetailedUserInfoUpdateForm/></div> */}
       </>
    
   );
 }






 export default withAuthenticator(App, {
   components: {
     Header,
     SignIn: {
       Header: SignInHeader,
       Footer: SignInFooter
     },
     Footer
   }
 });
 

 