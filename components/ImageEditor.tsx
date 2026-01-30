import React, { useState, useRef } from 'react';
import { Card, Button } from './UIComponents';
import { editImageWithGemini } from '../services/geminiService';
import { Camera, RefreshCw, Upload, Cpu, Zap, Image as ImageIcon } from 'lucide-react';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleImages = [
    { url: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=300", label: "Server Rack" },
    { url: "https://images.unsplash.com/photo-1588702547923-7093a6c3f067?auto=format&fit=crop&q=80&w=300", label: "Workstation" },
    { url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=300", label: "Circuit" }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setFileType(file.type);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSampleClick = async (url: string) => {
      setLoading(true);
      try {
          const response = await fetch(url);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
              setSelectedImage(reader.result as string);
              setFileType(blob.type);
              setGeneratedImage(null);
              setLoading(false);
          };
          reader.readAsDataURL(blob);
      } catch (e) {
          console.error("Error loading sample", e);
          setLoading(false);
      }
  }

  const handleProcess = async () => {
    if (!selectedImage || !prompt) return;

    setLoading(true);
    try {
      const result = await editImageWithGemini(selectedImage, fileType, prompt);
      if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      } else {
        alert("A IA processou a solicitação mas não retornou uma imagem editada. (Pode ter retornado texto: " + result.text + ")");
      }
    } catch (error) {
      alert("Erro ao processar imagem. Verifique o console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gray-100 border-y-2 border-black" id="ai-module">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
           <Cpu size={32} className="text-industrial-accent" />
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Módulo de Inspeção Visual IA</h2>
        </div>
        
        <p className="font-mono text-gray-600 mb-8 max-w-2xl">
          Utilize o poder do <strong className="text-black">Gemini 2.5 Flash</strong> para análise de danos, visualização de modificações em ativos ou tratamento de imagens de inventário.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <Card title="Painel de Controle">
            <div className="space-y-6">
              
              <div className="border-2 border-dashed border-gray-400 bg-gray-50 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-black transition-colors" onClick={() => fileInputRef.current?.click()}>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*"
                />
                <Upload size={32} className="mb-2 text-gray-500" />
                <span className="font-mono text-sm text-gray-500">UPLOAD IMAGEM DO ATIVO</span>
              </div>

              {/* Sample Images */}
              <div>
                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Ou teste com exemplos:</span>
                <div className="flex gap-3">
                    {sampleImages.map((img, i) => (
                        <div key={i} className="group relative cursor-pointer" onClick={() => handleSampleClick(img.url)}>
                            <img 
                            src={img.url} 
                            className="w-16 h-16 object-cover border-2 border-gray-300 group-hover:border-industrial-accent transition-colors" 
                            alt={img.label}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ImageIcon size={16} className="text-white" />
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2">Comando de Processamento (Prompt)</label>
                <textarea
                  className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:ring-4 focus:ring-industrial-accent/20"
                  rows={3}
                  placeholder="Ex: Adicione uma etiqueta de 'MANUTENÇÃO' vermelha no equipamento."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleProcess} 
                disabled={loading || !selectedImage} 
                className={`w-full flex items-center justify-center gap-2 ${loading ? 'opacity-50' : ''}`}
              >
                {loading ? <RefreshCw className="animate-spin" /> : <Zap />}
                {loading ? 'PROCESSANDO...' : 'EXECUTAR PROCESSO IA'}
              </Button>
            </div>
          </Card>

          {/* Visualization */}
          <Card title="Visualização" className="min-h-[400px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 w-fit">ORIGINAL</span>
                <div className="flex-1 border-2 border-gray-300 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Original" className="w-full h-full object-contain absolute inset-0" />
                  ) : (
                    <span className="font-mono text-xs text-gray-400 text-center px-4">AGUARDANDO INPUT</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-bold bg-industrial-accent text-white px-2 py-1 w-fit">PROCESSADO</span>
                <div className="flex-1 border-2 border-gray-300 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                   {generatedImage ? (
                    <img src={generatedImage} alt="Generated" className="w-full h-full object-contain absolute inset-0" />
                  ) : (
                    <span className="font-mono text-xs text-gray-400 text-center px-4">
                        {loading ? 'PROCESSANDO...' : 'AGUARDANDO PROCESSAMENTO'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};