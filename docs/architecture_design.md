# Volt-Aura: Technical Architecture

## 1. System Overview
Volt-Aura is a high-fidelity "Digital Twin" simulation of a decentralized energy arbitrageur. It bridges the gap between hardware (Home Batteries) and software (Market AI).

## 2. The Data Flow
- **Data Source:** Simulated WebSocket stream providing real-time $/kWh pricing.
- **Logic Engine:** `arbitrageEngine.js` processes prices against battery State of Charge (SoC).
- **Frontend State:** React `useState` and `useEffect` hooks manage live dashboard updates.
- **Visualization:** Recharts renders the historical price trend for user transparency.

## 3. Key Algorithms
The system uses a **Threshold-Based Arbitrage Model**:
- **Accumulation Phase:** If Price < $3.50 AND SoC < 100%, trigger `BUY`.
- **Distribution Phase:** If Price > $7.50 AND SoC > 10%, trigger `SELL`.
- **Idle Phase:** If thresholds aren't met, the system monitors for grid volatility.
