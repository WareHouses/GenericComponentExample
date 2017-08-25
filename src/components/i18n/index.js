import i18next from 'i18next';
import es from './es';
import en from './en';

i18next.init({
  lng: 'es',
  fallbackLng: 'en',
  resources: { es , en }
});

export const langs = ["es","en"]

export function changeLng(lng) {
  i18next.changeLanguage(lng);
}

export default i18next;
