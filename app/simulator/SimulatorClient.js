"use client";
import { useState } from "react";

// 補助金プリセット（補助金DBの一次確認値を簡易モデル化・2026-07-25時点）。
// solar: 円/kW と 上限（円）。battery: 円/kWh または flat（円）と 上限（円）。
const SUBSIDY_PRESETS = {
  "なし / その他": { solarPerKw: 0, solarCap: 0, batteryPerKwh: 0, batteryFlat: 0, batteryCap: 0, note: "" },
  "東京都（令和8年度）": { solarPerKw: 150000, solarCap: 450000, batteryPerKwh: 100000, batteryFlat: 0, batteryCap: 1200000, note: "太陽光15万円/kW(上限45万)・蓄電池10万円/kWh(上限120万)" },
  "神奈川県（令和8年度）": { solarPerKw: 70000, solarCap: 0, batteryPerKwh: 0, batteryFlat: 150000, batteryCap: 0, note: "太陽光7万円/kW・蓄電池15万円/台。太陽光+蓄電池の同時導入が必須" },
  "埼玉県（令和8年度）": { solarPerKw: 70000, solarCap: 350000, batteryPerKwh: 0, batteryFlat: 100000, batteryCap: 0, note: "太陽光7万円/kW(上限35万)・蓄電池10万円/件。太陽光は受付終了・蓄電池は受付中" },
  "千葉県（令和8年度）": { solarPerKw: 70000, solarCap: 0, batteryPerKwh: 0, batteryFlat: 120000, batteryCap: 0, note: "太陽光7万円/kW・蓄電池定額12万円。リース/PPA限定" },
};

const yen = (n) => Math.round(n).toLocaleString("ja-JP");

function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 13.5, fontWeight: 700, color: "#37485a", marginBottom: 6 }}>{label}</label>
      {children}
      {hint ? <p style={{ margin: "4px 0 0", fontSize: 12, color: "#8a99a8" }}>{hint}</p> : null}
    </div>
  );
}
const inputStyle = { width: "100%", maxWidth: 340, padding: "9px 12px", fontSize: 15, borderRadius: 10, border: "1px solid #cdd6de", background: "#fff" };

export default function SimulatorClient() {
  const [solarKw, setSolarKw] = useState(5);
  const [batteryKwh, setBatteryKwh] = useState(10);
  const [build, setBuild] = useState("新築");
  const [pref, setPref] = useState("東京都（令和8年度）");
  const [selfRate, setSelfRate] = useState(35); // 自家消費率(%)

  // 前提（公的データ・目安）
  const solarUnit = build === "新築" ? 289000 : 326000; // 円/kW（経産省 実績平均・税抜）
  const batteryUnit = 125000; // 円/kWh（SII目標・工事費込・税抜）
  const yieldPerKw = 1100; // kWh/kW/年（一般的な目安・設置条件で変動）
  const selfPrice = 27; // 円/kWh（自家消費で回避できる電気代）
  const sellPrice = 10; // 円/kWh（卒FIT後の売電・目安）

  // 初期費用
  const solarCost = solarUnit * solarKw;
  const batteryCost = batteryUnit * batteryKwh;
  const totalCost = solarCost + batteryCost;

  // 補助金
  const p = SUBSIDY_PRESETS[pref];
  let subSolar = p.solarPerKw * solarKw;
  if (p.solarCap) subSolar = Math.min(subSolar, p.solarCap);
  let subBattery = p.batteryFlat ? p.batteryFlat : p.batteryPerKwh * batteryKwh;
  if (p.batteryCap) subBattery = Math.min(subBattery, p.batteryCap);
  const subsidy = subSolar + subBattery;
  const netCost = Math.max(0, totalCost - subsidy);

  // 年間メリット
  const annualGen = solarKw * yieldPerKw; // kWh/年
  const selfKwh = annualGen * (selfRate / 100);
  const sellKwh = annualGen - selfKwh;
  const annualBenefit = selfKwh * selfPrice + sellKwh * sellPrice;
  const payback = annualBenefit > 0 ? netCost / annualBenefit : null;

  return (
    <div>
      <div style={{ background: "#f7faf8", border: "1px solid #e3ece6", borderRadius: 14, padding: "1.3rem 1.4rem", marginBottom: 24 }}>
        <Field label="太陽光の出力（kW）" hint="住宅用の一般的な範囲は 3〜6kW 程度">
          <input type="number" min={0} step={0.5} value={solarKw} onChange={(e) => setSolarKw(Number(e.target.value) || 0)} style={inputStyle} />
        </Field>
        <Field label="蓄電池の容量（kWh）" hint="家庭用の一般的な範囲は 5〜12kWh 程度。0にすると太陽光のみ">
          <input type="number" min={0} step={0.5} value={batteryKwh} onChange={(e) => setBatteryKwh(Number(e.target.value) || 0)} style={inputStyle} />
        </Field>
        <Field label="住宅タイプ（費用単価）">
          <select value={build} onChange={(e) => setBuild(e.target.value)} style={inputStyle}>
            <option value="新築">新築（28.9万円/kW）</option>
            <option value="既築">既築（32.6万円/kW）</option>
          </select>
        </Field>
        <Field label="補助金（お住まいの地域）" hint={p.note || "補助金なしで試算します"}>
          <select value={pref} onChange={(e) => setPref(e.target.value)} style={inputStyle}>
            {Object.keys(SUBSIDY_PRESETS).map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
        </Field>
        <Field label={`自家消費率：${selfRate}%`} hint="発電のうち家庭で使う割合。残りは売電。蓄電池ありで高くなる傾向">
          <input type="range" min={10} max={70} step={5} value={selfRate} onChange={(e) => setSelfRate(Number(e.target.value))} style={{ width: "100%", maxWidth: 340 }} />
        </Field>
      </div>

      {/* 結果 */}
      <div style={{ border: "1px solid #d9e6dd", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ background: "#0a7d3c", color: "#fff", padding: "1rem 1.3rem" }}>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.9 }}>単純回収年数の目安</p>
          <p style={{ margin: "2px 0 0", fontSize: "1.9rem", fontWeight: 800 }}>
            {payback ? `約 ${payback.toFixed(1)} 年` : "—"}
          </p>
        </div>
        <div style={{ padding: "1.1rem 1.3rem", fontSize: 14, color: "#37485a", lineHeight: 2 }}>
          <Row k="① 初期費用（税抜・目安）" v={`約 ${yen(totalCost)} 円`} sub={`太陽光 約${yen(solarCost)}円 ＋ 蓄電池 約${yen(batteryCost)}円`} />
          <Row k="② 補助金（概算）" v={`− 約 ${yen(subsidy)} 円`} sub={pref} />
          <Row k="③ 実質初期費用（①−②）" v={`約 ${yen(netCost)} 円`} strong />
          <Row k="④ 年間メリット（電気代削減＋売電）" v={`約 ${yen(annualBenefit)} 円/年`} sub={`年間発電 約${yen(annualGen)}kWh：自家消費${selfRate}%×27円 ＋ 売電×10円`} />
          <Row k="回収年数（③ ÷ ④）" v={payback ? `約 ${payback.toFixed(1)} 年` : "—"} strong />
        </div>
      </div>

      <div style={{ background: "#fdf3e0", border: "1px solid #f2e2c2", borderRadius: 12, padding: "0.95rem 1.15rem", color: "#8a6d2f", fontSize: 12.5, lineHeight: 1.8, marginTop: 18 }}>
        ⚠️ <strong>これは公的データの目安を用いた簡易試算です。</strong>実際の費用・発電量・回収年数は、住宅の屋根条件・地域の日射・メーカー・電気の使い方で大きく変わります。
        本試算は<strong>経年劣化・パワコン交換・メンテ費・電気料金の変動・税金</strong>を含みません。正確な金額は各社の見積もりでご確認ください。
      </div>
    </div>
  );
}

function Row({ k, v, sub, strong }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 14, borderBottom: "1px dashed #eef2f0", padding: "6px 0", flexWrap: "wrap" }}>
      <div style={{ color: "#66788a" }}>
        {k}
        {sub ? <div style={{ fontSize: 11.5, color: "#9aa8b5" }}>{sub}</div> : null}
      </div>
      <div style={{ fontWeight: strong ? 800 : 600, color: strong ? "#0a7d3c" : "#1a2b3c", whiteSpace: "nowrap" }}>{v}</div>
    </div>
  );
}
