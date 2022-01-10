import { Link } from "react-router-dom";

import { Card as cardprops } from "../../common/types";

function Card(props: cardprops) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.text}</p>
        <Link to={props.linkName} className="card-link">
          {props.linkName}
        </Link>
        <Link to={props.anotherLink} className="card-link">
          {props.anotherLinkName}
        </Link>
      </div>
    </div>
  );
}

export default Card;
