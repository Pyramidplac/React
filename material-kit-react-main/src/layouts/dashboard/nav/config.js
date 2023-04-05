// component
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/counsellorDB',
    icon: icon('ic_analytics'),
  },
  {
    title: 'dashboard',
    path: '/dashboard/FinancialDB',
    icon: <BarChartIcon />,
  },
  {
    title: 'Student Info',
    path: '/dashboard/student',
    icon: icon('ic_user'),
  },
  {
    title: 'Admission',
    path: '/dashboard/admission',
    icon: icon('ic_user'),
  },
  // -------------------------------------------------------
  {
    title: 'Master',
    path: '/dashboard/master',
    icon: <SettingsAccessibilityIcon />,
  },
  // -------------------------------------------------------
  {
    title: 'question',
    path: '/dashboard/question',
    icon: <QuestionAnswerIcon />,
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: <QuestionAnswerIcon />,
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
