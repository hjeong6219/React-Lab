import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
    };

    return (
        <div>
            <div>
                <Button primary rounded outline onClick={ handleClick }><GoBell />Click me!!</Button>
            </div>
            <div>
                <Button secondary rounded outline><GoCloudDownload/>Buy Now!</Button>
            </div>
            <div>
                <Button success rounded outline><GoDatabase />See Deal!</Button>
            </div>
            <div>
                <Button warning rounded outline>Hide Ads!</Button>
            </div>
            <div>
                <Button danger rounded outline>Something!</Button>
            </div>
        </div>
    )
}

export default ButtonPage;
