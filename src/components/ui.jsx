import React from 'react';

// Card component
export const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    {children}
  </div>
);

// Card Header component
export const CardHeader = ({ children }) => (
  <div className="bg-gray-300 px-6 py-4 border-b border-gray-400">
    {children}
  </div>
);

// Card Title component
export const CardTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-900">{children}</h3>
);

// Card Content component
export const CardContent = ({ children }) => (
  <div className="px-6 font-medium py-4 text-gray-700 space-y-2">{children}</div>
);

// Button component
export const Button = ({ children, className, href, ...props }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium text-sm shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 hover:shadow-lg hover:bg-opacity-90 hover:cursor-pointer hover:text-black ${className}`}
    {...props}
  >
    {children}
  </a>
);


// Input component
export const Input = ({ className, ...props }) => (
  <input
    className={`w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-shadow duration-300 hover:shadow-sm ${className}`}
    {...props}
  />
);
