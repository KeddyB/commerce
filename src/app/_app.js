import React, { Component } from 'react'

import {layout} from '../app/layout'
import '../app/globals.css'

const MyApp = ({ component, pageProps}) => {
  return (
    <layout>
        <Component {...pageProps} />
    </layout>
  )
}

export default MyApp
