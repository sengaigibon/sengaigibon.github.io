export const boxConfig = { 
    textAlign: 'center' as const, 
    width: '100%' 
};

export const containerConfig = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 0
};

export const COLORS = {
    GRADIENT_FROM: '#fff',
    GRADIENT_TO: '#2A64C7'
};

export const containerGradient = {
    topToBottom: `linear-gradient(to bottom, ${COLORS.GRADIENT_FROM}, ${COLORS.GRADIENT_TO})`,
    bottomToTop: `linear-gradient(to top, ${COLORS.GRADIENT_FROM}, ${COLORS.GRADIENT_TO})`,
};

// Variations for different use cases
export const containerVariants = {
    fullHeight: containerConfig,
    autoHeight: {
        ...containerConfig,
        height: 'auto',
        minHeight: '100vh'
    },
    centered: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0
    }
};