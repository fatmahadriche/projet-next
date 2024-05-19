import React from 'react';

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="flex wrap justify-between">
                {/* Premier élément */}
                <div className="text-center">
                    <span className="text-center flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 57 56" fill="none">
                            <circle cx="17" cy="38.5" r="4.5" stroke="currentColor" strokeWidth="2"></circle>
                            <circle cx="40" cy="38.5" r="4.5" stroke="currentColor" strokeWidth="2"></circle>
                            <path d="M21.5 37H35.5" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M12.6622 37L9.5 37L9.5 14L32.6892 14L32.6892 18.7045M32.6892 37L32.6892 18.7045M32.6892 18.7045L41.1216 18.7045L43.2297 26.0227L48.5 28.1136L48.5 37L44.2838 37" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"></path>
                            <path d="M17.5 14H24.5V23L21 20.75L17.5 23V14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"></path>
                        </svg>
                    </span>
                    <span className="prefooter_illustrationLabel__PsXHg" data-contentful-field-id="label" data-contentful-entry-id="5cSReNFJpOftHCxIN9SSae">Livraison gratuite dès 25€</span>
                </div>
                {/* Deuxième élément */}
                <div className="text-center">
                    <span className="text-center flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 57 56" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.3587 5.99854V11.9845C23.6035 5.41847 35.6925 5.92307 43.3464 13.4983C49.636 19.7232 51.1049 28.9155 47.7521 36.5265C46.8322 38.6148 45.2294 41.0494 43.3464 42.9131C35.1463 51.0289 21.8554 51.0289 13.6553 42.9131C7.36564 36.6882 5.89679 27.4959 9.24955 19.8848L11.0798 20.6911C8.0515 27.5656 9.37865 35.8666 15.0621 41.4916C22.483 48.8361 34.5187 48.8361 41.9395 41.4916C43.6349 39.8137 45.0979 37.5908 45.9218 35.7203C48.9502 28.8457 47.623 20.5448 41.9395 14.9198C35.1483 8.1984 24.492 7.62815 17.0449 13.209H22.4989V15.209H14.3587L13.3587 14.209V5.99854H15.3587ZM23.4385 17.9999H23.0121L22.7169 18.3076L18.7794 22.411L18.501 22.7012V23.1034V35.9999V36.9999H19.501H37.501H38.501V35.9999V23.1034V22.7012L38.2225 22.411L34.285 18.3076L33.9898 17.9999H33.5635H23.4385ZM21.8465 22.1034L23.8648 19.9999H33.1371L35.1555 22.1034H21.8465ZM20.501 24.1034H36.501V34.9999H20.501V24.1034Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    <span className="prefooter_illustrationLabel__PsXHg" data-contentful-field-id="label" data-contentful-entry-id="77WVwzoZzRlaFhZdEZRCCB">Retours faciles sous 30 jours</span>
                </div>
                {/* Troisième élément */}
                <div className="text-center">
                    <span className="text-center flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 57 56" fill="none">
                            <circle cx="41.5" cy="42" r="8" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"></circle>
                            <path d="M36.5 41.7692L40.1364 45L46.5 39" stroke="currentColor" strokeWidth="2" strokeLinejoin="bevel"></path>
                            <rect x="27.5" y="27" width="3" height="3" rx="1.5" fill="currentColor"></rect>
                            <rect x="27.5" y="35" width="3" height="3" rx="1.5" fill="currentColor"></rect>
                            <rect x="37.5" y="27" width="3" height="3" rx="1.5" fill="currentColor"></rect>
                            <rect x="17.5" y="27" width="3" height="3" rx="1.5" fill="currentColor"></rect>
                            <rect x="17.5" y="9" width="5" height="8" rx="2.5" stroke="currentColor" strokeWidth="2"></rect>
                            <rect x="34.5" y="9" width="5" height="8" rx="2.5" stroke="currentColor" strokeWidth="2"></rect>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 13H13.5C11.2909 13 9.5 14.7909 9.5 17V22V41C9.5 43.2091 11.2909 45 13.5 45H34.0815C33.8262 44.3693 33.649 43.6986 33.5619 43H13.5C12.3954 43 11.5 42.1046 11.5 41V23H45.5V35.0703C46.2528 35.5057 46.9281 36.0604 47.5 36.7084V22V17C47.5 14.7909 45.7091 13 43.5 13H39.5V14.5C39.5 14.6712 39.4828 14.8384 39.45 15H43.5C44.6046 15 45.5 15.8954 45.5 17V21H11.5V17C11.5 15.8954 12.3954 15 13.5 15H17.55C17.5172 14.8384 17.5 14.6712 17.5 14.5V13ZM22.45 15H34.55C34.5172 14.8384 34.5 14.6712 34.5 14.5V13H22.5V14.5C22.5 14.6712 22.4828 14.8384 22.45 15Z" fill="currentColor"></path>
                            <rect x="17.5" y="35" width="3" height="3" rx="1.5" fill="currentColor"></rect>
                        </svg>
                    </span>
                    <span className="prefooter_illustrationLabel__PsXHg" data-contentful-field-id="label" data-contentful-entry-id="62HJi5umzALdusE2ehRSLV">Réservation RDV en ligne</span>
                </div>
                {/* Quatrième élément */}
                <div className="text-center">
                    <span className="text-center flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fillRule="evenodd" clipRule="evenodd" width="56" height="56">
                            <path d="M21.93,17.8H5.31c-0.45,0-0.81,0.36-0.81,0.81v9.72c0,0.45,0.36,0.81,0.81,0.81h1.63v20.39  c0,0.45,0.36,0.81,0.81,0.81h40.51c0.45,0,0.81-0.36,0.81-0.81V29.15h1.62c0.45,0,0.81-0.36,0.81-0.81v-9.72  c0-0.45-0.36-0.81-0.81-0.81H34.07c1.59-0.63,3.18-1.48,4.29-2.59c2.06-2.06,2.72-3.88,2.59-5.38c-0.09-1.08-0.59-2.01-1.37-2.8  c-0.78-0.78-1.72-1.28-2.8-1.37c-1.5-0.13-3.32,0.53-5.38,2.59c-1.68,1.68-2.76,4.45-3.4,6.68c-0.64-2.23-1.72-5-3.4-6.68  c-2.06-2.06-3.88-2.72-5.38-2.59c-1.08,0.09-2.02,0.59-2.8,1.37c-0.78,0.78-1.28,1.72-1.37,2.8c-0.13,1.5,0.53,3.33,2.59,5.38  C18.75,16.32,20.34,17.17,21.93,17.8L21.93,17.8z M22.32,29.15v19.58H8.56V29.15L22.32,29.15z M33.67,29.15h13.78v19.58H33.67  L33.67,29.15z M32.04,29.15V48.6h-8.1V29.15L32.04,29.15z M33.67,19.42h16.21v8.1H33.67L33.67,19.42z M22.32,19.42v8.1H6.12v-8.1  H22.32z M23.94,27.53h8.1v-8.1h-8.1V27.53z M17.57,8.18c0.5-0.5,1.1-0.84,1.79-0.9c1.16-0.1,2.51,0.53,4.09,2.12  c2.15,2.15,3.17,6.25,3.55,8.22c-1.97-0.38-6.07-1.41-8.22-3.55c-1.59-1.59-2.22-2.94-2.12-4.09C16.73,9.28,17.07,8.68,17.57,8.18  L17.57,8.18z M38.43,8.18c0.5,0.5,0.84,1.1,0.9,1.79c0.1,1.16-0.53,2.51-2.12,4.09c-2.15,2.15-6.25,3.17-8.22,3.55  c0.38-1.96,1.4-6.07,3.55-8.22c1.59-1.59,2.94-2.22,4.09-2.12C37.33,7.34,37.93,7.68,38.43,8.18L38.43,8.18z"></path>
                        </svg>
                    </span>
                    <span className="prefooter_illustrationLabel__PsXHg" data-contentful-field-id="label" data-contentful-entry-id="4DCtnTsPt7tNnzJctrkpJX">Votre fidélité est récompensée</span>
                </div>
                {/* Cinquième élément */}
                <div className="text-center">
                    <span className="text-center flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 49 48" fill="none">
                            <path d="M10.2267 13.6408C10.0238 24.0004 9.79416 35.7571 24.7704 41.1429C39.754 35.7571 39.519 23.9921 39.2528 13.6408V12.2047C33.9341 12.0747 28.8177 10.1894 24.7397 6.85718C20.6625 10.1894 15.546 12.0747 10.2267 12.2047V13.6408Z" stroke="currentColor" strokeWidth="currentStroke" strokeLinejoin="bevel"></path>
                            <path d="M17.0356 24.066L22.646 29.1429L32.4642 19.7144" stroke="currentColor" strokeWidth="currentStroke" strokeLinejoin="bevel"></path>
                        </svg>
                    </span>
                    <span className="prefooter_illustrationLabel__PsXHg" data-contentful-field-id="label" data-contentful-entry-id="5qVYfB2Joo68FBO1SlXXpE">Paiements sécurisés</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
