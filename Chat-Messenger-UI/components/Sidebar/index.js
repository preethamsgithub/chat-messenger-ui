import './index.css'
import {Component} from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import CallIcon from '@material-ui/icons/Call';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Sidebar extends Component{
    
    state = {selected: 'inbox', hover: 'none'}

    updateRenderingSection(section) {
        const {renderSection} = this.props
        renderSection(section)
        this.setState({selected: section, hover:'none'})
    }

    render(){        
        const {renderSection, sectionName} = this.props
        const {selected, hover} = this.state        
        return (
        <div className='sidebar-container'>
            <div className='option-container'>
            <ChatBubbleIcon onMouseEnter={() => this.setState({hover: 'inbox'})} onMouseLeave={() => this.setState({hover: 'none'})} className={`sidebar-option ${selected === 'inbox' && `sidebar-option-selected`}`} onClick={() => this.updateRenderingSection('inbox')}/>
            <p className={`hidden ${hover === 'inbox' && 'hovered'}`}>Inbox</p>            
            </div>       
            <div className='option-container'>
            <GroupIcon onMouseEnter={() => this.setState({hover: 'groups'})} onMouseLeave={() => this.setState({hover: 'none'})} className={`sidebar-option ${selected === 'groups' && `sidebar-option-selected`}`} onClick={() => this.updateRenderingSection('groups')}/>
            <p className={`hidden ${hover === 'groups' && 'hovered'}`}>Groups</p>
            </div>
            <div className='option-container'>
            <PersonIcon onMouseEnter={() => this.setState({hover: 'profile'})} onMouseLeave={() => this.setState({hover: 'none'})} className={`sidebar-option ${selected === 'profile' && `sidebar-option-selected`}`} onClick={() => this.updateRenderingSection('profile')}/>
            <p className={`hidden ${hover === 'profile' && 'hovered'}`}>Profile</p>
            </div>
            <div className='option-container'>
            <CallIcon onMouseEnter={() => this.setState({hover: 'calls'})} onMouseLeave={() => this.setState({hover: 'none'})} className={`calls-icon sidebar-option ${selected === 'calls' && `sidebar-option-selected`}`} onClick={() => this.updateRenderingSection('calls')}/>
            <p className={`hidden ${hover === 'calls' && 'hovered'}`}>Calls</p>
            <div className='missed-calls'>2</div>
            </div>
            <div className='option-container'>
            <SettingsRoundedIcon onMouseEnter={() => this.setState({hover: 'settings'})} onMouseLeave={() => this.setState({hover: 'none'})} className={`sidebar-option ${selected === 'settings' && 'sidebar-option-selected'}`} onClick={() => this.updateRenderingSection('settings')}/>
            <p className={`hidden ${hover === 'settings' && 'hovered'}`}>Settings</p>
            </div>
            <div className='logout-icon option-container'>
            <ExitToAppIcon className='sidebar-option'/>            
            </div>
        </div>
    )}
}

export default Sidebar