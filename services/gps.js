import GPs from '../data/GPs.json';

const getGPs = () => {
    return GPs;
};

const getGP = (place) => {
    return GPs.filter(gp => gp.place === place)[0];
}

export { getGPs, getGP };