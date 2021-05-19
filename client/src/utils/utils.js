export const shuffleArray = (array, num) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.slice(0, num);
};

export const changePlatform = (platform) => {
  switch (platform) {
    case 'Windows':
      return 'windows';
    case 'Mac OS':
      return 'apple';
    case 'Linux':
      return 'linux';
    default:
      return;
  }
};

export const convertDate = (date) => {
  if (date) return date.split('-').reverse().join('-');
};
