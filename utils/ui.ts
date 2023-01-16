export const disableBodyScroll = () => {
  const body = document.body;

  body.style.overflow = "hidden";
};

export const enableBodyScroll = () => {
  const body = document.body;

  body.style.overflow = "scroll";
};
