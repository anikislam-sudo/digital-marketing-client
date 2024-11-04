import SponsorDetails from "./SponsorDetails";

const Sponsor = () => {
  const sponsors = [
    {
      id: 1,
      img: "https://i.ibb.co/Bzx8Wv7/1.webp",
    },
    {
      id: 2,
      img: "https://i.ibb.co/9n7tB0k/2.webp",
    },
    {
      id: 3,
      img: "https://i.ibb.co/8bdyL0h/3.webp",
    },
    {
      id: 4,
      img: "https://i.ibb.co/yFStS6F/4.webp",
    },
    {
      id: 5,
      img: "https://i.ibb.co/2jWhZ0c/5.webp",
    },
    {
      id: 6,
      img: "https://i.ibb.co/7XLjBzV/6.webp",
    },
  ];

  return (
    <div className="w-full bg-black pt-14 pb-20">
      <h1 className="lg:text-3xl text-xl text-center text-white font-semibold pb-6">
        We worked with global largest brands
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-12 mt-7 place-items-center w-full">
        {sponsors.map((sponsor) => (
          <SponsorDetails key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
