// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'avishkar',
    type: 'group',
    children: [
        {
            id: 'events',
            title: 'Events',
            type: 'item',
            url: '/events',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'item',
            url: 'jobs',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'photo-galary',
            title: 'Photo Galary',
            type: 'item',
            url: '/photogalary',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'user-list',
            title: 'User List',
            type: 'item',
            url: '/users',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
    ]
};

export default utilities;
