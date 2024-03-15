import './App.css';
import ChatMessenger from './components/ChatMessenger'
// import ScreenRotationRoundedIcon from '@material-ui/icons/ScreenRotationRounded';
// import StayCurrentLandscapeRoundedIcon from '@material-ui/icons/StayCurrentLandscapeRounded';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import MobileOffRoundedIcon from '@material-ui/icons/MobileOffRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';

function App() {
    return (
        <>
        <div className='bg-container'>
        <ChatMessenger className='root-div'/>        
        </div>
        <div className='mobile-screen'>
            {/* <p className='rotate-screen-para'><ScreenRotationRoundedIcon className='rotate-screen-svg svg-a'/><StayCurrentLandscapeRoundedIcon className='rotate-screen-svg svg-b'/> Rotate the screen to Landscape in order to view the Application.</p> */}
            <div className='uh-oh'>               
                <h1><ErrorOutlineIcon className='heading-svg-oops'/>Oops! </h1>
                <p className='uh-oh-para'><DesktopMacRoundedIcon className='green-svg' style={{transform: 'scale(1.3)'}}/><span>This UI <span className='bold-text'> is </span>only developed for<span className='bold-text'> Desktop</span></span></p>
                <p className='uh-oh-para' style={{color: '#222222'}}><MobileOffRoundedIcon className='red-svg' style={{transform: 'scale(1.3)'}}/><span>AND <span className='bold-text'> isn't </span>responsive to <span className='bold-text'>Mobile</span> devices</span></p>                
                <div className='line'>&nbsp;</div>
                <h1><InfoOutlinedIcon className='however-svg green-svg'/>However,</h1>
                <a href='https://youtu.be/xQiR3968wDU' target="_blank" className='view-proj-div'>
                    <YouTubeIcon className='yt-icon'/>
                    <p className='yt-text'>Project Demo</p>
                    <p>(Here's a demo of the UI)</p>
                </a>
            </div>
        </div>
        </>
    );
}

export default App;