// サイトマップ自動生成(独自ドメイン取得後はBASEを差し替える)
const BASE = "https://solar-battery-hikaku.pages.dev";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/subsidy",
    "/subsidy/tokyo",
    "/subsidy/kanagawa",
    "/subsidy/saitama",
    "/subsidy/chiba",
    "/subsidy/aichi",
    "/subsidy/osaka",
    "/subsidy/fukuoka",
    "/subsidy/hokkaido",
    "/subsidy/miyagi",
    "/subsidy/ibaraki",
    "/subsidy/gunma",
    "/subsidy/shizuoka",
    "/subsidy/kyoto",
    "/subsidy/hyogo",
    "/subsidy/hiroshima",
    "/price",
    "/simulator",
    "/makers",
    "/guide",
    "/guide/solar-quit",
    "/guide/battery-worth",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r}/`.replace(/\/\/$/, "/"),
    changeFrequency: r.startsWith("/subsidy") ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
