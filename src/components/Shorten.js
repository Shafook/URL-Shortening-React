import React, { useState } from 'react';
import ShortLink from './ShortLink';

const API = 'https://api.shrtco.de/v2/shorten?url=';

const Shorten = () => {
  const [list, setlist] = useState([]);
  const [link, setLink] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

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
      const { original_link, full_short_link, code } = data.result;
      const newItem = {
        original_link,
        short_link: full_short_link,
        id: code,
        clicked: false,
      };
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
          <ul id='shortLinks'>
            {list.map((item, index) => {
              return (
                <ShortLink
                  key={item.id}
                  {...item}
                  list={list}
                  setList={setlist}
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
