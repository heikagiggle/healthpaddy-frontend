export const generateDays = () =>
    Array.from({ length: 31 }, (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString(),
      keywords: [(i + 1).toString()],
    }));
  
  export const generateMonths = [
    { label: "January", value: "1", keywords: ["january", "1", "jan"] },
    { label: "February", value: "2", keywords: ["february", "2", "feb"] },
    { label: "March", value: "3", keywords: ["march", "3", "mar"] },
    { label: "April", value: "4", keywords: ["april", "4", "apr"] },
    { label: "May", value: "5", keywords: ["may", "5"] },
    { label: "June", value: "6", keywords: ["june", "6", "jun"] },
    { label: "July", value: "7", keywords: ["july", "7", "jul"] },
    { label: "August", value: "8", keywords: ["august", "8", "aug"] },
    { label: "September", value: "9", keywords: ["september", "9", "sep"] },
    { label: "October", value: "10", keywords: ["october", "10", "oct"] },
    { label: "November", value: "11", keywords: ["november", "11", "nov"] },
    { label: "December", value: "12", keywords: ["december", "12", "dec"] },
  ];
  
 export  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 82 }, (_, i) => ({
      label: (currentYear - i - 18).toString(),
      value: (currentYear - i - 18).toString(),
      keywords: [(currentYear - i - 18).toString()],
    }));
  };