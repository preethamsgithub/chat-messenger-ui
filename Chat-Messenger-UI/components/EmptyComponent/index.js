import './index.css'
import {Component} from 'react'

class EmptyComponent extends Component{
    state = {component: ''}

    updateSectionName = () => {
        const {sectionName} = this.props
        return sectionName
        this.setState({component: sectionName})
    }
    
    render(){        
        return (            
            <div className='empty-comp-container'>
                <p>{`Nothing to show in ${this.updateSectionName()}`}</p>
            </div>
        )
    }
}

export default EmptyComponent