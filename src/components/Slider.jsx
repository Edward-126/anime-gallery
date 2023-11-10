import "./Slider.css";
import Card from "./Card";
import cardData from "../data";

export default function Slider() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div id="slider">
      <div className="container slider-cont">
        <h1 className="slider-head">The Gallery</h1>
        <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
          {cardElements}
        </div>
      </div>
    </div>
  );
}
