import React from 'react';
import './index.css'
import CallIcon from '@material-ui/icons/Call';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { Scrollbars } from 'react-custom-scrollbars';

class ChatDetails extends React.Component{
    state = {isHidden: false}

    render(){
        const {toggleVisibility, visibility} = this.props
        const {isHidden} = this.state
        console.log('is hidden ' + isHidden)
        return(
            <div className={`chat-details-container ${isHidden && 'd-none'}`}>
                <button className='chat-details-container-close' onClick={() => {
                    toggleVisibility(isHidden)                    
                    this.setState({isHidden: visibility})
                }}>
                    <ClearRoundedIcon className='chat-detail-close-cross'/>
                </button>
                <div className='chat-details-profile'>
                    <img className='chat-details-pfp' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='rachel pfp'/>
                    <div className='chat-details-name-details'>                    
                        <p className='chat-details-name'>Rachel</p>
                        <p className='chat-details-tag'>@rachel_blue</p>
                    </div>
                    <div className='chat-details-options'>
                        <div className='chat-details-option-container'>
                            <div className='chat-details-icon-container'><CallIcon className='chat-details-icon'/></div>
                            <p className='chat-details-option-name'>Call</p>
                        </div>
                        <div className='chat-details-option-container'>
                            <div className='chat-details-icon-container'><ChatBubbleOutlinedIcon className='chat-details-icon'/></div>
                            <p className='chat-details-option-name'>Message</p>
                        </div>
                        <div className='chat-details-option-container'>
                            <div className='chat-details-icon-container'><VideoCallRoundedIcon style={{transform: 'scale(1.2)'}} className='chat-details-icon'/></div>
                            <p className='chat-details-option-name'>Video Call</p>
                        </div>
                        <div className='chat-details-option-container'>
                            <div className='chat-details-icon-container'><MoreHorizRoundedIcon className='chat-details-icon'/></div>
                            <p className='chat-details-option-name'>More</p>
                        </div>
                    </div>                                        
                </div>
                <hr color='#e4e4e4' width='100%'/>     
                <div className='chat-details-additional'>
                    <div className='chat-details-additional-row'>
                        <p className='chat-details-additional-name'>Phone</p>
                        <p className='chat-details-additional-content'>+91 987654321</p>
                    </div>
                    <div className='chat-details-additional-row'>
                        <p className='chat-details-additional-name'>Date of birth</p>
                        <p className='chat-details-additional-content'>05 April 1998</p>
                    </div>
                    <div className='chat-details-additional-row'>
                        <p className='chat-details-additional-name'>Gender</p>
                        <p className='chat-details-additional-content'>Female</p>
                    </div>
                </div>
                <hr color='#e4e4e4' width='100%'/>
                <div className='chat-details-media-container'>
                    <div className='chat-details-media-title-container'>
                        <p className='chat-details-media-title'>Shared files</p>
                        <p className='chat-details-media-view-all'>View all</p>
                    </div>
                    <Scrollbars className='chat-details-media-list'>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSJAOPGNIE.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSKMDILNLI.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSOIUNYBUN.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSUOOINIU.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSJAOPGNIE.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSKMDILNLI.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSOIUNYBUN.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                        <div className='chat-details-media-item'>
                            <div className='chat-details-media-icon-name'>
                                <div className='chat-details-file-icon-container'>
                                    <InsertDriveFileIcon className='chat-details-media-file-icon'/>
                                </div>
                                <div className='chat-details-media-details'>
                                    <p className='chat-details-media-file-name'>DSUOOINIU.jpg</p>
                                    <p className='chat-details-media-date'>Saturday, July 31st 2021, 03:45</p>
                                </div>
                            </div>
                            <div className='chat-details-media-size'>
                                1.3 Mb
                            </div>
                        </div>
                    </Scrollbars>
                </div>                
            </div>
        )
    }
}   

export default ChatDetails