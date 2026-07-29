import Link from "next/link";

export const metadata = {
  title: "家庭用蓄電池メーカー比較【2026年】容量・全負荷/特定負荷・保証・価格公表の横断DB",
  description:
    "家庭用蓄電池の主要8メーカー(ニチコン・オムロン・シャープ・パナソニック・京セラ・長州産業・ダイヤゼブラ電機・テスラ)の代表機種を、蓄電容量・全負荷/特定負荷・ハイブリッド/単機能・保証年数(容量保証条件)・希望小売価格の公表有無で比較。全て公式サイト・公式保証書の一次確認値のみ(2026年7月29日確認)。",
};

const CONFIRMED_AT = "2026-07-29";

// 全て各社公式サイト・公式PDF(保証規定/保証書)の一次確認値のみ(2026-07-29・検証エージェント)。
// 「公式記載なし」はその通りに表示し、二次情報の相場等では埋めない。
const MAKERS = [
  { maker: "ニチコン", model: "ESS-U4X1 / U4M1", capacity: "16.6 / 11.1kWh", load: "全負荷型", type: "単機能型(既設太陽光に後付け可)", warranty: "本体10年・容量保証=充電可能容量50%以上を10年", price: "公表あり: 450万円 / 370万円(税抜)", source: "https://www.nichicon.co.jp/products/ess/series_ess-u4.html" },
  { maker: "オムロン", model: "KPBP-Aシリーズ(マルチ蓄電プラットフォーム)", capacity: "6.3〜16.4kWh(ユニット選択)", load: "全負荷/特定負荷 両対応", type: "ハイブリッド/単機能 両対応", warranty: "主要機器15年(要申込)・容量保証=初期の60%(指定モード時)", price: "公式記載なし(実質オープン価格)", source: "https://socialsolution.omron.com/jp/ja/products_service/energy/product/bt/kpbp.html" },
  { maker: "シャープ", model: "JH-WB2021(クラウド蓄電池)", capacity: "9.5kWh(他4.2〜7.7kWhも)", load: "全負荷対応(構成による)", type: "ハイブリッド型", warranty: "15年保証(有償)の記載あり。無償年数・容量保証%は公式記載なし", price: "一部公表: システム例449.6万円(税込)・オープン価格も混在", source: "https://jp.sharp/sunvista/battery/wb2021/" },
  { maker: "パナソニック", model: "創蓄連携システムT", capacity: "9.7kWh", load: "全負荷型(最大5.5kVA)", type: "ハイブリッド型", warranty: "機器・容量保証10年(無償)/15年(有償)のカタログ記載", price: "公表あり: 計約466万円(税込・工事費別)", source: "https://news.panasonic.com/jp/press/jn250924-3" },
  { maker: "京セラ", model: "Enerezza Plus / Enerezza", capacity: "5.5 / 11.0 / 16.5kWh", load: "Plus=全負荷型・無印=特定負荷型", type: "Plus=ハイブリッド・無印=単機能", warranty: "機器・容量保証15年+自然災害10年(無償・要申込)", price: "公表あり: 303.6万〜782.1万円(税込)", source: "https://www.kyocera.co.jp/solar/products/enerezza-plus/" },
  { maker: "長州産業", model: "Smart PV Multi", capacity: "6.3〜16.4kWh", load: "全負荷/特定負荷 両対応", type: "ハイブリッド/単機能 両対応", warranty: "容量保証15年=初期の60%を下回った場合(保証規定)", price: "公式記載なし(実質オープン価格)", source: "https://cic-solar.jp/products/smart-pv-multi/" },
  { maker: "ダイヤゼブラ電機", model: "EIBS7(アイビス7)", capacity: "7.04kWh(実効6.2)/2台で14.08kWh", load: "全負荷対応(最大5.5kVA・200V)", type: "ハイブリッド型", warranty: "15年保証(機能+容量)・容量保証=初期の60%", price: "公式記載なし(オープン価格)", source: "https://www.enetelus.jp/products/eibs7.html" },
  { maker: "テスラ", model: "Powerwall 2 AC", capacity: "13.5kWh", load: "全負荷対応(公式サポート記載)", type: "単機能相当(AC連系型)", warranty: "10年・容量保証=10年で70%保持(日本向け保証書)", price: "公式サイトで確認できず(注文時提示方式)", source: "https://www.tesla.com/sites/default/files/pdfs/powerwall/Powerwall_2_AC_Warranty_JP.pdf" },
];

const faqs = [
  {
    q: "蓄電池メーカーはどこを選べばいいですか？",
    a: "選定軸は(1)停電時に家全体を動かしたいか(全負荷型)一部で良いか(特定負荷型)(2)太陽光と同時導入か後付けか(ハイブリッド型/単機能型)(3)保証の長さと容量保証の条件(60%/70%など)(4)実売価格、の4点です。本ページの比較表は(1)〜(3)と価格公表状況を公式一次情報で整理しています。実売価格は施工店により大きく変わるため、相場は費用相場ページ(SII目標12.5万円/kWh)を基準に複数見積もりで確認してください。",
  },
  {
    q: "定価(希望小売価格)を公表しているメーカーは？",
    a: "2026年7月29日の公式確認では、ニチコン(税抜)・京セラ(税込)・パナソニック(税込)・シャープ(一部システム)が金額を公表しています。オムロン・長州産業・ダイヤゼブラ電機はオープン価格(公式に金額記載なし)、テスラは公式サイトで確認できませんでした。なお定価と実売価格(工事込み)は大きく異なるのが通例です。",
  },
  {
    q: "容量保証とは何ですか？",
    a: "蓄電池は充放電の繰り返しで蓄えられる量が徐々に減るため、「保証期間内に初期容量の◯%を下回ったら対応する」という保証です。公式確認できた例では、ニチコン=10年50%、オムロン・長州産業・ダイヤゼブラ=60%(15年等)、テスラ=10年70%と、メーカーで条件が異なります。契約前に保証書の条件(対象モード・サイクル制限等)まで確認するのがおすすめです。",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const datasetLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "家庭用蓄電池 主要メーカー比較データ(2026年)",
  description: "主要8メーカーの代表機種を容量・負荷タイプ・方式・保証・価格公表状況で構造化した比較データ。全て公式一次情報。",
  inLanguage: "ja",
  dateModified: CONFIRMED_AT,
  creator: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
  isAccessibleForFree: true,
};

export default function MakersPage() {
  return (
    <main className="sb-main sb-main-wide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <p className="sb-eyebrow">MAKER DATABASE</p>
      <h1>家庭用蓄電池メーカー比較【2026年】</h1>
      <p>
        主要8メーカーの代表機種を、<strong>蓄電容量・全負荷/特定負荷・ハイブリッド/単機能・保証(容量保証の条件)・希望小売価格の公表有無</strong>で横断比較します。
        全て各社公式サイト・公式保証書の一次確認値のみ(確認日: {CONFIRMED_AT})。公式に記載がない項目は「公式記載なし」と正直に表示し、推定相場では埋めません。
      </p>
      <div className="sb-note">
        ⚠️ 表の価格は「メーカーが公表する希望小売価格」の有無です。<strong>実売価格(工事込み)は施工店により大きく異なる</strong>ため、
        相場の基準は<Link href="/price/">費用相場ページ</Link>(SII目標 12.5万円/kWh・工事費込)を参照し、複数見積もりで確認してください。
      </div>

      <h2 className="sb-h2">主要8メーカー比較表</h2>
      <div className="sb-table-wrap">
        <table className="sb-table">
          <thead>
            <tr>
              <th>メーカー</th>
              <th>代表機種</th>
              <th>容量</th>
              <th>停電時(負荷)</th>
              <th>方式</th>
              <th>保証(容量保証)</th>
              <th>定価公表</th>
              <th>出典</th>
            </tr>
          </thead>
          <tbody>
            {MAKERS.map((m) => (
              <tr key={m.maker}>
                <th className="whitespace-nowrap">{m.maker}</th>
                <td>{m.model}</td>
                <td>{m.capacity}</td>
                <td>{m.load}</td>
                <td>{m.type}</td>
                <td style={{ fontSize: 12.5 }}>{m.warranty}</td>
                <td style={{ fontSize: 12.5 }}>{m.price}</td>
                <td><a href={m.source} target="_blank" rel="noopener noreferrer">公式</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sb-source">
        出典: 各社公式製品ページ・公式保証規定/保証書PDF(確認日 {CONFIRMED_AT})。税込/税抜はメーカー表記に従っています。
        仕様・保証条件は機種構成により異なるため、契約前に必ず公式・保証書原本でご確認ください。
      </p>

      <h2 className="sb-h2">選び方の4軸(公式情報から言えること)</h2>
      <div className="sb-grid2">
        <div className="sb-card" style={{ cursor: "default" }}>
          <p className="sb-card-title">① 停電時: 全負荷か特定負荷か</p>
          <p className="sb-card-desc">全負荷型は停電時に家全体(200Vエアコン等含む)へ給電。特定負荷型はあらかじめ決めた回路のみ。オムロン・長州産業は構成で選択可、京セラはPlus=全負荷/無印=特定負荷と機種で分かれます。</p>
        </div>
        <div className="sb-card" style={{ cursor: "default" }}>
          <p className="sb-card-title">② 太陽光との接続: ハイブリッドか単機能か</p>
          <p className="sb-card-desc">新規で太陽光と同時導入ならパワコン一体のハイブリッド型が配線・効率面で有利とされます。既設太陽光への後付けは単機能型(ニチコンESS-U4X1等)が候補になります。</p>
        </div>
        <div className="sb-card" style={{ cursor: "default" }}>
          <p className="sb-card-title">③ 保証: 年数より「容量保証の条件」を見る</p>
          <p className="sb-card-desc">同じ「15年保証」でも容量保証の下限(50/60/70%)・対象モード・サイクル制限が異なります。公式確認できた条件は比較表の通りで、契約前の保証書確認が必須です。</p>
        </div>
        <div className="sb-card" style={{ cursor: "default" }}>
          <p className="sb-card-title">④ 価格: 定価より実売と補助金</p>
          <p className="sb-card-desc">定価公表の有無に関わらず実売は施工店次第。相場(12.5万円/kWh・SII目標)と<Link href="/subsidy/">補助金DB</Link>を併せて、実質負担で比較するのが確実です。</p>
        </div>
      </div>

      <h2 className="sb-h2">よくある質問</h2>
      {faqs.map((f) => (
        <details key={f.q} className="sb-faq">
          <summary>{f.q}</summary>
          <div>{f.a}</div>
        </details>
      ))}

      <div style={{ marginTop: 30, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href="/simulator/" className="sb-btn sb-btn-sun">容量別に回収年数を試算する →</Link>
        <Link href="/guide/battery-worth/" className="sb-btn sb-btn-green">蓄電池は元が取れない？を読む</Link>
      </div>
    </main>
  );
}
