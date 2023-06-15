export function ContactForm(){
    return (
        <>
            <div className="grid-container">
                <div className="column1">
                    <h2>Talk to a Mentor</h2>
                    <p>Ready to take your learning to the next level? Book a FREE session with us today and unlock the potential of personalized education. Contact us now to schedule your appointment !!!</p>
                    <span>Ready to start?</span>
                </div>
                <div className="column2">
                    <div className="form-block">
                        <form action="/">
                            <div className="name">
                                <div className="col1 col">
                                    <label htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input type="text" name="firstName" placeholder="eg. John"/>
                                </div>

                                <div className="col2 col">
                                    <label htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input type="text" name="lastName" placeholder="eg. Smith"/>
                                </div>
                            </div>
                            <div className="email">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" placeholder="eg. john.smith@example.com"/>
                            </div>
                            <div className="send-acknowledgement">
                                <button type="submit">Submit the Message</button>
                                <p>By clicking the submit button, I consent to the Enark Uplift contacting me via email and/or phone to share exclusive educational opportunities and updates. I acknowledge that any information provided in this form is subject to the  Enark Uplift's Privacy Policy.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}