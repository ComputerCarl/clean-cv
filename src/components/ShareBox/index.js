import React, { useState } from 'react';
import styled from 'styled-components';

// https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs
var cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key.replace(/\.\//g, '')] = r(key)));
}
importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const StyledBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: black;
  text-align: center;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 99;
  /* background-color: cornsilk; */
  .share-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px
  }
  .share-label > span {
    padding: 5px;
    border-radius: 2px;
  }
  .share-items {
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-out;
    justify-content: space-between;
    background-color: rgba(0,0,0,.05);
  }
  .share-items:hover {
    background-color: powderblue;
  }
  .share-items > a > img {
    padding: 3px;
    opacity: 0.5;
    transition: all 0.25s ease-out;
  }
  .share-items > a >  img:hover{
    opacity: 1; 
    transform: scale(1.2, 1.2);
    transform: rotate(${Math.random() * 15}deg);
  }
`

export default () => {
  const shareItems = [
    // { icon: 'fa-download.svg', label: 'Download Resume', link: '/carl-mann-resume.pdf', newWindow: true },
    { icon: cache['fa-facebook.svg'], label: 'Share on Facebook', link: 'https://www.facebook.com/sharer/sharer.php?u=https://computercarl.com', newWindow: true },
    // { icon: 'fa-instagram.svg', label: 'Share on Instagram', link: '', newWindow: true },
    // { icon: 'fa-pinterest.svg', label: 'Share on Pinterest', link: 'https://pinterest.com/pin/create/button/?url=&media=https://computercarl.com&description=', newWindow: true },
    { icon: cache['fa-twitter.svg'], label: 'Share on Twitter', link: 'https://twitter.com/home?status=https://computercarl.com', newWindow: true },
    { icon: cache['fa-google.svg'], label: 'Share on Google', link: 'https://plus.google.com/share?url=https://computercarl.com', newWindow: true },
  ];
  const [shareLabel, setLabel] = useState(null);
  return (
    <StyledBox>

      <div className="share-items">
        {shareItems.map((item, i) => (
          <a href={item.link} key={item.label} target={item.newWindow ? '_new' : null}>
            <img
              key={i}
              src={item.icon.default}
              onMouseEnter={() => setLabel(item.label)}
              onMouseLeave={() => setLabel(null)}
            />
          </a>
        )
        )}
      </div>
      {shareLabel &&
        <div className="share-label">
          <span>
            {shareLabel}
          </span>
        </div>
      }
    </StyledBox>
  )
}