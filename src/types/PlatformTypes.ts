export type Platform = 'PC' | 'NINTENDO_SWITCH' | 'PLAYSTATION' | 'XBOX' | 'ANDROID' | 'IOS';

export const platforms = [
    'PC',
    'XBOX',
    'PLAYSTATION',
    'NINTENDO_SWITCH',
    'ANDROID',
    'IOS',
]

export const platformsLabels: Record<Platform, string> = {
    PC: 'PC',
    XBOX: 'Xbox',
    PLAYSTATION: 'PlayStation',
    NINTENDO_SWITCH: 'Nintendo',
    ANDROID: 'Android',
    IOS: 'iOS',
}

export const platformValues = Object.fromEntries(
    Object.entries(platformsLabels).map(([key, value]) => [value, key])
) as Record<string, Platform>;
