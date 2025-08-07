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

    },
    {
        id: 6,
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        id: 7,
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
        id: 8,
        name: "Visual Basic",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"
    },
    {
        id: 9,
        name: "Golang",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
    },
    {
        id: 10,
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
    }
];

const backendFrameworks = [
    {
        id: 1,
        name: "Symfony",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg"
    },
    {
        id: 2,
        name: "Zend Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zend/zend-original.svg"
    },
    {
        id: 3,
        name: "Magento",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg"
    },
    {
        id: 4,
        name: "Doctrine",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/doctrine/doctrine-original.svg"
    },
    {
        id: 5,
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
    },
    {
        id: 6,
        name: "Composer",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg"
    }
];

const apiTechnologies = [
    {
        id: 1,
        name: "Api Platform",
        icon: "https://api-platform.com/images/logos/Logo_Circle%20webby%20blue.svg"
    },
    {
        id: 2,
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
    },
    {
        id: 3,
        name: "REST",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
    },
    {
        id: 4,
        name: "SOAP",
        icon: "/images/soap.svg"
    },
    {
        id: 5,
        name: "XML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
    }
];

const databases = [
    {
        id: 1,
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
    },
    {
        id: 2,
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
        id: 3,
        name: "Sqlite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
    },
    {
        id: 4,
        name: "MariaDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
    },
    {
        id: 5,
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
    },
    {
        id: 6,
        name: "MS SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
    },
    {
        id: 7,
        name: "OpenSearch",
        icon: "/images/opensearch.svg"
    }
];

const devOpsTools = [
    {
        id: 1,
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
        id: 2,
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
        id: 3,
        name: "VirtualBox",
        icon: "/images/virtualbox.svg"
    },
    {
        id: 4,
        name: "Apache",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg"
    },
    {
        id: 5,
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
    }
];

const frontendFrameworks = [
    {
        id: 1,
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        id: 3,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        id: 4,
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        id: 5,
        name: "Twig",
        icon: "/images/twig.svg"
    },
    {
        id: 6,
        name: "JQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
    },
    {
        id: 7,
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
        id: 8,
        name: "Electron",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
    }
];

const boxConfig = { pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' };

export default function TechSkills() {
    const t = useTranslations();
    const skills = [
        { title: t('programmingLanguages'), elements: programmingLanguages },
        { title: t('backendFrameworks'), elements: backendFrameworks },
        { title: t('fe-frameworks'), elements: frontendFrameworks },
        { title: t('apiTechnologies'), elements: apiTechnologies },
        { title: t('databases'), elements: databases },
        { title: t('devOpsTools'), elements: devOpsTools }
    ];
    return (
        <div>
            {skills.map((skill) => (
                <Box sx={boxConfig} key={skill.title}>
                    <Typography variant="h5" color="text.secondary" sx={{ pb: 4 }}>
                        {skill.title}
                    </Typography>
                    <StackOfCards elements={skill.elements} />
                </Box>
            ))}
        </div>
    );
}