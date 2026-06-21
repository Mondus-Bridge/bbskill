export const daysFromNow = (n) => new Date(Date.now() + n * 86400000).toISOString();
export const daysFromNowUnix = (n) => Math.floor((Date.now() + n * 86400000) / 1000);
export const sixRandom = () => {
  const unixNow = Math.floor(Date.now() / 1000); 
  return String(unixNow).slice(-6); 
};

export const tomorrowDate = () => {
  const tomorrow = new Date(Date.now() + 86400000);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
