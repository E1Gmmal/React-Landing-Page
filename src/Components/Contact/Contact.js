import React from 'react';
import {ContactSection , ContactTitle , Span , Form , FormInput , FormText , FormEmail , FormExp , TextArea , InptSubmit } from "./style.js"
import Footer from "./../Footer/Footer";

const Contact = () => {
    return(
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput className="form-input">
                            <FormText type="text" placeholder="Your Name"/>
                            <FormEmail type="email" placeholder="Your Email"/>
                        </FormInput>
                        <FormExp type="text" className="sub" placeholder="Your Subject"/>
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InptSubmit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </ContactSection>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;