import React from 'react'
import {render} from 'react-dom'
import Article from './Article'
import {articles} from './fixtures'

// function HelloWorld() {
//     return <h1><i>Hello World</i></h1>
// }

const article = articles[0];

render(<Article article = {article} foo = 'bar'/>, document.getElementById('container'));