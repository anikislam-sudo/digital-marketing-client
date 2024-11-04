/* eslint-disable react/prop-types */
const SponsorDetails = ({ sponsor }) => {
  // eslint-disable-next-line no-unused-vars
  const { img,id } = sponsor;
  return (
    <div>
      <img className="" src={img} alt="Sponsor logo" />
    </div>
  );
};

export default SponsorDetails;
