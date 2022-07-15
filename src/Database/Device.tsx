import  {
    DefaultNodeModel,
} from '@projectstorm/react-diagrams';

export const device = [ 
    { 
        id: 1,
        title: 'VOSTOK UNO',
        desc: 'Отладочная плата VOSTOK UNO',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'VOSTOK UNO',
                color: 'rgb(192,192,255)',
            });
            let ports = [node.addOutPort('In'), node.addOutPort('Out')]
            return {node, ports}
        }
    },
    { 
        id: 2,
        title: 'Панель влажности',
        desc: 'Панель влажности',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'Панель влажности',
                color: 'rgb(0,192,55)',
            });
            let ports = [node.addOutPort('Out')]
            return {node, ports}
        }
    },
    { 
        id: 3,
        title: 'LM393',
        desc: 'Cдвоенный компаратор',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'LM393',
                color: 'rgb(0,92,255)',
            });
            let ports = [node.addOutPort('In'), node.addOutPort('Out')]
            return {node, ports}
        }
    },
    { 
        id: 4,
        title: 'Зуммер',
        desc: 'Генератор звука',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'Speaker',
                color: 'rgb(0,92,55)',
            });
            let ports = [node.addOutPort('In')]
            return {node, ports}
        }
    },
    { 
        id: 5,
        title: 'MQ-4',
        desc: 'Сигнализатор газа',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'MQ-4',
                color: 'rgb(0,92,155)',
            });
            let ports = [node.addOutPort('Out')]
            return {node, ports}
        }
    },
    { 
        id: 6,
        title: 'Реле',
        desc: 'Электромангитное реле',
        simpleNode: () => {
            const node = new DefaultNodeModel({
                name: 'Реле',
                color: 'rgb(100,192,255)',
            });
            let ports = [node.addOutPort('In'), node.addOutPort('Out')]
            return {node, ports}
        }
    },
]