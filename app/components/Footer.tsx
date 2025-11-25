import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();

    return (
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: 1,
          color: 'rgba(0, 0, 0, 0.6)'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {t('name')}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              sx={{ color: 'rgba(0, 0, 0, 0.6)', '&:hover': { color: '#0077b5' } }}
              onClick={() => window.open('https://www.linkedin.com/in/jrcaballerob/', '_blank', 'noopener,noreferrer')}
              aria-label={t('linkedinLabel')}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            <IconButton 
              sx={{ color: 'rgba(0, 0, 0, 0.6)', '&:hover': { color: '#333' } }}
              onClick={() => window.open('https://github.com/sengaigibon', '_blank', 'noopener,noreferrer')}
              aria-label={t('githubLabel')}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
            <IconButton 
              sx={{ color: 'rgba(0, 0, 0, 0.6)', '&:hover': { color: '#f48024' } }}
              onClick={() => window.open('https://stackoverflow.com/users/5519402/hiperboreo', '_blank', 'noopener,noreferrer')}
              aria-label={t('stackoverflowLabel')}
            >
              <QuestionAnswerIcon fontSize="medium" />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {t('copyright')}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {t('madeWith')}
            <a href={`/${locale}/realme`} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {t('me')}
            </a>
          </Typography>
        </Box>
    );
}