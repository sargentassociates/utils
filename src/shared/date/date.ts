export const getLocalDateAndTime = (ISOString: string) => {
    const time = new Date(ISOString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = new Date(ISOString).toLocaleDateString();
    
    return time && date ? `${time} ${date}` : 'Invalid Date';
};