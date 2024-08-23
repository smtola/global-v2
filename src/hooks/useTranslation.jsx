// src/hooks/useTranslation.js
import { useState, useEffect } from 'react';
import { supabase } from '../config/db';

export const useTranslation = (langCode) => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const { data, error } = await supabase
        .from('translations')
        .select('key, value')
        .eq('lang_code', langCode);

      if (error) {
        console.error('Error fetching translations:', error);
      } else {
        const translationsMap = data.reduce((acc, { key, value }) => {
          acc[key] = value;
          return acc;
        }, {});
        setTranslations(translationsMap);
      }
    };

    fetchTranslations();
  }, [langCode]);

  return translations;
};
