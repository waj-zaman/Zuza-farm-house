import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import aiman from "../assets/reivews/aiman fasi.png";
import ayesha from "../assets/reivews/ayesha.png";
import raihan from "../assets/reivews/raihan.png";
import yatish from "../assets/reivews/yatish.png";
import ateeq from "../assets/reivews/unnamed.png";
import khaja from "../assets/reivews/khaja.png";
import jyothi from "../assets/reivews/jyothi.png";
import mayank from "../assets/reivews/mayank.png";
import nalavolu from "../assets/reivews/nalavolu.png";
import pramod from "../assets/reivews/pramod.png";
import graph from "../assets/reivews/prashant.png";
import diyanat from "../assets/reivews/diyanat.png";


const reviews = [
  {
    pic: aiman,
    name: "Aiman Fasi",
    star: 4.5,
    text: "Zuza Farmhouse is a great spot for a peaceful weekend. The interiors are clean and tastefully done, with a nice natural touch. Lots of greenery around, and the kids loved the play area. Perfect for a chill family or friends' getaway.",
  },
  {
    pic: raihan,
    name: "Mohammad Raihan",
    star: 5,
    text: "We had an amazing stay at Zuza Farmhouse! The property is calm, well-kept, and offers the ideal mix of rustic charm with modern comfort. Every detail feels thoughtfully cared for—from the inviting interiors to the peaceful outdoor areas.",
  },
  {
    pic: ayesha,
    name: "Ayesha",
    star: 5,
    text: "Great place for a getaway. Highly maintained farmhouse with all the basic amenities. Huge green lawn and clean swimming pool. Do visit to experience it yourself!",
  },
  {
    pic: yatish,
    name: "Yatish Parmar",
    star: 5,
    text: "What a hidden gem! This farmhouse was the perfect blend of rustic charm and modern amenities. The hosts were super friendly and helpful, and we loved the peaceful atmosphere.",
  },
  {
    pic: ateeq,
    name: "Ateeq Ahmed",
    star: 5,
    text: "As salam alaikum. Alhamdulillah we had a great time at Zuza Farmhouse. It was a cousins’ get-together. The ground was huge and the caretakers were very cooperative. Overall it was a wonderful experience!",
  },
  {
    pic: khaja,
    name: "Mohammad Khaja",
    star: 5,
    text: "Had an amazing stay at this farmhouse! The place was peaceful, beautifully maintained, and had everything we needed for a relaxing getaway. The greenery, open space, and fresh air made it feel like a true escape from the city....",
  },
  {
    pic: nalavolu,
    name: "Nalavolu Sridhar Reddy",
    star: 5,
    text: "Excellent Maintenance. Enjoyed our staff outing.. Swimg pool was well maintained and we enjoyed the box cricket..And night in the lawn",
  },
  {
    pic: graph,
    name: "Graphy d graphic design",
    star: 5,
    text: "This farmhouse is super well-kept clean, cozy, and clearly looked after with a lot of care. The place has a great vibe, inside and out, and everything feels really comfortable and inviting. Thankyou zuza farmhouse",
  },
  {
    pic: jyothi,
    name: "Jyothirmai Mudumba",
    star: 5,
    text: "Very beautiful and neatly maintained ,food supplied by near by restaurant is also good. It will be great if we have few foldable cots and blankets as we have 50 + people who can't sleep on floor  other wise this is fantastic place to enjoy with family within in budget they had given",
  },
  {
    pic: diyanat,
    name: "Diyanat Kirmani",
    star: 5,
    text: "Zuza farm house is  very good & good maintenance every thing was excellent maintenance like this only",
  },
  {
    pic: mayank,
    name: "Mayank Gupta",
    star: 5,
    text: "This place is highly recommended for family get togethers. USP of this place is the way it has been maintained. Clean lawns, swimming pool, sit out areas, etc made our stay memorable. It would be great if they can provide towels and toiletries too.",
  },
  {
    pic: pramod,
    name: "Pramod Maka",
    star: 5,
    text: "Good place to spend the time with your near and dear.Good management and are responsible for everything what their customers need. I had good experience with them, when I lost my diamond ring in their farm house the management took complete responsibility in search of it and returned it to me in same condition."
  },
];

const Reviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const card = container.querySelector(".review-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // gap compensation
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    let newScroll =
      direction === "left"
        ? container.scrollLeft - cardWidth
        : container.scrollLeft + cardWidth;

    if (newScroll < 0) newScroll = 0;
    if (newScroll > maxScrollLeft) newScroll = maxScrollLeft;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#ABEEFF]/60">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="subheading tracking-wide">
              Reviews
            </h3>
            <h1 className="heading font-semibold text-3xl lg:text-4xl">
              Guest Experiences
            </h1>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#320A6B] hover:bg-[#00CED1] text-white p-3 rounded-full shadow-md transition"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Cards */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 px-2
              snap-x snap-mandatory
              justify-start
            "
          >
            {reviews.map(({ pic, name, text, star }, i) => (
              <div
                key={i}
                className="
                  review-card flex-shrink-0 
                  w-full sm:w-[48%] md:w-[32%] 
                  bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transition duration-300 snap-center border border-[#320A6B]/10
                "
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={pic}
                    alt={name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#ABEEFF]"
                  />
                  <h3 className="heading text-lg font-semibold mb-2">
                    {name}
                  </h3>
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        fill={idx < Math.floor(star) ? "#FFD700" : "none"}
                        stroke="#FFD700"
                      />
                    ))}
                  </div>
                  <p className="body text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#320A6B] hover:bg-[#00CED1] text-white p-3 rounded-full shadow-md transition"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
