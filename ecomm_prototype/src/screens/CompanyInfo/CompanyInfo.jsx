import React from 'react';
import './companyInfo.scss';
import InfoCard from './InfoCard';

const givenData= [
  {id: 1, heading:'About us', content:['Who is Entripy?', 'Our Story', 'Why Choose Entripy?', 'Tour Our Facility', 'Awards & Media', 'Careers', 'Blog']},
  {id: 2, heading:'Customer Support', content:['How To Order', 'Decoration Types', 'Shipping & Returns', 'Servicing Areas', 'Service Levels', 'Resources List', 'FAQs']},
  {id: 3, heading:'Customer Loyalty', content:['Specials', 'Client Testimonials', 'Saving Programs', 'Non-Profit Discounts', 'Entripy Rewards', 'Air Miles']},
  {id: 4, heading:'Entripy Wholesale', content:['Wholesale Request Form', 'Contract Printing']},
  {id: 5, heading:'Entripy For Business', content:['ZipMerch Online Shops', 'Global Sourcing', '<b>Entripy For Schools & Teams</b>', 'Entripy Shops']},
]

function CompanyInfo(props) {
  const infoCards = givenData.map((info, ind) => (
    <InfoCard key={info.id} {...info}/>
  ))
  return (
    <div className='info-container'>
      {/* <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard /> */}
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
        {/* <li><a style={{cursor: 'context-menu'}} href=''>Mon - Fri: 8:30AM - 6PM EST</a></li>
        <li><a style={{cursor: 'context-menu'}} href=''>Sat: 10:00AM - 2PM EST</a></li>
        <li><a style={{cursor: 'context-menu'}} href=''>Sun: Closed</a></li> */}
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
  );
}

export default CompanyInfo;