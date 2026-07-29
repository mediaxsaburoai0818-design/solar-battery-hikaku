import Link from "next/link";

export const metadata = {
  title: "蓄電池は元が取れない？デメリットと損益分岐を公的データで正直に検証【2026年】",
  description:
    "「蓄電池 元が取れない」は半分本当。蓄電池単体での経済回収は難しい一方、太陽光併用+補助金で条件が変わってきたことを、SII・経産省の価格データ(12.5万円/kWh目標・実勢12.1万円/kWh)と補助金DBで正直に検証。デメリットも網羅します。",
};

const CONFIRMED_AT = "2026-07-29";

const faqs = [
  {
    q: "蓄電池だけ(太陽光なし)で元は取れますか？",
    a: "経済回収だけを目的にした蓄電池単体の導入は、一般に困難です。当サイトの回収シミュレーターも太陽光併用を前提にしており、単体の経済回収は算出対象にしていません(誠実にお伝えします)。単体導入は「停電・災害への備え」という価値をどう評価するかで判断してください。",
  },
  {
    q: "では、どんな場合に蓄電池は「あり」ですか？",
    a: "(1)太陽光と併用して自家消費率を上げられる家(売電約10円/kWhの電気を、約27円/kWh相当の自家消費に振り替えられる)(2)補助金が手厚い地域(例: 東京都は10万円/kWh・上限120万円=確認日時点)(3)停電への備えに価値を感じる家、です。逆に補助金がない地域で経済性のみを求める場合は慎重に。",
  },
  {
    q: "蓄電池の価格は今後下がりますか？",
    a: "公的な目標としては、SIIの2025年度目標が12.5万円/kWh(工事費込)、国は2030年に7万円/kWhを目指すとしています(経産省実勢は12.1万円/kWh・2023年度)。将来の値下がり期待と、今ある補助金・電気代削減のどちらを取るかの比較になります。",
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

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "蓄電池は元が取れない？デメリットと損益分岐を公的データで正直に検証",
  datePublished: "2026-07-29",
  dateModified: CONFIRMED_AT,
  inLanguage: "ja",
  author: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
};

export default function BatteryWorthPage() {
  return (
    <main className="sb-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <p className="sb-eyebrow">HONEST GUIDE — BATTERY</p>
      <h1>蓄電池は元が取れない？デメリットと損益分岐を正直に検証</h1>

      <div className="sb-answer">
        <p>
          <strong>先に結論:</strong> 「元が取れない」は<strong>半分本当</strong>です。
          <strong>蓄電池単体での経済回収は難しい</strong>——これは正直に認めます。
          一方で、<strong>太陽光との併用＋補助金</strong>という条件が揃うと話が変わります。
          売電約10円/kWhの電気を約27円/kWh相当の自家消費に振り替えるのが蓄電池の稼ぎで、
          東京都のように10万円/kWh(上限120万円)の補助金が出る地域では、初期費用の負担が大きく圧縮されるためです。
        </p>
      </div>

      <h2 className="sb-h2">まず価格の事実(公的データ)</h2>
      <div className="sb-table-wrap">
        <table className="sb-table">
          <thead>
            <tr><th>指標</th><th>値</th><th>出典</th></tr>
          </thead>
          <tbody>
            <tr><td>家庭用蓄電池の実勢価格</td><td><b>12.1万円/kWh</b>(2023年度)</td><td>経産省</td></tr>
            <tr><td>2025年度の価格目標(工事費込)</td><td><b>12.5万円/kWh</b></td><td>SII</td></tr>
            <tr><td>2030年の価格目標</td><td><b>7万円/kWh</b></td><td>経産省</td></tr>
            <tr><td>卒FIT後の売電単価(目安)</td><td>約10円/kWh</td><td rowSpan={2}><Link href="/price/">相場ページに出典明記</Link></td></tr>
            <tr><td>自家消費で回避できる電気代(目安)</td><td>約27円/kWh</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        10kWhなら本体+工事で<strong>約125万円</strong>(SII目標単価)が相場観。
        「蓄電池の仕事」は、この初期費用を<strong>売電(10円)と自家消費(27円)の差額17円/kWh</strong>で取り返すことです。
      </p>

      <h2 className="sb-h2">なぜ「単体では元が取れない」のか</h2>
      <p>
        太陽光がない家の蓄電池は、差額17円/kWhの源泉(昼の余剰発電)がありません。
        深夜と日中の電気料金差を使う方法もありますが、料金プランに依存し差額の規模も小さいため、
        <strong>約125万円(10kWh)の初期費用を電気代差額だけで回収するのは長期戦になります</strong>。
        当サイトのシミュレーターが太陽光併用を前提にしているのはこのためで、単体の経済回収を装った試算は掲載しません。
        単体導入の価値は経済性ではなく<strong>停電・災害への備え</strong>にあります。
      </p>

      <h2 className="sb-h2">蓄電池のデメリット(隠さず列挙)</h2>
      <div className="sb-table-wrap">
        <table className="sb-table">
          <thead>
            <tr><th>デメリット</th><th>実務上の注意</th></tr>
          </thead>
          <tbody>
            <tr><td><b>初期費用が高額</b></td><td>10kWhで約125万円(SII目標単価)。相場から大きく外れた見積もりに注意</td></tr>
            <tr><td><b>寿命・劣化がある</b></td><td>充放電を繰り返すと蓄えられる量は徐々に減る。保証年数・サイクル条件を契約前に確認</td></tr>
            <tr><td><b>設置スペースが必要</b></td><td>屋外設置は直射日光・塩害・寒冷地条件などの制約が機種ごとにある</td></tr>
            <tr><td><b>停電時に全部は動かせない場合がある</b></td><td>「全負荷型/特定負荷型」で停電時に使える範囲が違う。用途に合う方式を選ぶ</td></tr>
            <tr><td><b>補助金は早期終了リスク</b></td><td>国のDR補助金は2026年5月29日に予算到達で終了(公式告知)。自治体分も予算次第</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="sb-h2">損益分岐の実例(太陽光併用・公的単価×補助金DB)</h2>
      <div className="sb-answer">
        <p><strong>例: 東京都・既存住宅 太陽光5kW＋蓄電池10kWh</strong></p>
        <p>・初期費用: 約163万円(太陽光・既築32.6万円/kW)＋125万円(蓄電池) = 約288万円</p>
        <p>・東京都補助金: 太陽光45万円(既存住宅の上限適用)＋蓄電池100万円 = 145万円</p>
        <p>・実質初期費用: 約143万円</p>
        <p>・自家消費率を35%→60%に上げられた場合の年間メリット: 約11.1万円/年</p>
        <p><strong>・単純回収: 約12.9年</strong>(維持費・劣化は含まない)</p>
      </div>
      <p>
        ポイントは<strong>蓄電池が「自家消費率を上げる装置」として働いたときに初めて回収ラインに乗る</strong>こと。
        補助金の薄い地域や自家消費が伸びない生活パターンでは、この試算より確実に長くなります。前提を変えた計算はシミュレーターでどうぞ。
      </p>
      <div style={{ margin: "18px 0 6px", display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href="/simulator/" className="sb-btn sb-btn-sun">自宅条件で損益分岐を試算する →</Link>
        <Link href="/subsidy/" className="sb-btn sb-btn-green">お住まいの補助金を確認する</Link>
      </div>

      <h2 className="sb-h2">よくある質問</h2>
      {faqs.map((f) => (
        <details key={f.q} className="sb-faq">
          <summary>{f.q}</summary>
          <div>{f.a}</div>
        </details>
      ))}

      <p className="sb-source" style={{ marginTop: 24 }}>
        本ページの数値の出典: 経産省(蓄電池実勢価格・2030年目標)・SII(2025年度目標単価)・東京都(補助金)・SII公式告知(DR補助金終了)。
        詳細な出典URL・確認日は<Link href="/price/">費用相場</Link>・<Link href="/subsidy/">補助金DB</Link>に明記。
        本ページ確認日: {CONFIRMED_AT}。個別の効果を保証するものではありません。
      </p>

      <p style={{ marginTop: 18 }}>
        関連: <Link href="/guide/solar-quit/">太陽光発電はやめたほうがいい？後悔する家・しない家の条件</Link>
      </p>
    </main>
  );
}
