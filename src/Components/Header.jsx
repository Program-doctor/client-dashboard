import headline from '../assets/headline.svg'
import bell from '../assets/bell.svg';
import user from '../assets/user.svg';
const Header = () => {
  return (
    <div className="Header">
    <img src={headline} alt="" />
    <div className="header-section">
      <img src={bell} alt="" />
      <img src={user} alt="" />
    </div>
    </div>
  )
}

export default Header