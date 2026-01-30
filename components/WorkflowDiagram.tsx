import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, UserCheck, ShieldCheck } from 'lucide-react';
import { Card } from './UIComponents';

export const WorkflowDiagram: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-b-2 border-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck className="w-8 h-8 text-industrial-accent" />
          <h2 className="text-3xl font-black uppercase">Workflow: Confirmação de Entrega</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-6 border-2 border-black shadow-hard flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4 font-black text-xl border-4 border-white">1</div>
              <h3 className="font-bold uppercase text-sm mb-2">Solicitação Aprovada</h3>
              <p className="font-mono text-xs text-gray-500">Gerente libera o ativo no sistema.</p>
              <div className="mt-4 px-2 py-1 bg-green-100 text-green-800 font-mono text-xs border border-green-800">STATUS: APROVADO</div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 border-2 border-black shadow-hard flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-industrial-accent text-white flex items-center justify-center rounded-full mb-4 font-black text-xl border-4 border-white">2</div>
              <h3 className="font-bold uppercase text-sm mb-2">Ação de Entrega</h3>
              <p className="font-mono text-xs text-gray-500">Admin visualiza botão "Confirmar Entrega".</p>
              <div className="mt-4 px-2 py-1 bg-gray-100 font-mono text-xs border border-gray-400">/confirmar-entrega</div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 border-2 border-black shadow-hard flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full mb-4 border-4 border-black">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold uppercase text-sm mb-2">Validação Segura</h3>
              <p className="font-mono text-xs text-gray-500">Admin escaneia QR Code do Crachá do Usuário.</p>
              <div className="mt-4 flex gap-1 justify-center">
                 <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                 <span className="font-mono text-xs font-bold text-red-600">SCANNING</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 border-2 border-black shadow-hard flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full mb-4 font-black text-xl border-4 border-white">
                  <CheckCircle className="w-6 h-6" />
               </div>
              <h3 className="font-bold uppercase text-sm mb-2">Entrega Concluída</h3>
              <p className="font-mono text-xs text-gray-500">Ativo transferido. Log de auditoria gerado.</p>
              <div className="mt-4 px-2 py-1 bg-green-100 text-green-800 font-mono text-xs border border-green-800">STATUS: ENTREGUE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
