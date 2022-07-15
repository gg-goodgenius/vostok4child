import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

export const DeviceScheme = () => {
    const engine = createEngine();
    const node1 = new DefaultNodeModel({
        name: 'LM393',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100, 100);
    let port11 = node1.addOutPort('Out');
    let port12 = node1.addOutPort('In');

    const node3 = new DefaultNodeModel({
        name: 'Сенсорная панель',
        color: 'rgb(0,192,55)',
    });
    node3.setPosition(250, 100);
    let port31 = node3.addOutPort('Out');
    const link2 = port12.link<DefaultLinkModel>(port31)

    const node2 = new DefaultNodeModel({
        name: 'VOSTOK UNO',
        color: 'rgb(0,192,155)',
    });
    node2.setPosition(200, 200);
    let port21 = node2.addOutPort('In');
    let port22 = node2.addOutPort('Out');
    const link = port11.link<DefaultLinkModel>(port21);

    const node4 = new DefaultNodeModel({
        name: 'Speaker',
        color: 'rgb(0,92,155)',
    });
    node4.setPosition(250, 200);

    const model = new DiagramModel();
    model.addAll(node1, node2, node3, node4, link2, link);
    engine.setModel(model);
    return <div><CanvasWidget className='widget' engine={engine} /></div>
}