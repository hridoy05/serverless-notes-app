## install serverless
 - npm install --save-dev serverless@3.38
## resource issue
-         Resource:
          - Fn::GetAtt: [notesTable, Arn]
## serverless project create
 - npm run sls -- create -t aws-nodejs

## veryfying severless framework in offline
 - npm install serverless-offline --save-dev

## configure aws cli
 - npm run sls -- cofig credentials --provider aws --key [key] --secret [key]

## dynamodb steps
 - use clooudformation in serverless.yml file
 - use resources key word
 - install @aws-sdk/lib-dynamodb for simplify.
 - install yarn add @aws-sdk/client-dynamodb
  
## add plugin for fine grained permission on lembda
 - install serverless-iam-roles-per-function
  
## deployment : setting up multiple environment