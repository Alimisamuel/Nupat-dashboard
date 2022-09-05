// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Students',
    path: '/dashboard/user',
    icon: getIcon('ph:student-fill'),
  },
  {
    title: 'Instructors',
    path: '/dashboard/products',
    icon: getIcon('ph:chalkboard-teacher-fill'),
  },
  {
    title: 'Admin',
    path: '/dashboard/blog',
    icon: getIcon('eos-icons:admin'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Create Account',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
