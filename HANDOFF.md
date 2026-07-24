# solar-battery-hikaku — 引き継ぎドキュメント（tomomi → saburo-2）

太陽光・蓄電池 見積もり比較アフィリサイト。mi26rock 依頼・2026-07-24 に tomomi がブートストラップ、saburo-2 に引き継ぎ。

## インフラ（構築済み・すぐ作業可能）
- **Discordチャンネル**: `#project-solar-battery`（guild 1477901396732018781 / 🚀プロジェクト002配下 / ch id **1530044342423523462**）
- **GitHubリポジトリ**: `mediaxsaburoai0818-design/solar-battery-hikaku`（public）。※webmaster0818側に同名の空リポが残存（削除権限なし・無害・放置可）
- **Cloudflare Pages**: プロジェクト `solar-battery-hikaku`（CFアカウント 1e3ed563…＝mediaxsaburoai0818-design）。**GitHub連携済み（git push → 自動ビルド&デプロイ）**。build=`npm run build` / 出力=`out/` / production branch=`main`
- **本番URL**: https://solar-battery-hikaku.pages.dev/ （200・トップ雛形公開中）
- 独自ドメイン: 未取得（取得後にCFでカスタムドメイン設定）

## 技術スタック
- Next.js 15 静的エクスポート（`next.config.mjs`: output:"export" / trailingSlash:true / images.unoptimized）。**現状は素の .js スケルトン**（layout.js / page.js）。TypeScript未導入（.tsx化するなら typescript/@types を deps に追加。CF初回ビルドは .tsx がdeps不足で失敗した経緯あり＝.js で回避済み）。
- デプロイ = git連携（source push → CF自動。方式Bではない）。pathway/FDEと同じ。

## 事業モデル・勝ち筋（tomomi提案の根拠）
- **太陽光発電・家庭用蓄電池の見積もり比較アフィリ**。1CVの報酬単価が高い高額サービス系（cleaning/factoring型）。地域×高額サービスで送客。
- **堀（差別化）候補**: 料金シミュレーター（独自ツール）・メーカー比較マトリクス（出典付き）・補助金ガイド（国/自治体・更新日明記）・地域別の見積もり事例。一次データ資産＋AEO（Dataset構造化・出典・更新日）で新規ドメインの権威天井を上げる。

## ⚠️着手前の検証（推奨・"勝てる設計"を固める）
1. **キーワード実需**（「太陽光 見積もり」「蓄電池 価格 比較」「太陽光 補助金 {地域}」等の検索ボリューム・競合飽和度）
2. **アフィリプログラム**（太陽光一括見積もり系ASP＝タウンライフ/グリエネ/ソーラーパートナーズ等の有無・報酬率・提携条件）
3. 競合上位（比較メディア・見積もりポータル）の構成を分析
→ この3点を実データで精査してから量産に入るのが安全（無料運用・事実ベース厳守）。

## 制約（全プロジェクト共通）
- 事実ベース厳守（架空レビュー・誇大表現・未確認の数値は禁止・出典/取得日明記）
- 無料運用優先（有料ツール・有料広告・被リンク購入は事前相談）
- 補助金・費用はYMYL隣接＝公式一次情報ベース・断定回避・確認日明記

## saburo-2 への引き継ぎメモ
- リポジトリは mediaxsaburoai0818-design 配下＝saburo系のGit認証で clone/push 可（§16のトークン）。git push すればCFが自動デプロイ。
- コミュニケーションは `#project-solar-battery`（1530044342423523462）へ移行希望（mi26rock）。**saburo-2 が当該チャンネルで応答するには saburo-2 の access 設定に当該チャンネルを追加する必要あり**（この access 変更は Discord メッセージ起点では行わない運用＝MediaXAI 確認 or ターミナルの /discord:access 経由で設定）。
