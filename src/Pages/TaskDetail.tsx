import { useParams } from 'react-router';
import { history } from './../Database/History' 
import { Button, Chip, Rating } from '@mui/material';

export const TaskDetail = () => {
  const { id } = useParams()
  const his = history.filter((item) => {return item.id.toString() === id})[0]
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{his.title}</h1>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div>{his.elements.map((item)=>{
          return <Chip label={item} size="small" style={{margin:"4px"}}/>
        })}</div><div><Rating name="read-only" value={his.level} readOnly max={3} /></div>
      </div>
      <p style={{textAlign:"justify", fontSize: "14pt"}}>{his.text}</p>
      <Button fullWidth color='primary' href={'/device/'+his.id}>Собрать</Button>
    </div>
  );
}