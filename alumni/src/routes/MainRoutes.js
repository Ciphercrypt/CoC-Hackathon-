import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Events=Loadable(lazy(() => import('views/dashboard/Default/events')));

const Job=Loadable(lazy(() => import('views/dashboard/Default/job')));
const Photogalary=Loadable(lazy(() => import('views/dashboard/Photogalary')));
const Userlist=Loadable(lazy(() => import('views/dashboard/userlist')));
const Landingpage=Loadable(lazy(() => import('views/landingpage')));





// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/default',
    element: <MainLayout />,
    children: [
        {
            path: '/default',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },

        {
            path: 'events',
            element: <Events />
        },
        {
            path: 'landing',
            element: <Landingpage />
        },
        {
            path: 'jobs',
            element: <Job />
        },
        {
            path: 'photogalary',
            element: <Photogalary />
        },
        {
            path: 'users',
            element: <Userlist />
        },
       
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
