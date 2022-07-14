import * as React from 'react';

type TaskDetailType = {
  id: number,
  level: number,
  title: string,
  description: string,
  text: string,
  elements: Array<string>
}

export const TaskDetail = (props:TaskDetailType) => {
  return (
    <div>
      {props.id}<br/>
      {props.level}<br/>
      {props.title}<br/>
      {props.description}<br/>
      {props.text}<br/>
      {props.elements}<br/>
    </div>
  );
}