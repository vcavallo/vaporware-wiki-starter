import { DefaultSeoProps } from "next-seo";

const description =
  "Wiki knowledge base for the OPfN Pallas project. An open source, distributed operating function personal server.";
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | OPfN wiki",
  defaultTitle: "OPfN Wiki",
  description,

  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "OPfN Wiki",
    description,
  },
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
  ],
};

export default config;
