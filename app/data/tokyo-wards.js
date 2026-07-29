// 東京23区 太陽光・蓄電池補助金データ(2026年度/令和8年度)
// 全て各区公式サイト・公式PDFの一次確認値のみ(確認日2026-07-29・並列検証4エージェント)。
// 推測・二次情報の断定は禁止。制度が無い区も「なし」として正直に記録する。
// status = 受付中 | 終了 | 要確認 | 制度なし

export const WARDS_CONFIRMED_AT = "2026-07-29";

export const TOKYO_WARDS = [
  { ward: "千代田区", name: "省エネルギー改修等助成制度", solar: "対象経費の20%", battery: "対象経費の20%", cap: "合算上限100万円(住宅)", status: "終了", note: "予算到達のため今年度分は受付を一旦終了(公式明記)", source: "https://www.city.chiyoda.lg.jp/koho/machizukuri/kankyo/hojo/sho-ene.html" },
  { ward: "中央区", name: "自然エネルギー・省エネルギー機器等導入費助成", solar: "10万円/kW(上限35万)", battery: "1万円/kWh(上限10万)", cap: "中央エコアクト実施で太陽光15万/kW上限42万・蓄電1.5万/kWh上限12万に増額", status: "受付中", note: "予算残58.2%(2026-06-30時点)。工事約2週間前までに申請", source: "https://www.city.chuo.lg.jp/a0036/machizukuri/bika/taisaku/kikijosei/ecojosei_jutaku.html" },
  { ward: "港区", name: "地球温暖化対策助成制度", solar: "10万円/kW(上限40万)", battery: "4万円/kWh(上限20万・区民のみ)", cap: "—", status: "要確認", note: "申請期間2026/4/1〜2027/1/29(着工前申請)。予算消化状況は公式に記載なし", source: "https://www.city.minato.tokyo.jp/chikyukankyou/joseikin/r5.html" },
  { ward: "新宿区", name: "省エネルギー及び創エネルギー機器等補助制度", solar: "10万円/kW(上限30万)", battery: "1万円/kWh(上限10万)", cap: "—", status: "受付中", note: "4期制(第1期5/25〜7/31)。予算残50%掲載", source: "https://www.city.shinjuku.lg.jp/seikatsu/shoenergy.html" },
  { ward: "文京区", name: "新エネルギー・省エネルギー設備設置費助成", solar: "7万円/kW(上限35万)", battery: "上限10万円(単価表記は公式パンフで単位混在=要確認)", cap: "—", status: "受付中", note: "設置後申請・設置日に応じた月次期間制。予算消化15%(6/26時点)", source: "https://www.city.bunkyo.lg.jp/b037/p004969.html" },
  { ward: "台東区", name: "脱炭素推進助成金(住宅向け)", solar: "5万円/kW(戸建上限20万)", battery: "1万円/kWh(上限10万)", cap: "—", status: "要確認", note: "令和8年度から先着でなく事前申込+抽選方式。前期は抽選済(80件当選)・後期の事前申込は8/18〜8/24", source: "https://www.city.taito.lg.jp/kenchiku/kankyo/jyoseiseido/datsutanso.html" },
  { ward: "墨田区", name: "地球温暖化防止設備導入助成制度", solar: "5万円/kW(上限20万)", battery: "上限5万円(単価は要確認)", cap: "—", status: "受付中", note: "予算残約73%(7/1時点)。期限R9.2.26", source: "https://www.city.sumida.lg.jp/kurashi/kankyou_hozen/jyoseikin/ecojyoseiseido.html" },
  { ward: "江東区", name: "地球温暖化防止設備導入助成事業(個人住宅用)", solar: "5万円/kW(上限20万)※蓄電同時なら6万円/kW(上限24万)", battery: "1万円/kWh(上限10万)※太陽光同時なら2.5万円/kWh(上限20万)", cap: "同時導入の増額が特徴", status: "受付中", note: "工事着工前に申請必須。期限R9.3.15", source: "https://www.city.koto.lg.jp/380201/machizukuri/kankyo/sedo/30jyosei.html" },
  { ward: "品川区", name: "しながわゼロカーボンアクション助成", solar: "5万円/kW(上限20万・予定100件)", battery: "3万円/kWh(上限30万・予定100件)", cap: "—", status: "受付中", note: "先着順・予定件数到達で終了。5/25開始", source: "https://www.city.shinagawa.tokyo.jp/PC/kankyo/kankyo-kankyo/kankyo-kankyo-zyosei/20250310125732.html" },
  { ward: "目黒区", name: "住宅用再生可能エネルギー・省エネルギー設備設置費助成", solar: "3万円/kW(上限15万)", battery: "本体価格の1/3(上限7万)", cap: "—", status: "受付中", note: "申請率43.1%(7/15時点)。期限R9.1.29", source: "https://www.city.meguro.tokyo.jp/kankyouhozen/kurashi/kankyou/taiyoukou.html" },
  { ward: "大田区", name: "(単独制度なし)住宅リフォーム助成のA区分で対象", solar: "工事費の10%(上限20万)", battery: "同左(太陽光と合算)", cap: "区内中小事業者の施工が必須・1回限り", status: "要確認", note: "太陽光・蓄電池単独の補助制度はなく、リフォーム助成の対象工事として扱い", source: "https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/sumai/r_josei/jyutaku_reform_jyosei.html" },
  { ward: "世田谷区", name: "制度なし", solar: "—", battery: "—", cap: "—", status: "制度なし", note: "エコ住宅補助金は令和8年度、太陽光パネル・定置型蓄電池とも対象外と公式明記", source: "https://www.city.setagaya.lg.jp/02240/31250.html" },
  { ward: "渋谷区", name: "設置補助なし", solar: "—", battery: "—", cap: "—", status: "制度なし", note: "再エネ100%電力への切替に3万円分ポイント付与のみ(設置補助ではない)", source: "https://www.city.shibuya.tokyo.jp/kankyo/kankyo/eco-kurashi/RenewableEnergy.html" },
  { ward: "中野区", name: "省エネルギー設備等設置補助金", solar: "定額15万円(2kW以上)", battery: "定額10万円(4kWh以上)", cap: "定額制", status: "受付中", note: "前期は予算の約半分到達で締切(7/16時点62.8%消化)。後期11/30〜", source: "https://www.city.tokyo-nakano.lg.jp/kurashi/kankyo/ondankataisaku/0686241120240301112636655.html" },
  { ward: "杉並区", name: "エコ住宅促進助成", solar: "4万円/kW(上限12万)", battery: "定額5万円", cap: "—", status: "受付中", note: "事後申請(工事完了後)。申込率19.78%(7/21時点)", source: "https://www.city.suginami.tokyo.jp/s103/819.html" },
  { ward: "豊島区", name: "エコ住宅普及促進費用助成金", solar: "2万円/kW(上限8万)", battery: "1万円/kWh(上限5万)", cap: "—", status: "受付中", note: "交付予定25%(7/22時点)。期限R9.3.1", source: "https://www.city.toshima.lg.jp/149/machizukuri/shizen/ecojutaku/003402.html" },
  { ward: "北区", name: "再生可能エネルギー及び省エネルギー機器等導入助成", solar: "8万円/kW(上限20万)※区内業者施工で9.6万円/kW(上限24万)", battery: "1万円/kWh(上限10万)※区内業者で1.2万円/kWh(上限12万)", cap: "区内業者優遇1.2倍・23区で太陽光単価最高水準", status: "要確認", note: "交付申請はR9.2.26必着。受付開始日・現況は公式に明示なし", source: "https://www.city.kita.lg.jp/dev-environment/environment/1010099/1010102.html" },
  { ward: "荒川区", name: "エコ助成事業", solar: "2万円/kW(上限25万・区内業者30万)", battery: "5千円/kWh(上限10万・区内業者15万)", cap: "区内業者優遇あり", status: "受付中", note: "予算執行31%(7/21時点)。事後申請・期限R9.2.26", source: "https://www.city.arakawa.tokyo.jp/a024/kankyou/ekojyosei.html" },
  { ward: "板橋区", name: "制度なし", solar: "—", battery: "—", cap: "—", status: "制度なし", note: "旧制度は令和2年度で終了と公式明記。国・都の制度案内のみ", source: "https://www.city.itabashi.tokyo.jp/bousai/kankyo/todokede/1005921.html" },
  { ward: "練馬区", name: "カーボンニュートラル化設備設置補助金", solar: "定額8万円(既存住宅のみ・新築対象外)", battery: "対象外(令和8年度の対象設備に含まれず)", cap: "—", status: "受付中", note: "予算残約63%(7/24時点)。設置後申請・国や都と併用可と公式FAQ明記", source: "https://www.city.nerima.tokyo.jp/kurashi/shigoto/kankyo/hojo.html" },
  { ward: "足立区", name: "太陽光発電システム及び蓄電池設置費補助金", solar: "6万円/kW(上限24万)※区内業者で7.2万円/kW(上限28.8万)", battery: "上限5万円※区内業者で6万円", cap: "区内業者優遇あり", status: "受付中", note: "4期制・現在第2期(7/1〜9/30)。設置後申請", source: "https://www.city.adachi.tokyo.jp/kankyo/kurashi/kankyo/taiyoukouhatuden.html" },
  { ward: "葛飾区", name: "かつしかエコ助成金(個人住宅用)", solar: "6万円/kW(上限30万)", battery: "対象経費の1/4(上限20万)", cap: "23区上位の上限額", status: "受付中", note: "工事着工4週間前までの事前協議が必須", source: "https://www.city.katsushika.lg.jp/kurashi/1000062/1023018/1035385/1030818.html" },
  { ward: "江戸川区", name: "太陽光・定置型蓄電池の単独補助なし", solar: "—", battery: "—", cap: "—", status: "制度なし", note: "単独補助は令和7年度で終了と公式明記。再エネ切替補助(最大4万円)・ポータブル蓄電池補助(1万円)は実施中", source: "https://www.city.edogawa.tokyo.jp/e086/toshikeikaku/kankyo/inochi/hojokin/index.html" },
];
