
const translations = {
  en: {
    heroTitle: "Your Trusted Construction & Renovation Experts",
    heroSubtitle: "We transform your space with precision, quality, and care.",
    quoteButton: "Get a Quote",
    aboutTitle: "About Us",
    aboutText1: "Looking for a trusted partner to bring your renovation vision to life? We offer comprehensive renovation services tailored to both residential and commercial spaces.",
    aboutText2: "Alen Renovations has over 10 years of experience in the construction and renovation industry. Our mission is to bring your vision to life with honesty, craftsmanship, and professionalism.",
    servicesTitle: "Our Services",
    service1: "Full Home Renovations",
    service2: "Bathroom & Kitchen Remodels",
    service3: "Painting & Plastering",
    service4: "Flooring and Tiling",
    contactTitle: "Contact Us",
    labelName: "Name:",
    labelEmail: "Email:",
    labelPhoneNumber: "Phone number:",
    labelMessage: "Message:",
    submitButton: "Send Message"
  },
  fr: {
    heroTitle: "Vos experts de confiance en construction et rénovation",
    heroSubtitle: "Nous transformons votre espace avec précision, qualité et soin.",
    quoteButton: "Demander un devis",
    aboutTitle: "À propos de nous",
    aboutText1: "Vous cherchez un partenaire fiable pour réaliser votre projet de rénovation ? Nous offrons des services complets pour les espaces résidentiels et commerciaux. Des rénovations complètes aux modernisations de bureaux, notre équipe qualifiée concrétise vos idées.",
    aboutText2: "Alen Renovations possède plus de 10 ans d'expérience dans la construction et la rénovation. Notre mission est de concrétiser votre vision avec honnêteté, savoir-faire et professionnalisme.",
    servicesTitle: "Nos Services",
    service1: "Rénovations complètes de maisons",
    service2: "Rénovation de salle de bain et cuisine",
    service3: "Peinture et plâtrerie",
    service4: "Revêtement de sol et carrelage",
    contactTitle: "Nous contacter",
    labelName: "Nom :",
    labelEmail: "E-mail :",
    labelPhoneNumber: "Numéro de téléphone :",
    labelMessage: "Message :",
    submitButton: "Envoyer le message"
  },
  nl: {
    heroTitle: "Uw betrouwbare renovatie- en bouwpartner",
    heroSubtitle: "Wij transformeren uw ruimte met precisie, kwaliteit en zorg.",
    quoteButton: "Vraag een offerte aan",
    aboutTitle: "Over ons",
    aboutText1: "Zoekt u een betrouwbare partner voor uw renovatieproject? Wij bieden uitgebreide diensten voor zowel woningen als bedrijven.",
    aboutText2: "Alen Renovations heeft meer dan 10 jaar ervaring in de bouw- en renovatiesector. Onze missie is uw visie te realiseren met vakmanschap en eerlijkheid.",
    servicesTitle: "Onze Diensten",
    service1: "Volledige woningrenovaties",
    service2: "Badkamer & keukenrenovaties",
    service3: "Schilder- & pleisterwerk",
    service4: "Vloeren en tegels",
    contactTitle: "Contacteer ons",
    labelName: "Naam:",
    labelEmail: "E-mail:",
    labelPhoneNumber: "Telefoonnummer:",
    labelMessage: "Bericht:",
    submitButton: "Verstuur bericht"
  }
};

function switchLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.getElementById('hero-title').innerText = t.heroTitle;
  document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
  document.getElementById('quote-button').innerText = t.quoteButton;
  document.getElementById('about-title').innerText = t.aboutTitle;
  document.getElementById('about-text-1').innerText = t.aboutText1;
  document.getElementById('about-text-2').innerText = t.aboutText2;
  document.getElementById('services-title').innerText = t.servicesTitle;
  document.getElementById('service-1').innerText = t.service1;
  document.getElementById('service-2').innerText = t.service2;
  document.getElementById('service-3').innerText = t.service3;
  document.getElementById('service-4').innerText = t.service4;
  document.getElementById('contact-title').innerText = t.contactTitle;
  document.getElementById('label-name').innerText = t.labelName;
  document.getElementById('label-email').innerText = t.labelEmail;
  document.getElementById('phone-number').innerText = t.labelPhoneNumber;
  document.getElementById('label-message').innerText = t.labelMessage;
  document.getElementById('submit-button').innerText = t.submitButton;
}

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu);
});
