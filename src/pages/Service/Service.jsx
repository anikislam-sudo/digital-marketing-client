import { useEffect, useState } from "react";

import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch services. Please try again later.');
        setLoading(false);
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[400px]">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    );
  }
  const handleDelete = (id) => {
    // Update the state by filtering out the deleted service
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };
  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <p className="text-lg uppercase text-gray-600 mb-2">SERVICES</p>
        <h1 className="text-4xl font-bold mb-6">OUR MARKETING SERVICES</h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consumers today rely heavily on digital means to research products. According to Nielsen, 92% of consumers say they use Google to research products before buying.
        </p>
      </div>
      {/* Services List */}
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        {services.map((service) => (
          
          <ServiceCard key={service.id} service={service} onDelete={handleDelete} ></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
