import { jsx as _jsx } from "react/jsx-runtime";
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import { useEffect, useRef } from 'react';
const CodeSnippet = ({ code, language }) => {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code]);
    return (_jsx("pre", { className: `language-${language}`, children: _jsx("code", { className: `language-${language}`, ref: codeRef, children: code }) }));
};
export default CodeSnippet;
