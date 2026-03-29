// arbitrageEngine.js - Refined Logic
export const calculateTrade = (price, battery, capacity = 100) => {
  const BUY_THRESHOLD = 3.5;
  const SELL_THRESHOLD = 7.5;
  const TRANSACTION_FEE_PERCENT = 0.02; // 2% platform fee
  const DEPLETION_LIMIT = 10; // Don't let battery go below 10%

  // Check if buying is viable
  if (price <= BUY_THRESHOLD && battery < capacity) {
    const amountToBuy = Math.min(10, capacity - battery); 
    return { 
      action: 'BUY', 
      amount: amountToBuy, 
      cost: (price * amountToBuy) * (1 + TRANSACTION_FEE_PERCENT),
      message: `Charging at low rate: $${price}/kWh` 
    };
  } 

  // Check if selling is profitable
  if (price >= SELL_THRESHOLD && battery > DEPLETION_LIMIT) {
    const amountToSell = 10;
    return { 
      action: 'SELL', 
      amount: amountToSell, 
      revenue: (price * amountToSell) * (1 - TRANSACTION_FEE_PERCENT),
      message: `Discharging at peak rate: $${price}/kWh` 
    };
  }

  return { action: 'IDLE', amount: 0, message: "Optimizing storage..." };
};
