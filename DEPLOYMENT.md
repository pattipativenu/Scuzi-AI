# Scuzi AI - Production Deployment Guide

## 🚀 Complete Deployment Architecture

This guide covers the deployment of a fully-featured AI-powered meal planning application with WHOOP integration, AWS Bedrock AI models, and comprehensive meal management system.

## 🔧 Environment Variables Required for Production

**⚠️ IMPORTANT**: Replace all placeholder values below with your actual production credentials. The real credentials have been provided separately for security.

### Core Application
```
BETTER_AUTH_SECRET=your-random-secret-key-for-production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### AWS Configuration
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=<set in environment>
AWS_SECRET_ACCESS_KEY=<set in environment>
```

### AWS Secrets Manager ARNs
```
APP_SECRETS_ARN=arn:aws:secretsmanager:region:account:secret:your_app_secrets
AWS_BEDROCK_SECRET_ARN=arn:aws:secretsmanager:region:account:secret:your_bedrock_secrets
WHOOP_SECRETS_ARN=arn:aws:secretsmanager:region:account:secret:your_whoop_secrets
```

### Database Configuration (RDS MySQL)
```
RDS_HOST=your_rds_host_here
RDS_PORT=3306
RDS_USER=your_db_username_here
RDS_PASSWORD=your_secure_db_password_here
RDS_DATABASE=scuzi_meals
```

### WHOOP OAuth Configuration
```
WHOOP_CLIENT_ID=<set in environment>
WHOOP_CLIENT_SECRET=<set in environment>
WHOOP_REDIRECT_URI=https://your-domain.vercel.app/api/whoop/callback
OAUTH_STATE_SECRET=<set in environment>
```

### AWS Services Configuration
```
S3_BUCKET_RECIPES=your-recipes-bucket
S3_BUCKET_MEALS=your-meals-bucket
DYNAMODB_MEALPLAN_TABLE=YourMealPlanTable
DYNAMODB_HISTORY_TABLE=YourHistoryTable
```

### Production Mode Flag
```
LOCAL_DEV_MODE=false
```

## Deployment Steps

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Set Environment Variables:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add all the variables listed above
   - Make sure to update `NEXT_PUBLIC_SITE_URL` and `WHOOP_REDIRECT_URI` with your actual domain

3. **Verify Deployment:**
   - Check that the home page loads with real meals
   - Test WHOOP connection flow
   - Verify meal detail pages work
   - Test image proxy functionality

## 🎯 Features Working in Production

### ✅ **AI-Powered Chat System**
- **Claude 3.5 Sonnet v2**: Real-time recipe generation and meal analysis
- **AWS Titan G1V2**: Professional food image generation (20-30 second response time)
- **Multimodal Processing**: Text and image input support
- **Context-Aware Responses**: Maintains conversation history
- **Smart Image Generation**: Only creates images for complete recipes

### ✅ **WHOOP Health Integration**
- **OAuth 2.0 Authentication**: Secure WHOOP account connection
- **7 Biometric Metrics**: Recovery, Sleep, HRV, RHR, Calories, Sleep Debt, Blood Oxygen
- **AI Analysis**: Claude processes health data for personalized meal recommendations
- **Real-time Sync**: Live data fetching and analysis
- **Confidence Scoring**: 60-95% confidence in AI recommendations

### ✅ **Comprehensive Meal System**
- **90+ Meal Database**: Curated high-protein, gut-healthy recipes
- **Spoonacular Integration**: Cloud-based recipe database for Plan Ahead page
- **Nutritional Analysis**: Complete macro and micronutrient data
- **Image Management**: S3 storage with CDN delivery
- **Meal Planning**: 1-28 meal plans for up to 7 days

### ✅ **Advanced User Interface**
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Real-time Updates**: Live meal plan calculations and updates
- **Smooth Animations**: Framer Motion powered transitions
- **Accessibility**: WCAG compliant components
- **Custom Favicon**: Scuzi-branded icons replacing Next.js defaults

### ✅ **Database Architecture**
- **AWS RDS MySQL**: Primary meal database with 90+ recipes
- **DynamoDB**: Real-time chat history and user sessions
- **Turso SQLite**: User authentication and preferences
- **S3 Storage**: Meal images and generated content

### ✅ **Performance Optimizations**
- **Server Components**: Reduced client-side JavaScript
- **Image Optimization**: Next.js automatic optimization + custom proxy
- **Database Indexing**: Optimized queries for fast meal retrieval
- **CDN Integration**: Global content delivery
- **Smart Caching**: Efficient data fetching strategies

## 🧪 Testing Endpoints for Production Verification

### **AI System Testing**
```bash
# Test AWS Titan G1V2 Image Generation
curl -X POST https://your-domain.vercel.app/api/test-titan \
  -H "Content-Type: application/json" \
  -d '{"prompt": "chocolate chip cookies on a plate"}'

# Test Complete Chat Flow
curl -X POST https://your-domain.vercel.app/api/test-chat-flow

# Test Recipe Image Generation
curl -X POST https://your-domain.vercel.app/api/test-recipe-image
```

### **WHOOP Integration Testing**
```bash
# Test WHOOP Data Fetch
curl -X GET https://your-domain.vercel.app/api/whoop/test-connection

# Test Claude WHOOP Analysis
curl -X POST https://your-domain.vercel.app/api/plan-ahead/generate-from-library
```

## 📊 Post-Deployment Verification Checklist

### ✅ **Core Functionality**
- [ ] Home page loads with real meal data from AWS RDS
- [ ] Chat interface responds with Claude 3.5 Sonnet v2
- [ ] Image generation works with AWS Titan G1V2
- [ ] Plan Ahead page integrates WHOOP data
- [ ] Mobile layout displays correctly

### ✅ **AI Integration**
- [ ] Claude chat responses are contextual and accurate
- [ ] Titan G1V2 generates professional food images
- [ ] Image generation only triggers for complete recipes
- [ ] WHOOP data analysis produces personalized recommendations
- [ ] Confidence scores appear in meal plan generation

### ✅ **Database Connectivity**
- [ ] AWS RDS MySQL connection stable
- [ ] DynamoDB chat history saving correctly
- [ ] S3 image storage and retrieval working
- [ ] Meal data displays with proper nutrition info

### ✅ **Security & Performance**
- [ ] AWS Secrets Manager credentials loading
- [ ] HTTPS/TLS encryption active
- [ ] API response times under 2 seconds
- [ ] Image loading optimized with CDN
- [ ] Error handling graceful across all endpoints

## 🔄 Continuous Deployment Pipeline

### **Automated Deployment**
1. **Git Push** → **Vercel Auto-Deploy**
2. **Environment Variables** → **AWS Secrets Manager**
3. **Database Migrations** → **Automatic Schema Updates**
4. **Image Assets** → **S3 CDN Refresh**

### **Monitoring & Alerts**
- **CloudWatch Metrics**: API performance and error rates
- **Vercel Analytics**: Frontend performance monitoring
- **Database Health**: Connection pool and query performance
- **AI Model Usage**: Bedrock API call tracking and costs

## 🚀 Production Optimization

### **Performance Tuning**
- **Database Connection Pooling**: Optimized for concurrent users
- **Image CDN**: Global content delivery for meal images
- **API Rate Limiting**: Prevents abuse and manages costs
- **Caching Strategy**: Redis for frequently accessed data

### **Scalability Considerations**
- **Serverless Architecture**: Auto-scaling based on demand
- **Database Sharding**: Prepared for user growth
- **AI Model Optimization**: Efficient prompt engineering
- **Cost Management**: Monitoring AWS Bedrock usage

---

## 🎯 **Deployment Success Criteria**

✅ **All AI models (Claude 3.5 Sonnet v2 + Titan G1V2) operational**  
✅ **WHOOP integration with real biometric data analysis**  
✅ **90+ meal database fully accessible**  
✅ **Real-time chat with image generation working**  
✅ **Mobile-optimized responsive design**  
✅ **Secure credential management via AWS Secrets Manager**  
✅ **Performance metrics within acceptable ranges**

**This deployment represents a production-ready AI-powered meal planning platform with enterprise-grade architecture and comprehensive health data integration.**