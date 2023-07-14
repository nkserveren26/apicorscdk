import * as cdk from 'aws-cdk-lib';
import { RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { APIGatewayCreator } from './services/apigateway/creator';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaCreator } from './services/lambda/creator';
import { LambdaFunctionParams } from './services/lambda/interfaces';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CorsApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api: RestApi = APIGatewayCreator.createRestApi(
      this,
      "testAPI",
      "CDKデプロイテスト用のAPI Gateway",
    );

    const lambdaParams: LambdaFunctionParams = {
      functionName: "APIFunction",
      codePath: "lambda/APIFunction",
      runtime: Runtime.PYTHON_3_9,
      description: "API Gateway用のLambda",
      handler: "index.handler",

    };

    const lambdaFunction: Function = LambdaCreator.createLambdaFunction(this, lambdaParams);

    const apiParams = {
      function: "",
      resource: "getdata",
      method: "GET",
    };

    
  }
}
