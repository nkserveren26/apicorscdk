import { Resource, RestApi } from "aws-cdk-lib/aws-apigateway";
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

    public static createResource(restApi: RestApi, resourceName: string): Resource  {
        return restApi.root.addResource(resourceName);
    }
}