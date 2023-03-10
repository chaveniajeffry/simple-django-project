import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  themeName: "Rider",
  themeVersion: "1.0.0",
  fullName: "Rider Vue Free",
  main: {
    type: "default",
    primaryColor: "#009EF7",
    logo: {
      default: "media/logos/logo-default.svg",
      compact: "media/logos/logo-compact.svg",
    },
  },
  loader: {
    logo: "media/logos/logo-compact.svg",
    display: true,
    type: "default",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: true,
    menuIcon: "font",
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  toolbar: {
    display: true,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  aside: {
    display: true,
    theme: "dark",
    fixed: true,
    menuIcon: "svg",
    minimized: false,
    minimize: true,
    hoverable: true,
  },
  content: {
    width: "fixed",
  },
  footer: {
    width: "fluid",
  },
};

export default config;
