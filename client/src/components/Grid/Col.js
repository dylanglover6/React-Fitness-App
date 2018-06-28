import React from "react";

export const Col = ({ size, backgroundImage, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")} style={{ backgroundImage: `url(${backgroundImage})` }}>
    {children}
  </div>
);
