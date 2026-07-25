"use client";
import { useState } from "react";

const STATUS_STYLE = {
  "受付中": { bg: "#e6f6ec", fg: "#0a7d3c", label: "受付中" },
  "終了": { bg: "#eceff2", fg: "#66788a", label: "終了" },
  "要確認": { bg: "#fdf3e0", fg: "#b7791f", label: "要確認" },
};

function Badge({ status }) {
  const s = STATUS_STYLE[status] || STATUS_STYLE["要確認"];
  return (
    <span style={{ background: s.bg, color: s.fg, fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 999 }}>
      {s.label}
    </span>
  );
}

function Card({ s }) {
  return (
    <div style={{ border: "1px solid #e3e9ee", borderRadius: 14, padding: "1.25rem 1.4rem", marginBottom: 14, background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
        <Badge status={s.status} />
        <span style={{ fontSize: 12, color: "#66788a", fontWeight: 700 }}>{s.level}・{s.region}</span>
        {s.type === "共同購入" ? (
          <span style={{ background: "#eef2fb", color: "#3b5bb5", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>
            共同購入（値引き・給付ではない）
          </span>
        ) : null}
      </div>
      <h3 style={{ margin: "0 0 10px", fontSize: "1.05rem", lineHeight: 1.4, color: "#1a2b3c" }}>{s.name}</h3>
      <dl style={{ margin: 0, fontSize: 14, color: "#37485a", lineHeight: 1.7 }}>
        <Row k="対象" v={s.target} />
        <Row k="補助単価" v={s.unit} />
        <Row k="上限" v={s.cap} />
        <Row k="期間" v={s.period} />
        {s.statusNote ? <Row k="状況・注記" v={s.statusNote} /> : null}
        <Row k="運営" v={s.operator} />
      </dl>
      <p style={{ margin: "10px 0 0", fontSize: 12, color: "#8a99a8" }}>
        出典：<a href={s.source} target="_blank" rel="nofollow noopener noreferrer" style={{ color: "#0a7d3c" }}>{s.source}</a>
        （確認日 {s.confirmedAt}）
      </p>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 4 }}>
      <dt style={{ flex: "0 0 88px", color: "#8a99a8", fontWeight: 700 }}>{k}</dt>
      <dd style={{ margin: 0, flex: 1 }}>{v}</dd>
    </div>
  );
}

export default function SubsidyFilter({ subsidies, regionsWithLocal, prefectures }) {
  const [pref, setPref] = useState("東京都");
  const national = subsidies.filter((s) => s.level === "国");
  const local = subsidies.filter((s) => s.level === "自治体" && s.region === pref);
  const hasLocal = regionsWithLocal.includes(pref);

  return (
    <div>
      <label style={{ display: "block", fontSize: 14, fontWeight: 700, color: "#37485a", marginBottom: 8 }}>
        お住まいの都道府県を選ぶと、国＋自治体の補助制度をまとめて表示します
      </label>
      <select
        value={pref}
        onChange={(e) => setPref(e.target.value)}
        style={{ width: "100%", maxWidth: 320, padding: "10px 12px", fontSize: 15, borderRadius: 10, border: "1px solid #cdd6de", marginBottom: 24, background: "#fff" }}
      >
        {prefectures.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <h2 style={{ fontSize: "1.15rem", color: "#1a2b3c", margin: "0 0 12px" }}>国の補助制度</h2>
      {national.map((s) => <Card key={s.id} s={s} />)}

      <h2 style={{ fontSize: "1.15rem", color: "#1a2b3c", margin: "24px 0 12px" }}>{pref}の自治体補助制度</h2>
      {hasLocal ? (
        local.map((s) => <Card key={s.id} s={s} />)
      ) : (
        <div style={{ border: "1px dashed #cdd6de", borderRadius: 12, padding: "1.1rem 1.3rem", background: "#fafbfc", color: "#66788a", fontSize: 14, lineHeight: 1.7 }}>
          {pref}の自治体補助は、当サイトでまだ公式一次確認ができていません（順次追加します）。
          お住まいの市区町村・都道府県の公式サイト、または「{pref} 蓄電池 補助金 2026」で最新情報をご確認ください。
          <br />※補助金は年度・予算で変動し、予算満了で早期終了することがあります。
        </div>
      )}
    </div>
  );
}
