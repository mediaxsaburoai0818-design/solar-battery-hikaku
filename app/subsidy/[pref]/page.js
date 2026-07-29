import Link from "next/link";
import { SUBSIDIES } from "../../data/subsidies";

// 県別補助金ページ(勝ち筋④)。データは app/data/subsidies.js の公式一次確認値のみを描画する。
// モデルケースはDB収録の単価×仮定条件の機械的計算(仮定は本文に明記)。市区町村は未収録＝正直表示。
const PREFS = {
  tokyo: {
    name: "東京都",
    model: {
      assumption: "既存住宅に太陽光5kW＋蓄電池10kWh（パッケージ）を導入する場合（DB収録の公式単価で機械的に計算）",
      lines: [
        "太陽光: 段階単価（15万円/kW×3.75kW＋超過分12万円/kW×1.25kW）= 約71万円 → 既存住宅の上限45万円が適用 = 45万円",
        "蓄電池: 10万円/kWh × 10kWh = 100万円（上限120万円/戸の範囲内）",
      ],
      total: "合計の目安: 145万円（既存住宅の場合。新築は太陽光12万円/kW・上限36万円と条件が異なります。要件は公式で要確認）",
    },
  },
  kanagawa: {
    name: "神奈川県",
    model: {
      assumption: "太陽光5kW＋蓄電池を同時導入する場合（神奈川県は太陽光＋蓄電池の同時導入が必須）",
      lines: [
        "太陽光: 7万円/kW × 5kW = 35万円",
        "蓄電池: 15万円/台（定額）",
      ],
      total: "合計の目安: 50万円（第1期は終了・第2期は9月頃予定と公式告知。要件は公式で要確認）",
    },
  },
  saitama: {
    name: "埼玉県",
    model: {
      assumption: "蓄電池を導入する場合（太陽光の県補助は予算到達で終了・蓄電池は受付中＝確認日時点）",
      lines: ["蓄電池: 10万円/件（定額）"],
      total: "合計の目安: 10万円（市町村の補助金を併用できる場合があります・公式で要確認）",
    },
  },
  chiba: {
    name: "千葉県",
    model: {
      assumption: "リース/PPAで太陽光5kW＋蓄電池を導入する場合（千葉県の制度はリース/PPA限定）",
      lines: [
        "太陽光: 7万円/kW × 5kW = 35万円",
        "蓄電池: 定額12万円",
      ],
      total: "合計の目安: 47万円（購入(自己所有)は対象外の点に注意。要件は公式で要確認）",
    },
  },
  aichi: { name: "愛知県", model: null },
  osaka: { name: "大阪府", model: null },
  fukuoka: { name: "福岡県", model: null },
};

const CONFIRMED_AT = "2026-07-25";

export function generateStaticParams() {
  return Object.keys(PREFS).map((pref) => ({ pref }));
}

export function generateMetadata({ params }) {
  const p = PREFS[params.pref];
  if (!p) return {};
  return {
    title: `${p.name}の太陽光・蓄電池 補助金【2026年・令和8年度】金額と受付状況｜出典・確認日つき`,
    description: `${p.name}の太陽光発電・家庭用蓄電池の補助金(2026年・令和8年度)を公式一次情報で整理。補助単価・上限・期間・受付状況(受付中/終了/要確認)を出典URL・確認日つきで掲載。国の制度との関係やモデルケース試算、投資回収シミュレーターへの連動も。`,
  };
}

function badgeClass(status) {
  if (status === "受付中") return "sb-badge sb-badge-open";
  if (status === "終了") return "sb-badge sb-badge-closed";
  return "sb-badge sb-badge-check";
}

export default function PrefSubsidyPage({ params }) {
  const p = PREFS[params.pref];
  if (!p) return null;
  const local = SUBSIDIES.filter((s) => s.region === p.name);
  const national = SUBSIDIES.filter((s) => s.region === "全国");

  const faqs = [
    {
      q: `${p.name}の太陽光・蓄電池の補助金は今も申請できますか？`,
      a: `本ページの表の「受付状況」列をご確認ください（${CONFIRMED_AT}時点の公式確認）。補助金は予算到達で早期終了することがあるため、申請前に必ず出典リンク先の公式ページで最新状況をご確認ください。`,
    },
    {
      q: `国の補助金と${p.name}の補助金は併用できますか？`,
      a: `制度ごとに要件・併用ルールが異なるため、一律には言えません。国のDR補助金（蓄電池）は2026年5月29日に予算到達で終了しています。併用可否は各制度の公式窓口での確認が必要です（当サイトは確認できた事実のみ掲載し、推測は書きません）。`,
    },
    {
      q: `市区町村の補助金は載っていますか？`,
      a: `本ページは${p.name}（都道府県レベル）と国の制度を収録しています。市区町村の補助金は現在未収録のため、お住まいの市区町村の公式サイト・窓口でご確認ください（順次拡充予定です）。`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${p.name} 太陽光・蓄電池 補助金データ（2026年）`,
    description: `${p.name}および国の太陽光発電・家庭用蓄電池の補助制度を、対象・補助単価・上限・期間・受付状況・出典・確認日で構造化したデータ。`,
    inLanguage: "ja",
    dateModified: CONFIRMED_AT,
    creator: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
    isAccessibleForFree: true,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="sb-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <p className="sb-eyebrow">SUBSIDY — {p.name}</p>
      <h1>{p.name}の太陽光・蓄電池 補助金【2026年・令和8年度】</h1>
      <p>
        {p.name}の太陽光発電・家庭用蓄電池に関する補助制度を、<strong>公式の一次情報で確認できた範囲のみ</strong>、
        補助単価・上限・期間・<strong>受付状況</strong>つきで掲載します（確認日: {CONFIRMED_AT}）。
      </p>
      <div className="sb-note">
        ⚠️ 補助金は年度・予算で変動し、<strong>予算満了で早期終了</strong>することがあります。申請前に必ず各制度の出典リンク（公式）で最新状況をご確認ください。
      </div>

      <h2 className="sb-h2">{p.name}の制度（{CONFIRMED_AT}確認）</h2>
      {local.map((s) => (
        <div key={s.id} className="sb-card" style={{ cursor: "default" }}>
          <span className={badgeClass(s.status)}>{s.status}</span>
          {s.type === "共同購入" && <span className="sb-badge sb-badge-check" style={{ marginLeft: 6 }}>共同購入（給付ではない）</span>}
          <p className="sb-card-title">{s.name}</p>
          <div className="sb-table-wrap">
            <table className="sb-table">
              <tbody>
                <tr><th>対象</th><td>{s.target}</td></tr>
                <tr><th>補助単価</th><td><b>{s.unit}</b></td></tr>
                <tr><th>上限</th><td>{s.cap}</td></tr>
                <tr><th>期間</th><td>{s.period}</td></tr>
                {s.statusNote && <tr><th>補足</th><td>{s.statusNote}</td></tr>}
              </tbody>
            </table>
          </div>
          <p className="sb-source">
            出典: <a href={s.source} target="_blank" rel="noopener noreferrer">{s.operator} 公式</a>（確認日 {s.confirmedAt}）
          </p>
        </div>
      ))}

      {p.model && (
        <>
          <h2 className="sb-h2">モデルケース試算</h2>
          <div className="sb-answer">
            <p><strong>{p.model.assumption}</strong></p>
            {p.model.lines.map((l) => (
              <p key={l}>・{l}</p>
            ))}
            <p><strong>{p.model.total}</strong></p>
          </div>
          <p style={{ fontSize: 13.5 }}>
            ※上表のDB収録単価からの機械的な計算です。実際の交付額は要件・審査・予算状況によります。
            初期費用や回収年数まで含めた試算は<Link href="/simulator/">投資回収シミュレーター</Link>でできます（{p.name}の補助金プリセット連動）。
          </p>
        </>
      )}

      <h2 className="sb-h2">国の制度との関係</h2>
      {national.map((s) => (
        <div key={s.id} className="sb-card" style={{ cursor: "default" }}>
          <span className={badgeClass(s.status)}>{s.status}</span>
          <p className="sb-card-title">{s.name}</p>
          <p className="sb-card-desc">
            {s.target}／{s.unit}
            {s.statusNote ? `（${s.statusNote}）` : ""}
          </p>
          <p className="sb-source">
            出典: <a href={s.source} target="_blank" rel="noopener noreferrer">{s.operator} 公式</a>（確認日 {s.confirmedAt}）
          </p>
        </div>
      ))}
      <p style={{ fontSize: 13.5 }}>
        併用可否は制度ごとに要件が異なります。当サイトは確認できた事実のみを掲載し、未確認の断定はしません。
      </p>

      <h2 className="sb-h2">市区町村の補助金について（正直な現状）</h2>
      <p>
        本ページは<strong>{p.name}（都道府県）と国の制度</strong>を収録しています。市区町村レベルの補助金は現在未収録です（順次拡充予定）。
        お住まいの市区町村の公式サイト・環境/エネルギー担当窓口でご確認ください。
      </p>

      <h2 className="sb-h2">よくある質問</h2>
      {faqs.map((f) => (
        <details key={f.q} className="sb-faq">
          <summary>{f.q}</summary>
          <div>{f.a}</div>
        </details>
      ))}

      <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href="/simulator/" className="sb-btn sb-btn-green">回収年数を試算する →</Link>
        <Link href="/subsidy/" className="sb-btn sb-btn-sun">全国の補助金DBへ</Link>
      </div>
    </main>
  );
}
