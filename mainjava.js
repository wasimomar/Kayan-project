/* =========================================================
   script.js – Kayan Real Estate Landing Page
   Full bilingual (AR / EN) + Modal + Swiper + Form Logic
   ========================================================= */

'use strict';

// ============================================================
// 1. TRANSLATIONS DICTIONARY
// ============================================================
const translations = {
  ar: {
    // --- Navbar ---
    nav_about:    'عن الشركة',
    nav_services: 'خدماتنا',
    nav_projects: 'المشاريع',
    nav_contact:  'تواصل معنا',
    lang_toggle:  'EN',

    // --- Hero ---
    hero_badge:        'مشاريع استثنائية في قلب مصر',
    hero_headline:     'نبني مستقبلك\nبثقة وجودة استثنائية',
    hero_subheadline:  'كيان للمقاولات والانشاءات – شريكك الموثوق في بناء تنفيذ وتطوير المشاريع في مصر',
    hero_cta_primary:  'استكشف المشاريع',
    hero_cta_secondary:'تواصل معنا',
    hero_scroll:       'اكتشف المزيد',

    // --- About ---
    about_badge:      'من نحن',
    about_title:      'عن شركة كيان للمقاولات العامة',
    about_stat_label: 'سنوات خبرة في السوق',
    about_subtitle:   'حلول المقاولات العامة والتوريدات وتجهيز الواجهات المتخصصة',
    about_p1:         'كيان هي شركة مصرية للمقاولات والتوريدات العامة تتمتع بخبرة أربع سنوات في سوق البناء والتشييد. منذ تأسيسها، تعمل كيان بالتعاون مع إدارة الأشغال العسكرية، وتسهم في تنفيذ مشاريع متنوعة مع الالتزام بأعلى معايير الجودة والدقة والالتزام.',
    about_p2:         'بطاقة إنتاجية تبلغ حوالي 1,500 إلى 2,000 متر مربع أسبوعياً، تمتلك كيان التجهيزات والقدرة الكافية للتعامل مع متطلبات المشاريع الكبرى والحفاظ على كفاءة التوريد والتنفيذ عبر مواقع متعددة. تجمع خبرتنا بين قدرات المقاولات العامة وحلول الألومنيوم والواجهات المتخصصة، بدعم من فريق عمل خبير وطاقة إنتاجية وتنفيذية قوية.',
    about_point1:     'التعاون والمشاركة في تنفيذ مشاريع مع إدارة الأشغال العسكرية',
    about_point2:     'طاقة إنتاجية تبلغ 1,500 - 2,000 م² أسبوعياً',
    about_point3:     'حلول متخصصة في الألومنيوم والواجهات بأعلى معايير الدقة',
    about_point4:     'فريق عمل خبير وطاقة تنفيذية عالية عبر مواقع متعددة',

    // --- Vision / Mission ---
    vision_title: 'رؤيتنا',
    vision_text:  'أن نصبح اسماً موثوقاً به في قطاع المقاولات والبناء في مصر، وأن نتميز بالتنفيذ الموثوق، ودقة الجودة، وحلول الواجهات المتخصصة. ونسعى إلى الاستمرار في توسيع قدراتنا ومحفظة مشاريعنا مع بناء علاقات طويلة الأمد تقوم على الثقة والأداء والنتائج المستمرة.',
    mission_title:'رسالتنا',
    mission_text: 'رسالتنا هي تقديم حلول المقاولات والتوريدات التي تجمع بين الخبرة الفنية، والتنفيذ الكفء، والاهتمام بأدق التفاصيل. ونحن ملتزمون بتلبية مواصفات المشاريع، والحفاظ على أعلى معايير الجودة، وتسليم كل مشروع باحترافية من البداية وحتى النهاية.',

    // --- Projects section ---
    projects_badge:    'أعمالنا',
    projects_title:    'مشاريعنا المتميزة',
    projects_subtitle: 'كل مشروع يحكي قصة التزامنا بالجودة والتميز في كل تفصيلة',
    card_details:      'التفاصيل ←',

    // Project 1 – Al Jazeera
    proj1_title:      'مشروع الجزيرة',
    proj1_location:   'مدينة العلمين الجديدة',
    proj1_desc_short: 'أعمال الألومنيوم والواجهات المتخصصة بمدينة العلمين الجديدة.',
    proj1_units:      'أعمال ألومنيوم وواجهات',
    proj1_modal_desc: 'ساهمت كيان في مشروع الجزيرة بمدينة العلمين الجديدة، من خلال تقديم أعمال الألومنيوم والزجاج المتخصصة كجزء من التطوير المعماري للمشروع.\n\nتركز عملنا على تحقيق التنفيذ الدقيق والتشطيب عالي الجودة، مما يضمن توافق كل عنصر تم تركيبه مع المتطلبات المعمارية والتصميم العام للمشروع.\n\nيعكس المشروع خبرة كيان في التعامل مع أنظمة الألومنيوم في المشاريع الكبرى، مع التركيز القوي على الجودة والدقة والتنفيذ الميداني الكفء.',
    proj1_spec1_label:'نطاق الأعمال',
    proj1_spec1_value:'أعمال ألومنيوم وواجهات وزجاج',
    proj1_spec2_label:'الموقع',
    proj1_spec2_value:'مدينة العلمين الجديدة',
    proj1_spec3_label:'حالة المشروع',
    proj1_spec3_value:'مكتمل',

    // Project 2 – Ayan
    proj2_title:      'مشروع أيان',
    proj2_location:   'القاهرة الجديدة، مصر',
    proj2_desc_short: 'تطبيقات الواجهات الحديثة وحلول الألومنيوم المعماري للمباني الفاخرة.',
    proj2_units:      'واجهات وألومنيوم',
    proj2_modal_desc: 'يُعد مشروع أيان أحد نماذج مشاريع كيان المكتملة، والتي تعكس خبرة الشركة في تقديم حلول الألومنيوم المعماري والواجهات ضمن المشاريع الضخمة.\n\nيبرز المشروع تطبيقات الواجهات الحديثة عبر مبانٍ متعددة، مع تركيز قوي على التنفيذ الدقيق، والتشطيب النظيف، والتوافق التام مع التصميم المعماري العام.',
    proj2_spec1_label:'نطاق التخصص',
    proj2_spec1_value:'أنظمة واجهات وألومنيوم',
    proj2_spec2_label:'التطبيق',
    proj2_spec2_value:'مبانٍ متعددة',
    proj2_spec3_label:'حالة المشروع',
    proj2_spec3_value:'مكتمل',

    // Project 3 – Mazarine
    proj3_title:      'مشروع مازارين',
    proj3_location:   'مدينة العلمين الجديدة',
    proj3_desc_short: 'تصنيع وتركيب الواجهات الزجاجية وأنظمة الكرتن وول بمدينة العلمين الجديدة.',
    proj3_units:      'واجهات زجاجية وكرتن وول',
    proj3_modal_desc: 'ساهمت كيان في مشروع مازارين بمدينة العلمين الجديدة، بتصنيع وتوريد وتركيب أعمال الألومنيوم والزجاج لمجموعة من المباني السكنية.\n\nيعكس المشروع قدرتنا على إدارة دورة التنفيذ الكاملة، بدءاً من التجهيز والتصنيع وصولاً إلى التركيب الميداني والتشطيب، مع الحفاظ على التناسق والجودة عبر جميع الوحدات.\n\nتركز عملنا على التركيب الدقيق، والتشطيبات المعمارية النظيفة، ودمج عناصر الألومنيوم والزجاج بشكل متناغم مع تصميم الواجهات.',
    proj3_spec1_label:'الموقع',
    proj3_spec1_value:'مدينة العلمين الجديدة',
    proj3_spec2_label:'دورة التنفيذ',
    proj3_spec2_value:'تصنيع وتركيب كامل',
    proj3_spec3_label:'حالة المشروع',
    proj3_spec3_value:'مكتمل',

    // Project 4 – Courts Complex
    proj4_title:      'مجمع المحاكم – مدينة العدالة',
    proj4_location:   'العاصمة الإدارية الجديدة',
    proj4_desc_short: 'واجهات معمارية، أسقف سكاي لايت، وكاسرات شمس بمجمع المحاكم بالعاصمة الإدارية.',
    proj4_type:       'مشروع حكومي بارز',
    proj4_modal_desc: 'ساهمت كيان في تنفيذ مشروع مجمع المحاكم بمدينة العدالة في العاصمة الإدارية الجديدة، بتوريد وتركيب أعمال الألومنيوم والزجاج المتخصصة بالمشروع.\n\nشمل نطاق العمل تنفيذ وتركيب عناصر الواجهات المعمارية، وتوليف الوظيفة العملية مع الطابع المعماري المميز للمبنى.\n\nنظراً لتعدد الأنظمة المستخدمة في المشروع، تطلب العمل تنسيقاً دقيقاً، وتركيباً عالياً، واهتماماً بالغاً بالتفاصيل والتشطيبات.',
    proj4_spec1_label:'الموقع',
    proj4_spec1_value:'العاصمة الإدارية الجديدة',
    proj4_spec2_label:'الأنظمة المستخدمة',
    proj4_spec2_value:'كرتن وول + سكاي لايت + Louvers',
    proj4_spec3_label:'حالة المشروع',
    proj4_spec3_value:'مكتمل ومسلّم',

    // Project 5 – Sakan Ahl Misr
    proj5_title:      'مشروع سكن أهل مصر',
    proj5_location:   'أكتوبر، الجيزة',
    proj5_desc_short: 'أعمال الألومنيوم والزجاج المتكاملة لمجموعات المباني السكنية على نطاق واسع.',
    proj5_units:      'مباني سكنية متعددة',
    proj5_modal_desc: 'ساهمت كيان في مشروع سكن أهل مصر السكني، بتنفيذ أعمال الألومنيوم والزجاج عبر العديد من المباني السكنية.\n\nيبرز المشروع قدرة كيان على إدارة المشاريع السكنية الضخمة ذات المتطلبات المتكررة، مع الحفاظ على جودة متناسقة، وتنفيذ دقيق، وتوريد كفء عبر العديد من الوحدات والمباني.',
    proj5_spec1_label:'نوع المشروع',
    proj5_spec1_value:'سكني ضخم',
    proj5_spec2_label:'نطاق الأعمال',
    proj5_spec2_value:'أبواب ونوافذ وواجهات ألومنيوم',
    proj5_spec3_label:'حالة المشروع',
    proj5_spec3_value:'مكتمل',

    // Project 6 – Services
    proj6_title:      'خدماتنا المتكاملة',
    proj6_location:   'كيان – جميع الخدمات',
    proj6_desc_short: 'تصنيع وتركيب الواجهات، الكرتن وول، السكاي لايت، وأعمال الألومنيوم المعماري.',
    proj6_type:       'حلول هندسية شاملة',
    proj6_modal_desc: 'تقدم كيان منظومة متكاملة من الخدمات وتشمل: تصنيع وتوريد وتثبيت الواجهات المعمارية للألومنيوم والزجاج، أنظمة الواجهات المستمرة (Curtain Wall Systems)، أنظمة الأسقف الزجاجية (Skylight Systems)، كاسرات الشمس (Aluminum Louvers)، والأبواب والنوافذ الألومنيوم بمواصفات هندسية دقيقة.',
    proj6_spec1_label:'التصنيع والتركيب',
    proj6_spec1_value:'شامل ومتكامل',
    proj6_spec2_label:'أنظمة الواجهات',
    proj6_spec2_value:'متخصصة عالية الدقة',
    proj6_spec3_label:'الدعم والخبرة',
    proj6_spec3_value:'فريق استشاري متخصص',

    // --- Modal ---
    modal_cta:       'تواصل عبر الواتساب',
    modal_close_btn: 'إغلاق',

    // --- Contact Section ---
    contact_badge:          'تواصل معنا',
    contact_title:          'تواصل مع كيان بشكل مباشر',
    contact_subtitle:       'يسعدنا تواصلك معنا مباشرة عبر الواتساب أو الهاتف أو البريد الإلكتروني للحصول على الاستشارات وعروض المشاريع',
    contact_whatsapp_label: 'محادثة سريعة',
    contact_whatsapp_title: 'تواصل عبر الواتساب',
    contact_whatsapp_btn:   'ابدأ المحادثة الآن ←',
    contact_phone_label:    'هاتف المبيعات',
    contact_phone_btn:      'اتصل بنا مباشرة ←',
    contact_email_label:    'البريد الإلكتروني',
    contact_email_btn:      'أرسل رسالة إلكترونية ←',
    contact_addr_label:     'المقر الرئيسي',
    contact_addr_value:     'القاهرة – مصر',
    contact_map_badge:      'افتح موقع الشركة على الخريطة ↗',

    // --- Services Section ---
    services_badge:      'خدماتنا ونطاق أعمالنا',
    services_title:      'خدمات المقاولات والواجهات المتخصصة',
    services_subtitle:   'تقدم كيان حلولاً متكاملة تشمل المقاولات العامة، التوريدات العمومية، وأعمال الواجهات المعمارية المتخصصة وفق أعلى معايير الجودة.',
    services_desc_main:  'تقدم كيان أعمال المقاولات مع تركيز قوي على جودة التنفيذ والتنسيق الميداني والالتزام بمواصفات المشروع. ويكمن جزء أساسي من خبرتنا في أعمال الألومنيوم والواجهات المعمارية.',
    service1_title:      'أنظمة الكرتن وول',
    service1_desc:       'أنظمة واجهات ألومنيوم وزجاج حديثة مصممة لتحقيق المظهر المعماري الجذاب والأداء الوظيفي العالي.',
    service2_title:      'أبواب ونوافذ الألومنيوم',
    service2_desc:       'حلول تصنيع وتركيب مخصصة وفقاً لأبعاد ومواصفات ومتطلبات تصميم كل مشروع.',
    service3_title:      'أنظمة السكاي لايت',
    service3_desc:       'حلول الألومنيوم والزجاج للأسقف المعمارية الشفافة، وتدمج بين الإضاءة الطبيعية والتركيب الدقيق.',
    service4_title:      'كاسرات الشمس (اللوفرز)',
    service4_desc:       'أنظمة كاسرات شمس معمارية مصممة وفقاً للمتطلبات الوظيفية والجمالية لكل مشروع.',
    service5_title:      'المقاولات العامة',
    service5_desc:       'إدارة وتنفيذ الأعمال الإنشائية والميدانية بكفاءة والتزام يسبق الجدول الزمني.',
    service6_title:      'التوريدات العمومية',
    service6_desc:       'توريد كافة المستلزمات والمواد المعمارية والهندسية عالية الجودة والمطابقة للمواصفات.',

    // --- Footer ---
    footer_desc:          'كيان للمقاولات العامة – نبني مستقبلك بثقة وجودة استثنائية. شريكك الأول في عالم الإنشاءات والمقاولات.',
    footer_links_title:   'روابط سريعة',
    footer_contact_title: 'تواصل معنا',
    footer_copy:          '© 2025 كيان للمقاولات العامة. جميع الحقوق محفوظة.',
    footer_made:          'صُنع بـ ❤️ في مصر',
  },

  en: {
    // --- Navbar ---
    nav_about:    'About Us',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_contact:  'Contact',
    lang_toggle:  'عربي',

    // --- Hero ---
    hero_badge:        'Exceptional Projects in the Heart of Egypt',
    hero_headline:     'Building Your Future\nWith Trust & Excellence',
    hero_subheadline:  'Kayan Construction – Your trusted partner for the finest building and construction projects in Egypt',
    hero_cta_primary:  'Explore Projects',
    hero_cta_secondary:'Contact Us',
    hero_scroll:       'Discover More',

    // --- About ---
    about_badge:      'Who We Are',
    about_title:      'About KAYAN',
    about_stat_label: 'Years of Experience',
    about_subtitle:   'Contracting, General Supplies & Specialized Façade Solutions',
    about_p1:         'KAYAN is an Egyptian contracting and general supplies company with four years of experience in the construction market. Since its establishment, KAYAN has been working in cooperation with the Military Works Department, contributing to the execution of various projects while maintaining strict standards of quality, precision, and commitment.',
    about_p2:         'With a production capacity of approximately 1,500–2,000 m² per week, KAYAN is equipped to handle demanding project requirements and maintain efficient delivery across multiple sites. Our experience combines contracting capabilities with specialized aluminum and façade solutions, supported by an experienced team and a strong production and execution capacity.',
    about_point1:     'Cooperation with the Military Works Department on various projects',
    about_point2:     'Production capacity of approximately 1,500–2,000 m² per week',
    about_point3:     'Specialized aluminum and façade solutions with high precision',
    about_point4:     'Experienced team with strong production and execution capacity',

    // --- Vision / Mission ---
    vision_title: 'Our Vision',
    vision_text:  'To become a trusted name in Egypt’s contracting and construction sector, recognized for reliable execution, quality workmanship, and specialized façade solutions. We aim to continue expanding our capabilities and project portfolio while building long-term relationships based on trust, performance, and consistent results.',
    mission_title:'Our Mission',
    mission_text: 'Our mission is to deliver contracting and supply solutions that combine technical expertise, efficient execution, and attention to detail. We are committed to meeting project specifications, maintaining high standards of workmanship, and delivering every project with professionalism from start to finish.',

    // --- Projects section ---
    projects_badge:    'Our Work',
    projects_title:    'Featured Projects',
    projects_subtitle: 'Each project tells the story of our commitment to quality and excellence in every detail',
    card_details:      'Details →',

    // Project 1 – Al Jazeera
    proj1_title:      'Al Jazeera Project',
    proj1_location:   'New Alamein City',
    proj1_desc_short: 'Specialized aluminum and glazing works in New Alamein City.',
    proj1_units:      'Aluminum & Glazing Works',
    proj1_modal_desc: 'KAYAN contributed to the Al Jazeera Project in New Alamein City, delivering specialized aluminum and glazing works as part of the project’s architectural development.\n\nOur work focused on achieving accurate execution and high-quality finishing, ensuring that every installed element aligned with the project’s architectural requirements and overall design.\n\nThe project reflects KAYAN’s experience in handling aluminum systems across large-scale developments, with a strong focus on quality, precision, and efficient site execution.',
    proj1_spec1_label:'Scope of Works',
    proj1_spec1_value:'Aluminum & Glazing Works',
    proj1_spec2_label:'Location',
    proj1_spec2_value:'New Alamein City',
    proj1_spec3_label:'Status',
    proj1_spec3_value:'Completed',

    // Project 2 – Ayan
    proj2_title:      'Ayan Project',
    proj2_location:   'New Cairo, Egypt',
    proj2_desc_short: 'Modern façade applications and architectural aluminum solutions for large developments.',
    proj2_units:      'Façades & Aluminum',
    proj2_modal_desc: 'AYAN Project is one of KAYAN’s completed project references, reflecting the company’s experience in delivering architectural aluminum and façade solutions within large-scale developments.\n\nThe project showcases modern façade applications across multiple buildings, with a strong focus on precise execution, clean finishing, and consistency with the overall architectural design.',
    proj2_spec1_label:'Scope of Expertise',
    proj2_spec1_value:'Façade Systems & Aluminum Works',
    proj2_spec2_label:'Application',
    proj2_spec2_value:'Multiple Buildings',
    proj2_spec3_label:'Status',
    proj2_spec3_value:'Completed',

    // Project 3 – Mazarine
    proj3_title:      'Mazarine Project',
    proj3_location:   'New Alamein City',
    proj3_desc_short: 'Fabrication and installation of glass façades and curtain wall systems in New Alamein City.',
    proj3_units:      'Glass Façades & Curtain Walls',
    proj3_modal_desc: 'KAYAN contributed to the Mazarine development in New Alamein City, delivering aluminum and glazing works across a range of residential buildings.\n\nThe project reflects our ability to manage the full execution cycle, from preparation and fabrication to on-site installation and finishing, while maintaining consistency across multiple building units.\n\nOur work focused on precise installation, clean architectural finishes, and the integration of aluminum and glass elements with the overall façade design.',
    proj3_spec1_label:'Location',
    proj3_spec1_value:'New Alamein City',
    proj3_spec2_label:'Execution Cycle',
    proj3_spec2_value:'Full Fabrication & Installation',
    proj3_spec3_label:'Status',
    proj3_spec3_value:'Completed',

    // Project 4 – Courts Complex
    proj4_title:      'Courts Complex – City of Justice',
    proj4_location:   'New Administrative Capital',
    proj4_desc_short: 'Architectural façades, skylights, and louvers at the City of Justice.',
    proj4_type:       'Landmark Government Project',
    proj4_modal_desc: 'KAYAN contributed to the Courts Complex at the City of Justice in the New Administrative Capital, delivering specialized aluminum and glazing works across the project.\n\nThe scope included the execution and installation of architectural façade elements, combining functionality with the building’s distinctive architectural character.\n\nWith multiple systems incorporated into the project, the work required careful coordination, accurate installation, and close attention to finishing details.',
    proj4_spec1_label:'Location',
    proj4_spec1_value:'New Administrative Capital',
    proj4_spec2_label:'Systems Included',
    proj4_spec2_value:'Curtain Wall, Skylight & Louvers',
    proj4_spec3_label:'Status',
    proj4_spec3_value:'Completed & Delivered',

    // Project 5 – Sakan Ahl Misr
    proj5_title:      'Sakan Ahl Misr Project',
    proj5_location:   'October, Giza',
    proj5_desc_short: 'Integrated aluminum and glazing works for large-scale residential developments.',
    proj5_units:      'Multiple Residential Buildings',
    proj5_modal_desc: 'KAYAN contributed to the Sakan Ahl Misr residential project, delivering aluminum and glazing works across multiple residential buildings.\n\nThe project demonstrates KAYAN’s ability to handle large-scale residential developments with repetitive building requirements, maintaining consistent quality, accurate execution, and efficient delivery across multiple units.',
    proj5_spec1_label:'Project Type',
    proj5_spec1_value:'Residential Development',
    proj5_spec2_label:'Scope of Works',
    proj5_spec2_value:'Aluminum Doors & Windows, Glazing',
    proj5_spec3_label:'Status',
    proj5_spec3_value:'Completed',

    // Project 6 – Services
    proj6_title:      'Our Integrated Services',
    proj6_location:   'Kayan – All Services',
    proj6_desc_short: 'Façade fabrication, installation, curtain walls, skylights, and architectural aluminum.',
    proj6_type:       'Comprehensive Engineering Solutions',
    proj6_modal_desc: 'KAYAN offers a comprehensive suite of services including: fabrication, supply, and installation of architectural aluminum and glass façades, Curtain Wall Systems, Skylight Systems, Aluminum Louvers, and custom aluminum doors and windows with precise technical standards.',
    proj6_spec1_label:'Execution',
    proj6_spec1_value:'Full Fabrication & Installation',
    proj6_spec2_label:'Façade Systems',
    proj6_spec2_value:'High Precision Engineering',
    proj6_spec3_label:'Expertise',
    proj6_spec3_value:'Specialized Technical Team',

    // --- Modal ---
    modal_cta:       'Chat on WhatsApp',
    modal_close_btn: 'Close',

    // --- Contact Section ---
    contact_badge:          'Contact Us',
    contact_title:          'Contact KAYAN Directly',
    contact_subtitle:       'We are happy to connect with you directly via WhatsApp, phone, or email for project inquiries and consultations',
    contact_whatsapp_label: 'Quick Chat',
    contact_whatsapp_title: 'Chat on WhatsApp',
    contact_whatsapp_btn:   'Start Chat Now →',
    contact_phone_label:    'Sales Phone',
    contact_phone_btn:      'Call Us Directly →',
    contact_email_label:    'Email Address',
    contact_email_btn:      'Send an Email →',
    contact_addr_label:     'Headquarters',
    contact_addr_value:     'Cairo – Egypt',
    contact_map_badge:      'Open Company Location on Map ↗',

    // --- Services Section ---
    services_badge:      'Our Services & Scope',
    services_title:      'Contracting & Façade Services',
    services_subtitle:   'KAYAN provides integrated solutions across contracting, general supplies, and architectural aluminum façade works.',
    services_desc_main:  'KAYAN delivers contracting works with a strong focus on execution quality, site coordination, and compliance with project specifications. A key part of our expertise lies in aluminum and architectural façade works.',
    service1_title:      'Curtain Wall Systems',
    service1_desc:       'Modern aluminum and glass façade systems designed to achieve both architectural appearance and functional performance.',
    service2_title:      'Aluminum Doors & Windows',
    service2_desc:       'Fabrication and installation solutions tailored to project dimensions, specifications, and design requirements.',
    service3_title:      'Skylight Systems',
    service3_desc:       'Aluminum and glazing solutions for architectural skylights, combining natural lighting with precise installation.',
    service4_title:      'Architectural Louvers',
    service4_desc:       'Architectural aluminum louver systems designed according to the functional and aesthetic requirements of each project.',
    service5_title:      'General Contracting',
    service5_desc:       'Execution and management of construction and site works with precision and high execution quality.',
    service6_title:      'General Supplies',
    service6_desc:       'Supply of all high-grade architectural and engineering materials compliant with project specifications.',

    // --- Footer ---
    footer_desc:          'Kayan Construction – Building your future with trust and exceptional quality. Your primary partner in Egyptian construction & contracting.',
    footer_links_title:   'Quick Links',
    footer_contact_title: 'Contact Us',
    footer_copy:          '© 2025 Kayan Construction. All Rights Reserved.',
    footer_made:          'Made with ❤️ in Egypt',
  }
};

// ============================================================
// 2. PROJECT DATA REGISTRY
// ============================================================
const projectData = {
  'al-jazeera': {
    images: [
      'images/AL JAZEERA PROJECT/al jazeerz p1.png',
      'images/AL JAZEERA PROJECT/al jazeera p2.png',
    ],
    titleKey:   'proj1_title',
    locationKey:'proj1_location',
    descKey:    'proj1_modal_desc',
    specs: [
      { labelKey: 'proj1_spec1_label', valueKey: 'proj1_spec1_value' },
      { labelKey: 'proj1_spec2_label', valueKey: 'proj1_spec2_value' },
      { labelKey: 'proj1_spec3_label', valueKey: 'proj1_spec3_value' },
    ]
  },
  'ayan': {
    images: [
      'images/AYAN PROJECT/ayan project p1.png',
      'images/AYAN PROJECT/ayan project p2.png',
      'images/AYAN PROJECT/ayan project p3.png',
    ],
    titleKey:   'proj2_title',
    locationKey:'proj2_location',
    descKey:    'proj2_modal_desc',
    specs: [
      { labelKey: 'proj2_spec1_label', valueKey: 'proj2_spec1_value' },
      { labelKey: 'proj2_spec2_label', valueKey: 'proj2_spec2_value' },
      { labelKey: 'proj2_spec3_label', valueKey: 'proj2_spec3_value' },
    ]
  },
  'mazarine': {
    images: [
      'images/MAZARINE PROJECT/mazarine project p1.jpg',
      'images/MAZARINE PROJECT/mazarine project p2.jpg',
      'images/MAZARINE PROJECT/mazarine project p3.jpg',
      'images/MAZARINE PROJECT/mazarine project p4.png',
    ],
    titleKey:   'proj3_title',
    locationKey:'proj3_location',
    descKey:    'proj3_modal_desc',
    specs: [
      { labelKey: 'proj3_spec1_label', valueKey: 'proj3_spec1_value' },
      { labelKey: 'proj3_spec2_label', valueKey: 'proj3_spec2_value' },
      { labelKey: 'proj3_spec3_label', valueKey: 'proj3_spec3_value' },
    ]
  },
  'courts': {
    images: [
      'images/COURTS COMPLEX \u2013 CITY OF JUSTICE/courts complex p1.jpg',
      'images/COURTS COMPLEX \u2013 CITY OF JUSTICE/courts complex p2.png',
      'images/COURTS COMPLEX \u2013 CITY OF JUSTICE/courts complex p3.png',
    ],
    titleKey:   'proj4_title',
    locationKey:'proj4_location',
    descKey:    'proj4_modal_desc',
    specs: [
      { labelKey: 'proj4_spec1_label', valueKey: 'proj4_spec1_value' },
      { labelKey: 'proj4_spec2_label', valueKey: 'proj4_spec2_value' },
      { labelKey: 'proj4_spec3_label', valueKey: 'proj4_spec3_value' },
    ]
  },
  'sakan': {
    images: [
      'images/SAKAN AHL MISR PROJECT/Copy of KAYAN.png',
    ],
    titleKey:   'proj5_title',
    locationKey:'proj5_location',
    descKey:    'proj5_modal_desc',
    specs: [
      { labelKey: 'proj5_spec1_label', valueKey: 'proj5_spec1_value' },
      { labelKey: 'proj5_spec2_label', valueKey: 'proj5_spec2_value' },
      { labelKey: 'proj5_spec3_label', valueKey: 'proj5_spec3_value' },
    ]
  },
  'services': {
    images: [
      'images/Our services.jpg',
      'images/about, who we are, capabilities.jpg',
      'images/company profile.png',
    ],
    titleKey:   'proj6_title',
    locationKey:'proj6_location',
    descKey:    'proj6_modal_desc',
    specs: [
      { labelKey: 'proj6_spec1_label', valueKey: 'proj6_spec1_value' },
      { labelKey: 'proj6_spec2_label', valueKey: 'proj6_spec2_value' },
      { labelKey: 'proj6_spec3_label', valueKey: 'proj6_spec3_value' },
    ]
  },
};

// ============================================================
// 3. STATE
// ============================================================
let currentLang = 'ar';
let modalSwiperInstance = null;

// ============================================================
// 4. DOM HELPERS
// ============================================================
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ============================================================
// 5. LANGUAGE SYSTEM
// ============================================================
function applyLanguage(lang) {
  const t = translations[lang];
  const html = document.documentElement;

  // --- Update html attributes ---
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // --- Font family ---
  document.body.style.fontFamily = lang === 'ar'
    ? "'Cairo', sans-serif"
    : "'Inter', sans-serif";

  // --- Toggle button label ---
  const langBtn = $('#lang-toggle');
  if (langBtn) langBtn.textContent = t['lang_toggle'];

  // --- Translate all [data-i18n] elements ---
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // Special handling for hero headline (has <br> and <span>)
      if (key === 'hero_headline') {
        const lines = t[key].split('\n');
        el.innerHTML = lines[0] + '<br /><span class="text-gradient">' + lines[1] + '</span>';
      } else {
        el.textContent = t[key];
      }
    }
  });

  // --- Translate placeholders ---
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // --- Tailwind font class on body ---
  document.body.classList.toggle('font-cairo', lang === 'ar');
  document.body.classList.toggle('font-inter', lang === 'en');
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage(currentLang);
}

// ============================================================
// 6. NAVBAR SCROLL EFFECT
// ============================================================
function initNavbarScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check
}

// ============================================================
// 7. MOBILE MENU
// ============================================================
function initMobileMenu() {
  const btn   = $('#mobile-menu-btn');
  const menu  = $('#mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close on any mobile nav link click
  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// 8. MODAL LOGIC
// ============================================================
function buildModalContent(projectKey) {
  const t    = translations[currentLang];
  const data = projectData[projectKey];
  if (!data) return;

  // --- Swiper slides ---
  const wrapper = $('#modal-swiper-wrapper');
  if (wrapper) {
    wrapper.innerHTML = data.images.map(src =>
      `<div class="swiper-slide"><img src="${src}" alt="" loading="lazy" /></div>`
    ).join('');
  }

  // --- Title ---
  const title = $('#modal-title');
  if (title) title.textContent = t[data.titleKey] || '';

  // --- Location badge ---
  const badge = $('#modal-location-badge');
  if (badge) {
    badge.innerHTML = `
      <svg class="w-3 h-3 inline me-1" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
      </svg>
      ${t[data.locationKey] || ''}
    `;
  }

  // --- Description ---
  const desc = $('#modal-description');
  if (desc) desc.textContent = t[data.descKey] || '';

  // --- Specs ---
  const specsEl = $('#modal-specs');
  if (specsEl) {
    specsEl.innerHTML = data.specs.map(spec => `
      <div class="spec-tile">
        <span class="spec-label">${t[spec.labelKey] || ''}</span>
        <span class="spec-value">${t[spec.valueKey] || ''}</span>
      </div>
    `).join('');
  }

  // --- CTA text & WhatsApp link ---
  const cta = $('#modal-cta');
  if (cta) {
    const projectTitle = t[data.titleKey] || '';
    const whatsappMsg = encodeURIComponent(currentLang === 'ar' ? `مرحباً، أود الاستفسار عن ${projectTitle}` : `Hello, I would like to inquire about ${projectTitle}`);
    cta.setAttribute('href', `https://wa.me/201003710242?text=${whatsappMsg}`);
    cta.setAttribute('target', '_blank');
    cta.setAttribute('rel', 'noopener noreferrer');

    const ctaSpan = cta.querySelector('[data-i18n="modal_cta"]');
    if (ctaSpan) {
      ctaSpan.textContent = t['modal_cta'] || '';
    } else {
      cta.innerHTML = `
        <svg class="w-5 h-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span data-i18n="modal_cta">${t['modal_cta']}</span>
      `;
    }
  }

  // --- Close btn text ---
  const closeBtn = $('#modal-close-btn');
  if (closeBtn) closeBtn.textContent = t['modal_close_btn'];
}

function openModal(projectKey) {
  buildModalContent(projectKey);

  const modal = $('#project-modal');
  if (!modal) return;

  // Show modal
  modal.classList.remove('hidden');
  // Trigger CSS transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
    });
  });
  document.body.classList.add('modal-open');

  // Destroy previous Swiper if any
  if (modalSwiperInstance) {
    modalSwiperInstance.destroy(true, true);
    modalSwiperInstance = null;
  }

  // Init Swiper with DOM observer support & smooth slide speed
  modalSwiperInstance = new Swiper('.modal-swiper', {
    loop: true,
    speed: 600,
    grabCursor: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    resizeObserver: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    keyboard: { enabled: true },
    a11y: { enabled: true },
  });

  // Force layout update after modal becomes visible
  setTimeout(() => {
    if (modalSwiperInstance) {
      modalSwiperInstance.update();
    }
  }, 150);

  // Focus close button for accessibility
  setTimeout(() => {
    const closeBtn = $('#modal-close');
    if (closeBtn) closeBtn.focus();
  }, 350);
}

function closeModal() {
  const modal = $('#project-modal');
  if (!modal) return;

  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');

  // Wait for transition, then hide
  setTimeout(() => {
    modal.classList.add('hidden');
    if (modalSwiperInstance) {
      modalSwiperInstance.destroy(true, true);
      modalSwiperInstance = null;
    }
  }, 380);
}

function initModal() {
  // Project cards -> open modal
  $$('.project-card').forEach(card => {
    const openHandler = () => {
      const key = card.getAttribute('data-project');
      if (key) openModal(key);
    };
    card.addEventListener('click', openHandler);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openHandler();
      }
    });
  });

  // Close buttons
  $('#modal-close')?.addEventListener('click', closeModal);
  $('#modal-close-btn')?.addEventListener('click', closeModal);

  // CTA button closes modal when clicked (allowing WhatsApp link to navigate)
  $('#modal-cta')?.addEventListener('click', () => {
    closeModal();
  });

  // Backdrop click
  $('#modal-backdrop')?.addEventListener('click', closeModal);

  // Esc key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============================================================
// 9. LEAD FORM
// ============================================================
function initLeadForm() {
  const form      = $('#lead-form');
  const submitBtn = $('#form-submit');
  const btnText   = $('#form-btn-text');
  const spinner   = $('#form-btn-spinner');
  const success   = $('#form-success');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name  = $('#form-name')?.value.trim();
    const phone = $('#form-phone')?.value.trim();
    const t     = translations[currentLang];

    // Basic validation
    if (!name || !phone) {
      $('#form-name')?.classList.add('!border-red-500/60');
      $('#form-phone')?.classList.add('!border-red-500/60');
      return;
    }
    $('#form-name')?.classList.remove('!border-red-500/60');
    $('#form-phone')?.classList.remove('!border-red-500/60');

    // Show loading state
    if (submitBtn) submitBtn.disabled = true;
    if (btnText)   btnText.classList.add('hidden');
    if (spinner)   spinner.classList.remove('hidden');

    // Simulate async submission (replace with real API call)
    await new Promise(resolve => setTimeout(resolve, 1800));

    // Show success
    if (submitBtn) submitBtn.classList.add('hidden');
    if (success)   success.classList.remove('hidden');

    // Reset after 5 seconds
    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('hidden');
      }
      if (btnText)  btnText.classList.remove('hidden');
      if (spinner)  spinner.classList.add('hidden');
      if (success)  success.classList.add('hidden');
    }, 5000);
  });
}

// ============================================================
// 10. SCROLL-REVEAL OBSERVER
// ============================================================
function initScrollReveal() {
  const revealEls = $$('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ============================================================
// 11. THEME TOGGLE (DARK / LIGHT)
// ============================================================
function initThemeToggle() {
  const htmlEl    = document.documentElement;
  const toggleBtn = $('#theme-toggle');
  const moonIcon  = $('#theme-icon-moon');
  const sunIcon   = $('#theme-icon-sun');
  const navbarLogo = $('#navbar-logo');

  function updateLogo(isLight) {
    if (navbarLogo) {
      navbarLogo.src = isLight 
        ? 'images/logo/Kayan_Constructions_Logo-removebg-preview.png' 
        : 'images/logo/logo english dark.png';
    }
  }

  // Apply saved preference on load
  const savedTheme = localStorage.getItem('kayan_theme');
  const isInitialLight = savedTheme === 'light';
  if (isInitialLight) {
    htmlEl.classList.add('light-mode');
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
  }
  updateLogo(isInitialLight);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isLight = htmlEl.classList.toggle('light-mode');

    // Swap icons
    if (isLight) {
      moonIcon?.classList.add('hidden');
      sunIcon?.classList.remove('hidden');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    }

    updateLogo(isLight);

    // Persist preference
    localStorage.setItem('kayan_theme', isLight ? 'light' : 'dark');
  });
}

// ============================================================
// 12. CONTACT LINKS HANDLING (Email & Phone Fallbacks)
// ============================================================
function showToast(message) {
  let toast = $('#contact-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contact-toast';
    toast.className = 'fixed bottom-6 start-1/2 -translate-x-1/2 z-[300] bg-gold-400 text-dark-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-2xl transition-all duration-300 transform opacity-0 translate-y-4 pointer-events-none flex items-center gap-2';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3200);
}

function initContactLinks() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Email links / cards
  $$('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const email = 'Kayanconstructionseg@gmail.com';
      try {
        navigator.clipboard?.writeText(email);
      } catch (err) {}

      if (!isMobile) {
        // On desktop Windows/Mac, mailto is often unhandled by browser without desktop client. Open Gmail Web compose
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmailUrl, '_blank');
        showToast(currentLang === 'ar' ? 'تم فتح الجيميل ونسخ البريد الإلكتروني ✉️' : 'Opening Gmail & Email copied to clipboard ✉️');
      }
    });
  });

  // Phone links / cards
  $$('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const rawHref = link.getAttribute('href') || '';
      const phoneNum = rawHref.replace('tel:', '') || '+201003710242';
      try {
        navigator.clipboard?.writeText(phoneNum);
      } catch (err) {}

      if (!isMobile) {
        // On desktop Windows/Mac, tel is unhandled. Redirect to WhatsApp or show toast with number
        const cleanDigits = phoneNum.replace(/[^0-9]/g, '');
        const waUrl = `https://wa.me/${cleanDigits}?text=${encodeURIComponent(currentLang === 'ar' ? 'مرحباً أود الاستفسار عن مشاريع كيان' : 'Hello, I would like to inquire about KAYAN projects')}`;
        window.open(waUrl, '_blank');
        showToast(currentLang === 'ar' ? 'تم التوجيه للواتساب ونسخ رقم الهاتف 📞' : 'Redirecting to WhatsApp & Phone copied 📞');
      }
    });
  });
}

// ============================================================
// 13. INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply default language (Arabic)
  applyLanguage(currentLang);

  // Language toggle button
  $('#lang-toggle')?.addEventListener('click', toggleLanguage);

  // Theme toggle
  initThemeToggle();

  // Navbar scroll
  initNavbarScroll();

  // Mobile menu
  initMobileMenu();

  // Project modal
  initModal();

  // Lead form
  initLeadForm();

  // Contact links fallback & copy
  initContactLinks();

  // Scroll reveal
  initScrollReveal();

  // Add reveal class to animate-able sections
  $$('.vm-card, .project-card, .contact-info-card, .form-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
  });

  // Re-run observer after adding reveal classes
  initScrollReveal();
});
