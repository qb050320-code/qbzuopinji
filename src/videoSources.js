// Set public HTTPS MP4 URLs in .env.local or the hosting build environment.
export const videoSources = {
  'si-yuan': import.meta.env.VITE_SI_YUAN_VIDEO_URL?.trim(),
  'time-joinery': import.meta.env.VITE_TIME_JOINERY_VIDEO_URL?.trim(),
};
export function resolveVideoSource(project) {
  const external = videoSources[project.id];
  if (!external) return project.video;
  try {
    const url = new URL(external);
    if (url.protocol === 'https:') return url.href;
  } catch {}
  console.warn('Invalid external video URL for', project.id);
  return project.video;
}
