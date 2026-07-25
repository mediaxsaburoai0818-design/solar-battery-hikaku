import Link from "next/link";
import SimulatorClient from "./SimulatorClient";

export const metadata = {
  title: "太陽光・蓄電池の投資回収シミュレーター｜元が取れる?を公的データで試算【2026】",
  description:
    "太陽光発電・家庭用蓄電池の初期費用・補助金・回収年数を、経産省・SIIの公的データの目安で試算。出力・容量・地域の補助金・自家消費率を入れると、実質初期費用と単純回収年数を計算します。前提と出典を明記し、誇大な『必ず得』はしません。",
};

const CONFIRMED_AT = "2026-07-25";

export default function SimulatorPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      <p style={{ letterSpacing: 2, fontSize: 12, color: "#0a7d3c", fontWeight: 700, margin: 0 }}>SIMULATOR</p>
      <h1 style={{ fontSize: "1.85rem", lineHeight: 1.35, margin: "6px 0 12px", color: "#12263a" }}>
        太陽光・蓄電池 投資回収シミュレーター
      </h1>
      <p style={{ color: "#44586b", lineHeight: 1.8, marginBottom: 20 }}>
        「元が取れる？」を、<strong>経産省・SIIの公的データの目安</strong>で試算します。出力・容量・お住まいの地域の補助金・自家消費率を入れると、
        <strong>実質初期費用</strong>と<strong>単純回収年数</strong>を計算します。
      </p>

      <SimulatorClient />

      {/* 前提と出典 */}
      <section style={{ marginTop: 30, borderTop: "1px solid #e3e9ee", paddingTop: 22 }}>
        <h2 style={{ fontSize: "1.05rem", color: "#1a2b3c", margin: "0 0 10px" }}>試算の前提と出典</h2>
        <ul style={{ color: "#44586b", fontSize: 13.5, lineHeight: 1.9, paddingLeft: "1.1rem", margin: 0 }}>
          <li>太陽光の費用単価：新築 28.9万円/kW・既築 32.6万円/kW（経産省 調達価格等算定委員会・実績平均・税抜）</li>
          <li>蓄電池の費用単価：12.5万円/kWh（SII目標価格・工事費込・税抜）</li>
          <li>年間発電量：1kWあたり約1,100kWh（一般的な目安・設置条件で変動）</li>
          <li>自家消費 27円/kWh（回避できる電気代の目安）／売電 10円/kWh（卒FIT後の目安）</li>
          <li>補助金：<Link href="/subsidy/" style={{ color: "#0a7d3c" }}>補助金データベース</Link>の一次確認値（東京都・神奈川・埼玉・千葉 等・2026-07-25時点）を簡易モデル化。上限・条件（同時導入必須等）は各制度ページで要確認。</li>
        </ul>
        <p style={{ color: "#8a99a8", fontSize: 12.5, lineHeight: 1.8, marginTop: 12 }}>
          ※本シミュレーターは公的データの目安による<strong>単純試算</strong>で、経年劣化・パワコン交換・メンテ費・電気料金変動・税金は含みません。
          特定の効果や「必ず得をする」ことを保証するものではありません（確認日 {CONFIRMED_AT}）。正確な金額は各社の見積もりでご確認ください。
        </p>
        <p style={{ marginTop: 16, display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href="/price/" style={{ color: "#0a7d3c", fontWeight: 700 }}>→ 費用相場（kW・容量別）</Link>
          <Link href="/subsidy/" style={{ color: "#0a7d3c", fontWeight: 700 }}>→ 補助金データベース</Link>
          <Link href="/" style={{ color: "#0a7d3c", fontWeight: 700 }}>← トップへ戻る</Link>
        </p>
      </section>
    </main>
  );
}
