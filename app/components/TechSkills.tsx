import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import StackOfCards from './StackOfCards';

const programmingLanguages = [
    {
        id: 1,
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"

    },
    {
        id: 2,
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"

    },
    {
        id: 3,
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"

    },
    {
        id: 4,
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        id: 5,
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"

    }
];

const backend = [
    {
        id: 1,
        name: "Symfony",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"
    },
    {
        id: 2,
        name: "Api Platform",
        icon: "https://api-platform.com/images/logos/Logo_Circle%20webby%20blue.svg"
    },
    {
        id: 3,
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
     {
        id: 4,
        name: "Zend Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zend/zend-original.svg"
    },
];

const frontendFrameworks = [
    {
        id: 1,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        id: 2,
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    }
];

export default function TechSkills() {
    const t = useTranslations();
    return (
        <div>
            <Box sx={{ pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" color="text.secondary" sx={{ pb: 4 }}>
                    {t('programmingLanguages')}
                </Typography>
                <StackOfCards elements={programmingLanguages} />
            </Box>

            <Box sx={{ pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" color="text.secondary" sx={{ pb: 4 }}>
                    {t('backend')}
                </Typography>
                <StackOfCards elements={backend} />
            </Box>

            <Box sx={{ pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" color="text.secondary" sx={{ pb: 4 }}>
                    {t('fe-frameworks')}
                </Typography>
                <StackOfCards elements={frontendFrameworks} />
            </Box>
        </div>
    );
}