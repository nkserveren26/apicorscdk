# CORS対応をしたAPI GateweyをCDKでデプロイ

このリポジトリは、CORS設定がされたAPI GatewayをCDKでデプロイするリポジトリです。  
API GatewayはLambda統合されたものです。

## CORS対応の内容
CORS対応は以下2つのリクエストパターンでやることが変わります。  
　・シンプルリクエスト  
　・シンプルでないリクエスト

### シンプルリクエストの場合のCORS対応
シンプルリクエストの場合、API Gateway+Lambda構成でやることは以下です。  
　Lambdaのレスポンスヘッダーに以下のヘッダーを追加  
　　Access-Control-Allow-Origin

このヘッダーの値に、リクエスト送信元ドメインを指定することでクロスオリジンのリクエストは成功します。  
「*」を指定すると、全ドメインからのクロスオリジンリクエストを許可します。
``` index.py
def handler(event, context):
    response_body = {"result": "Succeeded", "msg": "post process completed"}
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        'body': json.dumps(response_body)
    }
```


### シンプルリクエストでない場合のCORS対応
シンプルリクエストでない場合、API Gateway+Lambda構成でやることは以下です。  
シンプルリクエスト時の対応に加えて、preflightリクエストの対応が必要になります。  
　preflightリクエストでCORS有効化  
　Lambdaのレスポンスヘッダーに以下のヘッダーを追加  
　　Access-Control-Allow-Origin
