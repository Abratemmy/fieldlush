import React, {useState} from 'react';
import Background from '../../components/otherpage/background';
import "./faq.css";
import imgdesign from "../../assets/leave.png"

function Faq(index) {
    const [faqs,setfaqs] = useState([

        {
            question:'Tell me more about Fieldlush Limited?',
            answer:'Fieldlush Limited is a commercial Agribusiness company in Nigeria. We are into agri-investment, contract farming and agro-dealership.',
            open:false
        },
        {
            question:"Is Fieldlush Limited legit?",
            answer:'Fieldlush Limited is duly registered with the Corporate Affairs(CAC) Commission with registration number RC1953014. ',
            open:false
        },

        {
            question:" Where Is Your Office Located?",
            answer:"No 125, ile-anu community off Iworoko road Adebayo Ado-Ekiti.",
            open:false
        },

        {
            question:" Your Contact Details?",
            answer:"+2348068005485, +2349074474922, +2347057432282, fieldlushlimited@gmail.com ",
            open:false
        },
        {
            question:"What's are your investment duration?",
            answer:"Our investment durations varies; it depends on the crop you desire to invest in.",
            open:false
        },
        {
            question:"What are your return on investment?",
            answer:"Our return on investment ranges from 20-80%.",
            open:false
        },
        {
            question:"Is your investment secure?",
            answer:"All our investment are back by a legally tenable investment agreement and All our farms are Insured against natural disasters and pest.",
            open:false
        }    
   

    ]);


    const toggleFAQ = (index) => {
        setfaqs (faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            }
            else{
                faq.open =false;
            }

            return faq;
        }))
    }
  return (
    <div className=''>
        <Background title="Question & Answer" subtitle="FAQ" />

        <div className='faq-container'>

            <div className="page-leave-design">
                <img src={imgdesign} alt="" />
            </div>
            <div className="container">
                <div className="faq-page">
                    <div className="page-title">Frequently asked questions</div>
                </div>


                <div className="faqs" >
                    {faqs.map((faq, i) =>(
                        <div className="faq">
                        <div className={faq.open ? 'open' :'' } key={index} onClick = {() => toggleFAQ(i)}>
                            <div className="faq-question" >
                                {faq.question}
                            </div>

                            <div className="faq-answer">
                                {faq.answer}
                            <div className="remaining-answer" >

                                <div style={{marginTop:'20px'}}>{faq.answer1}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer2}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer3}</div>
                                <div style={{marginTop:'20px'}}>{faq.answer4}</div>
                            </div>
                        </div>

                        </div>
                        
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq