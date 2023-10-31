import Accordion from "./Accordion";

function AccordionPage() {
    const items = [
        {
            
            label: 'links',
            content: 'body'
    
        },
        {
            
            label: 'projects',
            content: 'body'
    
        },
        {
            
            label: 'goals',
            content: 'body'
        }
    ];
    return <Accordion items={items} />;
}

export default AccordionPage

