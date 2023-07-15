import * as cdk from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { APIGatewayCreator } from './services/apigateway/creator';
import { Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaCreator } from './services/lambda/creator';
import { LambdaFunctionParams } from './services/lambda/interfaces';

export class CorsApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaParams: LambdaFunctionParams = {
      functionName: "APIFunction",
      codePath: "lambda/APIFunction",
      runtime: Runtime.PYTHON_3_9,
      description: "API Gateway用のLambda",
      handler: "index.handler",

    };

    const lambdaFunction: Function = LambdaCreator.createLambdaFunction(this, lambdaParams);

    const apiParams = {
      function: lambdaParams,
      resource: "getdata",
      method: "GET",
    };

    const api: RestApi = APIGatewayCreator.createRestApi(
      this,
      "testAPI",
      "CDKデプロイテスト用のAPI Gateway",
    );

    const lambdaIntegration = new LambdaIntegration(lambdaFunction);

    const apiResource = APIGatewayCreator.createResource(api);
    apiResource.addMethod(
      apiParams.method,
      lambdaIntegration
    );
    
  }
}
