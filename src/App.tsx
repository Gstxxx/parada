import { useRef } from "react";
import "./App.css";
import ShaderBackground from "./components/ShaderBackground";
import { exportToImage } from "./utils/export";
import { Download } from "lucide-react";
import { InputFields } from "./components/parada-label/input-fields";
import { Socials, TextName } from "./components/parada-label/brand-section";
import { LogoSection } from "./components/parada-label/logo-section";
function App() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (cardRef.current) {
      await exportToImage(cardRef.current, "parada-dos-sabores");
    }
  };

  return (
    <>
      <ShaderBackground />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="flex flex-row items-start space-x-8">
          <div
            ref={cardRef}
            className="flex flex-row max-w-md w-full bg-gradient-to-b from-[#4A1515] to-[#2A0A0A] rounded-xl shadow-lg overflow-hidden"
            style={{ width: "9.5cm", height: "5cm" }}
          >
            <div className="p-4 flex-1 items-center justify-center">
              <TextName />
              <InputFields />
              <div className="flex flex-row items-center justify-center">
                <LogoSection />
                <Socials />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={handleExport}
              className="self-center p-2 bg-brown-600 text-white rounded-full hover:bg-brown-700 transition-colors"
              title="Export as PNG"
            >
              <Download size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
