import React, { useEffect, useRef, useState } from 'react';

const ShortLink = ({
  original_link,
  short_link,
  index,
  setClickedIndex,
  btnContainer,
  clicked,
  addButtonElems,
}) => {
  const [click, setClick] = useState(false);
  const button = useRef(null);
  //   let click = false;

  const handleClick = (e) => {
    // setClickedIndex(index);
    // setClick(true);
    // btnContainer.current.querySelectorAll('.copy-button').forEach((btn) => {
    //   btn.style.backgroundColor = 'hsl(180, 66%, 49%)';
    //   btn.textContent = 'Copy';
    // });
    // console.log(clicked, index);
    // e.target.textContent = 'Copied!';
    // e.target.style.backgroundColor = 'hsl(258, 27%, 26%)';
  };

  useEffect(() => {
    // if (button) {
    //   console.log(clicked, index);
    // }
    // console.log(button);
    // if (button) {
    //   button.current.textContent = 'Copied!';
    //   button.current.style.backgroundColor = 'hsl(180, 66%, 49%)';
    // }
    // if (click) {
    //   button.current.textContent = 'Copied!';
    //   button.current.style.backgroundColor = 'hsl(258, 27%, 26%)';
    // }
    // console.log(click);

    addButtonElems(button.current);
  }, []);

  return (
    <li className='shorten__link'>
      <div className='original-link'>{original_link}</div>
      <div className='new-link'>
        <span className='short-link'>{short_link}</span>
        <button
          className='shorten-button copy-button'
          ref={button}
          onClick={handleClick}
        >
          Copy
        </button>
      </div>
    </li>
  );
};

export default ShortLink;
