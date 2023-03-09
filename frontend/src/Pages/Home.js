import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div>
            <Button>Home</Button>
            <Link to='/chat'>
                <Button>
                    Chat
                </Button>
            </Link>
        </div>
     );
}
 
export default Home;