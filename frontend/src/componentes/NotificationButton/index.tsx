import axios from 'axios';
import icon from '../../recursos/img/notification-icon.svg';
import { BASE_URL } from '../../utils/resquest';
import'./styles.css';

type props = {
    saleId: number;
}

function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(Response => {
        console.log("sucesso");
    });
}

function NotificationButton( {saleId} : props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon}alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
