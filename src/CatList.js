// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
    render(){
        return <div> 
            {this.props.catPics.map((picture,idx) => <img src={picture.url} alt={picture.url} key={picture.key}></img>)}
        </div>
    }
}

export default CatList; 