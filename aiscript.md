---
title: AiScriptについて
layout: doc
outline: deep
---

# AiScriptについて

## AiScriptとは

AiScriptは、Misskeyで利用できるプログラミング言語です。  
Playを書いたり出来ます。

## バージョンについて

スクラッチパッドではバージョンの指定がなくても最新バージョン(v1.2.1)で動作しますが、

```aiscript
// バージョン指定
/// @ 1.2.1
```

Playに置いては使用するバージョンを明記しないと0.1.9などの古いバージョンで動作してしまいます。  
記法が正しくスクラッチパッドでは正常に動作する場合はバージョン指定をしているかどうか確認しましょう。

## テストで書いたやつ

以下試しに書いたやつです。[実際に遊べます](https://msk.samenoko.work/play/aktrgstkl3x50056)。

```aiscript
/// @ 1.2.1

let omikuji = [
    "大吉"
    "中吉"
    "小吉"
    "吉"
    "末吉"
    "凶"
    "大凶"
]

let messages = {
    "大吉": "今日はとってもいい日になりそうです。"
    "中吉": "今日はまあまあいい日になりそうです。"
    "小吉": "今日はちょっと運が悪い日になりそうです。"
    "吉": "今日はいい日になりそうです。"
    "末吉": "今日はまあまあいい日になりそうです。"
    "凶": "今日は運が悪い日になりそうです。"
    "大凶": "今日はとっても運が悪い日になりそうです。"
}

let omikuji_result = omikuji[Math:rnd(0, (omikuji.len - 1))]
let omikuji_message = messages[omikuji_result]
let result_text = `今日の運勢は...{Str:lf}【{omikuji_result}】です！{Str:lf}{omikuji_message}{Str:lf}良い一日を！`
let result_post = `今日の運勢は...{Str:lf}【{omikuji_result}】です！{Str:lf}{omikuji_message}{Str:lf}良い一日を！ #今日のおみくじ{Str:lf}{THIS_URL}`

Ui:render([
    Ui:C:container({
        align: 'center',
        children: [
            Ui:C:mfm({
                text: result_text
            })
            Ui:C:postFormButton({
                text: "投稿する"
                rounded: true
                primary: true
                form: {
                    text: result_post
                }
            })
        ]
    })
])
```