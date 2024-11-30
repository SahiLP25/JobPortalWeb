import React from 'react';
import { Button } from '../components/ui'


const Header = () => {
  return (
    <header className="bg-blue-900 py-6 px-6 text-white flex items-center justify-between">
      <a href="/" className="text-2xl font-bold">JobRinger</a>
      <nav >
        <ul className="flex space-x-4">
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/active-employers">Active Employers</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/jobseeker-login">Jobseeker Login</a></li>
          <li>
            <Button
              className="bg-yellow-500 text-blue-500 px-4 py-2 rounded-md"
              href="/employer-login"
            >
              Employer Login
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;