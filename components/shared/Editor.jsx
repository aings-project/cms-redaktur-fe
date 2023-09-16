import React, { useEffect, useRef } from "react";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import "@mdxeditor/editor/style.css";

const Editor = ({ onChange, className, placeholder }) => {
  const ref = useRef();

  return (
    <MDXEditor
      className={className}
      markdown={placeholder}
      plugins={
        onChange && [
          toolbarPlugin({
            toolbarContents: () => (
              <div className="flex">
                <UndoRedo />
                <BoldItalicUnderlineToggles />
              </div>
            ),
          }),
        ]
      }
      ref={ref}
      onChange={onChange}
    />
  );
};

export default Editor;
