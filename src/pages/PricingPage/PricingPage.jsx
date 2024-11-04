/* eslint-disable react/prop-types */
import { Plus, Minus, Check, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <h3 className="text-gray-800 font-medium">{title}</h3>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-600" />
        ) : (
          <Plus className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      {isOpen && (
        <div className="py-4 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};

const PricingPage = () => {
  const accordionData = [
    {
      title: "Design should enrich our day",
      content: "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people"
    },
    {
      title: "Bring their individual experience and creative",
      content: "Content for individual experience section"
    },
    {
      title: "Human centred design to challenges",
      content: "Content for human centred design section"
    },
    {
      title: "Design should enrich our day",
      content: "Content for design enrichment section"
    },
    {
      title: "Developing core web applications",
      content: "Content for web applications section"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f3f3] p-8 mt-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-8">BE KIND TO YOUR MIND</h1>
          
          {accordionData.map((item, index) => (
            <AccordionItem 
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Right Column - Pricing Cards */}
        <div className="space-y-6">
          {/* Yearly Plan */}
          <div className="bg-black text-white rounded-2xl p-6 relative">
            <span className="absolute right-4 top-0 bg-[#ff6b4e] text-white text-xs px-1 py-1 rounded">
              BEST VALUE
            </span>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm bg-transparent border border-gray-600 rounded-full px-3 py-1">
                YEARLY
              </span>
              <span className="text-3xl font-bold">${129.99}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-[#ff6b4e]" />
              <span className="font-bold">14 DAYS FREE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Subscription fee is $129.99 USD and automatically renews each year.
            </p>
          </div>

          {/* Monthly Plan */}
          <div className="border-2 border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm bg-transparent border border-gray-300 rounded-full px-3 py-1">
                MONTHLY
              </span>
              <span className="text-3xl font-bold">${12.99}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-[#ff6b4e]" />
              <span className="font-bold">7 DAYS FREE</span>
            </div>
            <p className="text-gray-600 text-sm">
              Subscription fee is $12.99 USD and automatically renews each year.
            </p>
          </div>

          {/* Try It Button */}
          <button className="group relative w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
            <div className="text-center">
              <span className="block text-sm font-medium">Try It</span>
              <span className="block text-sm">Free Now</span>
              <ArrowUpRight className="w-4 h-4 absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;