import Link from "next/link";

export const metadata = {
  title: "太陽光・蓄電池の損得ガイド｜「やめたほうがいい？」に公的データで答える",
  description:
    "「太陽光はやめたほうがいい？」「蓄電池は元が取れない？」——よくある不安を、経産省・SIIの公的データと投資回収シミュレーターの実数で検証。向く家・向かない家の条件、後悔しやすいパターンまで正直に整理します。",
};

export default function GuideIndex() {
  return (
    <main className="sb-main">
      <p className="sb-eyebrow">HONEST GUIDE</p>
      <h1>太陽光・蓄電池の損得ガイド</h1>
      <p>
        「やめたほうがいい」「元が取れない」——検索すると出てくる不安に、
        <strong>売り手の立場ではなく、公的データと計算式で</strong>答えるためのガイドです。
        当サイトは見積もりの押し売りをしません。向かない条件は「向かない」と書きます。
      </p>

      <Link href="/guide/solar-quit/" className="sb-card">
        <span className="sb-tag sb-tag-sun">太陽光</span>
        <p className="sb-card-title">太陽光発電はやめたほうがいい？後悔する家・しない家の条件 →</p>
        <p className="sb-card-desc">
          「やめたほうがいい」と言われる理由を1つずつ公的データで検証。向かない家の条件も正直に。回収年数はシミュレーターで自宅条件のまま計算できます。
        </p>
      </Link>
      <Link href="/guide/battery-worth/" className="sb-card">
        <span className="sb-tag sb-tag-sun">蓄電池</span>
        <p className="sb-card-title">蓄電池は元が取れない？デメリットと損益分岐を正直に検証 →</p>
        <p className="sb-card-desc">
          蓄電池単体の経済回収が難しいのは事実。それでも太陽光併用+補助金で状況が変わってきたことを、SII・経産省の価格データで整理します。
        </p>
      </Link>

      <div style={{ marginTop: 26 }}>
        <Link href="/simulator/" className="sb-btn sb-btn-green">自宅条件で回収年数を試算する →</Link>
      </div>
    </main>
  );
}
