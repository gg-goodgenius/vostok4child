import React, { useContext, useEffect } from "react";
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Navbar } from './Navbar'


type Props = {
    key?: number | null | undefined,
    children?: React.ReactNode,
    header?: JSX.Element,
}

const theme = createTheme()

export const Page = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme} >
            <Container maxWidth={false} >
                <Navbar />
                <div className='page' style={{ marginTop:"16px" }}>
                    <CssBaseline />
                    {children}
                </div>
            </Container>
        </ThemeProvider >
    );

}
