import logo from "../assets/logo.svg";
import grid from "../assets/grid.svg";
import logout from "../assets/logout.svg";
import group from "../assets/group.svg";
import settings from "../assets/settings.svg";
import topic from "../assets/topic.svg";

const CompressedNav = () => {
  return (
    <div className="CompressedNav">
      <div className="sidenav-compressed">
        <img id="logo" src={logo} alt="" />
        <div className="side-nav-compressed-feature">
          <a href="">
            <img className="side-nav-img" src={grid} alt="" />
          </a>
          <a href="">
            <img className="side-nav-img" src={topic} alt="" />
          </a>
          <a href="">
            <img className="side-nav-img" src={group} alt="" />
          </a>
          <a href="">
            <img className="side-nav-img" src={settings} alt="" />
          </a>
        </div>
        <a id="Compressed-logout" href="">
        <img className="side-nav-img" src={logout} alt="" />
      </a>
      </div>
      
    </div>
  );
};

export default CompressedNav;
