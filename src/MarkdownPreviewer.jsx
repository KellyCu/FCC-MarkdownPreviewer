import React, { useState } from 'react';
import {marked} from 'marked';//NOTE To make a named import (which you must do with named exports), you need to wrap the name of the export you want to import in curly braces, so {} around marked like this:
import DOMPurify from 'dompurify';

function MarkdownPreviewer() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

  
Heres some code, \`<div></div>\`, between 2 backticks.

  
\`\`\`
// this is multi-line code:

  
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

  
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

  
And if you want to get really crazy, even tables:

  
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

  
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.



1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

  
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
  
  const [text, setText] = useState(defaultMarkdown);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const renderSanitizedHTML = (markdown) => {
    const html = marked(markdown); // Convert Markdown to HTML using marked
    const sanitizedHTML = DOMPurify.sanitize(html); // Sanitize HTML using DOMPurify
    return { __html: sanitizedHTML };
  };


  return (
    <div id="con">
    <div id="edit">
        <label id="caption">EDITOR</label>
        <textarea
        id="editor"
            value={text}
            onChange={handleTextareaChange}
            placeholder="Type here..."
        ></textarea>
    </div>
    <div id="edit">
        <label id="caption">Previewer</label>
        <div id="preview" 
        dangerouslySetInnerHTML={renderSanitizedHTML(text)}
        ></div>
    </div>
  </div>
  );
}

export default MarkdownPreviewer;
