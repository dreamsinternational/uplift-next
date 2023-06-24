export function ContactForm(){
    return (
        <>
           <section className="contact-form">
                <div className="container">
                    <div className="form-left">
                        <h2>Talk to a Mentor</h2>
                        <p>Ready to take your learning to the next level? Book a <span>FREE</span> session with us today and unlock the potential of personalized education. Contact us now to schedule your appointment !!!</p>
                        <span>Ready to Start?</span>
                    </div>
                    <div className="form-right">
                        <div className="names-group">
                            <div className="first-name">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" placeholder="e.g. John"/>
                            </div>
                            <div className="last-name">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" placeholder="e.g. Smith"/>
                            </div>
                        </div>

                        <div className="email-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="e.g. john.smith@example.com" />
                        </div>

                        <div className="submit-btn-group">
                            <button type="submit">Submit The Message</button>
                            <p>By clicking the submit button, I consent to the Enark Uplift contacting me via email and/or phone to share exclusive educational opportunities and updates. I acknowledge that any information provided in this form is subject to the Enark Uplift&apos;s Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}