import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import ReactDom from 'react-dom';

import './style.scss';

import ContactsList from '@containers/ContactsList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const avatarsPath = '../../src/resources/img/avatars/';

export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChats: [
                { name: 'Darth Vader', text: 'I am your father', id: '1', img: `${avatarsPath}darth_vader.jpeg` },
                { name: 'Chewbacca', text: 'Arrrrw', id: '2', img: `${avatarsPath}chewbacca.jpg` },
                { name: 'Luke Skywalker', text: 'I am Here To Rescue You.', id: '3', img: `${avatarsPath}luke.jpg` }
            ]
        };
    }

    addChat = (name, text = '') => {
        this.setState({ activeChats: [...this.state.activeChats, { name, text, id: Date.now() }] });
    }

    render() {
        const { activeChats } = this.state;
        const Chats = activeChats.map((el, i) => <ListItem key={i}>
            <ListItemAvatar>
                <Avatar alt={el.name} src={el.img}>
                </Avatar>
            </ListItemAvatar>
            <Link to={`/chat/${el.id}`} className="chats-link">
                <ListItemText primary={el.name} secondary={el.text} />
            </Link>
        </ListItem>)
        return <div className="chatsList">
            <List>
                {Chats}
            </List>
            <ContactsList add={this.addChat} />
        </div >;
    }
}