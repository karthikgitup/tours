import React from 'react';
import './Place.css';
import { homePagedatas } from '../../datas';
import {Link as ScrollLink } from 'react-scroll';

const Place = () => {
    var value=0;
  return (
    <div>
      <h2 className='tophead firsthead'>Tourist Places To TamilNadu</h2>
      <h2 className='tophead'>Here Are The Top Places To Visit In TamilNadu In 2023</h2>
      <div className='navitems  '>
        <div className='navitem-col1'>
        <ScrollLink to='Chennai' className='col-2' smooth={true} duration={500}>Chennai</ScrollLink>
        <ScrollLink to="Kodaikanal" className='col-2' smooth={true} duration={500}>Kodaikanal</ScrollLink>
        <ScrollLink to="Madurai" className='col-2' smooth={true} duration={500}>Madurai</ScrollLink>
        <ScrollLink to="Kumbakonam" className='col-2' smooth={true} duration={500}>Kumbakonam</ScrollLink>
        <ScrollLink to="Theni" className='col-2'smooth={true} duration={500}>Theni</ScrollLink>
        </div>
        <div className='navitem-col1'>
        <ScrollLink to="Rameshwaram" className='col-2'smooth={true} duration={500}>Rameshwaram</ScrollLink>
        <ScrollLink to="Ooty" className='col-2'smooth={true} duration={500}>Ooty</ScrollLink>
        <ScrollLink to="Kanyakumari" className='col-2'smooth={true} duration={500}>Kanyakumari</ScrollLink>
        <ScrollLink to="Yercaud" className='col-2'smooth={true} duration={500}>Yercaud</ScrollLink>
        <ScrollLink to="Hogenakkal" className='col-2'smooth={true} duration={500}>Hogenakkal</ScrollLink>
        </div>

      </div>
        {homePagedatas.map((val)=>{
           value++;
           const formattedValue = value > 9 ? value : `0${value}`;

            return (
                <div className="place" id={val.nativename}>
                <div className="place-container">
                 <h2 className='nativename'>{`${formattedValue}.${val.nativename}`}</h2>
             <div className='bannerdata-container'>
                    <div className='container-left'>
                    <img src={require(`../../${val.bannerImg}`)} alt="Chennai" />
        
                    </div>
                    <div className='container-right '>
                        <h4 className='text-body'>{val.bannerdesctitle}</h4>
                        <p className='text-dark'>{val.bannerdesc1}</p>
                        <p className='text-dark'>{val.bannerdesc2}</p>


                    </div>
                    </div>
                    <h3 className='visit-title'>{val.title}</h3>
                    <div className="cardss row g-1 "style={{ columnGap: "20px" }}>
                    
  <div className="card col mb-3" style={{width: "16rem"}}>
  <img src={require(`../../${val.visitedplce1.imgsrc}`)} className="card-img-top col-img " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.visitedplce1.desctitle}</h5>
    <p className="card-text carddesc">{val.visitedplce1.desc}</p>
    <a href="#" className="btn btn-primary readbtn">Read More</a>
  </div>
</div>

  <div className="card col mb-3" style={{width: "16rem"}}>
  <img src={require(`../../${val.visitedplce2.imgsrc}`)} className="card-img-top col-img " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.visitedplce2.desctitle}</h5>
    <p className="card-text carddesc">{val.visitedplce2.desc}</p>
    <a href="#" className="btn btn-primary readbtn">Read More</a>
  </div>
</div>

<div className="card col mb-3" style={{width: "16rem"}}>
  <img src={require(`../../${val.visitedplce3.imgsrc}`)} className="card-img-top col-img " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.visitedplce3.desctitle}</h5>
    <p className="card-text carddesc">{val.visitedplce3.desc}</p>
    <a href="#" className="btn btn-primary readbtn">Read More</a>
  </div>
</div>

<div className="card col mb-3" style={{width: "16rem"}}>
  <img src={require(`../../${val.visitedplce4.imgsrc}`)} className="card-img-top col-img " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.visitedplce4.desctitle}</h5>
    <p className="card-text carddesc">{val.visitedplce4.desc}</p>
    <a href="#" className="btn btn-primary readbtn">Read More</a>
  </div>
</div>     


                    </div>

        
                </div>
        
            </div>
            );
        })}

    


    </div>
  )
}

export default Place;