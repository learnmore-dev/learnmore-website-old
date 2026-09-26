# AWS CloudWatch Monitoring & SNS Alerting Runbook

## 1. Overview
- **Project:** Learn More Technologies (`https://learnmoretechnologies.in`)
- **AWS Region:** Asia Pacific (Mumbai) `ap-south-1` / Global Edge (CloudFront `us-east-1` metrics)
- **Monitoring Scope:** Real-time detection and email notification for 5xx server-side outages and 4xx client-side traffic anomalies.
- **Notification Target:** Amazon SNS Topic `learnmore-production-alerts`

---

## 2. Metric Alarm Specifications

### Alarm 1: Critical Server Error Alarm (5xx Outage)
- **Alarm Name:** `LMT-Prod-CloudFront-5xx-High-Error-Rate`
- **Metric Name:** `5xxErrorRate`
- **Namespace:** `AWS/CloudFront`
- **Dimensions:**
  - `DistributionId`: `<PROD_CLOUDFRONT_DIST_ID>`
  - `Region`: `Global`
- **Statistic:** `Average`
- **Period:** `300 seconds` (5 minutes)
- **Evaluation Periods:** `1` (Triggers when 1 consecutive 5-minute data point exceeds threshold)
- **Threshold:** `>= 5.0%` (or Count `>= 5` errors per 5 minutes)
- **Comparison Operator:** `GreaterThanOrEqualToThreshold`
- **Treat Missing Data:** `notBreaching`
- **Severity:** **CRITICAL / P1**
- **Action:** Send alert to SNS Topic `arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts`

---

### Alarm 2: Client Error Anomaly Alarm (4xx Spike)
- **Alarm Name:** `LMT-Prod-CloudFront-4xx-Error-Spike`
- **Metric Name:** `4xxErrorRate`
- **Namespace:** `AWS/CloudFront`
- **Dimensions:**
  - `DistributionId`: `<PROD_CLOUDFRONT_DIST_ID>`
  - `Region`: `Global`
- **Statistic:** `Average`
- **Period:** `300 seconds` (5 minutes)
- **Evaluation Periods:** `2` (Triggers when 2 consecutive 5-minute data points exceed threshold)
- **Threshold:** `>= 10.0%` (or Count `>= 50` errors per 5 minutes)
- **Comparison Operator:** `GreaterThanOrEqualToThreshold`
- **Treat Missing Data:** `notBreaching`
- **Severity:** **WARNING / P2**
- **Action:** Send alert to SNS Topic `arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts`

---

## 3. Amazon SNS Topic Configuration

### 1. Create SNS Topic
```bash
aws sns create-topic \
  --name learnmore-production-alerts \
  --region ap-south-1 \
  --attributes DisplayName="LMT-Production-Alerts"
```

### 2. Subscribe DevOps & Engineering Team
```bash
aws sns subscribe \
  --topic-arn arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts \
  --protocol email \
  --notification-endpoint devops@learnmoretechnologies.in \
  --region ap-south-1
```
*(Note: Recipients must click the confirmation link in the activation email sent by AWS).*

---

## 4. AWS CLI Deployment Commands

### Deploy 5xx Critical Alarm
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name "LMT-Prod-CloudFront-5xx-High-Error-Rate" \
  --alarm-description "Triggers when CloudFront 5xx error rate exceeds 5% in a 5-minute window" \
  --actions-enabled \
  --alarm-actions "arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts" \
  --metric-name "5xxErrorRate" \
  --namespace "AWS/CloudFront" \
  --statistic "Average" \
  --dimensions Name=DistributionId,Value=<PROD_CLOUDFRONT_DIST_ID> Name=Region,Value=Global \
  --period 300 \
  --evaluation-periods 1 \
  --threshold 5.0 \
  --comparison-operator "GreaterThanOrEqualToThreshold" \
  --treat-missing-data "notBreaching" \
  --region us-east-1
```

### Deploy 4xx Warning Alarm
```bash
aws cloudwatch put-metric-alarm \
  --alarm-name "LMT-Prod-CloudFront-4xx-Error-Spike" \
  --alarm-description "Triggers when CloudFront 4xx error rate exceeds 10% over 10 minutes" \
  --actions-enabled \
  --alarm-actions "arn:aws:sns:ap-south-1:<ACCOUNT_ID>:learnmore-production-alerts" \
  --metric-name "4xxErrorRate" \
  --namespace "AWS/CloudFront" \
  --statistic "Average" \
  --dimensions Name=DistributionId,Value=<PROD_CLOUDFRONT_DIST_ID> Name=Region,Value=Global \
  --period 300 \
  --evaluation-periods 2 \
  --threshold 10.0 \
  --comparison-operator "GreaterThanOrEqualToThreshold" \
  --treat-missing-data "notBreaching" \
  --region us-east-1
```

---

## 5. CloudFormation Infrastructure-as-Code Template

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Learn More Technologies - Production CloudWatch Alarms & SNS Alerting'

Parameters:
  DistributionId:
    Type: String
    Description: 'CloudFront Distribution ID for learnmoretechnologies.in'
  AlertEmail:
    Type: String
    Description: 'DevOps notification email endpoint'

Resources:
  ProductionAlertsTopic:
    Type: AWS::SNS::Topic
    Properties:
      TopicName: learnmore-production-alerts
      DisplayName: 'LMT-Production-Alerts'

  EmailSubscription:
    Type: AWS::SNS::Subscription
    Properties:
      TopicArn: !Ref ProductionAlertsTopic
      Protocol: email
      Endpoint: !Ref AlertEmail

  CloudFront5xxAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: LMT-Prod-CloudFront-5xx-High-Error-Rate
      AlarmDescription: 'Triggers when 5xx server error rate exceeds 5% in 5 minutes'
      Namespace: AWS/CloudFront
      MetricName: 5xxErrorRate
      Statistic: Average
      Period: 300
      EvaluationPeriods: 1
      Threshold: 5.0
      ComparisonOperator: GreaterThanOrEqualToThreshold
      TreatMissingData: notBreaching
      Dimensions:
        - Name: DistributionId
          Value: !Ref DistributionId
        - Name: Region
          Value: Global
      AlarmActions:
        - !Ref ProductionAlertsTopic

  CloudFront4xxAlarm:
    Type: AWS::CloudWatch::Alarm
    Properties:
      AlarmName: LMT-Prod-CloudFront-4xx-Error-Spike
      AlarmDescription: 'Triggers when 4xx client error rate exceeds 10% over two 5-minute windows'
      Namespace: AWS/CloudFront
      MetricName: 4xxErrorRate
      Statistic: Average
      Period: 300
      EvaluationPeriods: 2
      Threshold: 10.0
      ComparisonOperator: GreaterThanOrEqualToThreshold
      TreatMissingData: notBreaching
      Dimensions:
        - Name: DistributionId
          Value: !Ref DistributionId
        - Name: Region
          Value: Global
      AlarmActions:
        - !Ref ProductionAlertsTopic
```

---

## 6. Verification & Test Alarm Simulation

To verify that the alerting pipeline delivers notifications successfully:

```bash
# Set Alarm to ALARM state for testing
aws cloudwatch set-alarm-state \
  --alarm-name "LMT-Prod-CloudFront-5xx-High-Error-Rate" \
  --state-value ALARM \
  --state-reason "Simulated test alarm trigger for operational verification" \
  --region us-east-1

# Verify email is received with subject: ALARM: "LMT-Prod-CloudFront-5xx-High-Error-Rate"

# Reset Alarm back to OK state
aws cloudwatch set-alarm-state \
  --alarm-name "LMT-Prod-CloudFront-5xx-High-Error-Rate" \
  --state-value OK \
  --state-reason "Test verification completed successfully" \
  --region us-east-1
```

---

## 7. Incident Escalation & Response Procedure

1. **5xx Alarm Fired (Critical):**
   - Step 1: Open AWS Amplify Console > Deployments to inspect latest build health.
   - Step 2: Test `/` and `/api/leads` endpoints directly using `curl -I https://learnmoretechnologies.in`.
   - Step 3: If deployment regression is detected, execute instantaneous rollback to previous stable release (`v1.2.0-gsc-search-console-verification` / commit `e7b91d4`).
2. **4xx Alarm Fired (Warning):**
   - Step 1: Inspect CloudFront access logs in Athena/S3 for top 404 URL targets.
   - Step 2: Check if legacy WordPress URL backlinks require new redirect rules in `next.config.mjs`.