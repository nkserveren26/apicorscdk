import json

def handler(event, context):
    response_body = {"name": "unko", "age": 30, "gender": "man"}
    return {
        'statusCode': 200,
        'body': json.dumps(response_body)
    }