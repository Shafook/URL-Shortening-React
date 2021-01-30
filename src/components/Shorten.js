import React, { useState, useEffect, useRef } from 'react';
import ShortLink from './ShortLink';

const API = 'https://api.shrtco.de/v2/shorten?url=';

const Shorten = () => {
  const [list, setlist] = useState([]);
  const [link, setLink] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const [buttonElems, setButtonElems] = useState([]);

  const btnContainer = useRef(null);

  useEffect(() => {
    buttonElems.forEach((elem) => {
      elem.style.color = 'red';
    });
  }, [list]);

  useEffect(() => {
    // btnContainer.current.querySelectorAll('.copy-button').forEach((btn) => {
    //   btn.style.backgroundColor = 'hsl(180, 66%, 49%)';
    //   btn.textContent = 'Copy';
    // });
    console.log(buttonElems);
  }, [buttonElems]);

  const addButtonElems = (elem) => {
    setButtonElems([...buttonElems, elem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      setIsValid(true);
      fetchLink(API + link);
    }
  };

  const fetchLink = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.ok) {
      const { original_link, full_short_link } = data.result;
      const newItem = { original_link, short_link: full_short_link };
      setlist([newItem, ...list]);
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setLoading(false);
  };

  return (
    <section className='shorten'>
      <ShortenForm
        link={link}
        setLink={setLink}
        handleSubmit={handleSubmit}
        isValid={isValid}
        loading={loading}
      />

      <div className='container container--pall'>
        <div className='shorten__list'>
          <ul ref={btnContainer} id='shortLinks'>
            {list.map((item, index) => {
              let clicked = false;
              if (index === clickedIndex + 1) {
                clicked = true;
              }
              return (
                <ShortLink
                  key={index}
                  {...item}
                  index={index}
                  setClickedIndex={setClickedIndex}
                  btnContainer={btnContainer}
                  clicked={clicked}
                  addButtonElems={addButtonElems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ShortenForm = ({ link, setLink, handleSubmit, isValid, loading }) => {
  return (
    <div className='shorten__form'>
      <form
        action='submit'
        id='formShorten'
        className='shorten__flex'
        onSubmit={handleSubmit}
      >
        <div className='shorten__input'>
          <input
            type='text'
            placeholder='Shorten a link here..'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          {!isValid && (
            <div id='errorMsg' className='message'>
              Please add a link
            </div>
          )}
        </div>
        <button
          type='submit'
          id='btnShorten'
          className={`shorten-button ${loading && 'loading'}`}
        >
          <div className='load'></div>
          <span>Shorten It!</span>
        </button>
      </form>
    </div>
  );
};

export default Shorten;
