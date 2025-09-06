export function cl(url: string, opts?: { w?: number; q?: number; f?: 'auto'|'webp' }) {
  if (!url) return url;
  // prosty parser: wstaw transformacje po `/upload/`
  const i = url.indexOf('/upload/');
  if (i === -1) return url;
  const parts: string[] = [];
  if (opts?.f) parts.push(`f_${opts.f}`);
  if (opts?.q) parts.push(`q_${opts.q}`);
  if (opts?.w) parts.push(`w_${opts.w}`);
  if (!parts.length) return url;
  return url.slice(0, i+8) + parts.join(',') + '/' + url.slice(i+8);
}
