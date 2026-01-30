import React, { useState } from 'react';
import { Table, Badge, Tabs, Card } from './UIComponents';
import { Lock, Box, QrCode, ClipboardList, Activity, Users, Wrench, History, Building, ShieldAlert, FileText } from 'lucide-react';

export const ModuleShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      title: "Autenticação",
      icon: <Lock className="mb-2" />,
      content: (
        <div className="space-y-6">
          <Table headers={['Funcionalidade', 'Rota', 'Descrição']}>
            <tr><td className="p-3 font-bold">Login</td><td className="p-3 text-gray-600">/login</td><td className="p-3">JWT Http-only</td></tr>
            <tr><td className="p-3 font-bold">Login QR</td><td className="p-3 text-gray-600">/login/qr</td><td className="p-3">Auth Alternativa (QR+PIN)</td></tr>
            <tr><td className="p-3 font-bold">Meu QR</td><td className="p-3 text-gray-600">/meu-qrcode</td><td className="p-3">Crachá Digital</td></tr>
            <tr><td className="p-3 font-bold">Perfil</td><td className="p-3 text-gray-600">/profile</td><td className="p-3">Dados Pessoais</td></tr>
          </Table>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             {['ADMIN', 'GERENTE_TI', 'TECNICO', 'USUARIO'].map(role => (
               <div key={role} className="bg-black text-white font-mono text-center p-2 text-xs border-2 border-white shadow-md">{role}</div>
             ))}
          </div>
        </div>
      )
    },
    {
      title: "Ativos",
      icon: <Box className="mb-2" />,
      content: (
        <div className="space-y-4">
            <Table headers={['Ação', 'Endpoint', 'Permissão']}>
            <tr><td className="p-3 font-bold">Listar Ativos</td><td className="p-3">/assets</td><td className="p-3"><Badge>Todos</Badge></td></tr>
            <tr><td className="p-3 font-bold">Detalhes</td><td className="p-3">/assets/{'{id}'}</td><td className="p-3"><Badge>Todos</Badge></td></tr>
            <tr><td className="p-3 font-bold">Novo Ativo</td><td className="p-3">/assets/new</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
            <tr><td className="p-3 font-bold">Scanner</td><td className="p-3">/assets/scanner</td><td className="p-3"><Badge>Todos</Badge></td></tr>
            <tr><td className="p-3 font-bold">Baixa</td><td className="p-3">/assets/{'{id}'}/baixa</td><td className="p-3"><Badge color="orange">Admin</Badge></td></tr>
            </Table>
            <div className="flex gap-2 flex-wrap">
                {['Disponível', 'Em Uso', 'Manutenção', 'Armazenado', 'Baixado'].map(status => (
                    <Badge key={status} color="gray">{status}</Badge>
                ))}
            </div>
        </div>
      )
    },
    {
      title: "Solicitações",
      icon: <FileText className="mb-2" />,
      content: (
        <div className="space-y-6">
            <p className="font-mono text-sm text-gray-600">Gerenciamento de empréstimos e transferências de custódia.</p>
            <Table headers={['Funcionalidade', 'Rota', 'Permissão']}>
                <tr><td className="p-3 font-bold">Minhas Solicitações</td><td className="p-3">/solicitacoes</td><td className="p-3"><Badge>Todos</Badge></td></tr>
                <tr><td className="p-3 font-bold">Nova Solicitação</td><td className="p-3">/solicitacoes/new</td><td className="p-3"><Badge>Todos</Badge></td></tr>
                <tr><td className="p-3 font-bold">Aprovar</td><td className="p-3">/admin/solicitacoes/{'{id}'}/approve</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
                <tr><td className="p-3 font-bold">Rejeitar</td><td className="p-3">/admin/solicitacoes/{'{id}'}/reject</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
            </Table>
        </div>
      )
    },
    {
      title: "Manutenção",
      icon: <Wrench className="mb-2" />,
      content: (
        <Table headers={['Funcionalidade', 'Rota', 'Permissão']}>
          <tr><td className="p-3 font-bold">Listar Manutenções</td><td className="p-3">/maintenance</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
          <tr><td className="p-3 font-bold">Registrar</td><td className="p-3">/assets/{'{id}'}/manutencao</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
          <tr><td className="p-3 font-bold">Finalizar</td><td className="p-3">/maintenance/{'{id}'}/complete</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
        </Table>
      )
    },
    {
      title: "Histórico",
      icon: <History className="mb-2" />,
      content: (
        <div className="space-y-4">
             <Table headers={['Funcionalidade', 'Rota', 'Permissão']}>
                <tr><td className="p-3 font-bold">Ver Histórico</td><td className="p-3">/movimentacoes</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
             </Table>
             <div className="border-2 border-dashed border-gray-400 p-4 bg-gray-50">
                <h4 className="font-bold text-sm uppercase mb-3">Tipos de Movimentação (Log)</h4>
                <div className="grid grid-cols-2 gap-2">
                    {['EMPRESTIMO', 'DEVOLUCAO', 'TRANSFERENCIA', 'MANUTENCAO', 'BAIXA', 'CADASTRO'].map(type => (
                        <div key={type} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-industrial-accent"></div>
                            <span className="font-mono text-xs">{type}</span>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      )
    },
    {
      title: "Segurança",
      icon: <ShieldAlert className="mb-2" />,
      content: (
          <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black text-white p-4 border border-gray-700">
                      <h4 className="font-bold text-industrial-accent mb-2">Rate Limiting (SlowAPI)</h4>
                      <ul className="text-xs font-mono space-y-1">
                          <li>Login QR: 10/min</li>
                          <li>Regenerar Token: 3/hora</li>
                          <li>Configurar PIN: 5/hora</li>
                          <li>Consulta Perfil: 30/min</li>
                      </ul>
                  </div>
                  <div className="bg-white border-2 border-black p-4">
                      <h4 className="font-bold mb-2">Protocolos</h4>
                      <ul className="text-xs font-mono space-y-1">
                          <li>• JWT HTTP-only Cookies</li>
                          <li>• PIN Hashing (Bcrypt)</li>
                          <li>• Expiração Token QR: 90 dias</li>
                          <li>• Logs de Auditoria Completos</li>
                      </ul>
                  </div>
              </div>
          </div>
      )
    },
    {
        title: "Admin",
        icon: <Building className="mb-2" />,
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold uppercase text-sm mb-2 text-industrial-accent">Gestão de Usuários</h4>
                    <Table headers={['Ação', 'Rota', 'Permissão']}>
                        <tr><td className="p-3 font-bold">Listar</td><td className="p-3">/admin/users</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
                        <tr><td className="p-3 font-bold">Editar</td><td className="p-3">/users/{'{id}'}/edit</td><td className="p-3"><Badge color="black">Admin</Badge></td></tr>
                        <tr><td className="p-3 font-bold">Ativar/Desativar</td><td className="p-3">/users/{'{id}'}/toggle</td><td className="p-3"><Badge color="black">Admin</Badge></td></tr>
                    </Table>
                </div>
                <div>
                    <h4 className="font-bold uppercase text-sm mb-2 text-industrial-accent">Departamentos (Setores)</h4>
                    <Table headers={['Ação', 'Rota', 'Permissão']}>
                        <tr><td className="p-3 font-bold">Gerenciar</td><td className="p-3">/setores</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
                        <tr><td className="p-3 font-bold">Criar</td><td className="p-3">/setores/new</td><td className="p-3"><Badge color="orange">Admin/Gerente</Badge></td></tr>
                    </Table>
                </div>
            </div>
        )
    }
  ];

  return (
    <section className="py-16 bg-white border-b-2 border-black" id="specs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
                <h2 className="text-3xl font-black uppercase flex items-center gap-2">
                    <Activity className="text-industrial-accent" />
                    Especificações Técnicas
                </h2>
                <p className="font-mono text-gray-500 mt-2 max-w-xl">
                    Detalhamento completo das rotas, permissões e fluxos de dados do sistema AssetTrack TI.
                </p>
            </div>
            <div className="font-mono text-xs text-right hidden md:block">
                LAST UPDATE: 2024-05-20<br/>
                DOC_ID: #8821-X
            </div>
        </div>

        <Tabs 
            tabs={modules.map(m => m.title)} 
            activeTab={activeTab} 
            onChange={setActiveTab} 
        />

        <div className="grid lg:grid-cols-3 gap-8 animate-fadeIn">
            <div className="lg:col-span-2">
                <Card title={modules[activeTab].title} className="h-full min-h-[400px]">
                    {modules[activeTab].content}
                </Card>
            </div>
            <div className="space-y-6">
                <div className="bg-industrial-black text-white p-6 border-2 border-black shadow-hard h-full flex flex-col justify-center items-center text-center">
                    <div className="p-4 bg-industrial-accent rounded-full mb-4 text-black">
                        {modules[activeTab].icon}
                    </div>
                    <h3 className="font-bold text-xl uppercase mb-2">Módulo: {modules[activeTab].title}</h3>
                    <p className="font-mono text-sm text-gray-400">
                        Este módulo integra diretamente com o backend FastAPI e utiliza validação via Pydantic Schemas.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
