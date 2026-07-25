import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 780, margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
      <p style={{ letterSpacing: 2, fontSize: 12, color: "#0a7d3c", fontWeight: 700 }}>SOLAR &amp; BATTERY</p>
      <h1 style={{ fontSize: "2rem", lineHeight: 1.3, color: "#12263a" }}>太陽光・蓄電池 見積もり比較</h1>
      <p style={{ color: "#44586b", lineHeight: 1.8 }}>
        太陽光発電・家庭用蓄電池の費用・補助金・メーカーを、事実ベースの一次データで比較するサイトです。
        価格の相場、国・自治体の補助金、投資回収の考え方を、出典・確認日つきで整理します。
      </p>

      {/* 補助金DBへの導線（第1弾公開） */}
      <Link
        href="/subsidy/"
        style={{ display: "block", border: "1px solid #d9e6dd", background: "#f2f9f5", borderRadius: 14, padding: "1.3rem 1.5rem", textDecoration: "none", marginTop: 24 }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0a7d3c", letterSpacing: 1 }}>公開中</span>
        <p style={{ margin: "6px 0 4px", fontSize: "1.15rem", fontWeight: 700, color: "#12263a" }}>
          太陽光・蓄電池の補助金2026｜国＋自治体データベース →
        </p>
        <p style={{ margin: 0, fontSize: 14, color: "#44586b", lineHeight: 1.7 }}>
          国（SIIのDR補助金・みらいエコ住宅2026）＋自治体7都府県（東京・神奈川・埼玉・千葉・愛知・大阪・福岡）を、対象・単価・上限・期間・受付状況で。全て公式の出典URL・確認日つき。
        </p>
      </Link>

      <p style={{ color: "#8a99a8", lineHeight: 1.8, marginTop: 20, fontSize: 14 }}>
        （準備中：メーカー別・容量別の実勢相場インデックス／投資回収シミュレーター／メーカー比較を順次公開します。）
      </p>

      <footer style={{ marginTop: 48, borderTop: "1px solid #e3e9ee", paddingTop: 20, color: "#8a99a8", fontSize: 12.5, lineHeight: 1.8 }}>
        <p style={{ margin: 0 }}>
          運営：太陽光・蓄電池比較 編集部｜方針：事実ベース・公式の一次情報のみ・出典と確認日を明記。特定の効果や「必ず得をする」といった保証はしません。
        </p>
      </footer>
    </main>
  );
}
