import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
        console.log('click!');
    };

    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-5" onClick={ handleClick }><GoBell />Click me!!</Button>
            </div>
            <div>
                <Button secondary outline><GoCloudDownload className='mr-1'/>Buy Now!</Button>
            </div>
            <div>
                <Button success><GoDatabase />See Deal!</Button>
            </div>
            <div>
                <Button warning>Hide Ads!</Button>
            </div>
            <div>
                <Button danger>Something!</Button>
            </div>
        </div>
    )
}

export default ButtonPage;
