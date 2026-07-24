export const metadata = {
  title: "太陽光・蓄電池 見積もり比較｜Solar Battery Hikaku",
  description: "太陽光発電・家庭用蓄電池の見積もり・費用・補助金を、複数社の一括見積もりで比較。事実ベースの情報で最適な導入を支援します。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, color: "#1a2b3c" }}>{children}</body>
    </html>
  );
}
