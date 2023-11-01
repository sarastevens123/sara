import { Accordion } from "react-bootstrap";

import AccordionPage from "./AccordionPage";

function Header() {
    return (
        <header className='header'>
            <h1 className='title'>Sara Stevens: Software Engineer</h1>
            
            <div className='buttondiv'>
                <AccordionPage />
            </div>

            
        </header>
    );
}

export default Header;