"use cliente";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo y descripción */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/qorex_black.png"
              alt="Logo"
              width={160}
              height={60}
              className="object-contain aspect-auto object-left"
            />
            {/* <span className="font-bold text-lg text-gray-900">Qorex Group INC</span> */}
          </div>
          <p className="text-gray-500">
            Create Amazing Business Opportunity
          </p>

          {/* Íconos de redes sociales (coloca aquí tus íconos) */}
          <div className="flex space-x-4">
            {/* Ejemplo de íconos vacíos */}
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
            <span className="w-5 h-5 bg-gray-200 rounded" />
          </div>

          {/* Estado del sistema */}
          <div>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
              ● How can we help you?
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>WhatsApp <span className="text-green-600 text-xs">New</span></li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Email</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Explore</h4>
          <ul className="space-y-1">
            <li>Barnds</li>
            <li>Questions</li>
            <li>How can we help you</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Hashnode</li>
            <li>Careers</li>
            <li>Logos and media</li>
            <li>Changelog</li>
            <li>Feature Requests</li>
          </ul>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Blogs</h4>
          <ul className="space-y-1">
            <li>Official Blog</li>
            <li>Engineering Blog</li>
            <li>Hashnode Townhall</li>
          </ul>
        </div>

        {/* Partner & Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Partner with us</h4>

          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Support docs</li>
            <li>Contact</li>
            <li>Join discord</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t text-center py-4 text-xs text-gray-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© 2024 Hashnode — LinearBytes Inc.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Code of conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
