import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

type DeviceProps = {
    id: number,
    title: string,
    desc: string,
    simpleNode: () => {}
}

export const DeviceScheme = (props:any) => {
    const engine = createEngine();

    const devs = props.devs

    const nodes = devs.map((item:any)=>{return item.simpleNode})

    const node1 = new DefaultNodeModel({
        name: 'LM393',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(50, 50);
    let port11 = node1.addOutPort('Out');
    let port12 = node1.addOutPort('In');

    const node3 = new DefaultNodeModel({
        name: 'Сенсорная панель',
        color: 'rgb(0,192,55)',
    });
    node3.setPosition(150, 150);
    let port31 = node3.addOutPort('Out');
    const link2 = port12.link<DefaultLinkModel>(port31)

    const node2 = new DefaultNodeModel({
        name: 'VOSTOK UNO',
        color: 'rgb(0,192,155)',
    });
    node2.setPosition(150, 50);
    let port21 = node2.addOutPort('In');
    let port22 = node2.addOutPort('Out');
    const link = port11.link<DefaultLinkModel>(port21);

    const node4 = new DefaultNodeModel({
        name: 'Speaker',
        color: 'rgb(0,92,155)',
    });
    node4.setPosition(300, 50);
    let port41 = node4.addOutPort('In');

    const link4 = port41.link<DefaultLinkModel>(port22)
    const model = new DiagramModel();
    model.addAll(node1, node2, node3, node4, link2, link4, link);
    engine.setModel(model);
    const state = engine.getStateMachine().getCurrentState();
    return <div><CanvasWidget className='widget' engine={engine} /></div>
}