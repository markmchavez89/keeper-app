import React from 'react';

//let year = getFullYear();

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;