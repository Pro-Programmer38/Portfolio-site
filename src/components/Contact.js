import React from 'react';
import './Contacts.css'; // Import your CSS file for styling

function Contacts(props) {
    return (
        <div className="contacts-container" style={{ fontFamily: props.font }}>
            <h1 style={{ marginTop: "4rem" }}>Contact Me</h1>
            <p>Feel free to connect with me through the following channels:</p>

            <ul className="list-unstyled contacts-list my-7 mx-8" style={{ marginTop: "8px" }}>
                <li >
                    <a href="mailto: khursheed6577@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="Gmail-Logo-PNG.jpg"
                            alt="Email Logo"
                            className="contact-logo " style={{ marginLeft: "0rem", marginTop: "2.5rem", blockSize: "4rem", width: "4rem" }}
                        />

                    </a>
                </li>
                {/* <li>
                    <span className="contact-icon">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdav4Uw_kehgoByAZdLP4S4NoI-LL_o-VStQ&usqp=CAU"
                            alt="Phone Logo"
                            className="contact-logo" style={{ marginLeft: "1.5rem", marginTop: "3rem" }}
                        />
                        <p><b>+923417122946</b></p>
                    </span>
                </li> */}
                <li>
                    <a href="https://github.com/Pro-Programmer38" target="_blank" rel="noopener noreferrer">
                        <img
                            className="contact-logo" style={{ marginLeft: "2rem", marginTop: "2rem", blockSize: "5rem", width: "5rem" }}
                            src="github.png"
                            alt="GitHub Logo"
                        />

                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/khursheed-ahmed-8073b0233/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="LinkedIn Logo"
                            className="contact-logo" style={{ marginLeft: "2rem", marginTop: "3rem" }}
                        />

                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/the_proprogrammer/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="insta.png"
                            alt="Instagram Logo"
                            className="contact-logo" style={{ marginLeft: "2.2rem", marginTop: "3rem" }}
                        />

                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;

