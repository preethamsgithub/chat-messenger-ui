import './index.css'
import {Component} from 'react'
import Sidebar from '../Sidebar'
import Inbox from '../Inbox'
import Chats from '../Chats'
import ChatDetails from '../ChatDetails'
import EmptyComponent from '../EmptyComponent'

class ChatMessenger extends Component {
 
    toggleDetails = () => {
        const visibility = this.state
        this.setState(prev => ({section: <><Inbox/><Chats toggleDetails={this.toggleDetails} visibility={visibility}/><ChatDetails toggleVisibility = {this.toggleVisibility} visibility={true}/></>}))
    }

    toggleVisibility = (bool) => {
        const visibility = !bool
        this.setState({section: <><Inbox/><Chats toggleDetails={this.toggleDetails}/><ChatDetails toggleVisibility = {this.toggleVisibility} visibility={visibility}/></>, visibility})
    }

    renderSection = (sectionName) => {                       
        if (sectionName === 'inbox'){
            const {visibility} = this.state
            this.setState({section: <><Inbox/><Chats/><ChatDetails toggleVisibility={this.toggleVisibility} visibility={visibility}/></>, sectionName})
        }
        else this.setState({section: <EmptyComponent sectionName={sectionName}/>})
    }

    state = {section: <><Inbox/><Chats visibility={true}/><ChatDetails toggleVisibility={this.toggleVisibility} visibility={true}/></>, visibility: true, sectionName: ''}

    render() {
        const {section, sectionName, visibility} = this.state
        return (
            <div className='messenger-container'>
                <Sidebar renderSection={this.renderSection} sectionName={sectionName}/>                
                {section}
            </div>
        )
    }
} 

export default ChatMessenger