import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { config } from './config';
import { steps } from './steps';

function CustomChatbot(props) {
  
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  )
}
export default CustomChatbot
