
import '../style.css';
import React, { useRef , useState} from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    const [user, setUser] = useState(
        {
            user_name: "",
            message: ""
        }
    );
        let Name, value;
    const getUserData = (e)=>{
        Name = e.target.name;
        value = e.target.value;
        
        setUser({[Name]: value });
    }
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_79qjux7', 'template_og9l2s6', form.current, 'user_Ty8cXymU78D5nJsf7dcUL')
            .then((result) => {
                alert("Message Has Been Sent");
                setUser({
                    user_name: "",
                    message: ""
                })
            }, (error) => {
                console.log(error.text);
            });
    };


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
                            <form ref={form} onSubmit={sendEmail} >
                                <h2> Send Message </h2>
                                <div className="InputBox">
                                    <input type="email" name="user_name" value = {user.user_name} required="required"  onChange={getUserData} />
                                    <span> Email </span>
                                </div>
                                <div className="InputBox">
                                    <textarea name="message"  required="textarea" value={user.message} onChange={getUserData} ></textarea>
                                    <span> Type Your  Message. . . . </span>
                                </div>
                                <div className="InputBox">
                                    <input type="submit" value="Send" />
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