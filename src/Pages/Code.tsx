import { Button } from "@mui/material"

export const Code = () => {
    return (
        <div style={{ height: "100vh" }}>
            <div style={{ height: "70vh" }}>
                Тут что-то сломалось
            </div>
            <div>
                <Button fullWidth href='/code'>А как работает схема?</Button>
                <Button fullWidth href='/'>Пропустить</Button>
            </div>
        </div>
    );
}