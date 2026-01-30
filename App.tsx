import React from 'react';
import { Button, Badge } from './components/UIComponents';
import { ModuleShowcase } from './components/ModuleShowcase';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { DashboardPreview } from './components/DashboardPreview';
import { VisualsGallery } from './components/VisualsGallery';
import { CommercialCases } from './components/CommercialCases';
import { Shield, Box, Activity, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-industrial-black font-sans selection:bg-industrial-accent selection:text-white scroll-smooth">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-black text-lg">A</div>
          <span className="font-black text-xl tracking-tighter uppercase">AssetTrack TI</span>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-sm font-bold">
          <a href="#visuals" className="hover:text-industrial-accent hover:underline decoration-2 underline-offset-4 transition-all">VISUALIZAÇÃO</a>
          <a href="#dashboard-preview" className="hover:text-industrial-accent hover:underline decoration-2 underline-offset-4 transition-all">DASHBOARD</a>
          <a href="#cases" className="hover:text-industrial-accent hover:underline decoration-2 underline-offset-4 transition-all">DOCUMENTAÇÃO</a>
          <a href="#workflow" className="hover:text-industrial-accent hover:underline decoration-2 underline-offset-4 transition-all">WORKFLOW</a>
          <a href="#specs" className="hover:text-industrial-accent hover:underline decoration-2 underline-offset-4 transition-all">ESPECIFICAÇÕES</a>

        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="text-xs px-4 py-2 hidden md:block">LOGIN</Button>
          <Button variant="primary" className="text-xs px-4 py-2">DEMO</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white border-b-2 border-black overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-10 border-l-2 border-black grayscale"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <Badge color="orange">V 2.0.4 PRODUCTION READY</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 mb-6 max-w-4xl leading-[0.9]">
            Sistema de Gestão <br />
            <span className="text-industrial-accent text-outline-black">AssetTrack TI</span>
          </h1>
          <p className="text-xl md:text-2xl font-mono text-gray-600 mb-10 max-w-2xl border-l-4 border-industrial-accent pl-6">
            Plataforma Industrial para Rastreamento de Ativos, Autenticação QR e Inspeção Visual Inteligente.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button>SOLICITAR ACESSO</Button>
            <Button variant="outline">DOCUMENTAÇÃO API</Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t-2 border-black pt-8">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-industrial-accent" />
              <div>
                <h3 className="font-black text-lg">JWT + QR</h3>
                <p className="font-mono text-xs text-gray-500">AUTH DUPLA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Server className="w-8 h-8 text-industrial-accent" />
              <div>
                <h3 className="font-black text-lg">FastAPI</h3>
                <p className="font-mono text-xs text-gray-500">PYTHON 3.11</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-industrial-accent" />
              <div>
                <h3 className="font-black text-lg">Real-time</h3>
                <p className="font-mono text-xs text-gray-500">RASTREAMENTO</p>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Visual Representation Section (Images related to data) */}
      <VisualsGallery />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Commercial Cases */}
      <CommercialCases />

      {/* Workflow Diagram */}
      <div id="workflow">
        <WorkflowDiagram />
      </div>

      {/* Module Showcase (Detailed specs) */}
      <ModuleShowcase />



      {/* Tech Stack Footer */}
      <footer id="tech" className="bg-industrial-black text-white pt-20 pb-10 border-t-4 border-industrial-accent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-black text-xl mb-4">BACKEND</h3>
              <ul className="font-mono text-sm space-y-2 text-gray-400">
                <li>FastAPI (Python 3.11+)</li>
                <li>PostgreSQL</li>
                <li>Async SQLAlchemy</li>
                <li>JWT Security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-xl mb-4">FRONTEND</h3>
              <ul className="font-mono text-sm space-y-2 text-gray-400">
                <li>React 18</li>
                <li>Tailwind CSS</li>
                <li>html5-qrcode</li>
                <li>Industrial UI</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-xl mb-4">SEGURANÇA</h3>
              <ul className="font-mono text-sm space-y-2 text-gray-400">
                <li>Rate Limiting (SlowAPI)</li>
                <li>Audit Logs</li>
                <li>Token Rotation (90d)</li>
                <li>Bcrypt PIN Hashing</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-xs text-gray-500">© 2026 ASSENT TRACK BY Humberto Moura Neto. SYSTEM OPERATIONAL.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" title="System Status: Online"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;