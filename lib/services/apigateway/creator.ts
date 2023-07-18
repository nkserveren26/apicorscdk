import { Cors, LambdaIntegration, MockIntegration, PassthroughBehavior, Resource, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class APIGatewayCreator {
    public static createRestApi(
        self: Construct,
        apiGatewayName: string,
        apiDescription: string): RestApi {
        return new RestApi(self,apiGatewayName, {
            restApiName: apiGatewayName,
            description: apiDescription,
        });
    }

    public static addResourceToApi(restApi: RestApi, resourceName: string): Resource  {
        return restApi.root.addResource(resourceName);
    }

    public static addOptionMethod(apiResource: Resource) : void {
        apiResource.addMethod(
            "OPTIONS",
            new MockIntegration({
                integrationResponses: [],
                passthroughBehavior: PassthroughBehavior.NEVER,
                requestTemplates: {
                    "application/json": '{"statusCode": 200}',
                }
            }),
        );

    }

    public static addMethodToResource(
        apiResource: Resource, 
        method: string, 
        lambdaIntegration: LambdaIntegration) {
            return apiResource.addMethod(method, lambdaIntegration);
    }
}