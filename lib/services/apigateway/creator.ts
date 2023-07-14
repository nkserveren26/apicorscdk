import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class APIGatewayCreator {
    public static createRestApi(
        self: Construct,
        apiGatewayName: string,
        apiDescription: string) {
        return new RestApi(self,apiGatewayName, {
            restApiName: apiGatewayName,
            description: apiDescription, 
        });
    }
}