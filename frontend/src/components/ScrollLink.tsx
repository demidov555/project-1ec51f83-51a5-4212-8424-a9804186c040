import React from 'react';

interface ScrollLinkProps extends React.PropsWithChildren {
  to: string;
  offset?: number;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, offset = 0, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
