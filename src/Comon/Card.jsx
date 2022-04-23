import React from "react";
import { Link } from "react-router-dom";
import anh from "../img/1640768032-TAMNSHSBOOK101.jpg";
function Card(props) {
  const { data } = props;
  return (
    <div>
      <Link to={`/book/${data.id}`}>
        <div className="book__list__card">
          <img src={anh} alt={data.name} />
          <h5
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100%",
              height: "1.2em",
              whiteSpace: "nowrap",
            }}
          >
            {data.name}
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default Card;
