const routes = {
  home: "/",
  auth:{
    index: "/auth",
    signin: "/auth/signin",
    signup: "/auth/signup",
  },
  support: {
    index: "/support",
    contact: "/support/contact",
    about: "/support/about",
    privacy: "/support/about/privacy",
    terms: "/support/about/terms",
    welcome: "/support/about/welcome",
    page: "/support/about/page",
    agreement:{
      terms: "/auth/signup/agreement/terms",
      conditions: "/auth/signup/agreement/conditions"
    },
  }
};

export default routes;