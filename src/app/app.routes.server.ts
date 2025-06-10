import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'employees',
    renderMode: RenderMode.Client,
  },
  {
    path: 'news',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'faq',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
