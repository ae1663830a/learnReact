import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'

// function HelloWorld() {
//     return <h1><i>Hello World</i></h1>
// }


render(<ArticleList articles = {articles} />, document.getElementById('container'));