/* =========================================================
   new-projects-data.js – Complete image galleries for the
   "Furnishing & Interior Works" projects tab.
   Source images live in the "New Projects" folder.
   Includes ALL images from all folders and subfolders.
   The FIRST image of every list is the card cover.
   ========================================================= */
(function () {
  'use strict';

  const BASE = 'New Projects/';

  // Picture{from}..Picture{to}.jpg
  const range = (from, to, ext = 'jpg') =>
    Array.from({ length: to - from + 1 }, (_, i) => `Picture${from + i}.${ext}`);

  // Build plain URL paths from a sub-path + a list of file names
  const files = (path, list) =>
    list.map(name => `${BASE}${path}/${name}`);

  const without = (list, ...skip) => list.filter(n => !skip.includes(n));

  // 1. ---- Hassan Mostafa Indoor Hall (41 images across 7 subfolders) ----
  const HM = 'صالة حسن مصطفى المغطاة';
  const hassanMostafa = [
    // صالة الاستقبال reception hall (13 images)
    ...files(`${HM}/صالة الاستقبال reception hall`, ['Picture20.jpg', ...without(range(9, 21), 'Picture20.jpg')]),
    // صالة استقبال كبار الزوار VIP Reception Lounge (3 images)
    ...files(`${HM}/صالة استقبال  كبار الزوار VIP Reception Lounge`, range(6, 8)),
    // مكتب رئيس الاتحاد الدولي لكرة اليد (11 images)
    ...files(`${HM}/مكتب رئيس الاتحاد الدولي لكرة اليد`, [
      'Picture1.jpg', 'Picture3.jpg', 'Picture4.jpg', 'Picture5.jpg', ...range(12, 18)
    ]),
    // قاعة الاجتماعات metting room (3 images)
    ...files(`${HM}/قاعة الاجتماعات metting room`, range(26, 28)),
    // waiting room قاعة الانتظار (4 images)
    ...files(`${HM}/waiting room قاعة الانتظار`, range(22, 25)),
    // press conference hall قاعة المؤتمرات الصحفية (3 images)
    ...files(`${HM}/press conference hall قاعة المؤتمرات الصحفية`, range(33, 35)),
    // قاعة الاعداد والارسال للصحفيين press preparation and dispatch hall (4 images)
    ...files(`${HM}/قاعة الاعداد والارسال للصحفيين press preparation and dispatch hall`, range(29, 32)),
  ];

  // 2. ---- Administrative Capital Indoor Hall (11 images across 4 subfolders) ----
  const CH = 'مشروع صالة العاصمة الإدراية المغطاة بالمدينة الرياضية';
  const capitalHall = [
    // VIP Lounge صالة انتظار كبار الزوار (3 images)
    ...files(`${CH}/VIP Loungeصالة انتظار كبار الزوار`, ['Picture41.jpg', 'Picture42.jpg', 'Picture43.jpg']),
    // مكتب السيد وزير الشباب و الرياضة (3 images)
    ...files(`${CH}/مكتب السيد وزير الشباب و الرياضة Office of the Minister of Youth and Sports`, range(36, 38)),
    // صالة اجتماعات اعلامية media services hall (2 images)
    ...files(`${CH}/صالة اجتماعات اعلامية media services hall`, range(39, 40)),
    // غرفة ورك ستيشن الخدمات الإعلامية (3 images)
    ...files(`${CH}/غرفة ورك ستيشن الخدمات الإعلامية Media Services Workstation Room`, range(44, 46)),
  ];

  // 3. ---- Cairo Stadium Halls Complex (17 images across root + 3 subfolders) ----
  const CS = 'مشرةع مجمع صالات استاد القاهرة';
  const cairoStadium = [
    // Root files (9 images)
    ...files(CS, [
      'Picture90.jpg', 'Picture80.jpg', 'Picture81.jpg', 'Picture82.jpg', 'Picture83.jpg',
      'Picture84.jpg', 'Picture85.jpg', 'Picture88.jpg', 'Picture89.jpg'
    ]),
    // قاعة مؤتمرات الصحفية press conference hall (3 images)
    ...files(`${CS}/قاعة مؤتمؤات الصحفية press conference hall`, range(77, 79)),
    // غرفة انتظار كبار الزوار VIP Lounge (2 images)
    ...files(`${CS}/غرفة انتظار كبار الزوار VIP Lounge`, range(86, 87)),
    // اعمال تجليد الحوائط بالفنيل المعالج (3 images)
    ...files(`${CS}/اعمال تجليد الحوائط بالفنيل المعالج`, range(91, 93)),
  ];

  // 4. ---- African Space Agency (16 images) ----
  const SP = 'وكالة الفضاء الافريقية - العاصمة الادارية الجديدة';
  const spaceAgency = files(SP, ['Picture71.jpg', ...without(range(61, 76), 'Picture71.jpg')]);

  // 5. ---- 151st Brigade Command (19 images) ----
  const BR = 'مشروع قيادة اللواء 151 اشغال عسكرية - بقطاع بني يوسف';
  const brigade151 = files(BR, [
    'Picture44.jpg',
    ...without(range(42, 60), 'Picture44.jpg', 'Picture50.jpg'),
    'Picture50.png', // Note: Picture50 in this directory is PNG
  ]);

  // 6. ---- Konouz Marble Exhibition (22 images) ----
  const KO = 'مشروع معرض كنوز للرخام - بشق الثعبان konouz marble exhibition project';
  const konouz = files(KO, ['Picture28.jpg', ...without(range(20, 41), 'Picture28.jpg')]);

  // 7. ---- Engineering Authority Clinics (11 images) ----
  const CL = 'مشروع عيادات دار الهيئة الهندسية - القاهرة';
  const clinics = files(CL, ['Picture12.jpg', ...without(range(9, 19), 'Picture12.jpg')]);

  // 8. ---- Licensing & Follow-up Department (5 images) ----
  const LI = 'مشروع ادارة التراخيص والمتابعة - القاهرة';
  const licensing = files(LI, range(4, 8));

  // 9 & 10. ---- Islamic Heritage Revival: Al-Hussein & Sayida Zeinab Mosques ----
  const HE = 'مشروعات احياء التراث الإسلامي القاهرة التاريخية Projects for Reviving Islamic Heritage in Historic Cairo';
  const hussein = files(`${HE}/مشروع مسجد الحسين - القاهرة al - hussien project - cairo`, [
    'Picture82.jpg', 'Picture83.jpg', 'Picture1.jpg', 'Picture2.jpg', 'Picture3.jpg'
  ]);
  const zeinab = files(`${HE}/مشروع السيدة زينب - القاهرة sayida zeinab mosque project - cairo`, [
    'Picture79.jpg', 'Picture78.jpg', 'Picture80.jpg', 'Picture81.jpg'
  ]);
  const heritageAll = [...hussein, ...zeinab];

  // 11. ---- Various Projects (13 images) ----
  const various = files('مشروعات متنوعة', ['Picture50.jpg', ...without(range(47, 59), 'Picture50.jpg')]);

  // 12. ---- Technical Office – 3D designs (18 images) ----
  const TO = 'اعمال المكتب الفني من تصميمات ثلاثية الابعاد technical office works for 3d designs';
  const technicalOffice = files(TO, ['Picture65.jpg', ...without(range(60, 77), 'Picture65.jpg')]);

  window.newProjectsImages = {
    'hassan-mostafa': hassanMostafa,
    'capital-hall': capitalHall,
    'cairo-stadium': cairoStadium,
    'space-agency': spaceAgency,
    'brigade-151': brigade151,
    'konouz': konouz,
    'clinics': clinics,
    'licensing': licensing,
    'hussein-mosque': hussein,
    'zeinab-mosque': zeinab,
    'heritage': heritageAll,
    'various': various,
    'technical-office': technicalOffice,
  };
})();
