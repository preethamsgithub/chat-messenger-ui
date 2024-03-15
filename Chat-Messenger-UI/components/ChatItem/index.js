import './index.css'
import {Component} from 'react'
import CheckIcon from '@material-ui/icons/Check';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';

class ChatItem extends Component{

    render(){
        const {chatItem: {name, imageUrl, isActive, msg, isDelivered, unread}} = this.props
        return (
            <>
            <div className={`chat-item-container ${isActive && 'chat-item-selected'}`}>
                <img src={imageUrl} className='chat-item-pfp'/>
                <div className='chat-item-name-msg'>
                    <p className={`chat-item-name ${unread >= 1 && 'unread-name'}`}>
                        {name}
                    </p>
                    <p className={`chat-item-msg ${unread >= 1 && 'unread-msg'}`}>
                        {msg}
                    </p>
                </div>
                <div className='time-unread'>
                    <p className='time'>03:45</p>
                    {unread >= 1 && (<div className='unread-bubble'>{unread}</div>)}
                    {isDelivered === true && <CheckIcon className='delivery-icon'/>}
                    {isDelivered === 'seen' && <DoneAllRoundedIcon className='delivery-icon'/>}
                </div>
            </div>
            {/* <hr className='hr-element' color="#D6E4E5" width="50%" align="center"/> */}
            </>
        )
    }
}

export default ChatItem