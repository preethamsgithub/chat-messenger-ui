import './index.css'
import {Component} from 'react'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Scrollbars } from 'react-custom-scrollbars';
import ChatItem from '../ChatItem'
import 'simplebar/dist/simplebar.min.css';

const contactsList = [
    {
        name: `Jeffery`,
        imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: 'imp'
    },
    {
        name: 'Rachel',
        imageUrl: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: true
    },
    {
        name: 'Kyle',
        imageUrl: 'https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: 'busy'
    },
    {
        name: 'Brock',
        imageUrl: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: true
    },
    {
        name: 'Nathan',
        imageUrl: 'https://images.unsplash.com/photo-1520078452277-0832598937e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: true
    },
    {
        name: `Jeffery`,
        imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: 'imp'
    },
    {
        name: 'Rachel',
        imageUrl: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: 'busy'
    },
    {
        name: 'Kyle',
        imageUrl: 'https://images.unsplash.com/photo-1523956468692-1e219561ea46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: true
    }
]

const chatList = [
    {
        name: 'Nathan',
        imageUrl: 'https://images.unsplash.com/photo-1520078452277-0832598937e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: false,
        msg: 'I don\'t think that\'s how..',
        isDelivered: false,
        unread: 2
    },
    {
        name: 'Rachel',
        imageUrl: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: true,
        msg: 'It was good catching up..',
        isDelivered: true,
        unread: false
    },
    {
        name: `Jeffery`,
        imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: false,
        msg: 'Wow! Awesome!',
        isDelivered: true,
        unread: false
    },
    {
        name: 'Brock',
        imageUrl: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: false,
        msg: 'That indeed is true. But..',
        isDelivered: 'seen',
        unread: false
    },
    {
        name: 'Jackson',
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        isActive: false,
        msg: 'How did that happen?',
        isDelivered: false,
        unread: 3
    }
]

class Inbox extends Component{
    render(){
        return (
        <div className='inbox-container'>
            <div className='user-profile'>
                <img src='https://i.ibb.co/3Nmtjn6/my-picture.jpg' alt='profile picture' className='profile-picture'/>
                <div className='profile-name-details'>
                    <p className='profile-name'>K S S Prathyush</p>
                    <p className='profile-tag'>@prathyush_s</p>
                </div>                                               
            </div>            
            <div className='contacts-container'>
            <ArrowForwardIosRoundedIcon className='right-arrow'/>
            <p className='contacts-title'>Contacts</p>
                <Scrollbars style={{paddingBottom: '30px'}} autoHide>
                <div className='contacts-list'>
                    {contactsList.map(item => (                        
                        <div className='contact-item' key={item.name}>
                            <img alt='contact pfp' src={item.imageUrl} className='contact-pfp'/>
                            <p className='contact-name'>{item.name}</p>
                            {item.isActive && <div className='activity-status'></div>}
                            {item.isActive === 'busy' && <div className='activity-status busy'></div>}
                            {item.isActive === 'imp' && <div className='activity-status imp'></div>}
                        </div>                                                
                    ))}                    
                </div>
                </Scrollbars>
            </div>
            <div className='chats-container'>
                <p className='chats-title'>
                    Chats (2)
                </p>                                
                <Scrollbars className='chats-list' autoHide={false}>                    
                        {chatList.map(chatItem => <ChatItem chatItem={chatItem} key={chatItem.name}/>)}                    
                </Scrollbars>                
            </div>
        </div>   
    )}
}

export default Inbox