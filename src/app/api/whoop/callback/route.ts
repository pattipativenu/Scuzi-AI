import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const error = searchParams.get('error')

    if (error) {
      return NextResponse.redirect('/account?error=whoop_auth_failed')
    }

    if (!code) {
      return NextResponse.redirect('/account?error=no_auth_code')
    }

    // Exchange code for access token
    // This would involve calling WHOOP's token endpoint
    console.log('Received WHOOP auth code:', code)
    
    // For now, redirect to success page
    return NextResponse.redirect('/account?success=whoop_connected')
  } catch (error) {
    console.error('WHOOP callback error:', error)
    return NextResponse.redirect('/account?error=callback_failed')
  }
}