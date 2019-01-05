import React, { Component } from 'react';
import {Image, Col} from 'react-bootstrap';



const NavList = (data) =>{
    return(
        <div>
            <h3　className="articleList">関連記事</h3>
            <ul>
                {data.map(NavLink)}
            </ul>
        </div>
    )
}
const NavLink = (element) =>{
    return(
        <li className="Sidebar">
            <div className="card">
                <div className="card-body">
                    <Col xs={4} md={4} className="image_col">
                        <Image src={element.image} rounded/>
                    </Col>
                    <Col xs={8} md={8}>
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.description}</p>
                    </Col>
                </div>
            </div>
        </li>
    )
}

export default class SideBar extends Component {
    render(){
        return(
            <div>
                {NavList(this.props.articlesInfo.articles)}
            </div>
        )
    }
}