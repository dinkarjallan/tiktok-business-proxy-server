import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const TIKTOK_BASE_URL = 'https://business-api.tiktok.com/open_api/v1.3';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/');
    const url = new URL(request.url);
    const queryParams = url.searchParams.toString();
    
    const targetUrl = `${TIKTOK_BASE_URL}/${path}${queryParams ? `?${queryParams}` : ''}`;
    
    console.log(`Proxying GET request to: ${targetUrl}`);
    
    const response = await axios.get(targetUrl, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || 'TikTok-Business-Proxy/1.0',
        'Accept': request.headers.get('accept') || 'application/json',
        'Accept-Language': request.headers.get('accept-language') || 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      timeout: 30000,
    });

    return NextResponse.json(response.data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    
    if (error.response) {
      return NextResponse.json(
        { error: 'TikTok API Error', details: error.response.data },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/');
    const body = await request.json();
    const url = new URL(request.url);
    const queryParams = url.searchParams.toString();
    
    const targetUrl = `${TIKTOK_BASE_URL}/${path}${queryParams ? `?${queryParams}` : ''}`;
    
    console.log(`Proxying POST request to: ${targetUrl}`);
    console.log('Request body:', body);
    
    const response = await axios.post(targetUrl, body, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || 'TikTok-Business-Proxy/1.0',
        'Accept': request.headers.get('accept') || 'application/json',
        'Accept-Language': request.headers.get('accept-language') || 'en-US,en;q=0.9',
        'Content-Type': request.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-cache',
      },
      timeout: 30000,
    });

    return NextResponse.json(response.data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    
    if (error.response) {
      return NextResponse.json(
        { error: 'TikTok API Error', details: error.response.data },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/');
    const body = await request.json();
    const url = new URL(request.url);
    const queryParams = url.searchParams.toString();
    
    const targetUrl = `${TIKTOK_BASE_URL}/${path}${queryParams ? `?${queryParams}` : ''}`;
    
    console.log(`Proxying PUT request to: ${targetUrl}`);
    
    const response = await axios.put(targetUrl, body, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || 'TikTok-Business-Proxy/1.0',
        'Accept': request.headers.get('accept') || 'application/json',
        'Accept-Language': request.headers.get('accept-language') || 'en-US,en;q=0.9',
        'Content-Type': request.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-cache',
      },
      timeout: 30000,
    });

    return NextResponse.json(response.data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    
    if (error.response) {
      return NextResponse.json(
        { error: 'TikTok API Error', details: error.response.data },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/');
    const url = new URL(request.url);
    const queryParams = url.searchParams.toString();
    
    const targetUrl = `${TIKTOK_BASE_URL}/${path}${queryParams ? `?${queryParams}` : ''}`;
    
    console.log(`Proxying DELETE request to: ${targetUrl}`);
    
    const response = await axios.delete(targetUrl, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || 'TikTok-Business-Proxy/1.0',
        'Accept': request.headers.get('accept') || 'application/json',
        'Accept-Language': request.headers.get('accept-language') || 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
      },
      timeout: 30000,
    });

    return NextResponse.json(response.data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    
    if (error.response) {
      return NextResponse.json(
        { error: 'TikTok API Error', details: error.response.data },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}
