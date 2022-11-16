import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.youtube.com/' target="blank"><BsTwitter /></a>  
    </div>
    <div>
    <a href='https://www.youtube.com/' target="blank"><FaFacebookF /></a> 
    </div>
    <div>
    <a href='https://www.youtube.com/' target="blank"><BsInstagram /></a> 
    </div>
  </div>
);

export default SocialMedia;