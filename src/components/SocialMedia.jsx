import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://twitter.com/login' target="blank"><BsTwitter /></a>  
    </div>
    <div>
    <a href='https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s|c|550525804791|b|facebook%20%27|&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9299538%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jdj5kDXKBPQccWYrhWSCh1uDXZPitTMp-BOftPcjwlHkf-zQjrZv7UaAhkjEALw_wcB' target="blank"><FaFacebookF /></a> 
    </div>
    <div>
    <a href='https://www.instagram.com/nikku_u_2000/' target="blank"><BsInstagram /></a> 
    </div>
  </div>
);

export default SocialMedia;