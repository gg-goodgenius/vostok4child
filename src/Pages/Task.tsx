import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { history } from '../Database/History'
import { useParams } from 'react-router';

export const Task = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClick = (i: number) => {
    if (i === 1) {
      setOpen1(!open1)
    } else if (i === 2) {
      setOpen2(!open2)
    } else {
      setOpen3(!open3)
    }
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Привет юный инженер, выбери свой уровень:
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => { handleClick(1) }}>
        <ListItemIcon>
          <Filter1Icon color={"success"}/>
        </ListItemIcon>
        <ListItemText primary="Первый уровень" secondary={
          <React.Fragment>
            {"Задачи этого уровня позволят тебе создавать простейшие датчики с использованием "}
          </React.Fragment>
        } />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {history.filter((filterItem) => { return filterItem.level === 1 }).map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={item.id} href={"/task/"+item.id.toString()}>
                <ListItemText primary={item.title} secondary={item.description}/>
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={() => { handleClick(2) }}>
        <ListItemIcon>
          <Filter2Icon color={"warning"}/>
        </ListItemIcon>
        <ListItemText primary="Второй уровень" secondary={
          <React.Fragment>
            {"Задачи второго уровня, на основе созданных на первом уровне элементов создавать сценарии использования умного дома."}
          </React.Fragment>
        } />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {history.filter((filterItem) => { return filterItem.level === 2 }).map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={item.id} href={"/task/"+item.id.toString()}>
                <ListItemText primary={item.title} secondary={item.description}/>
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={() => { handleClick(3) }}>
        <ListItemIcon>
          <Filter3Icon color={"error"}/>
        </ListItemIcon>
        <ListItemText primary="Третий уровень"  secondary={
          <React.Fragment>
            {"Ты уже готов стать настоящим инженером. На этом уровне мы будем изобретать готовые к использованию датчики на микроконтроллере К1946ВК035"}
          </React.Fragment>
        } />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {history.filter((filterItem) => { return filterItem.level === 3 }).map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={item.id} href={"/task/"+item.id.toString()}>
                <ListItemText primary={item.title} secondary={item.description}/>
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
    </List>
  );
}