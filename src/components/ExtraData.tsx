import { Counter } from './Counter';

export function ExtraData(){
    return (<>
    <section className="extradata">
        <div className="data-container">
            <div className="data-top">
                <div className="text-wrapper">
                    <h2>Get access to remarkable courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus. </p>
                </div>
                <div className="button-wrapper">
                    <button className="more-details">More Details</button>
                    <button className="contact-us">Contact Us</button>
                </div>
            </div>
            <div className="data-bottom">
                <div className="data-card">
                    <div className="icon">
                        <img src="/images/book.svg" alt="" />
                    </div>
                    <div className="text-block">
                        <h3><Counter time={200}/> +</h3>
                        <span>Courses</span>
                    </div>
                </div>
                <div className="data-card">
                    <div className="icon">
                        <img src="/images/group.svg" alt="" />                    
                    </div>
                    <div className="text-block">
                        <h3><Counter time={12300}/>+</h3>
                        <span>Teachers Trained</span>
                    </div>
                </div>
                <div className="data-card">
                    <div className="icon">
                        <img src="/images/clock.svg" alt="" />                    
                    </div>
                    <div className="text-block">
                        <h3><Counter time={1800}/>+</h3>
                        <span>Minutes of Content</span>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    </>)
}