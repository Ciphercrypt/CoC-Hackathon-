// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Events from 'views/dashboard/Default/events';
import Job from 'views/dashboard/Default/job';
import Photogalary from 'views/dashboard/Photogalary';
import UserList from 'views/dashboard/userlist';
import AddEvent from 'addpages/addevents';
import Landingpage from 'views/landingpage';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (

    <>
    <AddEvent />
    <Events />
    <Job />
    <Photogalary />
    <UserList />
    <Landingpage />

   
    </>
    // <MainCard title="Sample Card">
    //     {/* <Typography variant="body2">
    //         Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
    //         ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
    //         reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
    //         qui officiate descent molls anim id est labours.
    //     </Typography> */}

       
    // </MainCard>
);

export default SamplePage;
