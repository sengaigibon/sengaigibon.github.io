import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations();

    return (
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: 1
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {t('footer.name')}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton 
              sx={{ color: '#fff', '&:hover': { color: '#0077b5' } }}
              onClick={() => window.open('https://www.linkedin.com/in/jrcaballerob/', '_blank', 'noopener,noreferrer')}
              aria-label={t('footer.linkedinLabel')}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            <IconButton 
              sx={{ color: '#fff', '&:hover': { color: '#333' } }}
              onClick={() => window.open('https://github.com/sengaigibon', '_blank', 'noopener,noreferrer')}
              aria-label={t('footer.githubLabel')}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
            <IconButton 
              sx={{ color: '#fff', '&:hover': { color: '#f48024' } }}
              onClick={() => window.open('https://stackoverflow.com/users/5519402/hiperboreo', '_blank', 'noopener,noreferrer')}
              aria-label={t('footer.stackoverflowLabel')}
            >
              <QuestionAnswerIcon fontSize="medium" />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {t('footer.copyright')}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {t('footer.madeWith')}
          </Typography>
        </Box>
    );
}