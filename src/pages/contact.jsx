import React from 'react';
import './contact.scss';
import { Link, Paper } from '@mui/material';
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Tick from '../assets/images/tick.png';
import Call from '../assets/images/call.png';
import Email from '../assets/images/email.png';
import Loca from '../assets/images/location.png';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const validateName = (name) => {
        const newErrors = { ...formErrors };

        if (name.trim() === "") {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            newErrors.name = "Enter a valid name";
        } else {
            newErrors.name = "";
        }

        setFormErrors(newErrors);
    };
    const validateEmail = (email) => {
        const newErrors = { ...formErrors };

        if (email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Enter a valid email address";
        } else {
            newErrors.email = "";
        }

        setFormErrors(newErrors);
    };
    const validatePhoneNumber = (phone) => {
        const newErrors = { ...formErrors };

        if (phone.trim() === "") {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        } else {
            newErrors.phone = "";
        }

        setFormErrors(newErrors);
    };
    const validateMessage = (message) => {
        const newErrors = { ...formErrors };

        if (message.trim() === "") {
            newErrors.message = "Message is required";
        } else {
            newErrors.message = "";
        }

        setFormErrors(newErrors);
    };


    const validateForm = () => {
        const newErrors = { ...formErrors };

        // Validation for Name
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Enter a valid name";
        } else {
            newErrors.name = "";
        }

        // Validation for Email
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        } else {
            newErrors.email = "";
        }

        // Validation for Phone
        if (formData.phone.trim() === "") {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        } else {
            newErrors.phone = "";
        }

        // Validation for Message
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        } else {
            newErrors.message = "";
        }

        setFormErrors(newErrors);

        // Check if there are no errors in the newErrors object
        const isValid = Object.values(newErrors).every((error) => error === "");

        return isValid;
    };
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData);
            setIsLoading(true);

            // Simulate a delay (5 seconds) for the loading spinner
            setTimeout(() => {
                // After 5 seconds, hide the loading spinner and show the "Thank you" message
                setIsLoading(false);
                setIsSubmitted(true);
            }, 5000);
        }
    };
    useEffect(() => {
        if (isSubmitted) {
            // Scroll to the "Thank you" message after submission
            const form = document.getElementById('submitted');
            form.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSubmitted]);
    return (
        <div className="message_container">
            <div className='left_container'>
                <div className='phone'>
                    <div className='phone_header'>
                        <img src={Call} alt='phone' />
                    </div>
                    <div className='phone_details'>
                        <Typography>Phone: +91 9483927749<br />Mobile: +91 6362180682</Typography>
                    </div>
                </div>
                <div className='email'>
                    <div className='email_header' >
                        <img src={Email} alt='email' />
                    </div>
                    <div className='email_details'>
                        <Typography>info.swasthioil@gmail.com</Typography>
                    </div>

                </div>
                <div className='address'>
                    <div className='address_header'>
                        <img src={Loca} alt='address' />
                    </div>
                    <div className='address_details'>
                        <Typography>Sri Janardhana Oil Mill, 2-54A, Sarvamangala, Pangala, Udupi district, Karnataka - 576122</Typography>
                    </div>

                </div>
            </div>
            <div className='right_container'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 728,
                        },
                    }}
                >
                    <Paper elevation={10} >
                        {isSubmitted ? ( // Conditional rendering based on 'isSubmitted' state
                            <div id='submitted'>
                                <div className='response'>
                                    <Typography>
                                        Thank you for your response.<br />
                                    </Typography>
                                </div>
                                <div className='img_tick'>
                                    <img className='tick' src={Tick} alt='done' />
                                </div>
                            </div>
                        ) : (
                            <form
                                id="form"
                                action="https://formspree.io/f/xeqyqawn"
                                method="POST"
                            >
                                <Typography sx={{ fontSize: 15, mb: 1.5 }} color="text.secondary" >
                                    <div className='form_head'>
                                        <div className='text_head'>Feedback & Complaints</div>
                                        <div className='text_content'>Fill this form for any feedbacks or complaints.<br />If you have not yet tried our products,<br /> please shop now at <Link onClick={(e) => { navigate('/products'); }}>SHOP</Link></div>
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Your Name</label>
                                        <TextField
                                            className="field"
                                            placeholder="Your Name"
                                            variant="standard"
                                            name='name'
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                validateName(e.target.value);
                                            }}
                                        />
                                        {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Email address</label>
                                        <TextField
                                            className="field"
                                            placeholder="example@domain.com"
                                            variant="standard"
                                            type="email"
                                            name='email'
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                validateEmail(e.target.value);
                                            }}
                                        />
                                        {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Phone Number</label>
                                        <TextField
                                            type="tel"
                                            className="field"
                                            placeholder="9999xxxxxx"
                                            variant="standard"
                                            name='phone'
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value });
                                                validatePhoneNumber(e.target.value);
                                            }}
                                        />
                                        {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
                                    </div>
                                    <div className="form_fields">
                                        <label className="lables">Message</label>
                                        <TextField
                                            className="field"
                                            multiline maxRows={5}
                                            placeholder="Enter your message here"
                                            variant="outlined"
                                            name='message'
                                            value={formData.message}
                                            onChange={(e) => {
                                                setFormData({ ...formData, message: e.target.value });
                                                validateMessage(e.target.value);
                                            }}
                                        />
                                        {formErrors.message && <div className="error-message_msg">{formErrors.message}</div>}

                                    </div>
                                </Typography>
                                <div className="create_request">
                                    <Button variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (validateForm()) {
                                                handleSubmit(e);
                                                const form = document.getElementById('form');
                                                form.submit();
                                            }
                                        }}
                                        type='submit'
                                        // onClick={handleSubmit}
                                        disabled={isLoading}>
                                        {isLoading ? <CircularProgress size={24} /> : "Submit"}
                                    </Button>
                                    {/* <input type="submit" value="send" /> */}
                                </div>
                            </form>
                        )}
                    </Paper>
                </Box>
            </div>

        </div>
    );
}

export default Contact;