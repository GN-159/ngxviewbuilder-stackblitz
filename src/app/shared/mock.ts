import { IStructure } from 'ngx-view-builder';

const STORAGE_KEY = 'ngx-view-builder-demo.structure.v1';

export const initialStructure: IStructure = {
  settings: { language: 'en', renderMode: 'page' },
  pages: [
    { name: 'page1', rows: [{ columns: [{ elementRef: 'fullName' }, { elementRef: 'email' }] }] },
  ],
  elements: {
    page1: { name: 'page1', label: 'Page 1', type: 'page' },
    fullName: { name: 'fullName', label: 'Full name', type: 'text', required: true, placeholder: 'Jane Doe' },
    email: { name: 'email', label: 'Email', type: 'text', placeholder: 'jane@company.com' },
  },
  localization: { defaultLanguage: 'en', languages: ['en'] },
} as unknown as IStructure;

export const initialData: Record<string, unknown> = {
  fullName: 'Jane Doe',
  email: 'jane@company.com',
};

export function loadStructure(): IStructure {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialStructure;
    return JSON.parse(raw) as IStructure;
  } catch {
    return initialStructure;
  }
}

export function saveStructure(structure: IStructure): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(structure));
  } catch {}
}
