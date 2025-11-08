import React from "react";
// import { contractsData } from "../data/contractsData";
import { contractsData } from "../contracts/index";

export default function HomePage({ activeContract }) {
  const contract = contractsData[activeContract];

  const highlightCode = (code) => {
    return code;
    //these are completely useless and wrong, better keep deleted
    // .replace(
    //   /(pragma|contract|function|public|private|view|returns|require|mapping|string|uint256|address|memory|payable|bool|struct)/g
    //   // '<span class="keyword">$1</span>'
    // )
    // .replace(/(".*?"|\^0\.8\.0)/g, '<span class="string">$1</span>')
    // .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    // .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="function">$1</span>');
  };

  return (
    <>
      <div className="content-section">
        <div className="section-title">📺 Video Tutorial</div>
        <div className="video-container">
          <iframe
            className="video-embed"
            src={`https://www.youtube.com/embed/${contract.video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="content-section">
        <div className="section-title">💻 {contract.title} Code</div>
        <div className="code-container">
          <pre
            className="code-block"
            dangerouslySetInnerHTML={{ __html: highlightCode(contract.code) }}
          />
        </div>
        <a
          href={contract.github}
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 VIEW ON GITHUB
        </a>
      </div>

      <div className="content-section">
        <div className="section-title">📖 Contract Explanation</div>
        <p className="project-text">
          <strong>{contract.description}</strong>
        </p>
      </div>
    </>
  );
}
