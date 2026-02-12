# Tech Trap NIT - Railway Deployment Guide

## Deploy to Railway

### Prerequisites
- Railway account (sign up at https://railway.app)
- Git installed (optional, can use Railway's GitHub integration)

### Deployment Steps

#### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Go to Railway**: Visit https://railway.app and sign in

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo" or "Empty Project"

3. **If using GitHub**:
   - Connect your GitHub account
   - Select your Tech Trap repository
   - Railway will auto-detect it's a Node.js project

4. **If using Empty Project**:
   - Create the project
   - Go to your project
   - Click "Deploy from local"
   - Install Railway CLI: `npm install -g @railway/cli`
   - Login: `railway login`
   - Link project: `railway link`
   - Deploy: `railway up`

5. **Configure Environment (if needed)**:
   - In Railway dashboard, go to your project
   - Click on "Variables" tab
   - Add any environment variables (none required by default)

6. **Get Your URL**:
   - Railway will automatically generate a public URL
   - Click "Settings" > "Generate Domain"
   - Your site will be live at: `https://your-project-name.up.railway.app`

#### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize new project (in your tech-trap-nit-main folder)
railway init

# Deploy
railway up

# Generate domain
railway domain
```

### Important URLs After Deployment

- **Participant URL**: `https://your-domain.up.railway.app`
- **Admin URL**: `https://your-domain.up.railway.app/admin`
- **Admin Password**: `admin123` (change in server.js if needed)

### Configuration

Your app is now configured with:
- ✅ Dynamic PORT (Railway assigns this automatically)
- ✅ Node.js 16+ requirement
- ✅ Express + Socket.IO for real-time functionality
- ✅ All static files served from /public

### Post-Deployment

1. **Test the application**:
   - Visit your Railway URL
   - Test participant registration
   - Test admin panel at /admin
   - Verify Socket.IO connections work

2. **Monitor**:
   - Railway dashboard shows logs and metrics
   - Check for any errors in the Deployments tab

3. **Custom Domain (Optional)**:
   - In Railway: Settings > Networking > Custom Domain
   - Add your own domain if you have one

### Troubleshooting

- **Port Issues**: Railway automatically sets PORT environment variable
- **WebSocket Issues**: Railway supports WebSocket/Socket.IO by default
- **Logs**: View real-time logs in Railway dashboard
- **Redeploy**: Push to GitHub (if connected) or run `railway up` again

### Notes

- Railway free tier includes 500 hours/month execution time
- Your app will sleep after inactivity and wake up on first request
- Socket.IO will reconnect automatically when app wakes

### Support

For Railway support: https://railway.app/help
For app issues: Check server logs in Railway dashboard
