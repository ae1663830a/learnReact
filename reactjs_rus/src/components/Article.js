import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

// export default function Article(props) {
//     const {article} = props;
//     console.log('---', props);
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <h4>{article.date}</h4>
//             <section>{article.text}</section>
//         </div>
//     )
// }

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log('---', this.props);
        return (
            <div>
                <h3>{article.title}</h3>
                {/*<h4>{(new Date).toLocaleString()}</h4>*/}
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;

        return <section>
            {article.text}
            <CommentList comments = {article.comments}/>
            </section>
    }

 }

export default toggleOpen(Article)