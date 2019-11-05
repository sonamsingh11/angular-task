export const BREAKPOINTS = {
    extraSmallMax: 767,
    laptopMax: 1440,
    laptopMin: 1200,
    largeMin: 1441,
    mobileMax: 767,
    tabletLandscapeMax: 1199,
    tabletLandscapeMin: 992,
    tabletPortraitMax: 991,
    tabletPortraitMin: 768
};

export const RANGES = {
    extraSmall: `(max-width: ${BREAKPOINTS.extraSmallMax}px)`,
    laptop: `(min-width: ${BREAKPOINTS.laptopMin}px) and (max-width: ${BREAKPOINTS.laptopMax}px)`,
    laptopDown: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
    laptopUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
    large: `(min-width: ${BREAKPOINTS.largeMin}px)`,
    medium: `(min-width: ${BREAKPOINTS.tabletLandscapeMin}px) and (max-width: ${BREAKPOINTS.tabletLandscapeMax}px)`,
    mobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
    small: `(min-width: ${BREAKPOINTS.tabletPortraitMin}px) and (max-width: ${BREAKPOINTS.tabletPortraitMax}px)`,
    tablet:
        `(min-width: ${BREAKPOINTS.tabletPortraitMin}px) and (max-width: ${BREAKPOINTS.tabletLandscapeMax}px)`,
    tabletLandscapeDown: `(max-width: ${BREAKPOINTS.tabletLandscapeMax}px)`,
    tabletPortrait:
        `(min-width: ${BREAKPOINTS.tabletPortraitMin}px) and (max-width: ${BREAKPOINTS.tabletPortraitMax}px)`,
    tabletPortraitDown: `(max-width: ${BREAKPOINTS.tabletPortraitMax}px)`
};
