import { AlertTriangle, Twitter } from "lucide-react";
import { SiLinkedin, SiTelegram } from "react-icons/si";
import tidCapitalLogo from "@assets/TID Capital Blue black bg_1753264024194.png";

export default function Footer() {
  return (
    <footer className="bg-tid-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src={tidCapitalLogo} alt="TID Capital" className="h-8 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              DeFi yield farming strategies, onchain lending markets, and non-custodial vault curation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Yield Farming</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Vault Curation</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Risk Assessment</a></li>
            </ul>
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
                <strong>Risk Considerations:</strong> DeFi strategies involve substantial risks, including smart-contract vulnerabilities, collateral depegs, liquidity shortages, borrower insolvency, and partial or total loss of capital.
              </p>
              <p>
                <strong>Not an Offer:</strong> Nothing on this website is an offer or solicitation to buy or sell any security or other financial product, or investment advice.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} TID Capital. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
