import Link from "next/link";
import {
  PRICE_CONFIRMED_AT, SOLAR_UNIT, SOLAR_UNIT_SOURCE, SOLAR_BY_OUTPUT,
  BATTERY_UNIT, BATTERY_UNIT_SOURCE_SII, BATTERY_UNIT_SOURCE_METI,
  BATTERY_BY_CAPACITY, SELL_INFO, SELL_SOURCE,
} from "../data/prices";

export const metadata = {
  title: "太陽光・蓄電池の費用相場2026｜kW・容量別の目安【公的データ・出典つき】",
  description:
    "住宅用太陽光発電・家庭用蓄電池の費用相場を、経済産業省（調達価格等算定委員会）・SIIの公的データで整理。太陽光は新築28.9万円/kW・既築32.6万円/kW、蓄電池はSII目標12.5万円/kWhなど、出力別・容量別の総額目安を出典・確認日つきで掲載。卒FIT後の売電と自家消費の考え方も。",
};

const th = { textAlign: "left", padding: "10px 12px", background: "#eef3f0", color: "var(--ink)", fontSize: 13.5, fontWeight: 700, borderBottom: "1px solid #dce4df" };
const td = { padding: "10px 12px", color: "#37485a", fontSize: 14, borderBottom: "1px solid #eef2f0" };

function Table({ head, rows }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 8 }}>
      <table style={{ width: "100%", minWidth: 420, borderCollapse: "collapse" }}>
        <thead><tr>{head.map((h, i) => <th key={i} style={th}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={td}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "太陽光・蓄電池 費用相場データ（公的データ・2026年）",
  description: "住宅用太陽光・家庭用蓄電池の費用相場を、経産省 調達価格等算定委員会・SIIの公表値で整理したデータ。単価・出力別/容量別の総額目安・売電/自家消費を含む。",
  inLanguage: "ja",
  dateModified: PRICE_CONFIRMED_AT,
  creator: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
  isAccessibleForFree: true,
  variableMeasured: ["太陽光システム費用単価", "蓄電池kWh単価", "出力別総額", "容量別総額", "売電価格"],
};

export default function PricePage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />

      <p style={{ letterSpacing: 2, fontSize: 12, color: "var(--brand)", fontWeight: 700, margin: 0 }}>PRICE INDEX</p>
      <h1 style={{ fontSize: "1.9rem", lineHeight: 1.35, margin: "6px 0 12px", color: "var(--ink)" }}>
        太陽光・蓄電池の費用相場2026｜kW・容量別の目安
      </h1>
      <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, marginBottom: 8 }}>
        住宅用太陽光・家庭用蓄電池の費用相場を、<strong>経済産業省（調達価格等算定委員会）・SII</strong>などの
        <strong>公的データ</strong>で整理しました。出力別・容量別の総額目安を、<strong>出典URLと確認日つき</strong>で掲載します。
      </p>
      <div style={{ background: "#eef3fb", border: "1px solid #d8e2f2", borderRadius: 12, padding: "0.9rem 1.1rem", color: "#3b5480", fontSize: 13.5, lineHeight: 1.7, margin: "0 0 28px" }}>
        ℹ️ 本ページの数値は<strong>官公庁の公表値（平均／目標値）を暫定ベース</strong>にしています（民間比較サイトの私的集計は使用していません）。
        今後、<strong>当サイトの見積データが貯まり次第、実勢相場へ更新</strong>します。相場は市況・年度で変動し、実際の金額は住宅条件・メーカー・地域で異なります（{PRICE_CONFIRMED_AT}時点）。
      </div>

      {/* 太陽光 */}
      <h2 style={{ fontSize: "1.3rem", color: "var(--ink)", margin: "0 0 6px" }}>太陽光発電の費用相場</h2>
      <p style={{ color: "#66788a", fontSize: 13.5, margin: "0 0 12px" }}>システム費用単価（機器費＋工事費・原則税抜）。経産省 調達価格等算定委員会の実績平均。</p>
      <Table head={["区分", "設置年", "システム費用単価", "備考"]} rows={SOLAR_UNIT.map((s) => [s.type, s.year, s.unit, s.note || "—"])} />
      <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "0 0 18px" }}>
        出典：経済産業省 調達価格等算定委員会 令和8年度意見（<a href={SOLAR_UNIT_SOURCE} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "var(--brand)" }}>meti.go.jp</a>）・確認日 {PRICE_CONFIRMED_AT}
      </p>
      <h3 style={{ fontSize: "1.05rem", color: "var(--ink)", margin: "0 0 8px" }}>出力別の総額目安</h3>
      <Table head={["出力", "新築（28.9万円/kW・2025）", "既築（32.6万円/kW・2024）"]} rows={SOLAR_BY_OUTPUT.map((s) => [s.kw, s.newb, s.exist])} />
      <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "0 0 30px" }}>※単価×出力の単純計算（税抜・補助金前）。容量が小さいほど固定費按分で割高になりやすい点にご留意ください。</p>

      {/* 蓄電池 */}
      <h2 style={{ fontSize: "1.3rem", color: "var(--ink)", margin: "0 0 6px" }}>家庭用蓄電池の費用相場</h2>
      <p style={{ color: "#66788a", fontSize: 13.5, margin: "0 0 12px" }}>容量あたりの公的な目標価格・実勢（税抜・工事費込）。</p>
      <Table head={["区分", "容量あたり価格", "備考"]} rows={BATTERY_UNIT.map((b) => [b.label, b.value, b.note || "—"])} />
      <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "0 0 18px" }}>
        出典：SII 公募要領（<a href={BATTERY_UNIT_SOURCE_SII} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "var(--brand)" }}>sii.or.jp</a>）・経済産業省 定置用蓄電システムの現状と課題（<a href={BATTERY_UNIT_SOURCE_METI} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "var(--brand)" }}>meti.go.jp</a>）・確認日 {PRICE_CONFIRMED_AT}
      </p>
      <h3 style={{ fontSize: "1.05rem", color: "var(--ink)", margin: "0 0 8px" }}>容量別の総額目安</h3>
      <Table head={["容量", "総額目安（SII目標 12.5万円/kWh ベース）"]} rows={BATTERY_BY_CAPACITY.map((b) => [b.kwh, b.total])} />
      <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "0 0 30px" }}>※SII目標価格（工事費込・税抜）×容量の単純計算。実勢は製品・全負荷/特定負荷・施工で変動します。補助金前の金額です。</p>

      {/* 売電・自家消費 */}
      <h2 style={{ fontSize: "1.3rem", color: "var(--ink)", margin: "0 0 6px" }}>売電・自家消費の考え方（卒FIT）</h2>
      <p style={{ color: "#66788a", fontSize: 13.5, margin: "0 0 12px" }}>「元が取れるか」を考える前提として、売電と自家消費の単価差を押さえます。</p>
      <Table head={["項目", "目安"]} rows={SELL_INFO.map((s) => [s.label, s.value])} />
      <p style={{ color: "#37485a", fontSize: 14, lineHeight: 1.8, margin: "8px 0 4px" }}>
        卒FIT後の売電は<strong>約10円/kWh</strong>まで下がる一方、自家消費すれば<strong>約27円/kWh</strong>の電気代を回避できます。
        この差が、卒FIT後に<strong>蓄電池で自家消費へシフト</strong>する動機になります。
      </p>
      <p style={{ fontSize: 12, color: "var(--ink-faint)", margin: "0 0 30px" }}>
        出典：経済産業省 調達価格等算定委員会 令和8年度意見（<a href={SELL_SOURCE} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "var(--brand)" }}>meti.go.jp</a>）・確認日 {PRICE_CONFIRMED_AT}
      </p>

      {/* 運営・出典方針 */}
      <section style={{ marginTop: 20, borderTop: "1px solid var(--line)", paddingTop: 24 }}>
        <h2 style={{ fontSize: "1.05rem", color: "var(--ink)", margin: "0 0 10px" }}>このデータについて（出典・更新方針）</h2>
        <ul style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.9, paddingLeft: "1.1rem", margin: 0 }}>
          <li>数値は<strong>官公庁・公的機関の公表値のみ</strong>（経産省 調達価格等算定委員会・SII 等）。各表に出典URLと確認日を明記しています。</li>
          <li>民間比較サイトの<strong>私的な自社取引集計は引用していません</strong>（他社の独自データのため）。</li>
          <li>これは<strong>公的な平均／目標値の暫定相場</strong>です。当サイトの見積データが貯まり次第、<strong>実勢相場に更新</strong>します。</li>
          <li>公的一次で数値が取れない項目（例：既築2025年の単価）は<strong>「確認不可」</strong>とし、推測で埋めていません。</li>
        </ul>
        <p style={{ marginTop: 18, display: "flex", gap: 18, flexWrap: "wrap" }}>
          <Link href="/subsidy/" style={{ color: "var(--brand)", fontWeight: 700 }}>→ 補助金データベース（国＋自治体）</Link>
          <Link href="/" style={{ color: "var(--brand)", fontWeight: 700 }}>← トップへ戻る</Link>
        </p>
      </section>
    </main>
  );
}
