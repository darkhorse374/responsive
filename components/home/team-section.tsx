"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing.",
    featured: true
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  },
  {
    name: "Jean Dupont",
    role: "Directeur Marketing",
    description: "Expert en stratégies d'acquisition et en optimisation des campagnes marketing."
  }
];

export function TeamSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f4a23] to-[#e6ff80] -z-10"></div>
      
      {/* Team container with yellow-green background */}
      
    </section>
  );
}