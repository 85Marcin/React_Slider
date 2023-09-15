import people from "./data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Carousel = () => {
  const [peopleList, setPeopleList] = useState(people);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + peopleList.length) % peopleList.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % peopleList.length;
      return result;
    });
  };
  return (
    <section className="slider-container">
      {peopleList.map((person, personIndex) => {
        const { id, name, title, quote, image } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
