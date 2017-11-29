import React from 'react'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            <p><b>{comment.user}</b><br/> {comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

export default Comment

// import React, {Component} from 'react'
// import Article from './Article'
//
//
// export default class Comment extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//         }
//     }
//     render(){
//         const {comments}= this.props;
//         const isOpen = this.state;
//
//         return(
//             <div>
//                 <button onClick={this.toggleOpen}>
//                     {isOpen? 'Hide comments': 'Show comments'}
//                     </button>
//                 {this.getBody()}
//             </div>
//         )
//     }
//
//     getBody(){
//         if(!this.state.isOpen) return null;
//         const {comments} = this.props;
//         return <section><h3>{comments.user}</h3><h4>{comments.text}</h4></section>
//     }
//
//     toggleOpen(){
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
// }