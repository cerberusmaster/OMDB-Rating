import Home from './pages/Home';
import Guessing from './pages/Guessing';
import Results from './pages/Results';
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'create',
        path: '/guessing',
        component: Guessing
    },
    {
        name: 'results',
        path: '/results',
        component: Results
    }
];