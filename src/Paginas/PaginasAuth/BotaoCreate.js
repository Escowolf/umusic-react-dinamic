import NewPlaylist from './NewPlaylist';
import './BotaoCreate.css'
import { Button } from 'bootstrap';

function BotaoCreate(){
    return(<>
    <Button className="Botao">
    <NewPlaylist/>
    </Button>
    </>)
}

export default BotaoCreate;