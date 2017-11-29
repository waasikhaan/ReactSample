/**
 * Created by khanmu on 11/29/2017.
 */
import React, { Component } from 'react';
import dashBoardStore from '../stores/DashBoardStore.js';
import DashBoard from './DashBoard.js';

class DashBoardList extends Component {
    constructor() {
        super();
        this.getItems = this.getItems.bind(this);
        this.state = {
            items: dashBoardStore.getAll(),
        };
    }

    componentWillMount() {
        dashBoardStore.on("change", this.getItems);
    }

    componentWillUnmount() {
        dashBoardStore.removeListener("change", this.getItems);
    }

    getItems() {
        this.setState({
            items: dashBoardStore.getAll(),
        });
    }

    render() {
        const { items } = this.state;
        console.log(items);

        const ItemComponents = items.map((item, index) => {
            return <DashBoard itemID={index} key={index} {...item}/>;
        });

        return (
            <div>
                <ul>{ItemComponents}</ul>
            </div>
        );
    }

}

export default DashBoardList;
