import { AlertTriangle, Twitter } from "lucide-react";
import { SiLinkedin, SiTelegram } from "react-icons/si";
import tidCapitalLogo from "@assets/TID Capital _1753260487995.png";

export default function Footer() {
  return (
    <footer className="bg-tid-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={tidCapitalLogo} alt="TID Capital" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional DeFi yield farming and proprietary trading strategies for institutional and sophisticated investors seeking superior risk-adjusted returns.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Yield Farming</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Proprietary Trading</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Vault Curation</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Risk Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research Network</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a 
                  href="https://todayindefi.com" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Today in DeFi
                </a>
              </li>
              <li>
                <a 
                  href="https://tidresearch.com" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TID Research
                </a>
              </li>
              <li><a href="#research" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Protocol Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>partnerships@tidcapital.com</li>
              <li>research@tidcapital.com</li>
              <li>support@tidcapital.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
            <h4 className="text-yellow-400 font-semibold mb-3 flex items-center">
              <AlertTriangle className="mr-2 w-5 h-5" />
              Important Disclaimer
            </h4>
            <div className="text-xs text-gray-300 space-y-2">
              <p>
                <strong>Investment Risk:</strong> All DeFi investments carry significant risks including total loss of capital. Past performance does not guarantee future results. TID Capital vault strategies involve complex DeFi protocols with smart contract, liquidity, and market risks.
              </p>
              <p>
                <strong>Regulatory Notice:</strong> TID Capital services are intended for qualified institutional investors and accredited individuals only. Our products are not registered securities and may not be suitable for all investors. Please consult with qualified financial advisors.
              </p>
              <p>
                <strong>No Guarantee:</strong> Yield estimates are projections based on current market conditions and are not guaranteed. Actual returns may vary significantly and losses are possible. All investments are subject to market volatility and regulatory changes.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2024 TID Capital. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
