import React, { useEffect, useRef, useState } from 'react';

const ShortLink = ({ id, original_link, short_link, list, setList }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const isClicked = list.some((item) => {
      if (id === item.id) {
        return item.clicked === true;
      }
    });

    if (isClicked) {
      buttonRef.current.style.backgroundColor = 'hsl(258, 27%, 26%)';
      buttonRef.current.textContent = 'Copied!';
    } else {
      buttonRef.current.style.backgroundColor = 'hsl(180, 66%, 49%)';
      buttonRef.current.textContent = 'Copy';
    }
  }, [list]);

  const handleClick = (e) => {
    setList(() =>
      list.map((item) => {
        return item.id === id
          ? { ...item, clicked: true }
          : { ...item, clicked: false };
      })
    );

    navigator.clipboard.writeText(short_link);
  };

  return (
    <li className='shorten__link'>
      <div className='original-link'>{original_link}</div>
      <div className='new-link'>
        <span className='short-link'>{short_link}</span>
        <button
          ref={buttonRef}
          className='shorten-button copy-button'
          onClick={handleClick}
        >
          Copy
        </button>
      </div>
    </li>
  );
};

export default ShortLink;
