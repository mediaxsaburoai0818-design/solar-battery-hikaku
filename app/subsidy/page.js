import Link from "next/link";
import SubsidyFilter from "./SubsidyFilter";
import { SUBSIDIES, REGIONS_WITH_LOCAL, ALL_PREFECTURES } from "../data/subsidies";

export const metadata = {
  title: "太陽光・蓄電池の補助金2026｜国＋自治体を一覧【出典・確認日つき】",
  description:
    "太陽光発電・家庭用蓄電池の補助金を、国（SIIのDR補助金・みらいエコ住宅2026）＋自治体（東京都・神奈川・埼玉・千葉・愛知・大阪・福岡 の令和8年度 等）でまとめた最新データベース。各制度の対象・単価・上限・期間・受付状況を、公式の出典URLと確認日つきで掲載します。補助金は流動的なため『公式で確認できた範囲』を正直に示します。",
};

const CONFIRMED_AT = "2026-07-25";

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "太陽光・蓄電池 補助金データベース（国＋自治体・2026年）",
  description:
    "太陽光発電・家庭用蓄電池に関する国および自治体の補助制度を、対象・補助単価・上限・期間・受付状況・出典・確認日で構造化したデータベース。",
  inLanguage: "ja",
  dateModified: CONFIRMED_AT,
  creator: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
  isAccessibleForFree: true,
  variableMeasured: ["補助単価", "上限額", "対象", "申請期間", "受付状況"],
};

export default function SubsidyPage() {
  return (
    <main style={{ maxWidth: 780, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />

      <p style={{ letterSpacing: 2, fontSize: 12, color: "var(--brand)", fontWeight: 700, margin: 0 }}>SUBSIDY DATABASE</p>
      <h1 style={{ fontSize: "1.9rem", lineHeight: 1.35, margin: "6px 0 12px", color: "var(--ink)" }}>
        太陽光・蓄電池の補助金2026｜国＋自治体データベース
      </h1>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: 8 }}>
        太陽光発電・家庭用蓄電池の補助金を、<strong>国＋自治体</strong>でまとめました。各制度の
        <strong>対象・補助単価・上限・期間・受付状況</strong>を、<strong>公式の出典URLと確認日つき</strong>で掲載しています。
      </p>
      <div style={{ background: "#fdf3e0", border: "1px solid #f2e2c2", borderRadius: 12, padding: "0.9rem 1.1rem", color: "#8a6d2f", fontSize: 13.5, lineHeight: 1.7, margin: "0 0 26px" }}>
        ⚠️ 補助金は年度・予算で変動し、<strong>予算満了で早期終了</strong>することがあります。本ページは
        <strong>{CONFIRMED_AT}時点で公式に確認できた範囲</strong>です。申請前に必ず各制度の公式ページで最新の金額・期間・残予算をご確認ください。金額の一部は公式で数値が未掲載のため「要確認」と明記しています。
      </div>

      <SubsidyFilter
        subsidies={SUBSIDIES}
        regionsWithLocal={REGIONS_WITH_LOCAL}
        prefectures={ALL_PREFECTURES}
      />

      {/* 県別単独ページ(勝ち筋④) */}
      <section style={{ marginTop: 34 }}>
        <h2 className="sb-h2" style={{ fontSize: "1.2rem" }}>都道府県別の補助金ページ</h2>
        <p style={{ fontSize: 14 }}>収録済みの15都道府県は、金額・受付状況・モデルケース試算つきの単独ページがあります(順次拡充)。</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/subsidy/tokyo/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>東京都</Link>
          <Link href="/subsidy/kanagawa/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>神奈川県</Link>
          <Link href="/subsidy/saitama/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>埼玉県</Link>
          <Link href="/subsidy/chiba/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>千葉県</Link>
          <Link href="/subsidy/aichi/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>愛知県</Link>
          <Link href="/subsidy/osaka/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>大阪府</Link>
          <Link href="/subsidy/fukuoka/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>福岡県</Link>
          <Link href="/subsidy/hokkaido/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>北海道</Link>
          <Link href="/subsidy/miyagi/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>宮城県</Link>
          <Link href="/subsidy/ibaraki/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>茨城県</Link>
          <Link href="/subsidy/gunma/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>群馬県</Link>
          <Link href="/subsidy/shizuoka/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>静岡県</Link>
          <Link href="/subsidy/kyoto/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>京都府</Link>
          <Link href="/subsidy/hyogo/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>兵庫県</Link>
          <Link href="/subsidy/hiroshima/" className="sb-btn sb-btn-green" style={{ padding: "8px 16px", fontSize: 13.5 }}>広島県</Link>
        </div>
      </section>

      {/* 運営・出典方針（透明性ベースのE-E-A-T／監修者は置かず出典と確認日で担保） */}
      <section style={{ marginTop: 40, borderTop: "1px solid var(--line)", paddingTop: 24 }}>
        <h2 style={{ fontSize: "1.1rem", color: "var(--ink)", margin: "0 0 10px" }}>このデータについて（出典・更新方針）</h2>
        <ul style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.9, paddingLeft: "1.1rem", margin: 0 }}>
          <li>掲載する制度・数値は、<strong>国（経産省／SII／国交省）・自治体の公式ページで確認できた一次情報</strong>のみです。各制度に出典URLと確認日を明記しています。</li>
          <li>公式に数値が掲載されていない項目は、<strong>推測で埋めず「要確認」</strong>と表示します（二次情報を参考記載する場合はその旨を明記）。</li>
          <li>受付状況（受付中／終了／要確認）は確認日時点のものです。補助金は流動的なため、定期的に再確認して更新します。</li>
          <li>本サイトは太陽光・蓄電池の見積もり比較を行う<strong>編集部</strong>が運営し、事実ベース・出典明記を方針としています。特定の効果や「必ず得をする」といった保証はしません。</li>
        </ul>
        <p style={{ marginTop: 18, display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href="/price/" style={{ color: "var(--brand)", fontWeight: 700 }}>→ 費用相場（kW・容量別の目安）</Link>
          <Link href="/" style={{ color: "var(--brand)", fontWeight: 700 }}>← トップへ戻る</Link>
        </p>
      </section>
    </main>
  );
}
