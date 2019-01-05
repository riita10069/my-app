import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Article extends Component{

    // componentDidMount() {
	// 	$.ajax({
	// 		url: this.props.source,
	// 		dataType: 'text',
	// 		cache: false,
	// 		success: function(data) {
	// 			this.setState({data: data});
	// 		}.bind(this),
	// 	});
	// }
    
    render(){
        return(
            <div id="markdown_content" src={this.props.source}>
                <ReactMarkdown source={this.props.content}/>
            </div>
        )
    }
}
