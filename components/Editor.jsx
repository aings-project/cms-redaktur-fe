import React from "react";

import {
  MDXEditor,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  headingsPlugin,
  thematicBreakPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const markdown = `
# Hello world!
Check the EditorComponent.tsx file for the code .
`;

const Editor = ({ ref }) => {
  return (
    <MDXEditor
      className="h-screen overflow-y-auto"
      markdown={markdown}
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
      onChange={() => {}}
    />
  );
};

export default Editor;
