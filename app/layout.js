import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "太陽光・蓄電池 見積もり比較｜Solar Battery Hikaku",
  description:
    "太陽光発電・家庭用蓄電池の費用・補助金・投資回収を、公的な一次データと出典・確認日つきで比較。補助金データベース、費用相場、回収シミュレーターを公開中。",
};

function LogoMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="21" cy="9" r="5.2" fill="#f5b120" />
      <g stroke="#f5b120" strokeWidth="1.6" strokeLinecap="round">
        <path d="M21 1.2v2" />
        <path d="M28.8 9h-2" />
        <path d="M26.5 3.5l-1.4 1.4" />
      </g>
      <rect x="2" y="12" width="17" height="12" rx="2" fill="#0c4b32" />
      <g stroke="#3ec278" strokeWidth="1.1">
        <path d="M2.5 18h16" />
        <path d="M8 12.5v11" />
        <path d="M13.5 12.5v11" />
      </g>
      <rect x="8.5" y="24" width="4" height="3" rx="0.8" fill="#0c4b32" />
    </svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="sb-header">
          <div className="sb-header-in">
            <Link href="/" className="sb-logo">
              <LogoMark />
              <span>
                太陽光・蓄電池比較
                <small>SOLAR × BATTERY DATA</small>
              </span>
            </Link>
            <nav className="sb-nav">
              <Link href="/subsidy/">補助金DB</Link>
              <Link href="/price/">費用相場</Link>
              <Link href="/simulator/">回収シミュレーター</Link>
              <Link href="/guide/">損得ガイド</Link>
              <Link href="/makers/">メーカー比較</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="sb-footer">
          <div className="sb-footer-in">
            <div className="sb-footer-nav">
              <Link href="/subsidy/">補助金データベース</Link>
              <Link href="/price/">費用相場</Link>
              <Link href="/simulator/">投資回収シミュレーター</Link>
              <Link href="/guide/">損得ガイド</Link>
              <Link href="/makers/">蓄電池メーカー比較</Link>
            </div>
            <p style={{ margin: 0 }}>
              運営：太陽光・蓄電池比較 編集部｜方針：事実ベース・公式の一次情報のみ・出典と確認日を明記。
              特定の効果や「必ず得をする」といった保証はしません。補助金・価格は流動的なため、申請・契約前に必ず公式情報をご確認ください。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
