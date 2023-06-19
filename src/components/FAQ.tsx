'use client'

import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function FAQ() {
  return (<>

    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-top">
          <p>A teacher training initiative</p>
          <h3>Frequently asked questions</h3>
        </div>
        <div className="faq-bottom">
          <Accordion className='accordian'>
            <AccordionItem header={
                <div>
                  <p className={'faq-title'}>What is Lorem Ipsum?</p>
                </div>
              }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>
            <AccordionItem header={
                <div>
                  <p className={'faq-title'}>What is your cancellation policy?</p>
                </div>
              }>
            Sorry but we do not offer any cancellation or refund under any circumstances.
            </AccordionItem>
            <AccordionItem header={
                <div>
                  <p className={'faq-title'}>Is there a discount for buying courses as a bundle?</p>
                </div>
              }>
            Not yet but we will be adding them soon. Stay tuned.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </>);

  
}