import { AlertDialog, AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { Loader } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
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
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
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
          throw new Error(data.error || 'Failed to submit form');
        }
        return;
      }

      setSuccess('Message sent successfully!');
      setContactForm({ name: '', email: '', message: '' });
    } catch (err) {
      setErrors({ general: err.message || 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20 px-4 bg-black ">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white text-center font-bold mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          {success && (
            <AlertDialog className="mb-6 bg-green-500/10 border border-green-500 rounded-lg">
              <AlertDialogDescription className="text-green-700 p-4">{success}</AlertDialogDescription>
            </AlertDialog>
          )}
          {errors.general && (
            <AlertDialog className="mb-6 bg-red-500/10 border border-red-500 rounded-lg">
              <AlertDialogDescription className="text-red-700 p-4">{errors.general}</AlertDialogDescription>
            </AlertDialog>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-4 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-800'} rounded-lg focus:border-white transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <input 
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full p-4 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-lg focus:border-white transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea 
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full p-4 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-800'} rounded-lg focus:border-white transition-colors`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-4 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <Loader className="animate-spin" />
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;