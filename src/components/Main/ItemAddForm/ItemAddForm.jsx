import React, {Component} from "react";

import "./ItemAddForm.scss";



export default class ItemAddForm extends Component {


    render() {
        const { add } = this.props;
        return (
            <div className="item-add-form">
                <button className="btn"
                        onClick={add}
                >Add Item</button>
            </div>
        );
    }
}

