import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'

// function HelloWorld() {
//     return <h1><i>Hello World</i></h1>
// }


render(<App articles = {articles} />, document.getElementById('container'));