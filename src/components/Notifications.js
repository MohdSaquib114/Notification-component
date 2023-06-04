import react from 'react'
import Image from './Image'
import '../componentstyle.css'

const Notifications = ({name,imgSource,actionType, actionDetail,timing, message,readUnread,pictureUrl,clickHandler})=>{
   

    return(
<div onClick={clickHandler} className='notification-container'>
<Image className='profile-img' source={imgSource}/>
<div >
    <p className='notific-para'>
        <strong>{name}</strong>{actionType}
       <span> {actionDetail}</span> </p>

{readUnread &&<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="3.5" r="3.5" fill="#FB4E4B"/>
</svg>}

<time className='time'>{timing}</time>
{actionType==='sent you a private message' && <p className='privateMessage'>{message}</p>}
</div>
{actionType==='commented on your picture'  && <Image className='side-img' source={pictureUrl}/> }

</div>


    )
}

export default Notifications