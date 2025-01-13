import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Havoc 101",
    pageTitleSuffix: " - Havoc 101",
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "tofutush.github.io/havoc101",
    ignorePatterns: ["private", "templates", ".obsidian", "misc"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Lexend",
        body: "Lexend",
        code: "Consolas",
      },
      colors: {
        lightMode: {
          light: "#fff9f2",
          lightgray: "#0001",
          gray: "#0003",
          darkgray: "#121212",
          dark: "#121212",
          secondary: "#e56b6f",
          tertiary: "#e56b6f",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#fff1",
          gray: "#fff3",
          darkgray: "#fff9f2",
          dark: "#fff9f2",
          secondary: "#f4979a",
          tertiary: "#e56b6f",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
