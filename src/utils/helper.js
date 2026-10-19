function capitalizeFirstLetter(str) {
  if (!str) return ""; // Handle empty strings safely
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const calculateActualPrice = (price,discountPercentage) => {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
}

export { 
    capitalizeFirstLetter,
    calculateActualPrice 
};