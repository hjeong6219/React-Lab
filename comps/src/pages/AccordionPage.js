import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Can I Use React',
            content: 'You can use it on any project you want'
        },
        {
            id: '2',
            label: 'Can I Use Java',
            content: 'You can use it on any project you want'
        },
        {
            id: '3',
            label: 'Can I Use CSS',
            content: 'You can use it on any project you want'
        },
    ]
    return <Accordion items={ items }/>
}

export default AccordionPage;
