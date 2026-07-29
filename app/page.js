import Link from "next/link";

export default function Home() {
  return (
    <main className="sb-main sb-main-wide">
      {/* ヒーロー */}
      <section className="sb-hero sb-rise">
        <p className="sb-eyebrow">SOLAR &amp; BATTERY — DATA FIRST</p>
        <h1>
          太陽光・蓄電池の「実際いくら？」を
          <br />
          公的データと出典つきで比較する
        </h1>
        <p>
          費用相場・国と自治体の補助金・投資回収を、経産省・SII・自治体公式の一次情報だけで整理。
          全ての数値に出典と確認日を明記し、確認できないものは「要確認」と正直に表示します。
        </p>
        <div className="sb-hero-chips">
          <span className="sb-chip">太陽光 新築 <b>28.9万円/kW</b>（経産省2025）</span>
          <span className="sb-chip">蓄電池 目標 <b>12.5万円/kWh</b>（SII 2025年度）</span>
          <span className="sb-chip">補助金DB <b>国＋7都府県</b> 収録</span>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/simulator/" className="sb-btn sb-btn-sun">
            回収年数を試算する →
          </Link>
          <Link href="/subsidy/" className="sb-btn sb-btn-ghost">
            補助金を調べる
          </Link>
        </div>
      </section>

      {/* コンテンツカード */}
      <div className="sb-grid2">
        <Link href="/subsidy/" className="sb-card sb-rise sb-rise-2">
          <span className="sb-tag">公開中</span>
          <p className="sb-card-title">補助金2026｜国＋自治体データベース →</p>
          <p className="sb-card-desc">
            国（SIIのDR補助金・みらいエコ住宅2026）＋7都府県（東京・神奈川・埼玉・千葉・愛知・大阪・福岡）を、対象・単価・上限・期間・受付状況で。全て公式の出典URL・確認日つき。
          </p>
        </Link>
        <Link href="/price/" className="sb-card sb-rise sb-rise-2">
          <span className="sb-tag">公開中</span>
          <p className="sb-card-title">費用相場2026｜kW・容量別の目安 →</p>
          <p className="sb-card-desc">
            経産省・SIIの公的データで、太陽光（新築28.9万円/kW 等）・蓄電池（SII目標12.5万円/kWh）の出力別・容量別の総額目安を出典つきで。卒FIT後の売電と自家消費の考え方も。
          </p>
        </Link>
        <Link href="/simulator/" className="sb-card sb-rise sb-rise-3">
          <span className="sb-tag">公開中</span>
          <p className="sb-card-title">投資回収シミュレーター｜元が取れる？を試算 →</p>
          <p className="sb-card-desc">
            出力・容量・地域の補助金・自家消費率を入れると、実質初期費用と単純回収年数を公的データの目安で計算。前提と出典を明記。
          </p>
        </Link>
        <Link href="/guide/" className="sb-card sb-rise sb-rise-3">
          <span className="sb-tag sb-tag-sun">損得ガイド</span>
          <p className="sb-card-title">「やめたほうがいい？」「元が取れない？」に数値で答える →</p>
          <p className="sb-card-desc">
            太陽光は後悔する？蓄電池は損？——よくある不安を、公的相場と回収シミュレーターの実数で検証。向く家・向かない家の条件まで正直に整理します。
          </p>
        </Link>
      </div>

      <Link href="/makers/" className="sb-card sb-rise sb-rise-4" style={{ marginTop: 14 }}>
        <span className="sb-tag">公開中</span>
        <p className="sb-card-title">蓄電池メーカー比較DB｜容量・保証・全負荷対応で横断 →</p>
        <p className="sb-card-desc">
          主要8メーカー(ニチコン・オムロン・シャープ・パナソニック・京セラ・長州産業・ダイヤゼブラ・テスラ)の代表機種を公式一次情報のみで比較。容量保証の条件(50/60/70%)の違いまで。
        </p>
      </Link>
    </main>
  );
}
