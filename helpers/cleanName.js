const cleanName = (name) => {
    return name.toLowerCase().trim().replace(' ', '-');
};

export { cleanName };