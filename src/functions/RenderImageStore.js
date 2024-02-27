export function RenderSliderImageStore(store, id) {
  const imageStore = store?.filter(e => e.imageSlider._id === id);
  return imageStore[0].imageSlider.image;
};

export function RenderVisorImageStore(store, id) {
  const imageStore = store?.filter(e => e.imageVisor._id === id);
  return imageStore[0]?.imageVisor?.image || null;
};