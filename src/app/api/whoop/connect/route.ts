import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // WHOOP OAuth connection logic would go here
    const whoopClientId = process.env.WHOOP_CLIENT_ID
    const redirectUri = process.env.WHOOP_REDIRECT_URI
    
    if (!whoopClientId || !redirectUri) {
      return NextResponse.json(
        { error: 'WHOOP configuration missing' },
        { status: 500 }
      )
    }

    const authUrl = `https://api.prod.whoop.com/oauth/oauth2/auth?response_type=code&client_id=${whoopClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read:recovery read:sleep read:workout read:cycles`
    
    return NextResponse.json({ authUrl })
  } catch (error) {
    console.error('WHOOP connect error:', error)
    return NextResponse.json(
      { error: 'Failed to initiate WHOOP connection' },
      { status: 500 }
    )
  }
}