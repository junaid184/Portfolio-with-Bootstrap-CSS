import '../style.css'
const Contact = () => {
    return (
        <>
            <header className="tm-site-header-box tm-bg-dark">
                <h1 className="tm-site-title">JUNAID SHAKEEL AHMED</h1>
                <p className="mb-0 tm-site-subtitle">A web developer.</p>
            </header>
            <div class="tm-content">
                <section className="tm-section tm-section-0" style={{ display: 'block' }}>
                    <h2 className="tm-section-title mb-3 font-weight-bold">
                        CONTACT
                    </h2>
                    <div className="tm-textbox tm-bg-dark">
                        <div class="ContactForm">
                            <form action="">
                                <h2> Send Message </h2>
                                <div className="InputBox">
                                    <input type="text" name="" required="required" />
                                    <span> Full Name </span>
                                </div>
                                <div className="InputBox">
                                    <input type="text" name="" required="required" />
                                    <span> Email </span>
                                </div>
                                <div className="InputBox">
                                    <textarea name="textarea" required="textarea"></textarea>
                                    <span> Type Your  Message. . . . </span>
                                </div>
                                <div className="InputBox">
                                    <input type="submit" name="" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact;