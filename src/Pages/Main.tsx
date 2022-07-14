import { Button, Typography } from '@mui/material';
import helloImage from './../Images/hello.png'

export const Main = () => {
    return(
        <div style={{display: "flex", flexDirection:"column", alignItems:"center", width:"100%", height:"100%"}}>
            <Typography style={{ textAlign:"center"}}><h1>Привет,<br/>Юный инженер!</h1></Typography>
            <img src={helloImage} alt='hello' />
            <Button variant="outlined" href='/task/'>Задачи</Button>
        </div>
    );
}