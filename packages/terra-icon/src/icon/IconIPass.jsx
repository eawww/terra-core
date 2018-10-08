/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle cx="19.1" cy="8.7" r="8.7" ></circle><path d="M34.2 31.9c-.4-6.9-6-12.3-13-12.3H17c-7.2 0-13 5.8-13 13V37h20.2c2.3-2.8 5.8-4.7 10-5.1z" ></path><path d="M48 36.3l-6.8-7.1V34h-4.5C28.5 34 24 39.1 24 45.2v2.4c1-5 4.4-9.1 9.7-9.1h7.5v4.7l6.8-6.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconIPass";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
