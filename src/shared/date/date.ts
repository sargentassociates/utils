export const getLocalDateAndTime = (ISOString?: string) => {
    if (!ISOString) {
        ISOString = new Date().toISOString();
    }
    const time = new Date(ISOString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = new Date(ISOString).toLocaleDateString();
    
    return time && date ? `${time} ${date}` : 'Invalid Date';
};

export const getLocalDate = (ISOString?: string) => {
    if (!ISOString) {
        ISOString = new Date().toLocaleDateString().replace(/\//g, '-');
    }

    return new Date(ISOString).toLocaleDateString().replace(/\//g, '-');
}