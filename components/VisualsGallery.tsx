import React from 'react';
import { Smartphone, QrCode } from 'lucide-react';

export const VisualsGallery: React.FC = () => {
  return (
    <section id="visuals" className="py-20 bg-gray-100 border-b-2 border-black">
        <div className="container mx-auto px-6">
             <div className="flex items-center gap-3 mb-10">
                <Smartphone className="w-8 h-8" />
                <h2 className="text-3xl font-black uppercase">Identidade & Dispositivos</h2>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Visual 1: Digital User Badge */}
                <div className="bg-white p-6 shadow-hard border-2 border-black flex flex-col items-center group hover:border-industrial-accent transition-colors">
                    <h3 className="font-mono font-bold uppercase mb-6 self-start border-b-2 border-industrial-accent">01. Crachá Digital (Mobile)</h3>
                    <div className="w-64 bg-industrial-black text-white p-4 border-4 border-gray-800 rounded-sm relative shadow-2xl transition-transform group-hover:scale-105 cursor-default">
                        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex flex-col items-center mt-4">
                            <div className="w-24 h-24 bg-white p-1 mb-4">
                                <QrCode className="w-full h-full text-black" />
                            </div>
                            <h4 className="font-black text-xl uppercase tracking-widest">TECNICO</h4>
                            <p className="font-mono text-xs text-gray-400">ID: #88291-TX</p>
                            <div className="mt-6 w-full border-t border-gray-700 pt-4">
                                <div className="flex justify-between text-xs font-mono mb-2">
                                    <span className="text-gray-500">NÍVEL</span>
                                    <span className="text-industrial-accent">L2 ACCESS</span>
                                </div>
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-gray-500">EXPIRA</span>
                                    <span>24H</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual 2: Asset Tag */}
                <div className="bg-white p-6 shadow-hard border-2 border-black flex flex-col items-center group hover:border-industrial-accent transition-colors">
                    <h3 className="font-mono font-bold uppercase mb-6 self-start border-b-2 border-industrial-accent">02. Etiqueta de Ativo</h3>
                    <div className="w-full max-w-sm bg-gray-200 border-4 border-black p-4 relative transition-transform group-hover:rotate-1 cursor-default shadow-sm">
                        <div className="flex gap-4">
                            <div className="w-24 h-24 bg-black p-2 flex items-center justify-center">
                                <QrCode className="text-white w-full h-full" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-black text-2xl uppercase leading-none">MacBook Pro</h4>
                                    <span className="font-mono text-xs block mt-1">S/N: C02X8291L</span>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <span className="bg-industrial-accent text-white font-bold text-xs px-2 py-1">TI-DEV</span>
                                    <span className="bg-black text-white font-bold text-xs px-2 py-1">EM USO</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-black text-white px-2 font-mono text-xs">PROPERTY OF ASSETTRACK</div>
                    </div>
                    <div className="mt-auto pt-6 text-center">
                         <div className="font-mono text-xs text-gray-500">
                             Gera PDF/ZPL automático para impressoras térmicas (Zebra/Brother).
                         </div>
                    </div>
                </div>

                {/* Visual 3: Mini Dashboard */}
                <div className="bg-white p-6 shadow-hard border-2 border-black group hover:border-industrial-accent transition-colors hidden lg:block">
                     <h3 className="font-mono font-bold uppercase mb-6 border-b-2 border-industrial-accent inline-block">03. Analytics Widget</h3>
                     <div className="space-y-4">
                        <div className="flex items-end justify-between h-32 px-2 border-b-2 border-black pb-1">
                             <div className="w-8 bg-gray-300 relative group-hover:bg-gray-400 transition-colors h-[60%]"></div>
                             <div className="w-8 bg-industrial-accent relative h-[80%] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                             <div className="w-8 bg-gray-300 relative group-hover:bg-gray-400 transition-colors h-[40%]"></div>
                             <div className="w-8 bg-gray-300 relative group-hover:bg-gray-400 transition-colors h-[90%]"></div>
                             <div className="w-8 bg-gray-300 relative group-hover:bg-gray-400 transition-colors h-[50%]"></div>
                        </div>
                        <div className="flex justify-between font-mono text-[10px] text-gray-500">
                             <span>SEG</span>
                             <span>TER</span>
                             <span>QUA</span>
                             <span>QUI</span>
                             <span>SEX</span>
                        </div>
                        <div className="bg-black text-white p-3 font-mono text-xs mt-4 flex justify-between items-center shadow-hard-sm">
                            <span>TOTAL:</span>
                            <span className="font-bold text-industrial-accent text-lg">1,402</span>
                        </div>
                     </div>
                </div>
             </div>
        </div>
      </section>
  );
};
