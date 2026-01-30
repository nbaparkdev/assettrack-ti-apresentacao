import React, { useState } from 'react';
import { Button } from './UIComponents';
import { Activity, CheckCircle, User, XCircle, Search, Bell, Menu } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
    // Mock State for interactivity
    const [requests, setRequests] = useState([
        { id: 101, user: 'Ana Silva', role: 'DESIGN', item: 'MacBook Pro M2', type: 'Empréstimo', date: '10:42' },
        { id: 102, user: 'Carlos Dev', role: 'DEV_OPS', item: 'Monitor Dell 27"', type: 'Manutenção', date: '09:15' },
        { id: 103, user: 'Beatriz UX', role: 'PRODUCT', item: 'Wacom Tablet', type: 'Devolução', date: 'Ontem' },
    ]);

    const removeRequest = (id: number) => {
        setRequests(requests.filter(r => r.id !== id));
    };

    return (
        <section id="dashboard-preview" className="py-16 bg-white border-b-2 border-black">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-10">
                    <Activity className="w-8 h-8 text-industrial-accent" />
                    <h2 className="text-3xl font-black uppercase">Interface: Dashboard Gerencial</h2>
                </div>

                <div className="bg-gray-100 p-2 md:p-6 border-2 border-black shadow-hard">
                    {/* Fake Browser UI / App Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center bg-white border-2 border-black p-4 mb-6 gap-4">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="w-10 h-10 bg-industrial-black text-white flex items-center justify-center font-bold text-lg border-2 border-gray-400">
                                <Menu size={20} />
                            </div>
                            <div className="flex-1 md:flex-none">
                                <h3 className="font-bold uppercase leading-none text-sm md:text-base">Painel de Controle</h3>
                                <span className="font-mono text-xs text-green-600 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> ONLINE
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            <div className="relative mr-2 hidden md:block">
                                <input type="text" placeholder="BUSCAR ATIVO..." className="border-2 border-black pl-8 pr-2 py-2 text-xs font-mono w-48 focus:w-64 transition-all" />
                                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
                            </div>
                            <Button variant="outline" className="py-2 px-3 text-xs whitespace-nowrap">+ ATIVO</Button>
                            <Button variant="outline" className="py-2 px-3 text-xs whitespace-nowrap">SCANNER</Button>
                            <div className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-gray-100 cursor-pointer relative">
                                <Bell size={20} />
                                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {[
                            { label: 'Total Ativos', val: '1,240', color: 'text-black', sub: '+12 essa semana' },
                            { label: 'Em Uso', val: '892', color: 'text-green-600', sub: '72% da frota' },
                            { label: 'Disponíveis', val: '315', color: 'text-blue-600', sub: 'Estoque Central' },
                            { label: 'Manutenção', val: '33', color: 'text-orange-600', sub: '4 críticos' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white border-2 border-black p-4 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-shadow cursor-default">
                                <div className="font-mono text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-2">{stat.label}</div>
                                <div className={`text-3xl font-black ${stat.color} leading-none mb-2`}>{stat.val}</div>
                                <div className="font-mono text-[10px] text-gray-400 border-t border-gray-100 pt-1">{stat.sub}</div>
                            </div>
                        ))}
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Left Column: Requests */}
                        <div className="lg:col-span-2 bg-white border-2 border-black flex flex-col">
                            <div className="bg-industrial-black text-white p-3 font-bold uppercase text-xs md:text-sm flex justify-between items-center">
                                <span className="flex items-center gap-2"><User size={16} /> Solicitações Pendentes</span>
                                <span className="bg-industrial-accent text-black px-2 py-0.5 text-xs font-bold rounded-full">{requests.length}</span>
                            </div>
                            <div className="p-4 flex-1">
                                {requests.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center py-8 text-gray-400 font-mono text-sm opacity-50">
                                        <CheckCircle size={48} className="mb-2" />
                                        <p>Tudo limpo! Nenhuma pendência.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {requests.map((req) => (
                                            <div key={req.id} className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-300 p-3 bg-gray-50 hover:border-black transition-colors group">
                                                <div className="flex items-center gap-3 mb-3 md:mb-0">
                                                    <div className="w-10 h-10 bg-white border border-black flex items-center justify-center font-black text-gray-300">
                                                        {req.user.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm uppercase flex items-center gap-2">
                                                            {req.user}
                                                            <span className="text-[10px] bg-gray-200 px-1 text-gray-600 border border-gray-400">{req.role}</span>
                                                        </div>
                                                        <div className="font-mono text-xs text-gray-500 mt-0.5">
                                                            <span className="text-industrial-accent font-bold">{req.type}</span> • {req.item}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 w-full md:w-auto pl-14 md:pl-0">
                                                    <button onClick={() => removeRequest(req.id)} className="flex-1 md:flex-none bg-white border border-black px-3 py-2 hover:bg-green-100 text-green-700 font-mono text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                                                        <CheckCircle size={14} /> APROVAR
                                                    </button>
                                                    <button onClick={() => removeRequest(req.id)} className="flex-1 md:flex-none bg-white border border-black px-3 py-2 hover:bg-red-100 text-red-700 font-mono text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                                                        <XCircle size={14} /> REJEITAR
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Activity Log */}
                        <div className="bg-white border-2 border-black flex flex-col">
                            <div className="bg-gray-100 text-black border-b-2 border-black p-3 font-bold uppercase text-xs md:text-sm flex items-center gap-2">
                                <Activity size={16} /> Atividade Recente (Log)
                            </div>
                            <div className="p-4 flex-1 overflow-y-auto max-h-[300px] scrollbar-thin">
                                <div className="relative border-l-2 border-gray-300 ml-2 space-y-8 pl-6 py-2">
                                    {[
                                        { time: '10:30', text: 'Entrega confirmada: NB-DELL-09', user: 'Admin', type: 'success' },
                                        { time: '09:15', text: 'Baixa de ativo: MOUSE-LOGI-02', user: 'Tech Lead', type: 'warn' },
                                        { time: '08:45', text: 'Novo cadastro: IPAD-PRO-11', user: 'Admin', type: 'info' },
                                        { time: 'Ontem', text: 'Manutenção iniciada: SRV-RACK-01', user: 'Manager', type: 'warn' },
                                    ].map((log, i) => (
                                        <div key={i} className="relative group">
                                            <div className={`absolute -left-[31px] top-0 w-3 h-3 rounded-full border-2 border-white shadow-sm ${log.type === 'success' ? 'bg-green-500' : log.type === 'warn' ? 'bg-orange-500' : 'bg-blue-500'
                                                }`}></div>
                                            <div className="font-mono text-[10px] text-gray-400 mb-1 flex justify-between">
                                                <span>{log.time}</span>
                                                <span className="text-gray-300 group-hover:text-black transition-colors">{log.user}</span>
                                            </div>
                                            <div className="font-bold text-xs leading-tight text-gray-800">{log.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-3 border-t-2 border-black bg-gray-50 text-center">
                                <a href="#" className="font-mono text-xs text-industrial-accent hover:underline font-bold">VER LOG COMPLETO {'->'}</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};