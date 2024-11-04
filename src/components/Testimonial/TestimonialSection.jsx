
import { useState } from "react";
import star from "../../assets/star.png";

const testimonials = [
  {
    name: "Jason Bay",
    image: "https://i.ibb.co/WWg2Z9Z/unsplash-p-Uhxo-Sap-PFA.png",
    text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    name: "Nany Brugman",
    image: "https://i.ibb.co/7WsZx97/unsplash-6-W4-F62s-N-y-I.png",
    text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
  {
    name: "Alexa Nowan",
    image: "https://i.ibb.co/DKNnj3b/unsplash-pls-F6ob-Tgms.png",
    text: "I am quite satisfied, because the skills I want or dream of can really be mastered",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container bg-offWhite mx-auto px-4 py-16 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        What do they <span className="text-peach900">say?</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        This is an honest review from members who have joined us
      </p>

      {/* For Mobile: Show one card at a time */}
      <div className="block md:hidden w-full max-w-md mx-auto">
        <div className="card text-center bg-white shadow-lg rounded-lg p-6">
          <figure className="flex justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="rounded-full w-24 h-24"
            />
          </figure>
          <div className="card-body flex flex-col items-center justify-center mt-4">
            <div>
              <img src={star} alt="rating" />
            </div>
            <h2 className="card-title text-lg font-bold mt-2">
              {testimonials[currentIndex].name}
            </h2>
            <p className="text-gray-600 mt-2">{testimonials[currentIndex].text}</p>
          </div>
        </div>

        {/* Indicator Buttons */}
        <div className="flex justify-center w-full py-4 gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="btn btn-circle hover:bg-peach900 btn-outline"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle hover:bg-peach900 btn-outline"
          >
            ❯
          </button>
        </div>
      </div>

      {/* For Desktop: Show three cards at a time */}
      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card text-center bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ${
                index === currentIndex ? "transform scale-105 border-b-4 border-Green" : ""
              }`}
            >
              <figure className="flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-24 h-24"
                />
              </figure>
              <div className="card-body flex flex-col items-center justify-center mt-4">
                <div>
                  <img src={star} alt="rating" />
                </div>
                <h2 className="card-title text-lg font-bold mt-2">{testimonial.name}</h2>
                <p className="text-gray-600 mt-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Buttons for Desktop */}
        <div className="flex justify-center w-full py-4 gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="btn btn-circle hover:bg-peach900 outline outline-white"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle hover:bg-peach900 outline  outline-white"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
