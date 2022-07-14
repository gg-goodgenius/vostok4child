import { Page } from './../Components/shared/Page'
import { Code } from './Code';
import { Device } from './Device';
import { Main } from './Main'
import { Page404 } from './Page404';
import { Task } from './Task';

const pages = {
    Main: {
        element: <Page><Main /></Page>,
        path: '/',
    },
    Code: {
        element: <Page><Code /></Page>,
        path: '/code/',
    },
    Device: {
        element: <Page><Device /></Page>,
        path: '/device/',
    },
    Page404: {
        element: <Page><Page404 /></Page>,
        path: '',
    },
    Task: {
        element: <Page><Task /></Page>,
        path: '/task/',
    },
}

export default pages;