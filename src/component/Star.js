import React, { useState } from "react";

function Star(prop) {
  const [star, setStar] = useState(prop.star);

  return (
    <div className="star">
      <span className="material-icons" onClick={() => setStar(!star)}>
        {star ? "star" : "star_border"}
      </span>
    </div>
  );
}
export default Star;
