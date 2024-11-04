// src/pages/Service/ServiceDetails.jsx

import { FlaskConical, Monitor, Users, Workflow } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', image_url: '' });

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-primary mb-4" />,
      title: "Planning and Sketching",
      description: "Modern and unique design practically parts of web. It has cut meeting the huge expectations",
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "Team Working",
      description: "Modern and unique design practically parts of web. It has cut meeting the huge expectations",
    },
    {
      icon: <Workflow className="w-12 h-12 text-primary mb-4" />,
      title: "Flowchart and Wireframe",
      description: "Modern and unique design practically parts of web. It has cut meeting the huge expectations",
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-primary mb-4" />,
      title: "User Experience Testing",
      description: "Modern and unique design practically parts of web. It has cut meeting the huge expectations",
    },
  ];

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProject(data);
        // Set formData to the project details for editing
        setFormData({ title: data.title, description: data.description, image_url: data.image_url });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update project");
      }
      const updatedProject = await response.json();
      setProject(updatedProject);
      setIsEditing(false); // Exit editing mode
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-white py-6 px-4">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start gap-12 py-16">
        {/* Left Column */}
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <img className="w-full h-auto rounded-lg shadow-md" src={project.image_url} alt={project.title} />
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3">
          <p className="text-lg text-gray-600 mb-4">
            Every decision we make needs to answer the question: which option how will this benefit our partners and how? We work to develop solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We like to be different, in the same way that our partners are different. Every project is an opportunity to explore results that will help you.
          </p>
          <button onClick={handleEditClick} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Edit Service
          </button>
        </div>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 p-6 mb-12 rounded-lg shadow-md">
          <h2 className="text-2xl text-center font-bold mb-4">Edit Service</h2>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="image_url">Image URL</label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <button type="submit" className="p-2 w-full bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
            Save Changes
          </button>
        </form>
      )}

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
