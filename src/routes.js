import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

import SignOut from './pages/SignOut';
import Main from './pages/Main';
import MyAccount from './pages/MyAccount';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Secure from './pages/Secure';
import Settings from './pages/Settings';

const routes = [
    {
        label: 'Home',
        path: '/',
        icon: <HomeIcon />,
        component:Main,
    },
    {
        label: 'My Account',
        path: '/myaccount',
        icon: <AccountBoxIcon />,
        component:MyAccount,
    },
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
        component:Dashboard
    },
    {
        label: 'Accounts',
        path: '/accounts',
        icon: <PointOfSaleIcon />,
        component:Accounts,
    },

    {
        label: 'Transactions',
        path: '/transactions',
        icon: <PriceCheckIcon />,
        component:Transactions,
    },
    {
        label: 'Secure',
        path: '/secure',
        icon: <LockIcon />,
        component:Secure,
    },
    {
        label: 'Settings',
        path: '/settings',
        icon: <SettingsIcon />,
        component:Settings,
    },
    {
        label: 'Sign Out',
        path: '/sign-out',
        icon: <ExitToAppIcon />,
        component:SignOut,
    },
]

export default routes