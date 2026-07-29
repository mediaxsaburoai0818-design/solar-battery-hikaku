import Link from "next/link";

export const metadata = {
  title: "太陽光発電はやめたほうがいい？後悔する家・しない家の条件を公的データで検証【2026年】",
  description:
    "「太陽光 やめたほうがいい」と言われる理由(初期費用・売電単価の低下・メンテ費・業者トラブル等)を、経産省の公的データで1つずつ検証。向かない家の条件も正直に提示し、回収年数は補助金連動シミュレーターで自宅条件のまま計算できます。",
};

const CONFIRMED_AT = "2026-07-29";

const faqs = [
  {
    q: "太陽光発電はやめたほうがいいですか？",
    a: "一律には言えません。設置費用は経産省の実績平均で新築28.9万円/kW(2025年)まで下がり、東京都のように手厚い補助金がある地域では回収の現実味が増しています。一方、日照条件が悪い・屋根が小さい/複雑・近い将来に建て替え予定といった家では回収が長期化しやすく、無理に導入しない判断も合理的です。当サイトのシミュレーターで自宅条件の回収年数を確認してから判断してください。",
  },
  {
    q: "売電価格が下がったのに、今から設置して意味がありますか？",
    a: "今の経済性の中心は「売る」ではなく「使う(自家消費)」です。卒FIT後の売電は約10円/kWhに対し、自家消費で回避できる電気代は約27円/kWhと約2.7倍の差があります(当サイト確認値・出典明記)。発電した電気を家でどれだけ使えるかが損得を分けます。",
  },
  {
    q: "後悔しやすいのはどんなケースですか？",
    a: "本文で挙げたとおり、(1)相場を知らずに1社の見積もりだけで契約する(2)日照・屋根条件が悪いのに導入する(3)自家消費が少ない生活パターンなのに大容量を載せる、などです。相場(経産省実績平均)と複数見積もりの比較が最大の防御になります。",
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
  headline: "太陽光発電はやめたほうがいい？後悔する家・しない家の条件を公的データで検証",
  datePublished: "2026-07-29",
  dateModified: CONFIRMED_AT,
  inLanguage: "ja",
  author: { "@type": "Organization", name: "太陽光・蓄電池比較 編集部" },
};

export default function SolarQuitPage() {
  return (
    <main className="sb-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <p className="sb-eyebrow">HONEST GUIDE — SOLAR</p>
      <h1>太陽光発電はやめたほうがいい？後悔する家・しない家の条件</h1>

      <div className="sb-answer">
        <p>
          <strong>先に結論:</strong> 「全員やめたほうがいい」も「全員やるべき」も間違いです。
          設置費用は経産省の実績平均で<strong>新築28.9万円/kW(2025年)</strong>まで下がり、補助金が手厚い地域では回収が現実的になった一方、
          <strong>日照・屋根条件が悪い家、自家消費が少ない家では回収が長期化</strong>します。
          このページでは売り手の立場を持たない当サイトが、公的データだけで「やめたほうがいい家の条件」まで正直に示します。
        </p>
      </div>

      <h2 className="sb-h2">「やめたほうがいい」と言われる理由を公的データで検証</h2>

      <h3>理由1: 初期費用が高い → 「相場を知らないこと」が本当のリスク</h3>
      <p>
        経産省(調達価格等算定委員会)の実績平均では、住宅用太陽光の設置費用は<strong>新築28.9万円/kW・既築32.6万円/kW</strong>。
        5kWなら新築で約145万円が公的な相場観です。後悔談の典型は金額そのものより<strong>「相場より大幅に高い契約をしてしまった」</strong>ケース。
        まず<Link href="/price/">費用相場ページ</Link>で公的な単価を確認し、見積もりが相場から大きく外れていないかを見るのが最大の防御です。
      </p>

      <h3>理由2: 売電価格が下がり続けている → 事実。ただし損得の軸が変わった</h3>
      <p>
        売電単価の低下は事実です。ただし現在の経済性の中心は「売る」ではなく<strong>「使う(自家消費)」</strong>に移っています。
        卒FIT後の売電が<strong>約10円/kWh</strong>に対し、自家消費で回避できる電気代は<strong>約27円/kWh</strong>と約2.7倍
        (<Link href="/price/">出典・確認日は相場ページに明記</Link>)。
        「発電を家でどれだけ使えるか」が回収年数を大きく左右します。共働きで日中不在が多い家は、自家消費率が上がりにくい分だけ不利になります(この場合の選択肢が蓄電池です)。
      </p>

      <h3>理由3: メンテナンス・パワコン交換費がかかる → 事実。計画に織り込むもの</h3>
      <p>
        太陽光は「置けば終わり」ではなく、パワーコンディショナー(パワコン)は寿命があり将来の交換費用が発生し得ます。
        当サイトのシミュレーターは<strong>この維持費を含まない「単純回収年数」であることを明記</strong>しています。
        逆に言えば、単純回収で既に長期化する条件なら、維持費まで含めると更に厳しくなる——という判断材料になります。
      </p>

      <h3>理由4: 訪問販売・業者トラブル → 「即決させる営業」がシグナル</h3>
      <p>
        「今日契約すれば安くなる」型の営業で相場より高額な契約をしてしまうのが典型的な後悔パターンです。
        対策はシンプルで、<strong>公的相場と照らす・複数社の見積もりを比較する・即決しない</strong>の3点。
        当サイトは特定業者への誘導をせず、判断材料(相場・補助金・回収試算)の提供に徹します。
      </p>

      <h2 className="sb-h2">正直に言う:「やめたほうがいい(向かない)家」の条件</h2>
      <div className="sb-table-wrap">
        <table className="sb-table">
          <thead>
            <tr><th>条件</th><th>理由</th></tr>
          </thead>
          <tbody>
            <tr><td><b>日照条件が悪い</b>(北向き屋根しか使えない・周囲の建物や山の影)</td><td>発電量の前提(一般的な目安 年1,100kWh/kW)を下回り、回収が長期化する</td></tr>
            <tr><td><b>屋根が小さい・形状が複雑・老朽化</b></td><td>載せられる容量が小さいと固定費(工事費等)の比率が上がる。屋根改修が近いなら二重工事に</td></tr>
            <tr><td><b>近い将来に建て替え・住み替えの予定</b></td><td>回収は10年超単位。回収前に手放す可能性が高いなら経済合理性は低い</td></tr>
            <tr><td><b>自家消費がとても少ない</b>(日中ほぼ不在・電気使用量が少ない)</td><td>約27円/kWhの節約でなく約10円/kWhの売電が中心になり、メリットが細る</td></tr>
            <tr><td><b>相場確認や相見積もりをする気がない</b></td><td>価格の妥当性を検証できない状態での高額契約が、後悔談の最大パターン</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="sb-h2">回収年数の実例(公的単価×補助金DBで機械計算)</h2>
      <div className="sb-answer">
        <p><strong>例: 東京都・既存住宅に5kW設置・自家消費35%の場合</strong></p>
        <p>・初期費用: 32.6万円/kW(既築の実績平均) × 5kW = 約163万円</p>
        <p>・東京都補助金: 段階単価で約71万円 → 既存住宅の上限45万円適用 = 45万円</p>
        <p>・実質初期費用: 約118万円</p>
        <p>・年間メリット: 発電約5,500kWh(自家消費35%×27円＋売電×10円) = 約8.8万円/年</p>
        <p><strong>・単純回収: 約13.5年</strong>(維持費・劣化は含まない。新築は設置単価28.9万円/kWと安い一方、都補助の上限は36万円)</p>
      </div>
      <p>
        同じ5kWでも、補助金がない地域・自家消費率が低い家では回収年数は大きく伸びます。
        <strong>「6年で回収」も「一生回収できない」も、前提次第でどちらも起こり得る</strong>——だからこそ自宅条件での試算が必要です。
      </p>
      <div style={{ margin: "18px 0 6px", display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href="/simulator/" className="sb-btn sb-btn-sun">自宅条件で回収年数を試算する →</Link>
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
        本ページの数値の出典: 経産省 調達価格等算定委員会(設置費用の実績平均)・SII・東京都(補助金)。詳細な出典URL・確認日は
        <Link href="/price/">費用相場</Link>・<Link href="/subsidy/">補助金DB</Link>の各ページに明記。
        本ページ確認日: {CONFIRMED_AT}。個別の効果を保証するものではありません。
      </p>

      <p style={{ marginTop: 18 }}>
        関連: <Link href="/guide/battery-worth/">蓄電池は元が取れない？デメリットと損益分岐</Link>
      </p>
    </main>
  );
}
