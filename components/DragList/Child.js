import { Driver } from '../Driver';
import { Team } from '../Team';

const Child = ({ type, data, position }) => {
    switch(type) {
        case 'drivers':
            return <Driver name={data.name} surname={data.surname} team={data.team} position={position}/>
        case 'teams':
            return <Team name={data.name} position={position}/>
        default:
            return <Driver name={data.name} surname={data.surname} team={data.team} position={position}/>
    }
};

export { Child };