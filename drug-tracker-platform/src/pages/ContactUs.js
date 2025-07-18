import '../App.css';
import { styled } from '@mui/material/styles';
import "../tailwind.css";
import Box from '@mui/material/Box';
import Copyright from '../dashboard/internals/components/Copyright';
import CssBaseline from '@mui/material/CssBaseline';
import AppNavbar from '../dashboard/components/AppNavbar';
import SideMenu from '../dashboard/components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme/customizations';


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};





export default function ContactUs(props) {
  const [statusMessage, setStatusMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_93aur6f', 'template_qqjwq9i', form.current, {
        publicKey: 'yifnGN_JGMBjBXJPF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatusMessage("Email sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage(`${error.text} happened`);
        },
      );
  };

  return (
      <div className="App">
      <header className="App-header">
        <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
      <SideMenu idx ={2}/>
      <AppNavbar />
    <>
    <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundColor:"white",
            }}
          >
            
          </div>
            <div className="container relative mx-auto max-w-75">
            <div className="flex-wrap flex h-screen justify-center items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center">
                <div className="px-12 text-blueGray-700">
                  <h1 className="text-logoBlue font-semibold text-5xl">
                    Contact Us
                  </h1>
                  <br/>
                  <div>
                    <div className="flex flex-col text-center w-full mb-12">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      <strong><i>Let us know how we could work together to make medicine data more widely acessible.</i></strong>
                    </p>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label for="name" className="leading-7 text-sm text-gray-600">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-1/2">
                        <div className="relative">
                          <label
                            for="email"
                            className="leading-7 text-sm"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            for="title"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label
                            for="message"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows="8"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          ></textarea>
                        </div>
                      </div>
                      <div className="p-2 w-full">
                        <input className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit' value="Send"/>
                      </div>
                      
                      <div className="p-2 w-full">
                        <div className="relative">
                        <p style={{ color: 'green' }}>{statusMessage}</p>
                        </div>
                      </div>
              <Copyright sx={{ my: 4 }} />
                      </div>
                  </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
      </main>
        </>
      </Box>
    </AppTheme>
    </header>
    </div>
    );
}