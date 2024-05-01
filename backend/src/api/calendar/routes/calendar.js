module.exports = {
  routes: [
    {
      method: "GET",
      path: "/calendar",
      handler: "calendar.action",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
