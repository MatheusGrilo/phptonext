import React from "react";
import { HiCog } from "react-icons/hi";

function ConfigButton() {
  return (
    <>
      <div className="absolute bottom-4 right-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center space-x-2 border border-transparent text-sm font-medium rounded-full w-12 h-12 text-white bg-orange-700/90 hover:bg-orange-800 transition-colors"
        >
          <HiCog className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}

export default ConfigButton;
