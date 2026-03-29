# ⚡ Volt-Aura: DePIN Micro-Grid Arbitrageur
**Empowering Women through Autonomous Energy Trading | Built for Hackfinity 6.0**

Volt-Aura is an autonomous AI agent designed for the 2026 decentralized energy landscape. It transforms a static home battery into a revenue-generating asset by automating high-frequency energy trading (Arbitrage) on local DePIN (Decentralized Physical Infrastructure) micro-grids.

---

## 🌟 The Vision
Financial independence for women starts with household resource optimization. In the 2026 energy landscape, decentralized energy (Solar/Wind) is abundant but inefficiently managed. Volt-Aura provides a "set-it-and-forget-it" tool that turns the household—traditionally a place of expense—into a micro-enterprise.

## 🚀 Key Features
- **Autonomous Arbitrage Engine:** Real-time logic that buys energy when prices are low (<$3.50) and sells during peak demand (>$7.50).
- **Digital Twin Logic:** A high-fidelity simulation of physical battery hardware interacting with a live grid.
- **Live Data Visualization:** Real-time monitoring of grid price fluctuations and household profit using **Recharts**.
- **Mobile-First Dashboard:** A high-fidelity React dashboard built for on-the-go energy management.

## 🛠️ Technical Stack
- **Frontend:** React.js, Tailwind CSS (Modern UI/UX)
- **Icons & UI:** Lucide-React, Framer Motion
- **State Management:** React Hooks (UseEffect for live market simulation)
- **Logic:** Custom JavaScript Arbitrage Engine (`arbitrageEngine.js`)
- **Build Tool:** Vite (Ultra-fast HMR)

## 📊 Technical Workflow
1. **Data Ingestion:** The agent fetches live kWh pricing from a simulated local micro-grid via WebSocket.
2. **Logic Execution:** A threshold-based engine compares the "Grid Price" against the "Battery State of Charge" (SoC).
3. **Automated Action:**
   - **Buy Mode:** Triggered during surplus solar hours (Prices < $3.50).
   - **Sell Mode:** Triggered during peak demand hours (Prices > $7.50).
4. **Profit Realization:** The difference (minus a 2% platform fee) is settled into the user’s digital wallet.

## 🔧 Installation & Setup
1. Clone the repo:
   ```bash
   git clone https://github.com


2. Install dependencies:
   ```bash
   npm install


3. Run the development server:
   ```bash
   npm run dev



This project was developed for Hackfinity 6.0 (10-hour Hackathon hosted by ACM-W, PES University). While the project focuses on the intelligence layer (Software) rather than physical infrastructure, it uses a Digital Twin logic to demonstrate real-world scalability in the DePIN economy.
Turning Volatility into Opportunity.
