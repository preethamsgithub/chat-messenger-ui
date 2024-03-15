import React from 'react';
import './index.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubble from '@material-ui/icons/ChatBubble';
import ConversationMsg from '../ConversationMsg'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import SendIcon from '@material-ui/icons/Send';
import SimpleBar from 'simplebar-react';
import { Scrollbars } from 'react-custom-scrollbars';
import ChatDetails from '../ChatDetails'
import ChatDetailsChat from '../ChatDetailsChats'

const chatMessages = [
    {
        source: 'sender',
        txt: 'Hello! How\'s it going?',
        media: false,
        files: [],
        seen: false,
        quote: false
    },
    {
        source: 'receiver',
        txt: 'Everthing\'s been great. How about you?',
        media: false,
        files: [],
        seen: true,
        quote: false
    },
    {
        source: 'sender',
        txt: 'I\'m doing great as well! So I was wondering..',
        media: false,
        files: [],
        seen: false,
        quote: false
    },
    {
        source: 'sender',
        txt: 'Do you possibly have the pictures of our Bangalore Trip from the college days?',
        media: false,
        files: [],
        seen: false,
        quote: false
    },
    {
        source: 'receiver',
        txt: 'Yeah, I do!',
        media: false,
        files: [],
        seen: true,
        quote: 'Do you possibly have the pictures of our Bangalore Trip from the college days?'
    },
    {
        source: 'sender',
        txt: 'Oh, That\'s awesome! If you don\'t mind, please do share em to me at your free time.',
        media: false,
        files: [],
        seen: false,
        quote: false
    },
    {
        source: 'receiver',
        txt: 'Oh, Alright! Here. I miss those days to be honest.',
        media: true,
        files: [
            'https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZW5kc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1514956171735-ad73e6920afc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1598804413720-5cdd689958b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZyaWVuZHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',            
        ],
        seen: true,
        quote: false
    },
    {
        source: 'sender',
        txt: 'Me too! But you know what they say. Time flies fast. Alright then! It was good catching up after a while. Cya! :)',
        media: false,
        files: [],
        seen: false,
        quote: false
    },
    {
        source: 'receiver',
        txt: 'It was good catching up with you too. Cya again then!',
        media: false,
        files: [],
        seen: false,
        quote: false
    }
]

class Chats extends React.Component{

    state = {inpValue: '', chatsList: chatMessages, detailsVisibility: false}

    scrollbars = React.createRef()    
      
    sendMsg = (e) =>{
        const {inpValue} = this.state
        if (e.key === 'Enter' && inpValue !== '') this.updateNewMessage()
    }

    updateNewMessage = () => {
        const {inpValue} = this.state
        chatMessages.push({
            source: 'receiver',
            txt: inpValue,
            media: false,
            files: [],
            seen: false,
            quote: false
        })
        this.setState({inpValue: '', chatsList: chatMessages})
    }

    handleInputValueChange = (e) => {
        this.setState({inpValue: e.target.value})
    }

    componentDidMount() {
        // this.scrollToBottom();
        this.scrollbars.current.scrollToBottom()        
    }
      
    componentDidUpdate() {
        this.scrollbars.current.scrollToBottom()   
    }

    toggleInChats = () => {
        console.log(this.state)
        this.setState({detailsVisibility: false})
    }

    renderComponent = () => {
        const {visibility} = this.props
        const {detailsVisibility} = this.state
        let component = null
        console.log(visibility, detailsVisibility)
        if (detailsVisibility && !visibility) component = <ChatDetailsChat toggleInChats={this.toggleInChats}/>
        return component
    }

    render(){    
        const {inpValue, detailsVisibility} = this.state
        const {visibility} = this.props
        console.log(inpValue)
        console.log(this.conversationBubbles)    
        return (
        <>
        <div className='conversations-container'>
            <div className='search-box'>
                <div className='search-box-input'>
                    <SearchRoundedIcon className='search-icon'/>
                    <input type='text' className='search-textbox' placeholder='Search from Conversation'/>
                </div>                
                <div className='well'></div>
                <div className='searchbox-option-container'>
                    <MoreHorizRoundedIcon className='searchbox-option'/>
                </div>
                <div className='searchbox-option-container'>
                    <NotificationsIcon className='searchbox-option'/>
                </div>
            </div>
            <button className='person-profile' onClick={() => this.setState({detailsVisibility: true})}>
                <img className='person-profile-pfp' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='Rachel'/>
                <div className='person-profile-txt'>
                    <p className='person-profile-name'>Rachel</p>
                    <p className='person-profile-status'>Online</p>
                </div>
            </button>            
            <Scrollbars className='conversation-bubbles scrollbar' autoHide={false} ref={this.scrollbars}>
                {chatMessages.map(msg => <ConversationMsg msg={msg}/>)}               
            </Scrollbars>            
            <hr width='100%' color="#e4e4e4"/>            
            <div className='txt-input-container'>
                <AttachFileRoundedIcon className='attachment-icon'/>
                <input onKeyDown={this.sendMsg} onChange={this.handleInputValueChange} value={inpValue} type='text' placeholder='Type something and hit send' className='send-text-input'/>
                <SentimentSatisfiedOutlinedIcon className='emojis-icon'/>
                <button className='send-button' onClick={this.updateNewMessage}>Send <SendIcon className='send-icon'/></button>
            </div>         
        </div>
        {this.renderComponent()}</>
        )}
}

export default Chats