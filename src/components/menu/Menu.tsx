import "./Menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

export default function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link to={listitem.url} className="listitem" key={listitem.id}>
              <img src={listitem.icon} alt={listitem.title} />
              <span className="listitemTitle">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
Menu;
