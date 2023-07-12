// import * as React from 'react';
// import AppTheme from 'docs/src/modules/components/AppTheme';
// import Checkout from 'docs/data/material/getting-started/templates/checkout/Checkout';

// export default function Page() {
//   return (
//     <AppTheme>
//       <Checkout />
//     </AppTheme>
//   );
// }


// /**-----AppTheme----------- */
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'docs/src/modules/components/Head';

// export default function AppTheme(props) {
//   const { children } = props;

//   return (
//     <React.Fragment>
//       <Head>
//         <meta name="robots" content="noindex,nofollow" />
//       </Head>
//       {children}
//     </React.Fragment>
//   );
// }

// AppTheme.propTypes = {
//   children: PropTypes.node.isRequired,
// };


// /**-----Checkout----------- */
// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Toolbar from '@mui/material/Toolbar';
// import Paper from '@mui/material/Paper';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const steps = ['Shipping address', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         color="default"
//         elevation={0}
//         sx={{
//           position: 'relative',
//           borderBottom: (t) => `1px solid ${t.palette.divider}`,
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" color="inherit" noWrap>
//             Company name
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//           <Typography component="h1" variant="h4" align="center">
//             Checkout
//           </Typography>
//           <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? (
//             <React.Fragment>
//               <Typography variant="h5" gutterBottom>
//                 Thank you for your order.
//               </Typography>
//               <Typography variant="subtitle1">
//                 Your order number is #2001539. We have emailed your order
//                 confirmation, and will send you an update when your order has
//                 shipped.
//               </Typography>
//             </React.Fragment>
//           ) : (
//             <React.Fragment>
//               {getStepContent(activeStep)}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 {activeStep !== 0 && (
//                   <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
//                     Back
//                   </Button>
//                 )}

//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 3, ml: 1 }}
//                 >
//                   {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
//                 </Button>
//               </Box>
//             </React.Fragment>
//           )}
//         </Paper>
//         <Copyright />
//       </Container>
//     </ThemeProvider>
//   );
// }


// /**-----Head----------- */
// import * as React from 'react';
// import NextHead from 'next/head';
// import { useRouter } from 'next/router';
// import { LANGUAGES_SSR } from 'docs/config';
// import { useUserLanguage, useTranslate } from 'docs/src/modules/utils/i18n';
// import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';

// // #major-version-switch
// const HOST = 'https://mui.com';

// interface HeadProps {
//   card?: string;
//   children?: React.ReactNode;
//   description: string;
//   disableAlternateLocale?: boolean;
//   largeCard?: boolean;
//   title: string;
//   type?: string;
// }

// export default function Head(props: HeadProps) {
//   const t = useTranslate();
//   const {
//     card = '/static/social-previews/default-preview.jpg',
//     children,
//     description = t('strapline'),
//     disableAlternateLocale = false,
//     largeCard = true,
//     title = t('headTitle'),
//     type = 'website',
//   } = props;
//   const userLanguage = useUserLanguage();
//   const router = useRouter();
//   const { canonicalAs } = pathnameToLanguage(router.asPath);
//   const preview = card.startsWith('http') ? card : `${HOST}${card}`;

//   return (
//     <NextHead>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       {/* Twitter */}
//       <meta name="twitter:card" content={largeCard ? 'summary_large_image' : 'summary'} />
//       {/* https://twitter.com/MUI_hq */}
//       <meta name="twitter:site" content="@MUI_hq" />
//       {/* #major-version-switch */}
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={preview} />
//       {/* Facebook */}
//       <meta property="og:type" content={type} />
//       <meta property="og:title" content={title} />
//       {/* #major-version-switch */}
//       <meta property="og:url" content={`${HOST}${router.asPath}`} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={preview} />
//       <meta property="og:ttl" content="604800" />
//       {/* Algolia */}
//       <meta name="docsearch:language" content={userLanguage} />
//       {/* #major-version-switch */}
//       <meta name="docsearch:version" content="master" />
//       {disableAlternateLocale
//         ? null
//         : LANGUAGES_SSR.map((userLanguage2) => (
//             <link
//               key={userLanguage2}
//               rel="alternate"
//               href={`https://mui.com${
//                 userLanguage2 === 'en' ? '' : `/${userLanguage2}`
//               }${canonicalAs}`}
//               hrefLang={userLanguage2}
//             />
//           ))}
//       {children}
//     </NextHead>
//   );
// }