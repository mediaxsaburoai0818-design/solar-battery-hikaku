// 太陽光・蓄電池 費用相場データ（公的・一次情報の暫定ベース）
// メーカー独自の私的集計は使わず、官公庁・公的機関の公表値のみ。
// ※これは"公的な平均/目標値"の暫定相場。自サイトの見積データが貯まり次第、実勢相場へ置換する設計。
// 全て 出典・年度・確認日 を保持する。

export const PRICE_CONFIRMED_AT = "2026-07-25";

// 住宅用太陽光 システム費用単価（経産省 調達価格等算定委員会・実績平均・原則税抜）
export const SOLAR_UNIT = [
  { type: "新築", year: "2025年", unit: "28.9万円/kW", note: "中央値 29.4万円/kW" },
  { type: "新築", year: "2024年", unit: "28.6万円/kW", note: "" },
  { type: "既築", year: "2024年", unit: "32.6万円/kW", note: "既築2025年の公的単価は確認不可" },
  { type: "全体（新築+既築）", year: "2024年", unit: "29.5万円/kW", note: "" },
];
export const SOLAR_UNIT_SOURCE = "https://www.meti.go.jp/shingikai/santeii/pdf/20260205_1.pdf";

// 出力別 総額目安（単価×出力の単純計算・税抜・補助金前）
export const SOLAR_BY_OUTPUT = [
  { kw: "4kW", newb: "約115.6万円", exist: "約130.4万円" },
  { kw: "5kW", newb: "約144.5万円", exist: "約163.0万円" },
  { kw: "6kW", newb: "約173.4万円", exist: "約195.6万円" },
];

// 家庭用蓄電池 容量あたり相場（公的な目標価格／実勢・税抜・工事費込）
export const BATTERY_UNIT = [
  { label: "SII目標価格 2025年度（令和7年度補正）", value: "12.5万円/kWh", note: "補助対象の上限＝実質的な公的価格目安・工事費込" },
  { label: "SII目標価格 2024年度（令和6年度補正）", value: "13.5万円/kWh", note: "" },
  { label: "経産省 実勢導入費用 2023年度", value: "12.1万円/kWh", note: "電池＋PCS＋工事費（補助事業データベース分析）" },
  { label: "2030年 政策目標（家庭用）", value: "7万円/kWh", note: "蓄電池産業戦略の目標値" },
];
export const BATTERY_UNIT_SOURCE_SII = "https://dr-battery.sii.or.jp/r7h/assets/doc/aggregator/R7r_dr_ess_kateiyoukouboyouryou.pdf";
export const BATTERY_UNIT_SOURCE_METI = "https://www.meti.go.jp/policy/mono_info_service/joho/conference/battery_strategy2/shiryo06.pdf";

// 容量別 総額目安（SII目標 12.5万円/kWh ベースの単純計算・工事費込・税抜）
export const BATTERY_BY_CAPACITY = [
  { kwh: "5kWh", total: "約62.5万円" },
  { kwh: "7kWh", total: "約87.5万円" },
  { kwh: "10kWh", total: "約125万円" },
  { kwh: "12kWh", total: "約150万円" },
];

// 売電・自家消費（卒FIT・FIT・電気料金）
export const SELL_INFO = [
  { label: "卒FIT後の売電価格（調達期間終了後）", value: "平均 10.0円/kWh（中央値 9.5円／2025年12月時点）" },
  { label: "住宅用FIT 2026年度（初期投資支援スキーム）", value: "24円/kWh（〜4年）＋8.3円/kWh（5〜10年）の階段型・調達期間10年" },
  { label: "自家消費の便益（＝回避できる電気代）", value: "約27円/kWh（家庭用電気料金・大手電力 直近10年平均・税込ベース）" },
];
export const SELL_SOURCE = "https://www.meti.go.jp/shingikai/santeii/pdf/20260205_1.pdf";
