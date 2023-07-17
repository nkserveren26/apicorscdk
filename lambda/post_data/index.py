import json

def handler(event, context):
    response_body = {"result": "Succeeded"}
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "*"
        },
        'body': json.dumps(response_body)
    }