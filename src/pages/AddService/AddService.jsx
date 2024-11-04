import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const AddService = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          // Convert validation errors array to object for easier access
          const errorObj = {};
          data.errors.forEach(error => {
            errorObj[error.path] = error.msg;
          });
          setErrors(errorObj);
        } else {
          throw new Error(data.error || 'Something went wrong');
        }
        return;
      }

      setSuccess('Service added successfully!');
      setFormData({
        title: '',
        description: '',
        image_url: ''
      });
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-14 p-6 py-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-2 mb-6">
            <PlusCircle className="w-6 h-6 text-primary" />
            <h2 className="card-title text-2xl">Add New Service</h2>
          </div>
          
          {errors.general && (
            <div className="alert alert-error mb-4">
              <span>{errors.general}</span>
            </div>
          )}
          
          {success && (
            <div className="alert alert-success mb-4">
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter service title"
                className={`input input-bordered w-full ${errors.title ? 'input-error' : ''}`}
              />
              {errors.title && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.title}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter service description"
                className={`textarea textarea-bordered h-24 ${errors.description ? 'textarea-error' : ''}`}
              />
              {errors.description && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.description}</span>
                </label>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                placeholder="Enter image URL"
                className={`input input-bordered w-full ${errors.image_url ? 'input-error' : ''}`}
              />
              {errors.image_url && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.image_url}</span>
                </label>
              )}
            </div>

            {formData.image_url && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Preview</span>
                </label>
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={formData.image_url}
                    alt="Service preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/300';
                      setErrors(prev => ({
                        ...prev,
                        image_url: 'Invalid image URL. Please check the URL and try again.'
                      }));
                    }}
                  />
                </div>
              </div>
            )}

            <div className="form-control mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Adding Service...' : 'Add Service'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;