import React, {Component} from 'react'

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


export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    render() {
        const {article} = this.props;
        console.log('---', this.props);
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <h4>{(new Date).toLocaleString()}</h4>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        console.log('---', ev);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}