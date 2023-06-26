"use client";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "../app/styles.module.css";

export default function FAQ() {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img
            className={styles.chevron}
            src="/images/chevronDown.svg"
            alt="Chevron Down"
          />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  return (
    <>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <div className={styles.faqTop}>
          <p>A teacher training initiative</p>
          <h3>Frequently asked questions</h3>
        </div>
        <div className={styles.faqBottom}>
          <div className={styles.faqLeft}>
            <Accordion transition transitionTimeout={250}>
              <AccordionItem header="What is Lorem Ipsum?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionItem>
              <AccordionItem header="Where does it come from?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae.
              </AccordionItem>
              <AccordionItem header="Why do we use it?">
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles.faqRight}>
            <Accordion transition transitionTimeout={250}>
              <AccordionItem header="What is Lorem Ipsum?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionItem>
              <AccordionItem header="Where does it come from?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae.
              </AccordionItem>
              <AccordionItem header="Why do we use it?">
                Suspendisse massa risus, pretium id interdum in, dictum sit amet
                ante. Fusce vulputate purus sed tempus feugiat.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* <div className="faq-section">
      <div className="faq-container">
        <div className="faq-top">
          <p>A teacher training initiative</p>
          <h3>Frequently asked questions</h3>
        </div>
        <div className="faq-bottom">
          <div className="faq-left">
            <Accordion className='accordian'>
              <AccordionItem header={
                  <div>
                    <p className={'faq-title'}>What is Lorem Ipsum?</p>
                  </div>
                }>
                <div className="faq-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
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

          <div className="faq-right">
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
    </div> */}
    </>
  );
}
