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
    hero_badge: 'مقاولات وتوريدات عمومية متكاملة',
    hero_headline: 'من الهيكل إلى التفاصيل…\nحلول متكاملة تُبنى بالفخامة والدقة',
    hero_subheadline: 'كيان للمقاولات والتوريدات العمومية – حلول التشطيبات والتجهيزات الداخلية والواجهات المعمارية الخارجية من مرحلة التصميم حتى التسليم النهائي.',
    hero_cta_primary:  'استكشف المشاريع',
    hero_cta_secondary:'تواصل معنا',
    hero_scroll:       'اكتشف المزيد',

    // --- About ---
    about_badge:      'من نحن',
    about_title: 'عن كيان للمقاولات والتوريدات العمومية',
    about_stat_label: 'عام التأسيس',
    about_subtitle: 'شريك استراتيجي متكامل من الهيكل حتى التفاصيل',
    about_p1: 'منذ تأسيس شركة كيان للمقاولات العامة والتوريدات، نجحت الشركة في ترسيخ مكانتها كشريك استراتيجي متكامل في تنفيذ المشروعات القومية والمؤسسية والسكنية الكبرى. تجمع كيان بين خبرتها الرائدة في قطاع تصنيع الأثاث الخشبي الفاخر والتشطيبات والديكورات الداخلية، وبين تميزها في قطاع أنظمة الألومنيوم، الواجهات الزجاجية، والأعمال الإنشائية الخارجية.',
    about_p2: 'نحن نقدم منظومة هندسية وتنفيذية شاملة تعتمد على الجودة، الدقة، والابتكار لتحويل الرؤى المعمارية إلى واقع ملموس.',
    about_point1: 'شريك استراتيجي في المشروعات القومية والمؤسسية والسكنية الكبرى',
    about_point2: 'خبرة رائدة في تصنيع الأثاث الخشبي الفاخر والتشطيبات والديكورات الداخلية',
    about_point3: 'تميز في أنظمة الألومنيوم والواجهات الزجاجية والأعمال الإنشائية الخارجية',
    about_point4: 'منظومة هندسية وتنفيذية شاملة من التصميم حتى التسليم النهائي',

    // --- Vision / Mission ---
    vision_title: 'رؤيتنا',
    vision_text: 'أن نكون الخيار الأول والشركة الرائدة في تقديم الحلول المتكاملة للإنشاءات، قطاع الألومنيوم، والأثاث الفاخر على مستوى الشرق الأوسط.',
    mission_title: 'رسالتنا',
    mission_text: 'تقديم خدمات شاملة تجمع بين التصميم الهندسي والتنفيذ الدقيق والجودة الفائقة، مع الالتزام بأعلى معايير السلامة والجودة والصحة المهنية (QHSE Plan).',

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

    // --- Projects tabs ---
    projects_tab_main: 'الواجهات والألومنيوم',
    projects_tab_new:  'الفرش والتشطيبات الداخلية',

    // --- New projects: shared spec labels ---
    np_label_location: 'الموقع',
    np_label_scope:    'نطاق الأعمال',
    np_label_areas:    'المساحات المجهزة',

    // New 1 – Hassan Mostafa Indoor Hall
    np1_title:       'صالة حسن مصطفى المغطاة',
    np1_location:    '6 أكتوبر',
    np1_desc_short:  'فرش وتجهيز المكاتب وصالات الاستقبال وقاعات المؤتمرات مع أعمال التجاليد الخشبية.',
    np1_units:       'فرش وتجاليد خشبية',
    np1_modal_desc:  'نفذت كيان أعمال الفرش والتجهيز الداخلي بصالة حسن مصطفى المغطاة بمدينة 6 أكتوبر، وشملت مكتب رئيس الاتحاد الدولي لكرة اليد ومكتب رئيس الاتحاد المصري لكرة اليد وصالات الاستقبال وكبار الزوار وقاعات الانتظار والاجتماعات والمؤتمرات الصحفية.\n\nشمل العمل توريد وتركيب المكاتب والكراسي الثابتة والمتحركة والأنتريهات وترابيزات الاجتماعات والترابيزات الديكورية، إضافة إلى أعمال التجاليد الخشبية وتجهيز غرف تغيير الملابس وصالة الألعاب.',
    np1_areas:       'مكاتب الاتحادين المصري والدولي لكرة اليد، صالات الاستقبال وكبار الزوار، قاعات الاجتماعات والمؤتمرات',

    // New 2 – Administrative Capital Indoor Hall
    np2_title:       'صالة العاصمة الإدارية المغطاة',
    np2_location:    'العاصمة الإدارية الجديدة',
    np2_desc_short:  'تجهيز مكاتب الوزارة وصالات VIP وقاعات الخدمات الإعلامية بالمدينة الرياضية.',
    np2_units:       'فرش وأعمال خشبية',
    np2_modal_desc:  'ساهمت كيان في تجهيز صالة العاصمة الإدارية المغطاة بالمدينة الرياضية بالعاصمة الإدارية الجديدة، بفرش مكتب السيد وزير الشباب والرياضة وسكرتاريته وصالات انتظار واستقبال كبار الزوار وصالة الخدمات الإعلامية وغرفة ورك ستيشن الخدمات الإعلامية.\n\nشملت الأعمال أيضاً فرش العيادات الطبية وغرف تغيير الملابس وصالات الألعاب الرياضية وحجرات الساونا والجاكوزي، إلى جانب الأعمال الخشبية والتجاليد وعناصر اللاند سكيب.',
    np2_areas:       'مكتب وزير الشباب والرياضة، صالات كبار الزوار، صالة الخدمات الإعلامية، العيادات الطبية',

    // New 3 – Cairo Stadium Halls Complex
    np3_title:       'مجمع صالات استاد القاهرة',
    np3_location:    'القاهرة',
    np3_desc_short:  'تجهيز صالات الألعاب الرياضية وقاعات المؤتمرات وأعمال تجليد الحوائط بالفنيل المعالج.',
    np3_units:       'تجهيز صالات رياضية',
    np3_modal_desc:  'نفذت كيان أعمال الفرش والتجهيز بمجمع صالات استاد القاهرة، وشملت تجهيز صالات الألعاب الرياضية وقاعة المؤتمرات الصحفية وغرفة انتظار كبار الزوار ووحدات العمل والكاونترات والأعمال الخشبية.\n\nكما تضمن المشروع أعمال تجليد الحوائط بالفنيل المعالج.',
    np3_areas:       'صالات الألعاب، قاعة المؤتمرات الصحفية، غرفة انتظار كبار الزوار',

    // New 4 – African Space Agency
    np4_title:       'وكالة الفضاء الإفريقية',
    np4_location:    'العاصمة الإدارية الجديدة',
    np4_desc_short:  'فرش قاعات المؤتمرات والاجتماعات وصالات كبار الزوار بتجاليد خشبية فاخرة.',
    np4_units:       'فرش وتجاليد خشبية',
    np4_modal_desc:  'شاركت كيان في تجهيز مقر وكالة الفضاء الإفريقية بالعاصمة الإدارية الجديدة، من خلال فرش قاعة المؤتمرات وصالات الاجتماعات وقاعة انتظار كبار الزوار والمكاتب.\n\nشمل العمل توريد وتركيب الكراسي الثابتة والمتحركة والترابيزات والأنتريهات والأبواب، مع تنفيذ أعمال التجاليد الخشبية والأعمال الخشبية الدقيقة.',
    np4_areas:       'قاعة المؤتمرات، قاعة انتظار كبار الزوار، صالات الاجتماعات، المكاتب',

    // New 5 – 151st Brigade Command
    np5_title:       'قيادة اللواء 152 – أشغال عسكرية',
    np5_location:    'قطاع بني يوسف',
    np5_desc_short:  'فرش المكاتب وغرف النوم الفندقية وقاعات الاجتماعات مع الأبواب والتجاليد الخشبية.',
    np5_units:       'فرش وأبواب وتجاليد',
    np5_modal_desc:  'نفذت كيان أعمال الفرش والتجهيز بمبنى قيادة اللواء 152 أشغال عسكرية بقطاع بني يوسف، وشملت المكاتب وغرف النوم الفندقية وقاعات الاجتماعات.\n\nضم المشروع توريد وتركيب الأبواب والتجاليد الخشبية والكراسي والأنتريهات وترابيزات الاجتماعات ووحدات الإضاءة.',
    np5_areas:       'المكاتب، غرف النوم الفندقية، قاعات الاجتماعات',

    // New 6 – Konouz Marble Exhibition
    np6_title:       'معرض كنوز للرخام',
    np6_location:    'بشق الثعبان',
    np6_desc_short:  'تجهيز المكاتب وقاعة الاستقبال ووحدات العمل بمعرض كنوز للرخام.',
    np6_units:       'مكاتب وقاعة استقبال',
    np6_modal_desc:  'ساهمت كيان في تجهيز معرض كنوز للرخام بمنطقة بشق الثعبان، بفرش مكتب مدير المعرض وقاعة الاستقبال والمكاتب الإدارية.\n\nشمل العمل وحدات العمل والكراسي الثابتة والمتحركة والأنتريهات والترابيزات والقطع الديكورية والأبواب والأعمال الخشبية.',
    np6_areas:       'مكتب مدير المعرض، قاعة الاستقبال، المكاتب الإدارية',

    // New 7 – Engineering Authority Clinics
    np7_title:       'عيادات دار الهيئة الهندسية',
    np7_location:    'القاهرة',
    np7_desc_short:  'تجهيز العيادات الطبية والمكاتب الإدارية بأعمال خشبية وأبواب.',
    np7_units:       'تجهيز عيادات طبية',
    np7_modal_desc:  'نفذت كيان أعمال تجهيز عيادات دار الهيئة الهندسية بالقاهرة، شاملة فرش العيادات الطبية والمكاتب الإدارية.\n\nتضمن العمل الأعمال الخشبية والأبواب والكراسي الثابتة والمتحركة.',
    np7_areas:       'العيادات الطبية، المكاتب الإدارية',

    // New 8 – Licensing & Follow-up Department
    np8_title:       'مبنى الخدمات الجوية بمطار القاهرة',
    np8_location:    'مطار القاهرة',
    np8_desc_short:  'أعمال الفرش والتجهيز الداخلي لمبنى الخدمات الجوية بمطار القاهرة.',
    np8_units:       'فرش وتجهيز داخلي',
    np8_modal_desc:  'نفذت كيان أعمال الفرش والتجهيز الداخلي لمبنى الخدمات الجوية بمطار القاهرة.',
    np8_areas:       'المكاتب والقاعات الداخلية بمبنى الخدمات الجوية',

    // New 9 – Al-Hussein Mosque
    np9_title:       'مشروع مسجد الحسين',
    np9_location:    'القاهرة التاريخية',
    np9_desc_short:  'ضمن مشروعات إحياء التراث الإسلامي: فرش وتجهيز قاعة كبار الزوار بمسجد الحسين.',
    np9_units:       'إحياء التراث الإسلامي',
    np9_modal_desc:  'ضمن مشروعات إحياء التراث الإسلامي بالقاهرة التاريخية، نفذت كيان أعمال الفرش والتجهيز بقاعة كبار الزوار بمسجد سيدنا الحسين.\n\nتضمن العمل الأنتريهات والكراسي والأعمال الخشبية والأبواب.',
    np9_areas:       'قاعة كبار الزوار',

    // New 10 – Sayida Zeinab Mosque
    np10_title:      'مشروع مسجد السيدة زينب',
    np10_location:   'القاهرة التاريخية',
    np10_desc_short: 'ضمن مشروعات إحياء التراث الإسلامي: فرش قاعة استقبال كبار الزوار بأعمال خشبية وأبواب.',
    np10_units:      'إحياء التراث الإسلامي',
    np10_modal_desc: 'ضمن مشروعات إحياء التراث الإسلامي بالقاهرة التاريخية، نفذت كيان أعمال الفرش والتجهيز بمسجد السيدة زينب، وشملت قاعة استقبال كبار الزوار.\n\nتضمن العمل الأنتريهات والكراسي الثابتة والمتحركة والأعمال الخشبية والأبواب.',
    np10_areas:      'قاعة استقبال كبار الزوار',

    // New 11 – Various projects
    np11_title:      'مشروع مسجد السيدة نفيسة',
    np11_location:   'القاهرة التاريخية',
    np11_desc_short: 'ضمن مشروعات إحياء التراث الإسلامي: فرش وتجهيز قاعة كبار الزوار بمسجد السيدة نفيسة.',
    np11_units:      'إحياء التراث الإسلامي',
    np11_modal_desc: 'ضمن مشروعات إحياء التراث الإسلامي بالقاهرة التاريخية، نفذت كيان أعمال الفرش والتجهيز بقاعة كبار الزوار بمسجد السيدة نفيسة.\n\nتضمن العمل الأنتريهات والكراسي والأعمال الخشبية والأبواب.',
    np11_areas:      'قاعة كبار الزوار',

    // New 12 – Mazareen Chalets
    np12_title:      'أبواب وفرش شاليهات مزارين',
    np12_location:   'العلمين الجديدة',
    np12_desc_short: 'توريد الأبواب وفرش الشاليهات (نموذج D ونموذج E) بمشروع مزارين بالعلمين الجديدة.',
    np12_units:      'أبواب وفرش شاليهات',
    np12_modal_desc: 'نفذت كيان أعمال توريد وتركيب الأبواب وفرش شاليهات مشروع مزارين بالعلمين الجديدة، وشملت النموذجين D وE.',
    np12_areas:      'شاليهات مزارين – نموذج D ونموذج E',

    // New 13 – Marina Yacht Marina Doors
    np13_title:      'أبواب مارينا مرسى اليخوت',
    np13_location:   'الساحل الشمالي',
    np13_desc_short: 'توريد وتركيب الأبواب الخشبية المتخصصة بمشروع مارينا مرسى اليخوت بالساحل الشمالي.',
    np13_units:      'أبواب خشبية فاخرة',
    np13_modal_desc: 'نفذت كيان أعمال تصنيع وتوريد وتركيب الأبواب الخشبية لمشروع مارينا مرسى اليخوت بالساحل الشمالي بأعلى مواصفات الجودة ومقاومة العوامل الجوية الساحلية.',
    np13_areas:      'مرافق ووحدات مارينا مرسى اليخوت',

    // New 14 – Sakan Ahl Misr Doors (New Salam City)
    np14_title:      'أبواب مشروع سكن أهل مصر',
    np14_location:   'مدينة السلام الجديدة',
    np14_desc_short: 'توريد وتركيب الأبواب الخشبية للوحدات السكنية بمشروع سكن أهل مصر بمدينة السلام الجديدة.',
    np14_units:      'أبواب خشبية سكنية',
    np14_modal_desc: 'شاركت كيان في مشروع سكن أهل مصر بمدينة السلام الجديدة عبر تصنيع وتوريد وتركيب الأبواب الخشبية للعمارات والوحدات السكنية وفقاً لأعلى معايير المتانة والتشطيب.',
    np14_areas:      'العمارات والوحدات السكنية',

    // New 15 – Gardenia Buildings Doors (Nasr City)
    np15_title:      'أبواب عمارات جاردينيا',
    np15_location:   'مدينة نصر، القاهرة',
    np15_desc_short: 'تصنيع وتوريد وتركيب الأبواب الخشبية لعمارات كمبوند جاردينيا بمدينة نصر.',
    np15_units:      'أبواب خشبية',
    np15_modal_desc: 'نفذت كيان أعمال الأبواب الخشبية لمشروع عمارات جاردينيا بمدينة نصر، وشملت تصنيع وتركيب أبواب المداخل والوحدات السكنية بأجود أنواع الأخشاب والقشور الطبيعية.',
    np15_areas:      'مداخل ووحدات عمارات جاردينيا',

    // New 16 – Mayan Project Doors (Near Al-Rehab)
    np16_title:      'أبواب مشروع مايان',
    np16_location:   'القاهرة الجديدة',
    np16_desc_short: 'تصنيع وتوريد الأبواب الخشبية الداخلية والخارجية لمشروع مايان بجوار الرحاب.',
    np16_units:      'أبواب خشبية متخصصة',
    np16_modal_desc: 'قامت كيان بتصنيع وتوريد وتركيب الأبواب الخشبية لمشروع مايان السكني بجوار مدينة الرحاب، بتشطيبات راقية تناسب الطابع المعماري للمشروع.',
    np16_areas:      'الوحدات السكنية بمشروع مايان',

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
    contact_addr_label: 'المقر الرئيسي',
    contact_addr_value: '93 ش 5 الجولف – مدينة نصر – القاهرة',
    contact_map_badge:      'افتح موقع الشركة على الخريطة ↗',

    // --- Services Section ---
    services_badge: 'قطاعات الشركة وأنشطتها',
    services_title: 'قطاعاتنا الرئيسية',
    services_subtitle: 'نقسم خدمات الشركة إلى قطاعين رئيسيين يكملان بعضهما، لنقدم تجربة متكاملة من الهيكل حتى الفرش والتشطيب.',
    goals_title: 'أهدافنا',
    goals_text: 'تحقيق التميز المستدام، تعزيز الشراكة في المشروعات القومية، وتقديم تجربة متكاملة للعميل من الهيكل والواجهات الخارجية حتى الفرش والديكور الداخلي.',
    div1_title: 'قطاع الألومنيوم والحلول المعمارية الخارجية',
    div1_sub: 'Aluminum & Exterior Solutions',
    div1_a_title: 'أعمال الألومنيوم والواجهات',
    div1_a_desc: 'توريد وتصنيع وتركيب أحدث قطاعات الألومنيوم للواجهات والشبابيك والأبواب بأعلى معايير العزل والجودة.',
    div1_b_title: 'الأنظمة الزجاجية',
    div1_b_desc: 'توريد وتركيب الزجاج المعالج والمعماري للواجهات والتجهيزات (Glass Solutions).',
    div1_c_title: 'الأعمال الديكورية والإرشادية الخارجية',
    div1_c_desc: 'تصميم وتنفيذ اللافتات والإرشادات والواجهات الفنية للمشروعات القومية والمؤسسات الكبرى (Outdoor).',
    div2_title: 'قطاع الأخشاب والديكورات والفرش الداخلي',
    div2_sub: 'Wood, Interior & Furniture Solutions',
    div2_a_title: 'تصنيع الأبواب الخشبية الفاخرة',
    div2_a_desc: 'تجفيف ومعالجة الأخشاب وتصنيع أبواب الخشب الطبيعي والقشرة وMDF والأبواب العازلة للصوت بتصاميم كلاسيكية ومودرن.',
    div2_b_title: 'التجاليد الخشبية والفنية',
    div2_b_desc: 'تصميم وتنفيذ تجاليد الحوائط والأرضيات والأسقف بلمسات فنية راقية.',
    div2_c_title: 'التشطيبات والديكور المتكامل',
    div2_c_desc: 'تنفيذ أعمال الأرضيات، الدهانات، الكهرباء، والسباكة بنظام فندقي فاخر.',
    div2_d_title: 'تأثيث وفرش المشروعات',
    div2_d_desc: 'توريد وفرش الأثاث المكتبي، الفندقي، السكني، والقاعات الكبرى بالكامل.',
    quality_badge: 'الجودة والتنظيم',
    quality_title: 'الجودة والهيكل التنظيمي',
    quality_subtitle: 'منظومة إدارية وفنية متكاملة تضمن جودة التنفيذ وسلامة الموقع حتى التسليم النهائي.',
    qhse_title: 'نظام الجودة والسلامة (QHSE)',
    qhse_text: 'الالتزام التام بالسلامة والصحة المهنية والحفاظ على البيئة طبقاً لخطة الشركة المعتمدة.',
    org_title: 'الهيكل التنظيمي (Organizational Structure)',
    org_text: 'إدارة هندسية وفنية متكاملة تضمن متابعة المشروع من المخطط الزمني (Project Timeline) وحتى التسليم النهائي.',
    step1: 'التصميم',
    step2: 'التصنيع والتوريد',
    step3: 'التنفيذ والتركيب',
    step4: 'التسليم النهائي',

    // --- Footer ---
    footer_desc: 'كيان للمقاولات والتوريدات العمومية – من الهيكل إلى التفاصيل… حلول متكاملة تُبنى بالفخامة والدقة.',
    footer_links_title:   'روابط سريعة',
    footer_contact_title: 'تواصل معنا',
    footer_copy: '© 2026 كيان للمقاولات والتوريدات العمومية. جميع الحقوق محفوظة.',
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
    hero_badge: 'Integrated Contracting & General Supplies',
    hero_headline: 'From Structure to Details…\nIntegrated Solutions Built with Luxury & Precision',
    hero_subheadline: 'Kayan Contracting & General Supplies – finishing, interior fit-out and exterior architectural façade solutions, from design to final handover.',
    hero_cta_primary:  'Explore Projects',
    hero_cta_secondary:'Contact Us',
    hero_scroll:       'Discover More',

    // --- About ---
    about_badge:      'Who We Are',
    about_title: 'About Kayan Contracting & General Supplies',
    about_stat_label: 'Year Established',
    about_subtitle: 'An Integrated Strategic Partner, from Structure to Details',
    about_p1: 'Since its establishment, Kayan Contracting & General Supplies has secured its position as an integrated strategic partner in delivering major national, institutional and residential projects. Kayan combines its leading expertise in luxury wooden furniture manufacturing, finishing and interior decoration with its excellence in aluminum systems, glass façades and exterior structural works.',
    about_p2: 'We offer a comprehensive engineering and execution system built on quality, precision and innovation to turn architectural visions into tangible reality.',
    about_point1: 'Strategic partner in major national, institutional and residential projects',
    about_point2: 'Leading expertise in luxury wooden furniture, finishing and interior decoration',
    about_point3: 'Excellence in aluminum systems, glass façades and exterior structural works',
    about_point4: 'A comprehensive engineering and execution system from design to final handover',

    // --- Vision / Mission ---
    vision_title: 'Our Vision',
    vision_text: 'To be the first choice and the leading company in providing integrated solutions for construction, aluminum, and luxury furniture across the Middle East.',
    mission_title: 'Our Mission',
    mission_text: 'To deliver comprehensive services that combine engineering design, precise execution and superior quality, while adhering to the highest standards of safety, quality and occupational health (QHSE Plan).',

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

    // --- Projects tabs ---
    projects_tab_main: 'Façades & Aluminum',
    projects_tab_new:  'Furnishing & Interior Fit-out',

    // --- New projects: shared spec labels ---
    np_label_location: 'Location',
    np_label_scope:    'Scope of Works',
    np_label_areas:    'Areas Fitted-out',

    // New 1 – Hassan Mostafa Indoor Hall
    np1_title:       'Hassan Mostafa Indoor Hall',
    np1_location:    '6th of October',
    np1_desc_short:  'Furnishing and fit-out of offices, reception halls and conference rooms, with wooden cladding works.',
    np1_units:       'Furnishing & Wood Cladding',
    np1_modal_desc:  'KAYAN carried out the furnishing and interior fit-out of Hassan Mostafa Indoor Hall in 6th of October City, including the offices of the President of the International Handball Federation and the President of the Egyptian Handball Federation, as well as the reception halls, VIP lounges, waiting rooms, meeting rooms and press conference halls.\n\nThe scope covered the supply and installation of desks, fixed and swivel chairs, lounge sets, meeting tables and decorative tables, in addition to wooden cladding and the fit-out of changing rooms and the games hall.',
    np1_areas:       'Egyptian & International Handball Federation offices, reception and VIP halls, meeting and press rooms',

    // New 2 – Administrative Capital Indoor Hall
    np2_title:       'Administrative Capital Indoor Hall',
    np2_location:    'New Administrative Capital',
    np2_desc_short:  'Fit-out of ministerial offices, VIP lounges and media services halls at the Sports City.',
    np2_units:       'Furnishing & Woodwork',
    np2_modal_desc:  'KAYAN contributed to the fit-out of the Administrative Capital Indoor Hall at the Sports City in the New Administrative Capital, furnishing the Minister of Youth and Sports’ office and secretariat, the VIP waiting and reception lounges, the media services hall and the media services workstation room.\n\nThe works also included furnishing medical clinics, changing rooms, sports halls and the sauna and jacuzzi rooms, along with woodwork, cladding and landscape elements.',
    np2_areas:       'Minister’s office, VIP lounges, media services hall, medical clinics',

    // New 3 – Cairo Stadium Halls Complex
    np3_title:       'Cairo Stadium Halls Complex',
    np3_location:    'Cairo',
    np3_desc_short:  'Fit-out of sports halls and press conference rooms, with treated-vinyl wall cladding.',
    np3_units:       'Sports Halls Fit-out',
    np3_modal_desc:  'KAYAN carried out the furnishing and fit-out works at the Cairo Stadium Halls Complex, including the sports halls, the press conference hall, the VIP waiting lounge, work units, counters and woodwork.\n\nThe project also included wall cladding works with treated vinyl.',
    np3_areas:       'Sports halls, press conference hall, VIP waiting lounge',

    // New 4 – African Space Agency
    np4_title:       'African Space Agency',
    np4_location:    'New Administrative Capital',
    np4_desc_short:  'Furnishing of conference rooms, meeting halls and VIP lounges with premium wooden cladding.',
    np4_units:       'Furnishing & Wood Cladding',
    np4_modal_desc:  'KAYAN took part in fitting out the African Space Agency headquarters in the New Administrative Capital, furnishing the conference hall, meeting rooms, the VIP waiting lounge and the offices.\n\nThe scope included the supply and installation of fixed and swivel chairs, tables, lounge sets and doors, along with wooden cladding and detailed woodwork.',
    np4_areas:       'Conference hall, VIP waiting lounge, meeting rooms, offices',

    // New 5 – 151st Brigade Command
    np5_title:       '152nd Brigade Command – Military Works',
    np5_location:    'Beni Youssef Sector',
    np5_desc_short:  'Furnishing of offices, hotel-style bedrooms and meeting rooms, with doors and wooden cladding.',
    np5_units:       'Furnishing, Doors & Cladding',
    np5_modal_desc:  'KAYAN carried out the furnishing and fit-out of the 152nd Brigade Command building (Military Works) in the Beni Youssef sector, covering offices, hotel-style bedrooms and meeting rooms.\n\nThe project included the supply and installation of doors, wooden cladding, chairs, lounge sets, meeting tables and lighting units.',
    np5_areas:       'Offices, hotel-style bedrooms, meeting rooms',

    // New 6 – Konouz Marble Exhibition
    np6_title:       'Konouz Marble Exhibition',
    np6_location:    'Shaq El-Thuban',
    np6_desc_short:  'Fit-out of offices, the reception hall and work units at Konouz Marble Exhibition.',
    np6_units:       'Offices & Reception Hall',
    np6_modal_desc:  'KAYAN contributed to fitting out the Konouz Marble Exhibition in Shaq El-Thuban, furnishing the exhibition director’s office, the reception hall and the administrative offices.\n\nThe scope included work units, fixed and swivel chairs, lounge sets, tables, decorative pieces, doors and woodwork.',
    np6_areas:       'Director’s office, reception hall, administrative offices',

    // New 7 – Engineering Authority Clinics
    np7_title:       'Engineering Authority Clinics',
    np7_location:    'Cairo',
    np7_desc_short:  'Fit-out of medical clinics and administrative offices with woodwork and doors.',
    np7_units:       'Medical Clinics Fit-out',
    np7_modal_desc:  'KAYAN carried out the fit-out of the Engineering Authority Clinics in Cairo, including the furnishing of medical clinics and administrative offices.\n\nThe scope included woodwork, doors, and fixed and swivel chairs.',
    np7_areas:       'Medical clinics, administrative offices',

    // New 8 – Licensing & Follow-up Department
    np8_title:       'Air Services Building – Cairo Airport',
    np8_location:    'Cairo Airport',
    np8_desc_short:  'Furnishing and interior fit-out of the Air Services Building at Cairo Airport.',
    np8_units:       'Furnishing & Interior Fit-out',
    np8_modal_desc:  'KAYAN carried out the furnishing and interior fit-out of the Air Services Building at Cairo Airport.',
    np8_areas:       'Offices and interior halls of the Air Services Building',

    // New 9 – Al-Hussein Mosque
    np9_title:       'Al-Hussein Mosque Project',
    np9_location:    'Historic Cairo',
    np9_desc_short:  'Part of the Islamic heritage revival projects: furnishing and fit-out of the VIP hall at Al-Hussein Mosque.',
    np9_units:       'Islamic Heritage Revival',
    np9_modal_desc:  'As part of the Projects for Reviving Islamic Heritage in Historic Cairo, KAYAN carried out the furnishing and fit-out of the VIP hall at Al-Hussein Mosque.\n\nThe scope included lounge sets, chairs, woodwork and doors.',
    np9_areas:       'VIP hall',

    // New 10 – Sayida Zeinab Mosque
    np10_title:      'Sayida Zeinab Mosque Project',
    np10_location:   'Historic Cairo',
    np10_desc_short: 'Part of the Islamic heritage revival projects: furnishing the VIP reception hall with woodwork and doors.',
    np10_units:      'Islamic Heritage Revival',
    np10_modal_desc: 'As part of the Projects for Reviving Islamic Heritage in Historic Cairo, KAYAN carried out the furnishing and fit-out at Sayida Zeinab Mosque, including the VIP reception hall.\n\nThe scope included lounge sets, fixed and swivel chairs, woodwork and doors.',
    np10_areas:      'VIP reception hall',

    // New 11 – Various projects
    np11_title:      'Sayida Nafisa Mosque Project',
    np11_location:   'Historic Cairo',
    np11_desc_short: 'Part of the Islamic heritage revival projects: furnishing and fit-out of the VIP hall at Sayida Nafisa Mosque.',
    np11_units:      'Islamic Heritage Revival',
    np11_modal_desc: 'As part of the Projects for Reviving Islamic Heritage in Historic Cairo, KAYAN carried out the furnishing and fit-out of the VIP hall at Sayida Nafisa Mosque.\n\nThe scope included lounge sets, chairs, woodwork and doors.',
    np11_areas:      'VIP hall',

    // New 12 – Mazareen Chalets
    np12_title:      'Mazareen Chalets – Doors & Furnishing',
    np12_location:   'New Alamein',
    np12_desc_short: 'Supply of doors and furnishing of the Mazareen chalets (Model D and Model E) in New Alamein.',
    np12_units:      'Doors & Chalet Furnishing',
    np12_modal_desc: 'KAYAN supplied and installed the doors and furnished the chalets of the Mazareen project in New Alamein, covering Model D and Model E.',
    np12_areas:      'Mazareen chalets – Model D and Model E',

    // New 13 – Marina Yacht Marina Doors
    np13_title:      'Marina Yacht Marina Doors',
    np13_location:   'North Coast',
    np13_desc_short: 'Supply and installation of specialized wooden doors at Marina Yacht Marina, North Coast.',
    np13_units:      'Luxury Wooden Doors',
    np13_modal_desc: 'KAYAN carried out the manufacturing, supply and installation of wooden doors for the Marina Yacht Marina project in the North Coast, built to the highest quality standards and weather resistance.',
    np13_areas:      'Marina Yacht Marina units and facilities',

    // New 14 – Sakan Ahl Misr Doors (New Salam City)
    np14_title:      'Sakan Ahl Misr Project Doors',
    np14_location:   'New Salam City',
    np14_desc_short: 'Supply and installation of wooden doors for residential units in Sakan Ahl Misr, New Salam City.',
    np14_units:      'Residential Wooden Doors',
    np14_modal_desc: 'KAYAN participated in the Sakan Ahl Misr project in New Salam City by manufacturing, supplying, and installing wooden doors for residential buildings and units with high durability and finish.',
    np14_areas:      'Residential buildings and units',

    // New 15 – Gardenia Buildings Doors (Nasr City)
    np15_title:      'Gardenia Buildings Doors',
    np15_location:   'Nasr City, Cairo',
    np15_desc_short: 'Manufacturing, supply and installation of wooden doors for Gardenia compound buildings in Nasr City.',
    np15_units:      'Wooden Doors',
    np15_modal_desc: 'KAYAN executed the wooden door works for the Gardenia buildings project in Nasr City, including entrance and apartment doors crafted from quality wood and natural veneers.',
    np15_areas:      'Gardenia building entrances and residential units',

    // New 16 – Mayan Project Doors (Near Al-Rehab)
    np16_title:      'Mayan Project Doors',
    np16_location:   'New Cairo',
    np16_desc_short: 'Manufacturing and supply of interior and exterior wooden doors for the Mayan project near Al-Rehab.',
    np16_units:      'Specialized Wooden Doors',
    np16_modal_desc: 'KAYAN manufactured, supplied, and installed wooden doors for the Mayan residential project near Al-Rehab City, featuring premium finishes tailored to the architectural style.',
    np16_areas:      'Residential units in the Mayan project',

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
    contact_addr_label: 'Headquarters',
    contact_addr_value: '93 5th St, Golf – Nasr City, Cairo',
    contact_map_badge:      'Open Company Location on Map ↗',

    // --- Services Section ---
    services_badge: 'Our Divisions & Activities',
    services_title: 'Our Core Divisions',
    services_subtitle: 'Our services are divided into two complementary divisions, delivering an integrated experience from structure to furnishing and finishing.',
    goals_title: 'Our Goals',
    goals_text: 'To achieve sustainable excellence, strengthen partnership in national projects, and deliver an integrated client experience from structure and exterior façades to furnishing and interior decor.',
    div1_title: 'Aluminum & Exterior Architectural Solutions',
    div1_sub: 'Aluminum & Exterior Solutions',
    div1_a_title: 'Aluminum & Façade Works',
    div1_a_desc: 'Supply, fabrication and installation of the latest aluminum sections for façades, windows and doors with top insulation and quality standards.',
    div1_b_title: 'Glass Solutions',
    div1_b_desc: 'Supply and installation of treated and architectural glass for façades and fit-outs.',
    div1_c_title: 'Exterior Decorative & Signage Works',
    div1_c_desc: 'Design and execution of signage, wayfinding and artistic façades for national projects and major institutions (Outdoor).',
    div2_title: 'Wood, Interior & Furniture Solutions',
    div2_sub: 'Wood, Interior & Furniture Solutions',
    div2_a_title: 'Luxury Wooden Door Manufacturing',
    div2_a_desc: 'Wood drying and treatment, and manufacturing of natural wood, veneer, MDF and soundproof doors in classic and modern designs.',
    div2_b_title: 'Wood & Artistic Cladding',
    div2_b_desc: 'Design and execution of wall, floor and ceiling cladding with refined artistic touches.',
    div2_c_title: 'Integrated Finishing & Decor',
    div2_c_desc: 'Flooring, painting, electrical and plumbing works delivered to a luxury hotel standard.',
    div2_d_title: 'Project Furnishing',
    div2_d_desc: 'Full supply and furnishing of office, hotel and residential furniture and grand halls.',
    quality_badge: 'Quality & Organization',
    quality_title: 'Quality, Safety & Organizational Structure',
    quality_subtitle: 'An integrated management and technical system that ensures execution quality and site safety through to final handover.',
    qhse_title: 'Quality & Safety System (QHSE)',
    qhse_text: 'Full commitment to safety, occupational health and environmental protection in line with the company’s approved plan.',
    org_title: 'Organizational Structure',
    org_text: 'An integrated engineering and technical management that follows every project from the Project Timeline through to final handover.',
    step1: 'Design',
    step2: 'Manufacturing & Supply',
    step3: 'Execution & Installation',
    step4: 'Final Handover',

    // --- Footer ---
    footer_desc: 'Kayan Contracting & General Supplies – From structure to details… integrated solutions built with luxury and precision.',
    footer_links_title:   'Quick Links',
    footer_contact_title: 'Contact Us',
    footer_copy: '© 2026 Kayan Contracting & General Supplies. All Rights Reserved.',
    footer_made:          'Made with ❤️ in Egypt',
  }
};

// ============================================================
// 2. PROJECT DATA REGISTRY
// ============================================================
const projectData = {
  'al-jazeera': {
    images: [
      'images/AL JAZEERA PROJECT/al jazeera p3.jpeg',
      'images/AL JAZEERA PROJECT/al jazeerz p1.png',
      'images/AL JAZEERA PROJECT/al jazeera p2.png'
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
      'images/MAZARINE PROJECT/mazarine project p6.jpeg',
      'images/MAZARINE PROJECT/mazarine project p4.png',
      'images/MAZARINE PROJECT/mazarine project p2.jpg',
      'images/MAZARINE PROJECT/mazarine project p3.jpg',
      'images/MAZARINE PROJECT/mazarine project p1.jpg',
      'images/MAZARINE PROJECT/mazarine project p5.jpeg',
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
      'images/COURTS COMPLEX \u2013 CITY OF JUSTICE/courts complex p1.png',
      'images/COURTS COMPLEX \u2013 CITY OF JUSTICE/courts complex p2.jpg',
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
      'images/غلاف.png',
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

// --- New projects (Furnishing & Interior Fit-out tab) ---
// Image galleries are defined in new-projects-data.js (window.newProjectsImages)
(function registerNewProjects() {
  const galleries = window.newProjectsImages || {};
  const list = [
    'hassan-mostafa', 'capital-hall', 'cairo-stadium', 'space-agency',
    'brigade-152', 'konouz', 'clinics', 'air-services',
    'hussein-mosque', 'zeinab-mosque', 'nafisa-mosque', 'mazareen',
    'marina-yacht', 'sakan-salam', 'gardenia-doors', 'mayan-doors',
  ];
  list.forEach((key, i) => {
    const n = i + 1;
    projectData[key] = {
      images: galleries[key] || [],
      titleKey:    `np${n}_title`,
      locationKey: `np${n}_location`,
      descKey:     `np${n}_modal_desc`,
      specs: [
        { labelKey: 'np_label_location', valueKey: `np${n}_location` },
        { labelKey: 'np_label_scope',    valueKey: `np${n}_units` },
        { labelKey: 'np_label_areas',    valueKey: `np${n}_areas` },
      ]
    };
  });
})();

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
// 8. MODAL LOGIC (Smart On-Demand Loading & Lightweight Presentation)
// ============================================================
function loadSlide(slide) {
  if (!slide) return;
  const img = slide.querySelector('.modal-slide-img');
  const spinner = slide.querySelector('.modal-slide-spinner');
  if (!img) return;

  const onDone = () => {
    img.classList.add('is-loaded');
    if (spinner) spinner.classList.add('hidden');
  };

  const targetSrc = img.dataset.src;
  if (!img.getAttribute('src') && targetSrc) {
    img.setAttribute('src', targetSrc);
  }

  if (img.complete && img.naturalWidth > 0) {
    onDone();
  } else {
    img.addEventListener('load', onDone, { once: true });
    img.addEventListener('error', () => {
      if (spinner) spinner.classList.add('hidden');
    }, { once: true });
  }
}

function updateModalSlides(swiper) {
  if (!swiper || !swiper.slides || !swiper.slides.length) return;
  const active = swiper.activeIndex;
  // Load window around active slide: [-2, -1, 0, 1, 2]
  for (let offset = -2; offset <= 2; offset++) {
    const idx = active + offset;
    if (idx >= 0 && idx < swiper.slides.length) {
      loadSlide(swiper.slides[idx]);
    }
  }
}

function buildModalContent(projectKey, initialSlideIndex = 0) {
  const t    = translations[currentLang];
  const data = projectData[projectKey];
  if (!data) return;

  // --- Swiper slides with smart on-demand loading ---
  const wrapper = $('#modal-swiper-wrapper');
  if (wrapper) {
    const projectTitle = t[data.titleKey] || '';
    const total = data.images.length;
    wrapper.innerHTML = data.images.map((src, i) => {
      // Pre-set src for initial slide and its immediate neighbors for instant display
      const isInitialOrNeighbor = total <= 3 ||
        Math.abs(i - initialSlideIndex) <= 1 ||
        (initialSlideIndex === 0 && i === total - 1) ||
        (initialSlideIndex === total - 1 && i === 0);

      const srcAttr = isInitialOrNeighbor ? `src="${src}"` : '';
      return `<div class="swiper-slide">
        <div class="modal-slide-spinner"></div>
        <img class="modal-slide-img" data-src="${src}" ${srcAttr} alt="${projectTitle}" decoding="async" />
      </div>`;
    }).join('');
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

  // --- Images count badge ---
  const countBadge = $('#modal-images-count');
  if (countBadge) {
    const total = data.images.length;
    countBadge.textContent = currentLang === 'ar'
      ? `${total} ${total === 1 ? 'صورة' : (total === 2 ? 'صورتان' : (total <= 10 ? 'صور' : 'صورة'))}`
      : `${total} photo${total === 1 ? '' : 's'}`;
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
    cta.setAttribute('href', `https://wa.me/201001153366?text=${whatsappMsg}`);
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

function openModal(projectKey, initialSlideIndex = 0) {
  const data = projectData[projectKey];
  if (!data) return;

  buildModalContent(projectKey, initialSlideIndex);

  const modal = $('#project-modal');
  if (!modal) return;

  // Show modal
  modal.classList.remove('hidden');
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

  const hasMultipleImages = Array.isArray(data.images) && data.images.length > 1;

  // Init Swiper with event hooks for smart lazy loading
  modalSwiperInstance = new Swiper(modal.querySelector('.modal-swiper'), {
    loop: hasMultipleImages,
    speed: 360,
    grabCursor: hasMultipleImages,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    resizeObserver: true,
    autoplay: false,
    pagination: {
      el: modal.querySelector('.swiper-pagination'),
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: modal.querySelector('.swiper-button-next'),
      prevEl: modal.querySelector('.swiper-button-prev'),
    },
    keyboard: { enabled: true },
    a11y: { enabled: true },
    on: {
      init: function() {
        updateModalSlides(this);
      },
      slideChange: function() {
        updateModalSlides(this);
      }
    }
  });

  if (Number.isInteger(initialSlideIndex) && initialSlideIndex > 0) {
    try {
      modalSwiperInstance.slideToLoop(initialSlideIndex, 0);
    } catch (err) {
      try {
        modalSwiperInstance.slideTo(initialSlideIndex, 0);
      } catch (e) {}
    }
  }

  // Force layout update after modal becomes visible & update slides
  setTimeout(() => {
    if (modalSwiperInstance) {
      modalSwiperInstance.update();
      updateModalSlides(modalSwiperInstance);
    }
  }, 100);

  setTimeout(() => {
    if (modalSwiperInstance) {
      modalSwiperInstance.update();
      updateModalSlides(modalSwiperInstance);
    }
  }, 300);

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

  // Wait for transition, then hide and release memory
  setTimeout(() => {
    modal.classList.add('hidden');
    if (modalSwiperInstance) {
      modalSwiperInstance.destroy(true, true);
      modalSwiperInstance = null;
    }
    const wrapper = $('#modal-swiper-wrapper');
    if (wrapper) wrapper.innerHTML = '';
  }, 380);
}

function initModal() {
  // Project cards -> open modal
  $$('.project-card').forEach(card => {
    const openHandler = (e) => {
      // Don't open modal if clicked on in-card slider navigation buttons
      if (e && e.target && e.target.closest('.card-slider-btn')) return;
      const key = card.getAttribute('data-project');
      const currentSlide = parseInt(card.getAttribute('data-current-slide') || '0', 10);
      if (key) openModal(key, currentSlide);
    };
    card.addEventListener('click', openHandler);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = card.getAttribute('data-project');
        const currentSlide = parseInt(card.getAttribute('data-current-slide') || '0', 10);
        if (key) openModal(key, currentSlide);
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
// 12b. PROJECTS TABS
// ============================================================
function initProjectTabs() {
  const tabs   = $$('.projects-tab');
  const panels = $$('.projects-panel');
  if (!tabs.length || !panels.length) return;

  function activate(name, { focus = false } = {}) {
    tabs.forEach(tab => {
      const on = tab.dataset.tab === name;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });

    panels.forEach(panel => {
      const on = panel.id === `projects-panel-${name}`;
      panel.hidden = !on;
      if (!on) return;

      // Replay the entrance animation
      panel.classList.remove('is-entering');
      void panel.offsetWidth;
      panel.classList.add('is-entering');

      // Cards inside a previously hidden panel were never intersecting – reveal them now
      $$('.project-card', panel).forEach(card => card.classList.add('is-visible'));
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.tab));

    // Arrow-key navigation (RTL aware)
    tab.addEventListener('keydown', e => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      e.preventDefault();

      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      let next = index;
      if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      else {
        const step = (e.key === 'ArrowRight') === !isRtl ? 1 : -1;
        next = (index + step + tabs.length) % tabs.length;
      }
      activate(tabs[next].dataset.tab, { focus: true });
    });
  });
}

// ============================================================
// 12b. IN-CARD SLIDERS (FOR INTERIOR & WOOD PROJECTS)
// ============================================================
function initCardSliders() {
  const cards = $$('.project-card[data-has-slider="true"]');
  if (!cards.length) return;

  cards.forEach(card => {
    const projectKey = card.getAttribute('data-project');
    const images = (projectData[projectKey] && projectData[projectKey].images) ||
                   (window.newProjectsImages && window.newProjectsImages[projectKey]) || [];
    if (!images || images.length <= 1) return;

    let currentIndex = 0;
    let loadToken = 0;
    card.setAttribute('data-current-slide', '0');

    const imgEl = card.querySelector('.card-slider-img');
    const counterEl = card.querySelector('.card-slider-counter');
    const prevBtn = card.querySelector('.card-slider-prev');
    const nextBtn = card.querySelector('.card-slider-next');

    function updateSlide(newIndex) {
      currentIndex = (newIndex + images.length) % images.length;
      card.setAttribute('data-current-slide', String(currentIndex));

      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
      }

      if (imgEl) {
        const currentToken = ++loadToken;
        const targetSrc = images[currentIndex];

        if (imgEl.getAttribute('src') === targetSrc) {
          imgEl.style.opacity = '1';
          return;
        }

        imgEl.style.opacity = '0.4';
        const preloader = new Image();
        preloader.decoding = 'async';
        preloader.onload = () => {
          if (currentToken !== loadToken) return;
          imgEl.src = targetSrc;
          imgEl.style.opacity = '1';
        };
        preloader.onerror = () => {
          if (currentToken !== loadToken) return;
          imgEl.src = targetSrc;
          imgEl.style.opacity = '1';
        };
        preloader.src = targetSrc;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        updateSlide(currentIndex + 1);
      });
    }

    // Touch swipe support on card thumbnail
    let touchStartX = 0;
    let touchStartY = 0;
    const mediaEl = card.querySelector('.card-media-slider');
    if (mediaEl) {
      mediaEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      mediaEl.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
          e.stopPropagation();
          // Swipe left advances (+1), swipe right goes back (-1)
          if (diffX < 0) {
            updateSlide(currentIndex + 1);
          } else {
            updateSlide(currentIndex - 1);
          }
        }
      }, { passive: true });
    }
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

  // Projects tabs
  initProjectTabs();

  // In-card sliders for wood projects
  initCardSliders();

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
