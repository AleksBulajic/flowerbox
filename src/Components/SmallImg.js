import React from "react";

function SmallImg({ data }) {
  return (
    <div className="small">
      <img src={data.image} alt="flower" />
      <div style={{ display: "flex", flexDirection: "row", padding: 15 }}>
        <h1 className="H1">
          {data.name}
        </h1>
        <p className="P">
          ${data.price}
        </p>
      </div>

      <div  className="map"style={{ display: "flex", flexDirection: "row" }}>
        {data.tags.map((tag) => (
          <p className="tags" >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SmallImg;
