export const pressableStyle = (platform) =>
  platform === "ios" ? ({ pressed }) => (pressed ? { opacity: 0.25 } : {}) : {};
