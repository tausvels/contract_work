import React from 'react';
import './companyInfo.scss';
import InfoCard from './InfoCard';

const givenData= [
  {id: 1, heading:'About us', content:['Who is Entripy?', 'Our Story', 'Why Choose Entripy?', 'Tour Our Facility', 'Awards & Media', 'Careers', 'Blog']},
  {id: 2, heading:'Customer Support', content:['How To Order', 'Decoration Types', 'Shipping & Returns', 'Servicing Areas', 'Service Levels', 'Resources List', 'FAQs']},
  {id: 3, heading:'Customer Loyalty', content:['Specials', 'Client Testimonials', 'Saving Programs', 'Non-Profit Discounts', 'Entripy Rewards', 'Air Miles']},
  {id: 4, heading:'Entripy Wholesale', content:['Wholesale Request Form', 'Contract Printing']},
  {id: 5, heading:'Entripy For Business', content:['ZipMerch Online Shops', 'Global Sourcing', '<b>Entripy For Schools & Teams', 'Entripy Shops']},
]

function CompanyInfo(props) {
  const infoCards = givenData.map((info, ind) => (
    <InfoCard key={info.id} {...info}/>
  ))
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className='info-container'>
        {infoCards}
        <div className='info-card-container special-contact no-cursor' >
        <h3 className='info-card-heading'>CONTACT US</h3>
        <ul>
          <li><a  style={{cursor: 'context-menu'}} href=''>Phone: (905) 844-1291</a></li>
          <li><a style={{cursor: 'context-menu'}} href=''>Toronto: (416) 777-1291</a></li>
          <li><a style={{cursor: 'context-menu'}} href=''>Toll Free: 1-866-368-7479</a></li>
          <br></br>
          <li><a style={{cursor: 'context-menu'}} href=''><b>OPERATING HOURS</b></a></li>
          <li style={{marginBottom: 0}}><a style={{cursor: 'context-menu'}} href=''><b>OFFICE HOURS FOR DOCKSIDE PICK-UPS</b></a></li>
          <li style={{marginTop: 0}}><a style={{cursor: 'context-menu', color: 'red'}} href=''><b>PICKUP AFTER ORDER COMPLETE EMAIL IS RECEIVED</b></a></li>
          <br></br>
          <li style={{margin: 0}}><a style={{cursor: 'context-menu'}} href=''>Mon - Fri: 9:00AM - 4:00PM EST</a></li>
          <br></br>
          <li><a style={{cursor: 'context-menu'}} href=''><b>EMAIL, PHONE, LIVE CHAT SUPPORT</b></a></li>
          <br></br>
          <table>
            <tbody>
              <tr className='contact-table-row'>
                <td>Mon - Fri:</td>
                <td>8:30AM - 6PM</td>
                <td>EST</td>
              </tr>
              <tr className='contact-table-row'>
                <td>Sat:</td>
                <td>10:00AM - 2PM</td>
                <td>EST</td>
              </tr>
              <tr className='contact-table-row'>
                <td>Sun:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </div>
      <div className='info-container-footer'>
        <div className="official-partners">
          <h3>Official Partners</h3>
          <img src='https://www.entripy.com/images/TopicPagePics/Official-Partners-MLSE-2018.png' />
        </div>
        <div className="payment-methods">
          <h3>PAYMENT METHODS</h3>
          <ul>
            <li><a href=''><img src='https://www.entripy.com/Themes/Entripy/Content/17/images/pay-ico1.png' /></a></li>
            <li><a href=''><img src='https://www.entripy.com/Themes/Entripy/Content/17/images/pay-ico2.png' /></a></li>
            <li><a href=''><img src='https://www.entripy.com/Themes/Entripy/Content/17/images/pay-ico4.png' /></a></li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>SUBSCRIBE TO OUR NEWSLATER</h3>
          <input type='text' />
          <button>SUBSCRIBE</button>
        </div>
        <div className="social-media">
          <h3>LET'S GET SOCIAL</h3>
          <ul>
            <li><a href=''><i className='fa fa-facebook'></i></a></li>
            <li><a href=''><i className='fa fa-twitter'></i></a></li>
            <li><a href=''><i className='fa fa-instagram'></i></a></li>
            <li><a href=''><i className='fa fa-linkedin'></i></a></li>
            <li><a href=''><i className='fa fa-youtube'></i></a></li>
            <li><a href=''><i className='fa fa-pinterest'></i></a></li>
          </ul>
        </div>
        <div style={{flexGrow: 1}}></div>
      </div>
      <div className='footer-copyright'>
        <p>Copyright © 2019 Ink Thread & Tech Corp. All rights reserved.  Proudly Canadian.</p>
        <a href=''>Privacy Policy</a>
        <a href=''>Terms & Conditions</a>
        <a href=''>Accessibility Standards</a>
      </div>
    </div>
  );
}

export default CompanyInfo;