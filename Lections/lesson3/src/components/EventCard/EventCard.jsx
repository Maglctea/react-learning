import './EventCard.css'

function EventCard(props) {
 return (
    <div className='eventCard'>
        <div className='eventName'>{props.name}</div>
        <div className='eventTime'>{props.time}</div>
    </div>
 )
    
}


export default EventCard