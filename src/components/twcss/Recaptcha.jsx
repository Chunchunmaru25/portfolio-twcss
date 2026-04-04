import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Captcha() {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={import.meta.env.VITE_SITE_KEY}
            scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
            }}
        >
            <YourComponent />
        </GoogleReCaptchaProvider>
    );
}

export default Captcha;