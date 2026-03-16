# rentarohayashi ホームページ

[JAXA 有人宇宙技術部門（Humans in Space）](https://humans-in-space.jaxa.jp/) の構成・雰囲気を参考にしたポートフォリオサイトです。

## 構成

- **index.html** - メインのHTML
- **styles.css** - JAXA風のデザイン（紺系・白・アクセント青）
- **script.js** - ヒーロースライダー、FAQアコーディオン、スマホメニュー

## 見た目・機能

- ヒーロー：宇宙系の背景画像スライダー + キャッチコピー
- 「何を知りたい？」：JAXAのFAQ風クイックリンク
- ニュース：日付・カテゴリ・タイトル一覧
- 3つのメインカード：About / Works / Skills（きぼう・ISS・補給機のようなブロック）
- よくあるご質問：アコーディオン形式
- 2カラム：活動（制作・発信）
- CTA：「挑戦は次なる舞台へ」風の問い合わせ導線
- フッター：ナビ・SNS・コピーライト

## ローカルで確認

```bash
# 簡易サーバー（Python 3）
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

または `index.html` を直接ブラウザで開いても表示できます。

## カスタムのヒント

- **ヒーロー画像**：`index.html` の `.hero-slide` の `style="--bg: url('...')"` を自分の画像URLに変更
- **色**：`styles.css` の `:root` の `--color-primary` / `--color-accent` を変更
- **ニュース・FAQ**：`index.html` 内のリスト項目を編集
- **SNS**：フッターの `href="#"` を実際のプロフィールURLに変更

## ライセンス

© rentarohayashi
