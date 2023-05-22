"use client";

import { getDataInstance } from "@/app/pdfs/getDataInstance";
import { Template } from "@prisma/client";
import { usePDF } from "@react-pdf/renderer";
import axios from "axios";

import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  setTemplate: (template: Template) => void;
};

function Templates({ setTemplate }: Props) {
  const [templates, setTemplates] = useState<Template[]>([]);

  const [loading, setLoading] = useState(false);

  const getTemplates = async () => {
    setLoading(true);
    try {
      const templatesDb = (await axios.get("/api/template")).data;

      setTemplates(templatesDb);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  //
  //
  //
  //
  //
  // VISUALIZAR TEMPLATES DISPONÍVEIS

  return (
    <div>
      <div className="flex justify-center">
        {templates.length <= 0 && (
          <>
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <ClipLoader size={50} />
              </div>
            ) : (
              <>
                <button className="button " onClick={getTemplates}>
                  Buscar templates
                </button>
              </>
            )}
          </>
        )}
      </div>

      {templates.map((template) => (
        <button
          className={`button-secondary `}
          onClick={() => setTemplate(template)}
          key={template.id}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
}

export default Templates;
