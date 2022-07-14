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
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';

export const Task = () => {
  const [open, setOpen] = React.useState([false, false, false]);

  const handleClick = (i:number) => {
    let nOpen: Array<boolean> = open;
    nOpen[i] = !open[i]
    setOpen(nOpen);
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
      <ListItemButton>
        <ListItemIcon>
          <Filter1Icon />
        </ListItemIcon>
        <ListItemText primary="Первый уровень" secondary={
            <React.Fragment>
                {"Задачи этого уровня позволят тебе создавать простейшие датчики с использованием "}
            </React.Fragment>
          }/>
      </ListItemButton>
      {open[0] ? <ExpandLess /> : <ExpandMore />}
      <Collapse in={open[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Опять потоп" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Мама устала" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Папин гараж" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <Filter2Icon />
        </ListItemIcon>
        <ListItemText primary="Второй уровень"  secondary={
            <React.Fragment>
                {"Задачи второго уровня, на основе созданных на первом уровне элементов создавать схемы умного дома."}
            </React.Fragment>
          }/>
      </ListItemButton>
      <ListItemButton onClick={() => {handleClick(0)}}>
        <ListItemIcon>
          <Filter3Icon />
        </ListItemIcon>
        <ListItemText primary="Третий уровень" />
        {/* {open[0] ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      {/* <Collapse in={open[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}