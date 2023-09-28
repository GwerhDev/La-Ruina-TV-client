import s from './Dashboard.module.css';
import Requests from '../Requests/Requests';
import RequestProfile from '../../components/RequestProfile/RequestProfile';

const Dashboard = () => {
  return (
    <div className={s.bodyContainer}>
      <div className='navFixed'/>
      <div className={s.container}>
        <div className={s.dashControlCont}>
          <div className="header-container">
            <h1>Bienvenido a tu dashboard</h1>
            <h3>¿Qué quieres hacer?</h3>
          </div>
          <ul>
            <li>
              <Requests/>
              <RequestProfile/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
