import './components';
import Router from 'domr-router';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    view: Home,
    title: 'homepage',
    isDefault: true,
  },
];

const router = new Router(routes);

router.Start();
