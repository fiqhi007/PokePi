import React from "react";

const Card = ({ src, name, children }) => {
  return (
    <div className="card bg-primary w-full shadow-sm">
      <figure className="px-10 pt-10">
        <img src={src} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
