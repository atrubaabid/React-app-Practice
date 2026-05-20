import React from 'react'
import { useState } from 'react';
import { questions } from './Data/faqQuestion';



export default function Faqs() {

    let [currentid, setcurrentid] = useState(questions[0].id)
    let items = questions.map((itemsData, i) => {

        let itemsDetails = {
            itemsData,
            currentid,
            setcurrentid }
        return (
            <Faqitems itemsDetails={itemsDetails} key={i}></Faqitems>
        )
    })



    return (
        <div>

            <h1>FREQUENTLY ASKED QUESTIONS (FAQs)</h1>



            <div className='faqOuter'>

                {items}




            </div>



        </div>
    )
}



function Faqitems({ itemsDetails }) {

    let { itemsData, currentid, setcurrentid } = itemsDetails;

    return (
    <div className='faqitems' >
        <h2 onClick={()=>setcurrentid(itemsData.id)}>{itemsData.Question}</h2>

        <p className={currentid==itemsData.id ? 'activeAns' : ''}>{itemsData.Answer}</p>
    </div >
    )
}
