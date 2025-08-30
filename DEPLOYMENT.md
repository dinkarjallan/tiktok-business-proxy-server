# Deployment Guide

This guide will walk you through deploying your TikTok Business API Proxy Server to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from your project directory**:
```bash
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `tiktok-business-proxy-server` (or your preferred name)
   - In which directory is your code located? → `./` (current directory)
   - Want to override the settings? → `N`

5. **Your app will be deployed** and you'll get a URL like:
   ```
   https://your-app-name.vercel.app
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit: TikTok Business API Proxy Server"
git push origin main
```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure the project**:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. **Click "Deploy"**

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. The proxy server works out of the box.

### Custom Domain (Optional)

1. **In your Vercel dashboard**, go to your project
2. **Click "Settings" → "Domains"**
3. **Add your custom domain**
4. **Update your DNS records** as instructed by Vercel

## 📱 Usage After Deployment

### Update Your API Base URL

Replace your TikTok API calls from:
```
https://business-api.tiktok.com/open_api/v1.3
```

To your deployed proxy server:
```
https://your-app-name.vercel.app/api
```

### Example Usage

```javascript
// Before (direct TikTok API)
const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/user/info');

// After (via proxy)
const response = await fetch('https://your-app-name.vercel.app/api/user/info');
```

## 🧪 Testing Your Deployment

### Test the Proxy

1. **Visit your deployed app**: `https://your-app-name.vercel.app`
2. **You should see the landing page** explaining how to use the proxy
3. **Test an API endpoint**:
```bash
curl "https://your-app-name.vercel.app/api/user/info"
```

### Expected Behavior

- ✅ **Landing page loads** - Your app is deployed
- ✅ **API endpoint responds** - Proxy is working
- ❌ **TikTok API errors** - This is normal (authentication required)
- ❌ **Proxy errors** - Check your deployment logs

## 📊 Monitoring

### Vercel Dashboard

- **Functions**: Monitor your API route performance
- **Analytics**: Track request volume and response times
- **Logs**: View detailed request/response logs

### Key Metrics to Watch

- **Function execution time** (should be under 30 seconds)
- **Error rates** (should be low)
- **Request volume** (to understand usage patterns)

## 🔄 Updates and Maintenance

### Automatic Deployments

- **GitHub integration**: Every push to main triggers a new deployment
- **Preview deployments**: Pull requests get preview URLs automatically

### Manual Updates

```bash
# Make your changes
git add .
git commit -m "Update proxy configuration"
git push origin main

# Vercel will automatically redeploy
```

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   - Check your `package.json` dependencies
   - Verify TypeScript configuration
   - Check build logs in Vercel dashboard

2. **Runtime Errors**
   - Check function logs in Vercel dashboard
   - Verify your API route configuration
   - Test locally first with `npm run dev`

3. **CORS Issues**
   - Verify `vercel.json` configuration
   - Check that CORS headers are being set correctly

### Getting Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Check your deployment logs** in the Vercel dashboard

## 🔒 Security Considerations

### Rate Limiting

Consider implementing rate limiting if you expect high traffic:
- Use Vercel's built-in rate limiting
- Implement custom rate limiting in your API routes
- Monitor usage patterns

### Authentication

- TikTok API keys should be handled by your client application
- The proxy server doesn't store or manage authentication
- Consider adding API key validation if needed

## 📈 Scaling

### Vercel's Auto-scaling

- **Serverless functions** automatically scale based on demand
- **Edge functions** provide global distribution
- **No manual scaling required**

### Performance Optimization

- **Function timeout**: Set to 30 seconds (configurable in `vercel.json`)
- **Response caching**: Consider implementing if appropriate
- **Request batching**: For high-volume scenarios

---

## 🎯 Next Steps

1. **Deploy your app** using one of the methods above
2. **Test the proxy** with a simple API call
3. **Update your application** to use the proxy URL
4. **Monitor performance** in the Vercel dashboard
5. **Scale as needed** based on your usage patterns

Your TikTok Business API Proxy Server is now ready to help you bypass geo-restrictions! 🚀
