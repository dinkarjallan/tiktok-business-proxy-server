const axios = require('axios');

// Test the proxy server
async function testProxy() {
  const baseUrl = 'http://localhost:3000/api';
  
  console.log('🧪 Testing TikTok Business API Proxy Server...\n');
  
  try {
    // Test GET request
    console.log('1. Testing GET request...');
    const getResponse = await axios.get(`${baseUrl}/user/info?fields=["display_name"]`);
    console.log('✅ GET request successful');
    console.log('Response status:', getResponse.status);
    console.log('Response data:', getResponse.data);
    console.log('');
    
  } catch (error) {
    if (error.response) {
      console.log('❌ GET request failed');
      console.log('Status:', error.response.status);
      console.log('Error:', error.response.data);
    } else {
      console.log('❌ GET request failed:', error.message);
    }
    console.log('');
  }
  
  try {
    // Test POST request
    console.log('2. Testing POST request...');
    const postResponse = await axios.post(`${baseUrl}/test`, {
      test: 'data',
      timestamp: new Date().toISOString()
    });
    console.log('✅ POST request successful');
    console.log('Response status:', postResponse.status);
    console.log('Response data:', postResponse.data);
    console.log('');
    
  } catch (error) {
    if (error.response) {
      console.log('❌ POST request failed');
      console.log('Status:', error.response.status);
      console.log('Error:', error.response.data);
    } else {
      console.log('❌ POST request failed:', error.message);
    }
    console.log('');
  }
  
  console.log('🎯 Proxy server test completed!');
  console.log('Note: Some requests may fail due to TikTok API authentication requirements.');
  console.log('This is expected behavior - the proxy is working if you see proper error responses from TikTok.');
}

// Run the test
testProxy().catch(console.error);
