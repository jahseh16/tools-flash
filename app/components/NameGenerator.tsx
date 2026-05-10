
'use client';

import { useState } from 'react';

export default function NameGenerator() {
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [nameType, setNameType] = useState<'gaming' | 'fantasy' | 'business' | 'social'>('gaming');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const nameData = {
    gaming: {
      prefixes: ['Dark', 'Shadow', 'Fire', 'Ice', 'Storm', 'Lightning', 'Phantom', 'Cyber', 'Neon', 'Toxic', 'Blade', 'Ghost', 'Frost', 'Rage', 'Steel'],
      suffixes: ['Hunter', 'Slayer', 'Warrior', 'Master', 'Killer', 'Destroyer', 'Lord', 'King', 'Sniper', 'Ninja', 'Reaper', 'Beast', 'Wolf', 'Dragon', 'Phoenix'],
      words: ['Venom', 'Apex', 'Savage', 'Rampage', 'Chaos', 'Nexus', 'Void', 'Titan', 'Omega', 'Alpha']
    },
    fantasy: {
      prefixes: ['Aether', 'Lunar', 'Solar', 'Mystic', 'Ancient', 'Elder', 'Crystal', 'Starlight', 'Moonbeam', 'Ember', 'Twilight', 'Dawn', 'Raven', 'Silver', 'Golden'],
      suffixes: ['whisper', 'song', 'heart', 'soul', 'wind', 'moon', 'star', 'fire', 'water', 'earth', 'light', 'shadow', 'dream', 'spell', 'magic'],
      words: ['Zephyr', 'Seraph', 'Celestial', 'Arcane', 'Enchanted', 'Ethereal', 'Mystical', 'Legendary', 'Divine', 'Sacred']
    },
    business: {
      prefixes: ['Pro', 'Elite', 'Prime', 'Ultra', 'Mega', 'Super', 'Max', 'Optimal', 'Peak', 'Advanced', 'Premium', 'Expert', 'Master', 'Top', 'Best'],
      suffixes: ['Solutions', 'Systems', 'Tech', 'Works', 'Labs', 'Studio', 'Group', 'Corp', 'Inc', 'Pro', 'Hub', 'Center', 'Zone', 'Base', 'Point'],
      words: ['Innovation', 'Digital', 'Smart', 'Future', 'Global', 'Dynamic', 'Strategic', 'Creative', 'Innovative', 'Modern']
    },
    social: {
      prefixes: ['Cool', 'Sweet', 'Cute', 'Happy', 'Sunny', 'Bright', 'Fresh', 'Pure', 'Soft', 'Gentle', 'Warm', 'Cozy', 'Lovely', 'Pretty', 'Fancy'],
      suffixes: ['vibes', 'mood', 'life', 'style', 'soul', 'heart', 'spirit', 'energy', 'aura', 'glow', 'shine', 'spark', 'bloom', 'dream', 'flow'],
      words: ['Aesthetic', 'Minimal', 'Pastel', 'Vintage', 'Retro', 'Trendy', 'Chic', 'Elegant', 'Graceful', 'Serene']
    }
  };

  const generateNames = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const data = nameData[nameType];
      const newNames: string[] = [];
      
      for (let i = 0; i < 8; i++) {
        const randomType = Math.floor(Math.random() * 3);
        let name = '';
        
        switch (randomType) {
          case 0:
            // Prefix + Suffix
            name = data.prefixes[Math.floor(Math.random() * data.prefixes.length)] + 
                   data.suffixes[Math.floor(Math.random() * data.suffixes.length)];
            break;
          case 1:
            // Word + Number
            name = data.words[Math.floor(Math.random() * data.words.length)] + 
                   Math.floor(Math.random() * 999 + 1);
            break;
          case 2:
            // Prefix + Word
            name = data.prefixes[Math.floor(Math.random() * data.prefixes.length)] + 
                   data.words[Math.floor(Math.random() * data.words.length)];
            break;
        }
        
        newNames.push(name);
      }
      
      setGeneratedNames(newNames);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const typeLabels = {
    gaming: { title: 'Gaming', icon: '🎮', description: 'Nombres épicos para juegos' },
    fantasy: { title: 'Fantasy', icon: '🧙', description: 'Nombres místicos y mágicos' },
    business: { title: 'Business', icon: '💼', description: 'Nombres profesionales' },
    social: { title: 'Social', icon: '✨', description: 'Nombres para redes sociales' }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl mx-auto mb-4">
            ⚡
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Generador de Nombres</h2>
          <p className="text-gray-600">Crea nombres únicos y épicos para cualquier ocasión</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tipo de nombre:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(typeLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setNameType(key as any)}
                  className={`!rounded-button p-4 text-center transition-all ${
                    nameType === key
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{label.icon}</div>
                  <div className="font-medium text-sm">{label.title}</div>
                  <div className="text-xs opacity-75">{label.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={generateNames}
              disabled={isGenerating}
              className="!rounded-button bg-indigo-600 text-white px-8 py-3 hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center space-x-2 mx-auto"
            >
              {isGenerating ? (
                <>
                  <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                  <span>Generando...</span>
                </>
              ) : (
                <>
                  <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Generar Nombres</span>
                </>
              )}
            </button>
          </div>

          {generatedNames.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                Nombres generados:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-800 text-lg">{name}</span>
                    <button
                      onClick={() => copyToClipboard(name)}
                      className="!rounded-button bg-indigo-600 text-white px-3 py-1 text-sm hover:bg-indigo-700 transition-colors flex items-center space-x-1"
                    >
                      <i className="ri-file-copy-line w-3 h-3 flex items-center justify-center"></i>
                      <span>{copiedName === name ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
            <div className="flex items-start space-x-2">
              <i className="ri-lightbulb-line w-4 h-4 flex items-center justify-center text-indigo-600 mt-0.5"></i>
              <div className="text-sm text-indigo-800">
                <p className="font-medium mb-1">Consejos:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cada generación crea 8 nombres únicos</li>
                  <li>Puedes generar tantas veces como quieras</li>
                  <li>Combina diferentes tipos para más variedad</li>
                  <li>Personaliza los nombres generados a tu gusto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
