import React from 'react';
import { Briefcase, Store, Factory, Terminal, GraduationCap, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, Badge, Button } from './UIComponents';

export const CommercialCases: React.FC = () => {
  const cases = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Empresa de Médio Porte (Serviços)",
      subtitle: "Consultoria, Contabilidade, Advocacia (150–400 funcionários)",
      problem: "Muitos notebooks, monitores e acessórios 'sumiam' entre home office e escritório. Planilhas Excel desatualizadas geravam brigas sobre quem era responsável por qual equipamento.",
      solution: [
        "Cada colaborador tem seu crachá digital com QR Code no celular.",
        "Ao receber um notebook novo, o gerente de TI escaneia o QR do ativo + o QR do usuário para confirmar entrega e transferir custódia automaticamente.",
        "Quando o funcionário pede transferência (ex.: troca de departamento), cria uma solicitação, aprovação rápida e nova confirmação por QR."
      ],
      result: "Redução de 70–80% em extravios e discussões; auditoria fácil para compliance fiscal/contábil."
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Rede de Varejo ou Franquias",
      subtitle: "Lojas de eletrônicos, farmácias, fast-food (20–80 unidades)",
      problem: "Equipamentos de PDV, impressoras fiscais, tablets de vendas e smartphones corporativos se perdiam entre filiais; manutenção demorada por falta de histórico.",
      solution: [
        "Ativos recebem QR Code na aquisição e são cadastrados com localização (filial + setor).",
        "Técnico de campo escaneia QR do ativo + QR do gerente da loja para confirmar entrega/instalação.",
        "Quando um equipamento vai para manutenção, o status muda para 'Manutenção' e o histórico registra tudo.",
        "Gerente regional acessa o dashboard e vê em tempo real: quantos tablets estão em uso por loja, quais estão em manutenção, pendências."
      ],
      result: "Controle centralizado sem precisar ligar para cada filial; redução significativa em custos de reposição desnecessária."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Indústria ou Manufatura",
      subtitle: "Fábrica, Agronegócio, Logística (Dispositivos IoT)",
      problem: "Tablets rugged, scanners de código de barras, notebooks de chão de fábrica e smartphones de supervisores se perdiam ou tinham manutenção mal controlada.",
      solution: [
        "QR Code em cada dispositivo permite scan rápido no chão de fábrica ou no campo (sem precisar digitar número de série).",
        "Solicitação de empréstimo/devolução feita pelo usuário final via web (ex.: 'preciso de um tablet reserva para inventário').",
        "Transferência de custódia entre turnos ou equipes com validação por QR do recebedor.",
        "Relatórios de movimentações mostram histórico completo para auditorias de segurança do trabalho ou ISO."
      ],
      result: "Menos tempo parado por falta de equipamento; rastreabilidade total para investigações de incidentes."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Empresa de TI / Software House",
      subtitle: "Suporte técnico terceirizado (50–250 colaboradores)",
      problem: "Alto volume de empréstimos de equipamentos para devs, estagiários e técnicos em campo; dificuldade em saber quem está com qual máquina para upgrades ou recalls.",
      solution: [
        "Login via QR + PIN agiliza acesso em estações compartilhadas ou em campo.",
        "Fluxo de solicitação → aprovação → confirmação de entrega por scan do QR do técnico.",
        "Quando um colaborador sai da empresa, o sistema mostra todos os ativos em sua custódia para devolução obrigatória.",
        "Dashboard mostra % de ativos em uso vs. disponíveis, ajudando na compra planejada."
      ],
      result: "Processo de onboarding/offboarding muito mais rápido e seguro; menos risco de multas por licenças ou perda de hardware caro."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Instituições de Ensino / Saúde",
      subtitle: "Escolas, Clínicas, Hospitais (Muitos departamentos)",
      problem: "Notebooks, tablets e equipamentos médicos leves (ex.: dispositivos de telemedicina) circulavam entre professores/médicos sem controle.",
      solution: [
        "Cada professor/médico tem QR pessoal; empréstimo de equipamento para aula ou plantão é confirmado por scan mútuo.",
        "Status 'Em Uso', 'Disponível', 'Manutenção' visível para coordenadores.",
        "Baixa de ativo (write-off) exige aprovação gerencial + registro auditável."
      ],
      result: "Redução drástica de perdas anuais; relatórios para prestação de contas a mantenedoras ou conselhos."
    }
  ];

  return (
    <section id="cases" className="py-20 bg-industrial-black text-white border-b-2 border-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Badge color="orange">DOCUMENTAÇÃO COMERCIAL</Badge>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-4">
              Soluções por Setor
            </h2>
          </div>
          <p className="font-mono text-gray-400 max-w-md text-sm md:text-base border-l-2 border-industrial-accent pl-4">
            O AssetTrack TI resolve dores reais: visibilidade, responsabilização e agilidade em organizações com 50 a 1.500 ativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white text-black p-8 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-4">
                <div className="p-3 bg-black text-white">
                  {item.icon}
                </div>
                <span className="font-mono font-bold text-4xl text-gray-200 opacity-50">0{index + 1}</span>
              </div>

              <h3 className="font-black text-xl uppercase mb-1">{item.title}</h3>
              <p className="font-mono text-xs text-gray-500 mb-4">{item.subtitle}</p>

              <div className="mb-4 bg-red-50 p-3 border-l-4 border-red-500">
                <h4 className="font-bold text-xs uppercase text-red-700 flex items-center gap-1 mb-1">
                  <AlertTriangle size={12} /> Problema Inicial
                </h4>
                <p className="text-xs text-gray-700 leading-tight">{item.problem}</p>
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-xs uppercase text-industrial-accent mb-2">Solução AssetTrack:</h4>
                <ul className="space-y-2 mb-4">
                  {item.solution.map((sol, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-tight">
                      <CheckCircle size={14} className="mt-0.5 text-green-600 flex-shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t-2 border-black">
                <p className="font-mono text-xs">
                  <span className="font-bold bg-industrial-accent text-white px-1">RESULTADO:</span> {item.result}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-industrial-accent p-8 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] flex flex-col justify-center items-center text-center">
            <h3 className="font-black text-3xl uppercase text-white mb-4">Sua empresa se encaixa?</h3>
            <p className="font-mono text-white/90 text-sm mb-6">
              Temos soluções adaptáveis para o porte e segmento da sua organização.
            </p>
            <a href="https://wa.me/5554991680204?text=Gostaria%20de%20saber%20mais%20sobre%3F" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="secondary" className="w-full flex justify-center items-center gap-2">
                FALAR COM DESENVOLVEDOR <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};