const getEfficiencyByYear = (year) => {
    if (year <= 2011) return 1000; // CPU/GPU era
    if (year <= 2013) return 500;  // Rani ASIC uređaji
    if (year <= 2015) return 250;  // Napredniji ASIC uređaji
    if (year <= 2018) return 100;  // Moderni ASIC uređaji (2015-2018)
    if (year <= 2020) return 50;   // Efikasniji ASIC uređaji
    if (year <= 2023) return 25;   // Još moderniji ASIC uređaji
    return 20;                     // Najmoderniji uređaji (2023 i dalje)
  };
  
  module.exports = { getEfficiencyByYear };