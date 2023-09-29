export function renderDriveImage(id) { 
  if (!id) return null;
  return `https://drive.google.com/uc?export=view&id=${id}`;
};