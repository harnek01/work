import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import './stylingSheet.css';
import React from 'react';

export default function Frame(){
    return(
        <div className='frame1 investContainer' style={{flexDirection:'column', justifyContent: 'center', background: 'linear-gradient(180deg, #F6F6F6 0%, #FFFFFF 23.92%)'}}>
        <div className='colFlex'>
        <Heading content="Start Investing" />
        <Paragraph content="Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence." />
        <Button content="Invest Now" />
        </div>
        </div>
    );
}