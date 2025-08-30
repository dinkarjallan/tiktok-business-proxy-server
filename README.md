# TikTok Business API Proxy Server

A Next.js-based proxy server that helps bypass TikTok's geo-positional restrictions by acting as an intermediary between your application and TikTok's Business API.

## 🚀 Features

- **Geo-restriction bypass**: Access TikTok Business API from any location
- **Full HTTP method support**: GET, POST, PUT, DELETE
- **Automatic request forwarding**: Seamlessly forwards all requests to TikTok's API
- **Header preservation**: Maintains original request headers and adds proxy-specific ones
- **CORS support**: Cross-origin requests are fully supported
- **Error handling**: Comprehensive error handling with detailed error messages
- **Request logging**: All requests are logged for debugging purposes
- **Timeout protection**: 30-second timeout to prevent hanging requests

## 🏗️ Architecture

```
Your App → Proxy Server → TikTok Business API
    ↑                        ↓
    └── Response ←──────────┘
```

The proxy server intercepts all requests to your domain's `/api` endpoint and forwards them to `https://business-api.tiktok.com/open_api/v1.3` while maintaining the original request structure.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tiktok-business-proxy-server
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📖 Usage

### Base URL

Replace your TikTok API calls from:
```
https://business-api.tiktok.com/open_api/v1.3
```

To your proxy server:
```
https://your-app.vercel.app/api
```

### Example Requests

#### GET Request
```bash
curl "https://your-app.vercel.app/api/user/info?fields=[\"display_name\",\"profile_picture_url\"]"
```

#### POST Request
```bash
curl -X POST "https://your-app.vercel.app/api/campaign/create" \
  -H "Content-Type: application/json" \
  -d '{"campaign_name": "Test Campaign"}'
```

#### PUT Request
```bash
curl -X PUT "https://your-app.vercel.app/api/campaign/update" \
  -H "Content-Type: application/json" \
  -d '{"campaign_id": "123", "status": "ENABLED"}'
```

#### DELETE Request
```bash
curl -X DELETE "https://your-app.vercel.app/api/campaign/123"
```

### Supported Endpoints

All TikTok Business API endpoints are supported. The proxy automatically forwards the path after `/api/` to the corresponding TikTok endpoint.

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. The proxy server is configured to work out of the box.

### Custom Headers

The proxy server automatically adds the following headers to requests:
- `User-Agent`: TikTok-Business-Proxy/1.0 (or original if provided)
- `Accept`: application/json (or original if provided)
- `Accept-Language`: en-US,en;q=0.9 (or original if provided)
- `Cache-Control`: no-cache

## 🛡️ Security Considerations

- **CORS**: The proxy allows all origins (`*`) for maximum compatibility
- **Rate Limiting**: Consider implementing rate limiting if you expect high traffic
- **Authentication**: TikTok API keys and authentication should be handled by your application
- **Logging**: All requests are logged for debugging purposes

## 🐛 Troubleshooting

### Common Issues

1. **Timeout Errors**: Increase the timeout in `vercel.json` if needed
2. **CORS Issues**: Ensure your client is making requests to the correct proxy endpoint
3. **Authentication Errors**: Verify that your TikTok API credentials are correct

### Debug Mode

Enable debug logging by checking the console output. All requests and responses are logged with detailed information.

## 📝 API Reference

### Proxy Endpoint

- **URL**: `/api/{tiktok_endpoint}`
- **Methods**: GET, POST, PUT, DELETE, OPTIONS
- **Headers**: All standard HTTP headers are supported
- **Body**: JSON payloads are automatically forwarded

### Response Format

The proxy returns the exact response from TikTok's API with additional CORS headers.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This proxy server is designed for legitimate business use cases. Please ensure you comply with TikTok's Terms of Service and API usage policies. The authors are not responsible for any misuse of this tool.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Review the logs for error details
3. Open an issue on GitHub
4. Contact the development team

---

**Note**: This proxy server is specifically designed for TikTok Business API v1.3. If TikTok updates their API, you may need to update the base URL in the proxy configuration.
