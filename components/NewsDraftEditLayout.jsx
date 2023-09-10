import React, { useRef, useState } from "react";
import NewsDraftEditSidebar from "./NewsDraftEditSidebar";
import {
  MDXEditor,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  headingsPlugin,
  thematicBreakPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function NewsDraftEditLayout() {
  const ref = useRef();

  const [text, setText] = useState("");

  const placeholder = `
**Hello world!**
`;

  return (
    <div className="bg-slate-50 h-screen overflow-y-auto">
      <div className="flex">
        <div className="p-6 w-full">
          <p className="text-black text-3xl font-extrabold mb-6">AINGS</p>
          <input
            className="w-full bg-slate-50 mb-2 text-2xl font-semibold"
            value={
              "Pencemaran Udara di Daerah Jabodetabek Semakin Parah! Tercatat 1440 balita"
            }
            onChange={() => {}}
          />
          <div className="h-0.5 w-full bg-black" />
          <div className="bg-white h-screen overflow-y-auto mt-4 max-w-5xl mx-auto">
            <MDXEditor
              className="h-screen overflow-y-auto"
              markdown={placeholder}
              plugins={[
                toolbarPlugin({
                  toolbarContents: () => (
                    <div className="flex">
                      <UndoRedo />
                      <BoldItalicUnderlineToggles />
                    </div>
                  ),
                }),
                headingsPlugin(),
                thematicBreakPlugin(),
              ]}
              ref={ref}
              onChange={(value) => {
                setText(value);
              }}
            />
          </div>
        </div>
        <NewsDraftEditSidebar markdown={text} />
      </div>
    </div>
  );
}
