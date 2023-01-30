import React from   "react";


const year = new Date().getFullYear();

const Footer= ()=> 
 <div>
    <footer>
    <p>
        copyright © {year}
    </p>
</footer>
</div>

;
export default Footer;