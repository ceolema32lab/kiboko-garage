/* ==========================================================================
   KIBOKO GARAGE - BILINGUAL TRANSLATION ENGINE (EN / SW)
   ========================================================================== */

const TRANSLATIONS = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-estimator': 'Estimator',
        'nav-gallery': 'Gallery',
        'nav-faqs': 'FAQs',
        'nav-contact': 'Contact',
        'btn-portal': 'Portal',
        'btn-book-now': 'Book Now',

        // Hero Section
        'hero-badge': 'Premium Automotive Excellence',
        'hero-title': 'Your Vehicle Deserves the Best Care.',
        'hero-desc': 'Professional car repair, precision diagnostics, auto mechanic maintenance, and corporate fleet management services in Arusha, Tanzania.',
        'btn-book-service': 'Book Service',
        'btn-call-now': 'Call Now',
        'stat-experience': 'Years Experience',
        'stat-serviced': 'Cars Serviced',
        'stat-satisfaction': 'Satisfaction Rate',
        'stat-mechanics': 'Expert Mechanics',

        // Hero Quick Booking
        'quick-book-title': 'Quick Booking',
        'lbl-fullname': 'FullName *',
        'lbl-phone': 'Phone Number *',
        'lbl-vehicle-model': 'Vehicle Model *',
        'lbl-service': 'Service *',
        'lbl-pref-date': 'Preferred Date *',
        'opt-select-service': 'Select Service',
        'opt-diagnostics': 'Computer Diagnostics',
        'opt-oil': 'Oil Change & Filter',
        'opt-brakes': 'Brake Services',
        'opt-engine': 'Engine Repair',
        'opt-suspension': 'Suspension Repair',
        'opt-fleet': 'Fleet Maintenance',
        'btn-quick-book': 'Book Appointment',

        // About Us
        'about-tag': 'About Kiboko Garage',
        'about-title': 'African Excellence in Automotive Service',
        'about-desc': 'Located in the Unga Ltd Area of Arusha, Kiboko Garage is a premier car repair, auto mechanic, and fleet maintenance garage in Arusha. We cater to individual car owners and corporate clients who seek premium diagnostics and reliable vehicle servicing.',
        'tab-mission': 'Mission',
        'tab-vision': 'Vision',
        'tab-commitment': 'Commitment',
        'mission-text': 'To provide premium, reliable, and accessible automotive solutions by combining modern technology with expert diagnostics, ensuring every motorist in East Africa experiences safe and hassle-free journeys.',
        'vision-text': 'To become the leading center of automotive repair and vehicle fleet management in Tanzania, recognized for integrity, customer-centric support, and absolute technical excellence.',
        'commitment-text': 'We promise transparency in our cost estimations, a strict policy of utilizing only genuine OEM spare parts, and keeping turnaround times as fast as possible to keep your vehicles on the road.',
        'badge-trust': 'Years of Trust',
        'val-mechanics': 'Certified Mechanics',
        'val-mechanics-desc': 'Trained to handle luxury & fleet cars.',
        'val-diag': 'Advanced Diagnostics',
        'val-diag-desc': 'Quickly identifying hidden faults.',

        // Services
        'services-tag': 'What We Do',
        'services-title': 'Our Professional Services',
        'services-desc': 'From complex engine restorations to computerized diagnostics, we offer comprehensive services to keep your vehicle performing at its peak.',
        'srv-engine': 'Engine Repair',
        'srv-engine-desc': 'Complete overhauls, cylinder head repairs, cooling systems, and tuning for optimal performance.',
        'srv-diag': 'Computer Diagnostics',
        'srv-diag-desc': 'Precise scanning of ECUs, sensors, and electronic faults to pinpoint exact vehicle issues.',
        'srv-brakes': 'Brake Services',
        'srv-brakes-desc': 'Brake pad replacement, rotor machining, fluid flushes, and ABS system repair for secure stopping power.',
        'srv-suspension': 'Suspension Repair',
        'srv-suspension-desc': 'Shock absorbers, struts, bushings, ball joints, and steering system repair for a smooth ride.',
        'srv-oil': 'Oil Change',
        'srv-oil-desc': 'Premium engine oil and filter replacement, fluid check, and service counter resets.',
        'srv-battery': 'Battery Services',
        'srv-battery-desc': 'Battery testing, terminal cleaning, replacement, and alternator diagnostics.',
        'srv-electrical': 'Electrical Repairs',
        'srv-electrical-desc': 'Wiring diagnostics, lighting systems, alternator and starter motor repairs.',
        'srv-transmission': 'Transmission Services',
        'srv-transmission-desc': 'Gearbox fluid flush, clutch kit installations, and mechanical gearbox rebuilds.',
        'srv-tire': 'Tire Services',
        'srv-tire-desc': 'Wheel alignment, balancing, tire rotation, and tread inspection.',
        'srv-inspection': 'Vehicle Inspection',
        'srv-inspection-desc': 'Pre-purchase and periodic safety audits covering over 100 points on the vehicle.',
        'srv-fleet': 'Fleet Maintenance',
        'srv-fleet-desc': 'Custom maintenance programs tailored for commercial fleets, pickups, and corporate vehicles.',
        'srv-emergency': 'Emergency Assistance',
        'srv-emergency-desc': '24/7 roadside assistance, towing, and onsite troubleshooting across Arusha region.',
        'learn-more': 'Learn More',

        // Why Choose Us
        'why-tag': 'Why Choose Us',
        'why-title': 'Built on Professionalism and Trust',
        'why-desc': 'We differentiate ourselves through transparency, tooling quality, and strict standards of mechanic certifications. Whether you manage a logistics fleet or drive a personal SUV, you can count on Kiboko Garage.',
        'why-diag-acc': 'Diagnostic Accuracy',
        'why-on-time': 'On-Time Service Delivery',
        'why-gen-parts': 'Genuine Parts Policy',
        'feat-cert': 'Certified Mechanics',
        'feat-cert-desc': 'Fully trained in vehicle management, diagnostics, and component rebuilding.',
        'feat-equip': 'Modern Equipment',
        'feat-equip-desc': 'Cutting-edge scanners and diagnostic tools identical to brand dealerships.',
        'feat-time': 'Fast Turnaround',
        'feat-time-desc': 'Our organized bays and parts sourcing ensure your vehicle spends minimal time off the road.',
        'feat-price': 'Affordable Pricing',
        'feat-price-desc': 'Fair, transparent pricing for premium garage workmanship in Arusha.',

        // Work Process
        'process-tag': 'How We Work',
        'process-title': 'Our Service Work Process',
        'process-desc': 'A professional 4-step workflow that ensures precision, reliability, and full quality accountability for every vehicle.',
        'step-insp': 'Inspection',
        'step-insp-desc': 'Visual and mechanical checking of your vehicle to check the reported symptoms.',
        'step-diag': 'Diagnosis',
        'step-diag-desc': 'Computerized error scan combined with mechanic road checks to identify the root issue.',
        'step-repair': 'Repair & Service',
        'step-repair-desc': 'Precision repair work using specialized tools and genuine OEM replacements.',
        'step-check': 'Quality Check',
        'step-check-desc': 'Supervised road testing and secondary scan before washing and returning the vehicle.',

        // Showcase & Estimator
        'showcase-tag': 'Quality Restorations',
        'showcase-title': 'Before & After Showcase',
        'showcase-desc': 'Drag the slider left and right to see our vehicle repair and component restoration work in action.',
        'label-restored': 'Restored (After)',
        'label-worn': 'Worn out (Before)',
        'est-tag': 'Instant Pricing',
        'est-title': 'Service Cost Estimator',
        'est-desc': 'Select your services and vehicle type to obtain a realistic cost range in TZS and USD instantly.',
        'lbl-veh-class': 'Vehicle Class *',
        'lbl-services-req': 'Select Services Required',
        'opt-sedan': 'Sedan / Hatchback (Standard Rate)',
        'opt-suv': 'SUV / Pickup Truck (1.25x Modifier)',
        'opt-luxury': 'Luxury / Sports Brand (1.55x Modifier)',
        'opt-commercial': 'Commercial / Fleet Truck (1.35x Modifier)',
        'est-price-title': 'Calculated Estimate Range',
        'est-price-notice': '* Ranges represent estimated mechanic hours and standard OEM spare parts. Final quotes require physical garage inspections.',
        'btn-book-est': 'Book this Estimate',

        // Gallery & Testimonials
        'gallery-tag': 'Workshop Photos',
        'gallery-title': 'Inside Our Workshop',
        'gallery-desc': 'Take a look inside Kiboko Garage to see our mechanics, high-end equipment, and clean working environment.',
        'filter-all': 'All Photos',
        'filter-workshop': 'Workshop',
        'filter-diagnostics': 'Diagnostics',
        'filter-mechanics': 'Mechanics',
        'reviews-tag': 'Client Reviews',
        'reviews-title': 'What Our Customers Say',
        'reviews-desc': 'Trusted by hundreds of individual car owners and large corporate logistics teams in Arusha.',

        // FAQs
        'faq-tag': 'Common Inquiries',
        'faq-title': 'Frequently Asked Questions',
        'faq-desc': 'Got questions about our spare parts, booking process, or fleet services? Find answers below.',

        // Contact & Booking
        'contact-tag': 'Get In Touch',
        'contact-title': 'Book Appointment & Contact Us',
        'contact-desc': 'Visit our state-of-the-art facility in Unga Ltd, Arusha or book your maintenance check online today.',
        'contact-loc-title': 'Workshop Location',
        'contact-phone-title': 'Phone Number',
        'contact-email-title': 'Email Address',
        'contact-hours-title': 'Business Hours',
        'contact-hours-desc': 'Monday - Saturday: 8:00 AM - 6:00 PM\nSunday: Emergency Towing Only',
        'booking-form-title': 'Schedule a Service',
        'lbl-booking-name': 'Your Name *',
        'lbl-booking-email': 'Email Address',
        'lbl-booking-vehicle': 'Vehicle Model & License Plate *',
        'lbl-booking-class': 'Vehicle Class *',
        'lbl-booking-core-srv': 'Select Core Service *',
        'lbl-booking-date': 'Preferred Appointment Date *',
        'lbl-booking-time': 'Preferred Time *',
        'lbl-booking-msg': 'Remarks / Symptoms Description',
        'btn-submit-booking': 'Submit Appointment Request',

        // Footer
        'footer-desc': 'World-class automotive repairs, diagnostics, and preventative care. Serving individuals, businesses, and fleet operators in Arusha, Tanzania.',
        'footer-col-links': 'Quick Links',
        'footer-col-services': 'Our Services',
        'footer-col-newsletter': 'Newsletter',
        'newsletter-desc': 'Subscribe to receive automotive safety tips, maintenance alerts, and service discounts.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-copy': '&copy; 2026 Kiboko Garage. All Rights Reserved.'
    },
    sw: {
        // Navigation
        'nav-home': 'Mwanzo',
        'nav-about': 'Kuhusu Sisi',
        'nav-services': 'Huduma',
        'nav-estimator': 'Kikokotoo',
        'nav-gallery': 'Picha',
        'nav-faqs': 'Maswali',
        'nav-contact': 'Mawasiliano',
        'btn-portal': 'Tovuti',
        'btn-book-now': 'Weka Uhifadhi',

        // Hero Section
        'hero-badge': 'Ufanisi wa Juu wa Magari',
        'hero-title': 'Gari Lako Linastahili Matunzo Bora Sasa.',
        'hero-desc': 'Ukarabati wa kitaalamu wa magari, vipimo vya uhakika, matengenezo, na usimamizi wa magari ya kampuni hapa Arusha, Tanzania.',
        'btn-book-service': 'Weka Uhifadhi',
        'btn-call-now': 'Piga Simu Sasa',
        'stat-experience': 'Miaka ya Uzoefu',
        'stat-serviced': 'Magari Yaliyohudumiwa',
        'stat-satisfaction': 'Kiwango cha Kuridhika',
        'stat-mechanics': 'Mafundi Bingwa',

        // Hero Quick Booking
        'quick-book-title': 'Uhifadhi wa Haraka',
        'lbl-fullname': 'Jina Kamili *',
        'lbl-phone': 'Namba ya Simu *',
        'lbl-vehicle-model': 'Aina ya Gari *',
        'lbl-service': 'Huduma *',
        'lbl-pref-date': 'Tarehe Unayopendelea *',
        'opt-select-service': 'Chagua Huduma',
        'opt-diagnostics': 'Vipimo vya Kompyuta',
        'opt-oil': 'Kubadilisha Oil na Filter',
        'opt-brakes': 'Matengenezo ya Brake',
        'opt-engine': 'Matengenezo ya Engine',
        'opt-suspension': 'Kurekebisha Suspension',
        'opt-fleet': 'Matunzo ya Magari ya Kampuni',
        'btn-quick-book': 'Weka Miadi Sasa',

        // About Us
        'about-tag': 'Kuhusu Kiboko Garage',
        'about-title': 'Utaalamu wa Hali ya Juu wa Magari Afrika',
        'about-desc': 'Kiboko Garage ipo eneo la Unga Ltd, Arusha, ni karakana ya kisasa ya matengenezo ya magari. Tunahudumia wateja binafsi, wafanyabiashara, na kampuni zinazotafuta matengenezo ya uhakika na yenye viwango vya juu.',
        'tab-mission': 'Lengo',
        'tab-vision': 'Maono',
        'tab-commitment': 'Ahadi Yetu',
        'mission-text': 'Kutoa huduma bora na za kuaminika za magari kwa kutumia teknolojia ya kisasa na vipimo vya uhakika, kuhakikisha kila dereva anasafiri salama.',
        'vision-text': 'Kuwa kituo kikuu cha matengenezo na usimamizi wa magari nchini Tanzania, kinachojulikana kwa uaminifu na ufundi wa hali ya juu.',
        'commitment-text': 'Tunaahidi uwazi katika makadirio ya gharama, kutumia spea halisi pekee (OEM), na kumaliza kazi kwa haraka ili usikae bila gari.',
        'badge-trust': 'Miaka ya Kuaminiwa',
        'val-mechanics': 'Mafundi Waliosomea',
        'val-mechanics-desc': 'Wamehitimu kushughulikia magari ya kisasa.',
        'val-diag': 'Vipimo vya Kisasa',
        'val-diag-desc': 'Kugundua hitilafu zilizojificha kwa haraka.',

        // Services
        'services-tag': 'Tunachofanya',
        'services-title': 'Huduma Zetu za Kitaalamu',
        'services-desc': 'Kuanzia matengenezo magumu ya engine hadi vipimo vya kompyuta, tunatoa huduma kamili ili gari lako liwe katika hali bora zaidi.',
        'srv-engine': 'Matengenezo ya Engine',
        'srv-engine-desc': 'Kufungua engine, kurekebisha cylinder head, mfumo wa kupoza maji, na kuongeza nguvu ya injini.',
        'srv-diag': 'Vipimo vya Kompyuta',
        'srv-diag-desc': 'Kusoma kompyuta ya gari (ECU), sensorer, na hitilafu za umeme ili kujua tatizo halisi.',
        'srv-brakes': 'Matengenezo ya Brake',
        'srv-brakes-desc': 'Kubadilisha brake pads, rotor, kusafisha mfumo wa mafuta ya brake na kurekebisha mfumo wa ABS.',
        'srv-suspension': 'Kurekebisha Suspension',
        'srv-suspension-desc': 'Kubadilisha shock absorbers, struts, bushings, ball joints na kurekebisha mfumo wa usukani.',
        'srv-oil': 'Kubadilisha Oil',
        'srv-oil-desc': 'Kubadilisha oil ya engine, filter, kuangalia viwango vya maji na kuseti upya taa ya oil.',
        'srv-battery': 'Huduma ya Battery',
        'srv-battery-desc': 'Kupima battery, kusafisha nyaya za battery, kubadilisha battery mpya na kupima alternator.',
        'srv-electrical': 'Mifumo ya Umeme',
        'srv-electrical-desc': 'Kutafuta hitilafu za nyaya, mifumo ya taa, alternator na mota ya kuwashia (starter).',
        'srv-transmission': 'Mifumo ya Gearbox',
        'srv-transmission-desc': 'Kubadilisha mafuta ya gearbox, kubadilisha clutch plate na kurekebisha gearbox zilizoharibika.',
        'srv-tire': 'Huduma za Tairi',
        'srv-tire-desc': 'Kusawazisha tairi (alignment & balancing), kubadilisha tairi na kuangalia uimara wake.',
        'srv-inspection': 'Ukaguzi wa Gari',
        'srv-inspection-desc': 'Ukaguzi wa kina kabla ya kununua gari au ukaguzi wa usalama wa pointi zaidi ya 100.',
        'srv-fleet': 'Magari ya Kampuni',
        'srv-fleet-desc': 'Mipango maalum ya matengenezo kwa magari ya biashara, pick-up, na magari ya usafirishaji.',
        'srv-emergency': 'Msaada wa Dharura',
        'srv-emergency-desc': 'Msaada barabarani masaa 24, kuvuta gari lililoharibika, na matengenezo madogo popote Arusha.',
        'learn-more': 'Soma Zaidi',

        // Why Choose Us
        'why-tag': 'Kwa Nini Utuchague',
        'why-title': 'Imejengwa Juu ya Utaalamu na Uaminifu',
        'why-desc': 'Tunatofautiana na wengine kwa uwazi wa bei, ubora wa vifaa vya kisasa, na viwango vikali vya sifa za mafundi wetu. Iwe ni gari binafsi au la biashara, Kiboko inafaa.',
        'why-diag-acc': 'Usahihi wa Vipimo',
        'why-on-time': 'Kumaliza Kazi kwa Wakati',
        'why-gen-parts': 'Sera ya Spea Halisi',
        'feat-cert': 'Mafundi Waliosajiliwa',
        'feat-cert-desc': 'Wataalamu wenye uzoefu wa mifumo migumu ya magari na injini.',
        'feat-equip': 'Vifaa vya Kisasa',
        'feat-equip-desc': 'Mashine za kusoma mifumo ya magari sawa na zile zinazotumiwa na watengenezaji.',
        'feat-time': 'Kazi ya Haraka',
        'feat-time-desc': 'Tuna sehemu kubwa ya kufanyia kazi na upatikanaji wa haraka wa spea kuhakikisha gari linatoka mapema.',
        'feat-price': 'Bei Nafuu',
        'feat-price-desc': 'Bei nzuri na yenye uwazi kwa ajili ya kazi yenye ubora wa kimataifa hapa Arusha.',

        // Work Process
        'process-tag': 'Tunavyofanya Kazi',
        'process-title': 'Hatua za Matengenezo Yetu',
        'process-desc': 'Hatua 4 za kitaalamu zinazohakikisha usahihi, uaminifu, na uwajibikaji kamili kwa kila gari linaloingia.',
        'step-insp': 'Ukaguzi',
        'step-insp-desc': 'Kuangalia gari kwa macho na kimitambo ili kubaini dalili zote zilizoripotiwa.',
        'step-diag': 'Vipimo',
        'step-diag-desc': 'Kusoma gari kwa kompyuta ikijumuisha majaribio ya barabarani ili kujua chanzo cha tatizo.',
        'step-repair': 'Ukarabati',
        'step-repair-desc': 'Kazi ya ukarabati kwa kutumia vifaa maalum vya kisasa na kuweka spea halisi.',
        'step-check': 'Uhuru wa Ubora',
        'step-check-desc': 'Kujaribu gari barabarani na kulisafisha kabla ya kumkabidhi mteja gari lake.',

        // Showcase & Estimator
        'showcase-tag': 'Mabadiliko ya Ubora',
        'showcase-title': 'Kabla na Baada ya Matengenezo',
        'showcase-desc': 'Vuta kidhibiti kushoto na kulia ili kuona ubora wa kazi zetu za urejeshaji wa magari na vipuri.',
        'label-restored': 'Imerekebishwa (Baada)',
        'label-worn': 'Iliyochanika (Kabla)',
        'est-tag': 'Bei ya Papo Hapo',
        'est-title': 'Kikokotoo cha Gharama',
        'est-desc': 'Chagua huduma unazohitaji na aina ya gari lako ili upate makadirio ya bei kwa TZS na USD mara moja.',
        'lbl-veh-class': 'Kundi la Gari *',
        'lbl-services-req': 'Chagua Huduma Unazotaka',
        'opt-sedan': 'Sedan / Hatchback (Kiwango cha Kawaida)',
        'opt-suv': 'SUV / Pickup (Kizidishio cha 1.25x)',
        'opt-luxury': 'Magari ya Kifahari (Kizidishio cha 1.55x)',
        'opt-commercial': 'Malori / Pick-up za Biashara (1.35x)',
        'est-price-title': 'Makadirio ya Gharama Yako',
        'est-price-notice': '* Makadirio yanajumuisha masaa ya kazi na spea za kawaida za OEM. Makadirio ya mwisho yanahitaji ukaguzi wa ana kwa ana karakanani.',
        'btn-book-est': 'Weka Uhifadhi kwa Bei Hii',

        // Gallery & Testimonials
        'gallery-tag': 'Picha za Karakana',
        'gallery-title': 'Ndani ya Karakana Yetu',
        'gallery-desc': 'Tazama picha za karakana yetu ya Kiboko ili kuona mafundi, vifaa, na mazingira safi ya kazi.',
        'filter-all': 'Picha Zote',
        'filter-workshop': 'Karakana',
        'filter-diagnostics': 'Vipimo',
        'filter-mechanics': 'Mafundi Wetu',
        'reviews-tag': 'Maoni ya Wateja',
        'reviews-title': 'Wateja Wetu Wanasemaje',
        'reviews-desc': 'Tumeaminiwa na wateja mamia binafsi na timu kubwa za kusambaza mizigo za mashirika hapa Arusha.',

        // FAQs
        'faq-tag': 'Maswali ya Kawaida',
        'faq-title': 'Maswali Yanayoulizwa Sana',
        'faq-desc': 'Una maswali kuhusu spea zetu, jinsi ya kuweka miadi au huduma za kampuni? Majibu yapo hapa chini.',

        // Contact & Booking
        'contact-tag': 'Wasiliana Nasi',
        'contact-title': 'Weka Uhifadhi & Wasiliana',
        'contact-desc': 'Tembelea karakana yetu ya kisasa eneo la Unga Ltd, Arusha au weka miadi yako mtandaoni leo.',
        'contact-loc-title': 'Mahali Karakana Ilipo',
        'contact-phone-title': 'Namba ya Simu',
        'contact-email-title': 'Barua Pepe',
        'contact-hours-title': 'Muda wa Kazi',
        'contact-hours-desc': 'Jumatatu - Jumamosi: Saa 2:00 Asubuhi - Saa 12:00 Jioni\nJumapili: Msaada wa Dharura Pekee',
        'booking-form-title': 'Ratibu Matengenezo',
        'lbl-booking-name': 'Jina Lako *',
        'lbl-booking-email': 'Barua Pepe',
        'lbl-booking-vehicle': 'Aina ya Gari & Namba ya Bamba *',
        'lbl-booking-class': 'Kundi la Gari *',
        'lbl-booking-core-srv': 'Chagua Huduma Kuu *',
        'lbl-booking-date': 'Tarehe ya Uhifadhi *',
        'lbl-booking-time': 'Muda wa Kufika *',
        'lbl-booking-msg': 'Maelezo ya Hitilafu za Gari',
        'btn-submit-booking': 'Wasilisha Uhifadhi wa Matengenezo',

        // Footer
        'footer-desc': 'Ukarabati wa viwango vya juu wa magari, vipimo vya kompyuta, na matunzo ya kuzuia uharibifu. Tunahudumia watu binafsi, biashara, na wasafirishaji Arusha, Tanzania.',
        'footer-col-links': 'Viungo vya Haraka',
        'footer-col-services': 'Huduma Zetu',
        'footer-col-newsletter': 'Kijarida',
        'newsletter-desc': 'Jiunge ili kupata vidokezo vya usalama wa magari, arifa za matengenezo, na ofa za bei.',
        'footer-privacy': 'Sera ya Faragha',
        'footer-terms': 'Masharti ya Huduma',
        'footer-copy': '&copy; 2026 Kiboko Garage. Haki Zote Zimehifadhiwa.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
});

function initLanguageSwitcher() {
    let currentLang = localStorage.getItem('kiboko_lang') || 'en';
    
    // Create Language Switcher Dropdown in Navigation
    const headerActions = document.querySelector('.nav-actions');
    if (headerActions) {
        const langContainer = document.createElement('div');
        langContainer.className = 'lang-switcher';
        langContainer.style.position = 'relative';
        langContainer.style.marginRight = '8px';
        
        langContainer.innerHTML = `
            <button class="btn btn-secondary" id="langToggleBtn" style="padding: 10px 15px; font-size: 13.5px; border-radius: 50px; border: 1.5px solid var(--accent-orange); display: flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-earth-africa" style="color: var(--accent-orange);"></i>
                <span id="activeLangText">${currentLang.toUpperCase()}</span>
                <i class="fa-solid fa-chevron-down" style="font-size: 10px; color: var(--text-secondary);"></i>
            </button>
            <div class="lang-dropdown" id="langDropdown" style="display: none; position: absolute; top: 110%; right: 0; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; z-index: 1001; min-width: 110px; box-shadow: var(--shadow-premium);">
                <div class="lang-option" data-lang="en" style="padding: 10px 16px; cursor: pointer; font-size: 13.5px; transition: var(--transition-fast); display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 600;">EN</span> English
                </div>
                <div class="lang-option" data-lang="sw" style="padding: 10px 16px; cursor: pointer; font-size: 13.5px; transition: var(--transition-fast); display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--border-color);">
                    <span style="font-weight: 600;">SW</span> Swahili
                </div>
            </div>
        `;
        
        // Insert as first action element
        headerActions.insertBefore(langContainer, headerActions.firstChild);
        
        // Hover/Click toggle
        const toggleBtn = document.getElementById('langToggleBtn');
        const dropdown = document.getElementById('langDropdown');
        
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });
        
        document.addEventListener('click', () => {
            dropdown.style.display = 'none';
        });
        
        const options = dropdown.querySelectorAll('.lang-option');
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                setLanguage(lang);
            });
            
            // Highlight hover style
            opt.addEventListener('mouseenter', () => {
                opt.style.background = 'rgba(255,123,0,0.1)';
                opt.style.color = 'var(--accent-orange)';
            });
            opt.addEventListener('mouseleave', () => {
                opt.style.background = 'transparent';
                opt.style.color = 'var(--text-primary)';
            });
        });
    }
    
    // Apply initial language
    setLanguage(currentLang);
}

function setLanguage(lang) {
    localStorage.setItem('kiboko_lang', lang);
    const activeText = document.getElementById('activeLangText');
    if (activeText) activeText.innerText = lang.toUpperCase();
    
    // Set HTML lang attribute
    document.documentElement.lang = lang;
    
    // Translate all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            const translationValue = TRANSLATIONS[lang][key];
            
            // Check tag type
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translationValue;
            } else if (el.tagName === 'SELECT') {
                // If it's a select field, we usually translate the default disabled option
                const defaultOpt = el.querySelector('option[value=""]');
                if (defaultOpt) defaultOpt.innerText = translationValue;
            } else {
                // Check if it has child HTML elements we want to preserve (like icons)
                const icon = el.querySelector('i');
                if (icon) {
                    // Re-append icon + text
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + translationValue));
                } else {
                    el.innerText = translationValue;
                }
            }
        }
    });

    // Translate dynamic dashboard and chatbot labels that are rule-based
    translateWidgets(lang);
}

function translateWidgets(lang) {
    // Translate some custom labels
    const bookingServiceSelect = document.getElementById('bookingService');
    const heroServiceSelect = document.getElementById('heroService');
    
    if (lang === 'sw') {
        // Translate select options dynamically if Swahili
        updateSelectOptionText(bookingServiceSelect, 'engine-repair', 'Matengenezo ya Engine');
        updateSelectOptionText(bookingServiceSelect, 'computer-diagnostics', 'Vipimo vya Kompyuta');
        updateSelectOptionText(bookingServiceSelect, 'brake-services', 'Matengenezo ya Brake');
        updateSelectOptionText(bookingServiceSelect, 'suspension-repair', 'Kurekebisha Suspension');
        updateSelectOptionText(bookingServiceSelect, 'oil-change', 'Kubadilisha Oil');
        updateSelectOptionText(bookingServiceSelect, 'battery-services', 'Huduma ya Battery');
        updateSelectOptionText(bookingServiceSelect, 'electrical-repairs', 'Mifumo ya Umeme');
        updateSelectOptionText(bookingServiceSelect, 'transmission-services', 'Mifumo ya Gearbox');
        updateSelectOptionText(bookingServiceSelect, 'tire-services', 'Huduma za Tairi');
        updateSelectOptionText(bookingServiceSelect, 'vehicle-inspection', 'Ukaguzi wa Gari');
        updateSelectOptionText(bookingServiceSelect, 'fleet-maintenance', 'Magari ya Kampuni');
        updateSelectOptionText(bookingServiceSelect, 'emergency-assistance', 'Msaada wa Dharura');
        updateSelectOptionText(bookingServiceSelect, 'multiple', 'Huduma Nyingi Zilizochaguliwa');

        updateSelectOptionText(heroServiceSelect, 'computer-diagnostics', 'Vipimo vya Kompyuta');
        updateSelectOptionText(heroServiceSelect, 'oil-change', 'Kubadilisha Oil na Filter');
        updateSelectOptionText(heroServiceSelect, 'brake-services', 'Matengenezo ya Brake');
        updateSelectOptionText(heroServiceSelect, 'engine-repair', 'Matengenezo ya Engine');
        updateSelectOptionText(heroServiceSelect, 'suspension-repair', 'Kurekebisha Suspension');
        updateSelectOptionText(heroServiceSelect, 'fleet-maintenance', 'Matunzo ya Magari ya Kampuni');
        
        // Chat assistant greeting
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages && chatMessages.children.length === 1) {
            chatMessages.children[0].innerText = "Habari! Mimi ni Msaidizi wa AI wa Karakana ya Kiboko. Nieleze dalili za kuharibika kwa gari lako (k.m. breki zinapiga kelele, taa ya check engine imewaka) nami nitakusaidia kuzipima!";
        }
        
        const chatInput = document.getElementById('chatInput');
        if (chatInput) chatInput.placeholder = "Andika dalili ya hitilafu...";
    } else {
        // Revert select options to English
        updateSelectOptionText(bookingServiceSelect, 'engine-repair', 'Engine Repair');
        updateSelectOptionText(bookingServiceSelect, 'computer-diagnostics', 'Computer Diagnostics');
        updateSelectOptionText(bookingServiceSelect, 'brake-services', 'Brake Services');
        updateSelectOptionText(bookingServiceSelect, 'suspension-repair', 'Suspension Repair');
        updateSelectOptionText(bookingServiceSelect, 'oil-change', 'Oil Change');
        updateSelectOptionText(bookingServiceSelect, 'battery-services', 'Battery Services');
        updateSelectOptionText(bookingServiceSelect, 'electrical-repairs', 'Electrical Repairs');
        updateSelectOptionText(bookingServiceSelect, 'transmission-services', 'Transmission Services');
        updateSelectOptionText(bookingServiceSelect, 'tire-services', 'Tire Services');
        updateSelectOptionText(bookingServiceSelect, 'vehicle-inspection', 'Vehicle Inspection');
        updateSelectOptionText(bookingServiceSelect, 'fleet-maintenance', 'Fleet Maintenance');
        updateSelectOptionText(bookingServiceSelect, 'emergency-assistance', 'Emergency Assistance');
        updateSelectOptionText(bookingServiceSelect, 'multiple', 'Multiple Selected Services');

        updateSelectOptionText(heroServiceSelect, 'computer-diagnostics', 'Computer Diagnostics');
        updateSelectOptionText(heroServiceSelect, 'oil-change', 'Oil Change & Filter');
        updateSelectOptionText(heroServiceSelect, 'brake-services', 'Brake Services');
        updateSelectOptionText(heroServiceSelect, 'engine-repair', 'Engine Repair');
        updateSelectOptionText(heroServiceSelect, 'suspension-repair', 'Suspension Repair');
        updateSelectOptionText(heroServiceSelect, 'fleet-maintenance', 'Fleet Maintenance');
        
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages && chatMessages.children.length === 1) {
            chatMessages.children[0].innerText = "Habari! I am Kiboko's AI Maintenance Assistant. Describe your vehicle symptoms (e.g. squeaking brakes, check engine light) and I will diagnostic-analyze them!";
        }
        
        const chatInput = document.getElementById('chatInput');
        if (chatInput) chatInput.placeholder = "Type car symptom...";
    }
}

function updateSelectOptionText(selectEl, value, newText) {
    if (!selectEl) return;
    const opt = selectEl.querySelector(`option[value="${value}"]`);
    if (opt) opt.innerText = newText;
}
