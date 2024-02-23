import React from 'react';
import { Link } from 'react-router-dom';

interface MyLinkProps {
  to: string;
  content: string;
}

const componenteLink: React.FC<MyLinkProps>  = ({ to, content }) => {
  return (
    <Link
      to={to}
      className="px-2 mx-2 hover:bg-white transition duration-[400ms] ease-in-out hover:text-royal-blue-500 rounded-md"
    >
      {content}
    </Link>
  );
};

export default componenteLink;