import { SetStateAction, useEffect, useRef, useState } from "react";

const CylinderTable = () => {
  const modelViewerRef = useRef(null);
  const setModelVariant = (colorName) => {
    if (modelViewerRef.current) {
      modelViewerRef.current.variantName = colorName;
    }
  };

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => {
        setModelVariant(activeColor);
      })
      .catch(console.error);
  }, []);

  const colors = [
    { code: "#E5D7BD", name: "white" },
    { code: "#B5B1A6", name: "grey" },
    { code: "#FEBA01", name: "yellow" },
    { code: "#10CA11", name: "green" },
  ];

  const [activeColor, setActiveColor] = useState(colors[2].name);

  const handleColorChange = (colorName: SetStateAction<string>) => {
    setActiveColor(colorName);
    setModelVariant(colorName);
  };

  return (
    <div>
      <style>{`
        model-viewer {
          --progress-bar-color: transparent;
        }    
      `}</style>
      <div className="flex items-center justify-center border-b border-gray-200 py-3">
        <div className="text-2xl font-bold">rareraw</div>
      </div>

      <div className="p-4">
        <div style={{ display: "flex" }}>
          <model-viewer
            ref={modelViewerRef}
            src="/cylinder_table_materials_jpg.glb"
            ar
            ar-scale="auto"
            camera-controls
            camera-orbit="-20deg 90deg"
            style={{
              width: "50%",
              height: "0%",
              paddingBottom: "100%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <div className="flex justify-center space-x-2">
          {colors.map((color) => (
            <button
              key={color.code}
              className="flex flex-col items-center"
              onClick={() => handleColorChange(color.name)}
            >
              <div
                className={`h-5 w-5 rounded-full ${
                  activeColor === color.name ? "border-2 border-black" : ""
                } bg-[${color.code}]`}
              ></div>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">CYLINDER TABLE</h2>
          <p className="text-xs text-gray-500">RARERAW ORIGINAL</p>
          <p className="my-4 text-lg font-bold">180,000원</p>
        </div>
        <table className="mt-2 w-full text-sm">
          <tbody className="option space-y-8">
            <tr className="">
              <td scope="row" className="pb-2 text-gray-500">
                무게
              </td>
              <td className="pb-2">8.3KG</td>
            </tr>
            <tr>
              <td scope="row" className="pb-2 text-gray-500">
                사이즈
              </td>
              <td className="pb-2">ø350 H450</td>
            </tr>
            <tr>
              <td scope="row" className="pb-2 text-gray-500">
                소재
              </td>
              <td className="pb-2">POWDER COATED STEEL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CylinderTable;
