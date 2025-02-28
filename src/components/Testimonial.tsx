
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  imageSrc?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title, imageSrc }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-alicerce-dark/10 flex items-center justify-center text-alicerce-dark">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <div className="text-xl font-medium text-alicerce-dark">{author}</div>
          <div className="text-gray-600">{title}</div>
        </div>
      </div>
      <div className="relative">
        <svg 
          className="absolute -top-2 -left-2 w-8 h-8 text-alicerce-dark/10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-600 italic pl-4">{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;
