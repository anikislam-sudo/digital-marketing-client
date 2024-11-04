/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChevronRight, Trash2 } from "lucide-react"; // Import the Trash2 icon
import { Link } from "react-router-dom";

const ServiceCard = ({ service, onDelete }) => { // Add onDelete as a prop
  const { id, title, description, image_url } = service;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setMousePosition({ x: offsetX, y: offsetY });
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete the project");
        }

        // Call onDelete to remove the card from the UI
        onDelete(id); 
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  return (
    <div
      key={id}
      className="max-w-2xl mx-auto border-t border-gray-200 pt-8 px-4 md:px-6 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Stack elements in a column */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        
        {/* Service Information */}
        <div className="flex flex-col">
          <p className="text-gray-600 mb-2">{description}</p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            <li>Logo Design</li>
            <li>Advertisement</li>
            <li>Promotion</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
        <button onClick={handleDelete} className="btn btn-circle btn-outline">
            <Trash2 className="text-red-500 h-6 w-6" />
          </button>
          <Link to={`/api/projects/${id}`}>
            <button className="btn btn-circle btn-outline">
              <ChevronRight className=" text-blue-500 h-6 w-6" />
            </button>
          </Link>
         
        </div>
      </div>

      {/* Image Overlay on Hover */}
      {isHovered && (
        <img
          src={image_url}
          alt={title}
          style={{
            position: "absolute",
            top: mousePosition.y - 50, // Center the image vertically near the cursor
            left: mousePosition.x - 50, // Center the image horizontally near the cursor
            width: "200px", // Adjust image size as needed
            height: "auto",
            pointerEvents: "none",
            transition: "transform 0.10s ease",
          }}
          className="z-10 opacity-90"
        />
      )}
    </div>
  );
};

export default ServiceCard;
