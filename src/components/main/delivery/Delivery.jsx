import { FaStar } from "react-icons/fa"
import "./Delivery.scss"

function Delivery() {
  return (
    <div className="delivery">
        <div className="text-part">
            <h1>Доставка </h1>
            <p>Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для корпоративных клиентов и частных лиц. Мы осуществлем доставку по Санкт-Петербургу и Ленинградской области.</p>
            .
        </div>
        <div className="card-part">
            <input type="button" value="Зона доставки" />
            <img src="" alt="" />
            <div className="condition">
                <FaStar/> <p>Вы оставляете заявку через сайт или по телефону.</p>
            </div>
            <div className="condition">
                <FaStar/> <p>Мы производим точный расчет стоимости</p>
            </div>
            <div className="condition">
                <FaStar/> <p>Осуществляем поставку заказанного вами материала точно в срок</p>
            </div>
            <div className="condition">
                <FaStar/> <p>Соблюдаем своевременный документооборот</p>
            </div>
            <div className="call-numbers">
                
            </div>
        </div>
    </div>
  )
}

export default Delivery