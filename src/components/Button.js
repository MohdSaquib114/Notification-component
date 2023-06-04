import react from 'react'
// import '../componentstyle.css'/
const Button= ({children, onClick, className, task})=>{
    return <button  className={className} onClick={onClick} aria-label={task}>{children}</button>
}

export default Button