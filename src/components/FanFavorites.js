import React from "react";
import cover from "../assets/cover.jpg";
import Card from "./Card";
const FanFavorites = () => {
  const cards = [
    { title: "Movie1", img: cover },
    { title: "Movie2", img: cover },
    { title: "Movie3", img: cover },
    { title: "Movie4", img: cover },
    { title: "Movie5", img: cover },
    { title: "Movie6", img: cover },
    { title: "Movie7", img: cover },
    { title: "Movie8", img: cover },
    { title: "Movie9", img: cover },
    { title: "Movie10", img: cover },
  ];
  return (
    <div className="bg-black pb-12">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m  sm:w-[90vw] gap-4 pt-4  lg:w-[80vw] xl:w-[70vw] mx-auto">
        {cards.map((card) => (
          <Card title={card.title} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default FanFavorites;
