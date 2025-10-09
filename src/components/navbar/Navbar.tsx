import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon exp" />
        <img src="/app.svg" alt="app" className="icon exp" />
        <img src="/expand.svg" alt="expand" className="icon exp" />
        <div className="notification">
          <img src="/notifications.svg" alt="notifications" className="icon" />
          <span className="">1</span>
        </div>
        <div className="admin">
          <img src="/user.png" alt="user" className="icon" />
          <span className="exp">Abdo</span>
        </div>
        <img src="/settings.svg" alt="settings" className="icon exp" />
      </div>
    </div>
  );
}
