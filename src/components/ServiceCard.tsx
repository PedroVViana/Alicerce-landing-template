
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-alicerce-dark text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-alicerce-dark group-hover:text-alicerce-deep transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
