import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
function CustomLink({ children, to, id }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ borderBottom: match ? "2px solid #1a99d5" : "none" }}
        to={`${to}/${id + 1}`}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
