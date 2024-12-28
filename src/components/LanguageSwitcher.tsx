import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from './ui/Button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' }
  ];

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
      >
        <Globe className="w-5 h-5" />
        <span className="capitalize">{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </Button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                ${i18n.language === language.code ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
              onClick={() => i18n.changeLanguage(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};