const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/general/gen025.svg",
      },
      {
        sectionTitle: "pages",
        route: "/pages",
        svgIcon: "media/icons/duotune/ecommerce/ecm007.svg",
        sub: [
          {
            heading: "aboutUs",
            route: "/pages/about-us",
          },
          {
            heading: "invoice",
            route: "/pages/invoice",
          },
          {
            heading: "faq",
            route: "/pages/faq",
          },
          {
            heading: "wizard",
            route: "/pages/wizard",
            pro: true,
          },
          {
            heading: "pricing",
            route: "/pages/pricing",
            pro: true,
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        sub: [
          {
            heading: "overview",
            route: "/account/overview",
          },
          {
            heading: "settings",
            route: "/account/settings",
            pro: true,
          },
          {
            heading: "security",
            route: "/account/security",
            pro: true,
          },
          {
            heading: "auditLogs",
            route: "/account/audit-logs",
            pro: true,
          },
          {
            heading: "activity",
            route: "/account/activity",
            pro: true,
          },
        ],
      },
      {
        sectionTitle: "authentication",
        route: "/authentication",
        svgIcon: "media/icons/duotune/technology/teh004.svg",
        pro: true,
        sub: [
          {
            sectionTitle: "base",
            route: "/base",
            sub: [
              {
                heading: "signIn",
                route: "/authentication/base/sign-in",
                pro: true,
              },
              {
                heading: "signUp",
                route: "/authentication/base/sign-up",
                pro: true,
              },
              // {
              //   heading: "twoStepsAuth",
              //   route: "/authentication/base/two-steps-auth",
              // },
              {
                heading: "passwordReset",
                route: "/authentication/base/password-reset",
                pro: true,
              },
              // {
              //   heading: "newPassword",
              //   route: "/authentication/base/new-password",
              // },
            ],
          },
          {
            sectionTitle: "extended",
            route: "/extended",
            sub: [
              {
                heading: "multiStep",
                route: "/authentication/extended/multi-steps",
                pro: true,
              },
              // {
              //   heading: "freeTrial",
              //   route: "/authentication/extended/free-trial",
              // },
              {
                heading: "comingSoon",
                route: "/authentication/extended/coming-soon",
                pro: true,
              },
            ],
          },
          {
            sectionTitle: "general",
            route: "/general",
            sub: [
              {
                heading: "welcome",
                route: "/authentication/general/welcome",
                pro: true,
              },
              {
                heading: "verifyEmail",
                route: "/authentication/general/verify-email",
                pro: true,
              },
              {
                heading: "passwordConfirmation",
                route: "/authentication/general/password-confirmation",
                pro: true,
              },
              {
                heading: "closeAccount",
                route: "/authentication/general/close-account",
                pro: true,
              },
              {
                heading: "error404",
                route: "/authentication/general/404",
                pro: true,
              },
              {
                heading: "error500",
                route: "/authentication/general/500",
                pro: true,
              },
            ],
          },
          {
            sectionTitle: "email",
            route: "/email",
            sub: [
              {
                heading: "verifyEmail",
                route: "/authentication/email/verify-email",
                pro: true,
              },
              {
                heading: "passwordReset",
                route: "/authentication/email/password-reset",
                pro: true,
              },
              {
                heading: "passwordChange",
                route: "/authentication/email/password-change",
                pro: true,
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "subscriptions",
        route: "/subscriptions",
        pro: true,
        svgIcon: "media/icons/duotune/ecommerce/ecm002.svg",
        sub: [
          {
            heading: "getStarted",
            route: "/subscriptions/getting-started",
            pro: true,
          },
          {
            heading: "subscriptionList",
            route: "/subscriptions/subscription-list",
            pro: true,
          },
          {
            heading: "addSubscription",
            route: "/subscriptions/add-subscription",
            pro: true,
          },
          {
            heading: "viewSubscription",
            route: "/subscriptions/view-subscription",
            pro: true,
          },
        ],
      },
      {
        sectionTitle: "chat",
        route: "/chat",
        pro: true,
        svgIcon: "media/icons/duotune/communication/com012.svg",
        sub: [
          {
            heading: "privateChat",
            route: "/chat/private-chat",
            pro: true,
          },
          {
            heading: "groupChat",
            route: "/chat/group-chat",
            pro: true,
          },
          {
            heading: "drawerChat",
            route: "/chat/drawer-chat",
            pro: true,
          },
        ],
      },
      {
        heading: "calendar",
        route: "/calendar",
        svgIcon: "media/icons/duotune/general/gen014.svg",
        pro: true,
      },
    ],
  },
];

export default DocMenuConfig;
