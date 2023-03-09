export default {
  routes: [
    {
      method: "POST",
      path: "/games/populate",
      handler: "game.populate",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
