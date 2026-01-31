import "./Navbar.scss"

const Navbar = () => {
  return (
        <nav>
          <div className="logo">
            <img src="/public/images/header/f_41164214e543b92c (1) 1.svg" alt="" />
          </div>
          <ul>
            <li>Услуги</li>
            <li>Материалы</li>
            <li>Доставка и оплата</li>
            <li>О компании</li>
            <li>Контакты</li>
          </ul>
        </nav>
  )
}

export default Navbar