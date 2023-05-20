"use client";

import { Template } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Templates() {
  const [templates, setTemplates] = useState<Template[]>([]);

  console.log(templates);
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
        <span key={template.id}>{template.name}</span>
      ))}
    </div>
  );
}

export default Templates;
