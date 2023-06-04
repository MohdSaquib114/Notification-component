import react from 'react'
import Button from './Button'
import '../componentstyle.css'

const Header = ({clickHandler1,unReadNumber})=>{
    return (
        <header className='header'>
            <h1>Notifications <span>{unReadNumber}</span></h1> 
            
            <Button onClick={clickHandler1} className="header-btn" tast="for-read-and-unread">Mark all as read</Button>
        </header>
    )
}

export default Header