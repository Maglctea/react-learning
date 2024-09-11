import './CurrentTime.css'

export const CurrentTime = () =><h2 className="time">Сегодня: {new Date().toLocaleDateString()}</h2>
