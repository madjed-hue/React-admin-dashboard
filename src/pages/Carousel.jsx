import React from "react";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import product4 from "../data/product4.jpg";
import product5 from "../data/product5.jpg";
import product6 from "../data/product6.jpg";
import product7 from "../data/product7.jpg";

const Carousel = () => {
  const productTemplate1 = () => {
    return (
      <figure className="img-container">
        <img
          src={product6}
          alt="Tomato"
          style={{ width: "100%", height: "100%" }}
        />
        <figcaption className="img-caption">Fresh and new Tomato</figcaption>
      </figure>
    );
  };
  const productTemplate2 = () => {
    return (
      <figure className="img-container">
        <img
          src={product5}
          alt="Cup"
          style={{ width: "100%", height: "100%" }}
        />
        <figcaption className="img-caption">Nice Cup for decoration</figcaption>
      </figure>
    );
  };
  const productTemplate3 = () => {
    return (
      <figure className="img-container">
        <img
          src={product7}
          alt="Icecream"
          style={{ width: "100%", height: "100%" }}
        />
        <figcaption className="img-caption">
          Sweet, Cold and Delicious
        </figcaption>
      </figure>
    );
  };
  const productTemplate4 = () => {
    return (
      <figure className="img-container ">
        <img
          src={product4}
          alt="Snickers"
          style={{ width: "100%", height: "100%" }}
        />
        <figcaption className="img-caption">
          The best for your health
        </figcaption>
      </figure>
    );
  };

  return (
    <div className="carousel-sample">
      <CarouselComponent className="default-carousel ">
        <CarouselItemsDirective>
          <CarouselItemDirective
            template={productTemplate1}
          ></CarouselItemDirective>
          <CarouselItemDirective
            template={productTemplate2}
          ></CarouselItemDirective>
          <CarouselItemDirective
            template={productTemplate3}
          ></CarouselItemDirective>
          <CarouselItemDirective
            template={productTemplate4}
          ></CarouselItemDirective>
        </CarouselItemsDirective>
      </CarouselComponent>
    </div>
  );
};
// }

export default Carousel;
