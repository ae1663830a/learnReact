import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
    static propTypes = {};

    componentDidMount(){
        //d3 works with this.refs.chart
    }

    render() {
        return (
            <div ref = 'chart'>
            </div>
        )
    }

    componentWillUnmount(){
        //do cleanup
    }
}

export default ArticlesChart