export const isBusinessOpen = (): boolean => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();
  
  // Wednesday (3) to Sunday (0), 2 PM to 10 PM
  const isOpenDay = day === 0 || (day >= 3 && day <= 6);
  const isOpenHour = hour >= 14 && hour < 22;
  
  return isOpenDay && isOpenHour;
};

export const getBusinessHours = (): string => {
  return "Miércoles a Domingo de 2:00 PM a 10:00 PM";
};

export const generateOrderNumber = (): string => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};