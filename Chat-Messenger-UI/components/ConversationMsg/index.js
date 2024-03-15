import './index.css'
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CheckIcon from '@material-ui/icons/Check';

const ConversationMsg = (props) => {
    const {msg: {source, txt, media, files, seen, quote}} = props    
    return (
    <>
    <div className={`conv-msg-container ${source === 'sender' ? 'sender-container' : 'receiver-container'}`}>
        <p className={`${source === 'sender' ? 'sender-msg' : 'receiver-msg'} msg-txt`}>
            {quote !== false && <span className='quote-container'>{quote}</span>}      
            {txt}
            {media && (
                <div className='media-container'>
                    {files.map(file => <img src={file} alt='media file' className='media-file'/>)}
                    <div className='ten-more'>10+</div>
                </div>    
            )}
            <p className={`timestamp ${source==='sender' ? 'sender-ts' : 'receiver-ts'}`}>03:45 </p>
            {seen === true ? <span className='seen-icon'><DoneAllIcon/></span> : (seen === false && source === 'receiver' ? <span className='seen-icon'><CheckIcon/></span> : null)}            
        </p>      
    </div>
    </>
)}

export default ConversationMsg