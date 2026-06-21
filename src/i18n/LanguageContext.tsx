import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import en from './en'
import es from './es'

export type Lang = 'en' | 'es'
export type Dict = typeof en

const dictionaries: Record<Lang, Dict> = { en, es }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* ignore */
  }
  // Default to English (with Spanish available), per requirement.
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(() => setLangState((p) => (p === 'en' ? 'es' : 'en')), [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
