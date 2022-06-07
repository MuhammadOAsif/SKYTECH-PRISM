import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="d-flex">
      <Link
        style={{
          color: match ? "tomato" : "#38CC77",
          textDecoration: match ? "none" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CLink;
