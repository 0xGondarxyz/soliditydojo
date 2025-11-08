import React from "react";

export default function AboutPage() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-title">Welcome to SolidityDojo</div>
        <p className="hero-text">
          Your ultimate destination for learning Solidity and smart contract
          development! This platform provides comprehensive tutorials,
          real-world examples, and hands-on code you can deploy and test
          yourself. Whether you're a beginner or an advanced developer, we've
          got resources for everyone.
        </p>
        <a
          href="https://youtube.com"
          className="youtube-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶️ VISIT MY YOUTUBE CHANNEL
        </a>
      </div>

      <div className="project-section">
        <div className="project-title">🎯 About This Project</div>
        <p className="project-text">
          <strong>SolidityDojo</strong> was created to bridge the gap between
          blockchain theory and practical smart contract development. Each
          contract comes with detailed video explanations, complete source code,
          and GitHub repositories you can clone and modify.
          <br />
          <br />
          <strong>What You'll Learn:</strong> From basic storage contracts to
          complex DeFi protocols, we cover everything you need to become a
          proficient Solidity developer. Our tutorials are structured
          progressively, starting with foundational concepts and advancing to
          production-ready patterns.
          <br />
          <br />
          <strong>Created by:</strong> [Your Name Here] - Blockchain Developer &
          Educator
          <br />
          <br />
          This platform is continuously updated with new contracts, tutorials,
          and best practices from the ever-evolving Ethereum ecosystem. Join our
          community and start building the decentralized future today!
        </p>
      </div>
    </>
  );
}
