import { useEffect, useState } from 'react'
import { history } from "./../Database/History";
import { device } from "./../Database/Device";
import { useParams } from "react-router";
import { Button } from '@mui/material';
import { DeviceScheme } from '../Components/shared/DeviceScheme';

export const Device = () => {
    const { id } = useParams()
    const [devices, setDevices] = useState<any>([])

    useEffect(()=>{
        if (id) {
            const deviceId = history.filter((item) => { return item.id.toString() === id })[0].elements
            setDevices(device.filter((item) => { return deviceId.includes(item.id) }))
        } else {
            setDevices(device)
        }
    },[])
    
    return (
        <div style={{ height: "100vh" }}>
            <div style={{ height: "70vh" }}>
                <DeviceScheme devs={devices}/>
            </div>
            <div style={{ borderTopWidth: "1px"}}>
                { devices.map((item:any, index:number) => {
                    return <Button fullWidth key={index}>{item.title}</Button>
                })}
                <Button fullWidth href='/code'>Перейти к коду</Button>
            </div>
        </div>
    );
}