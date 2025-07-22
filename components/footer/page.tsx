"use cliente";

import Image from "next/image";
import Link from "next/link";
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
          <ul className="space-y-1 flex flex-col">
            <Link href="https://wa.me/+17866782951" rel="noopener noreferrer" target="_blank">WhatsApp <span className="text-green-600 text-xs">New</span></Link>
            <Link href="https://www.linkedin.com/company/qorex-group-inc/" rel="noopener noreferrer" target="_blank">Linkedin</Link>
            <Link href="mailto:sales@qorexgroup.com">Email</Link>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
          <ul className="space-y-1">
            <li>5900 NW 97th AveSuite C-21Doral, FL 33178</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Brands</li>
            <li>Mission & Vision</li>
          </ul>
        </div>

        {/* Partner & Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Support docs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t text-center py-4 text-xs text-gray-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Qorex Group Inc.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <a href="#" className="hover:underline">Code of conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
