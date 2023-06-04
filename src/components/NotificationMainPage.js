import react from 'react'
import Header from './Header'
import { useState } from 'react'
import Notifications from './Notifications'
import notificationArry from './array'
import '../componentstyle.css'


const NotficationMainPage =()=>{
const [isRead, setRead] = useState([true,true,true,true,true,true,true])
const clickHandler = (index)=>{
   
    const newArr = [...isRead]
    newArr[index] = false
    
    setRead(newArr)

}
const clickHandler1 = ()=>{
    const newArr = [false,false,false,false,false,false,false]
   
    setRead(newArr)
}

return(<div className='main-container'>
<Header clickHandler1={clickHandler1} unReadNumber={isRead.filter(unread=>unread===true).length}/>

{notificationArry.map((notifObj,index)=>{
    if(notifObj.message){
         return <Notifications clickHandler={()=>clickHandler(index)} key={notifObj.id} readUnread={isRead[index]} name={notifObj.name}imgSource={notifObj.imgUrl} actionDetail={notifObj.actionDetail} actionType={notifObj.actionType} timing={notifObj.timing} message={notifObj.message}/> 
    }else if(notifObj.pictureUrl){
        return <Notifications clickHandler={()=>clickHandler(index)}  key={notifObj.id}  pictureUrl={notifObj.pictureUrl} readUnread={isRead[index]}  name={notifObj.name} imgSource={notifObj.imgUrl} actionDetail={notifObj.actionDetail}actionType={notifObj.actionType} timing={notifObj.timing}/>
    }else{
    return <Notifications clickHandler={()=>clickHandler(index)}  key={notifObj.id} readUnread={isRead[index]}  name={notifObj.name} imgSource={notifObj.imgUrl} actionDetail={notifObj.actionDetail}actionType={notifObj.actionType} timing={notifObj.timing}/>

}
})}




</div>

)
}

export default NotficationMainPage


//  reacted to your recent post My first tournament today!
// 1m ago

// Angela Gray followed you
// 5m ago

// Jacob Thompson has joined your group Chess Club
// 1 day ago

// Rizky Hasanuddin sent you a private message
// 5 days ago
// Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
// I'm already having lots of fun and improving my game.

// Kimberly Smith commented on your picture
// 1 week ago

// Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
// 2 weeks ago

// Anna Kim left the group Chess Club
// 2 weeks ago 


