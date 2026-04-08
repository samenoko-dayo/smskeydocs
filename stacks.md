---
title: 技術スタック
layout: doc
outline: deep
---

# 技術スタック

## インスタンス

### Misskey

MisskeyをDocker Composeで動作させています。  
実行基盤は自宅サーバーです。

### Cloudflare Tunnel

インターネットへの公開はCloudflare Tunnelを使用しています。  
ポートの開放が不要でDDoS対策とかキャッシュも出来るのでとても便利です。

### Cloudflare Turnstile

スパム対策としてCloudflare Turnstileを導入しています。  
基本的にユーザーが操作を行うことはないと思います。

### resend

メールの送信にはresendを使用しています。  
無料枠で収まってほしいね。

### Cloudflare R2

オブジェクトストレージにはCloudflare R2を使用しています。  
転送量による課金がないのが神。

### Cloudflare WAF

WAFはCloudflare WAFを使用しています。  
設定らしい設定はしていないけども。