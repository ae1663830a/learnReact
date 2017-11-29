import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

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
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };


    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div ref={this.setContainerRef}>
                {/*<h2>{this.getTime()}</h2>*/}
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('---', ref);
    };

    componentDidMount() {
        console.log('---', 'mounted')
    }

    static getTime() {
        return (new Date).toLocaleString()
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;

        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} ref = {this.setCommentRef}/>
            </section>
        )
    };
    setCommentRef = ref => {

    }
}

export default Article