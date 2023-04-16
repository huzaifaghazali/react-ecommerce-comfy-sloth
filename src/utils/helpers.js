export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  
};

export const getUniqueValues = (data, type) => {

  // create the array from the data(array of objects) of given type
  let unique = data.map((item) => item[type]);
  
 // flat the array of colors i.e removes the nesting
  if (type === 'colors') {
    unique = unique.flat();
  }

 // return only the unique values
  return ['all', ...new Set(unique)];
}