import json

def handler(event, context):
    response_body = {"name": "unko", "age": 30, "gender": "man"}
    return {
        'statusCode': 200,
        # シンプルリクエストであれば、LambdaのレスポンスヘッダーにAccess-Control-Allow-Originを含めるだけでOK
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        'body': json.dumps(response_body)
    }