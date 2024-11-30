// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white shadow mt-auto">
      <div className="container mx-auto px-4 py-3 text-center">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
