import react from 'react'

const Image = ({source,className})=>{

    return <img className={className} src={source} alt='profile-pic'/>
}

export default Image