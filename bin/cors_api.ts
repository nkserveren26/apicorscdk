#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CorsApiStack } from '../lib/cors_api-stack';

const app = new cdk.App();
new CorsApiStack(app, 'CorsApiStack', {
  env: { region: "ap-northeast-1" },
});