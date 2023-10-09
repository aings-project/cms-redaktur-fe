import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function CommentPostLayout() {
  return (
    <div className="bg-neutral-100 w-full">
      <div className="bg-white max-w-screen-lg h-full overflow-y-auto mx-auto p-6">
        <div className="flex items-center">
          <div className="mb-6 mr-6 md:hidden">
            <ArrowBackOutlined />
          </div>
          <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
        </div>

        <div className="border-2 bg-white p-4 rounded-md mb-4 overflow-y-auto">
          <p className="text-2xl font-semibold mb-2">Tsunami Dasyat Di Aceh</p>
          <p>
            Tsunami dahsyat melanda Aceh pada 26 Desember 2004, menewaskan lebih
            dari 230.000 orang dan menghancurkan ribuan rumah serta
            infrastruktur. Bencana alam ini merupakan salah satu yang terburuk
            dalam sejarah. Upaya bantuan internasional masif segera diluncurkan
            untuk membantu korban dan memulihkan Aceh
          </p>
        </div>
      </div>
    </div>
  );
}
