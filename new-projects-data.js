/* =========================================================
   new-projects-data.js – Complete image galleries for the
   "Furnishing & Interior Works" projects tab.
   Source images live in the "Elkayan-New-project" folder.
   Includes ALL 16 projects from the folder.
   The FIRST image of every list is the card cover.
   (deleted images removed; zip archives, videos and "- Copy" duplicates skipped)
   ========================================================= */
(function () {
  'use strict';

  const BASE = 'Elkayan-New-project/';

  // Build plain URL paths from a folder + a list of file names
  const files = (folder, list) => list.map(name => `${BASE}${folder}/${name}`);

  // 1B6A####.jpg
  const canon = nums => nums.map(n => `1B6A${n}.jpg`);
  // DSC_####.JPG
  const dsc = nums => nums.map(n => `DSC_${n}.JPG`);
  // WhatsApp Image <stamp><suffix>.jpeg   (suffix: '' or 1..n  → " (n)")
  const wa = (stamp, ...sfx) =>
    sfx.map(s => `WhatsApp Image ${stamp}${s === '' ? '' : ` (${s})`}.jpeg`);
  // wa with a range of suffixes: '' then 1..n
  const waN = (stamp, n) => wa(stamp, '', ...Array.from({ length: n }, (_, i) => i + 1));

  // 1. ---- Hassan Mostafa Halls Complex – 6th of October (13) ----
  const hassanMostafa = files('مجمع صالات حسن مصطفى مدينه 6 اكتوبر', canon([
    4254, 4269, 4274, 4276, 4291, 4298, 4302, 4341, 4351, 4359, 4363, 4380, 4396
  ]));

  // 2. ---- Administrative Capital Sports City (31) ----
  const capitalHall = files('المدينه الرياضيه العاصمه الادرايه', canon([
    3782, 3435, 3460, 3478, 3489, 3499, 3517, 3537, 3541, 3565, 3566, 3567, 3575,
    3583, 3584, 3588, 3616, 3626, 3627, 3642, 3676, 3681, 3691, 3724, 3753, 3763,
    3797, 3809, 3810, 3815, 3856
  ]));

  // 3. ---- Cairo Stadium Halls Complex (11) ----
  const cairoStadium = files('مجمع صالات باستاد القاهره', canon([
    3381, 3240, 3251, 3255, 3258, 3311, 3351, 3360, 3376, 3393, 3416
  ]));

  // 4. ---- African Space Agency (56) ----
  const spaceAgency = files('وكاله الفضاء الافريقيه العاصمه الادرايه', [
    ...wa('2022-10-18 at 8.14.41 AM', '', 1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15),
    ...wa('2022-10-18 at 8.15.21 AM', '', 1, 2),
    ...wa('2022-10-18 at 8.15.22 AM', '', 2, 4, 6, 7),
    ...wa('2024-09-08 at 6.29.40 PM', '', 2, 3),
    ...wa('2025-04-29 at 2.30.26 PM', ''),
    ...wa('2025-04-29 at 2.40.47 PM', ''),
    ...wa('2025-04-29 at 2.40.48 PM', ''),
    ...wa('2025-04-29 at 2.43.09 PM', ''),
    ...wa('2025-04-29 at 2.43.11 PM', ''),
    ...wa('2025-04-29 at 2.44.07 PM', ''),
    ...wa('2025-04-29 at 2.44.08 PM', 1),
    ...wa('2025-04-29 at 2.44.11 PM', '', 1),
    ...wa('2025-04-29 at 2.44.12 PM', '', 1),
    ...wa('2025-04-29 at 2.44.13 PM', ''),
    ...wa('2025-04-29 at 2.44.14 PM', ''),
    ...wa('2025-04-29 at 2.44.15 PM', '', 1),
    ...wa('2025-04-29 at 2.44.17 PM', ''),
    ...wa('2025-04-29 at 2.44.18 PM', ''),
    ...wa('2025-04-29 at 2.44.21 PM', '', 1),
    ...wa('2025-04-29 at 2.44.22 PM', ''),
    ...wa('2025-04-29 at 2.44.23 PM', ''),
    ...wa('2025-04-29 at 2.44.25 PM', ''),
    ...wa('2025-04-29 at 2.44.26 PM', ''),
    ...wa('2025-04-29 at 2.44.27 PM', '', 1),
    ...wa('2026-10-18 at 5.21.05 PM', 1),
    ...wa('2026-10-18 at 5.21.06 PM', '', 1, 2),
    ...wa('2026-10-18 at 5.21.07 PM', '', 1, 3),
  ]);

  // 5. ---- 152nd Brigade Command – Beni Youssef (35) ----
  const brigade152 = files('مبنى قيادة اللواء 152 اشغال عسكريه بقطاع بنى يوسف', dsc([
    7552, 7554, 7562, 7566, 7567, 7571, 7573, 7574, 7576, 7578, 7585, 7586, 7588,
    7595, 7600, 7603, 7606, 7611, 7620, 7621, 7623, 7624, 7633, 7640, 7643, 7646,
    7651, 7656, 7661, 7668, 7693, 7700, 7707, 7711, 7763
  ]));

  // 6. ---- Konouz Marble Exhibition (7) ----
  const konouz = files('معرض كنوز للرخام بشق الثعبان', dsc([4966, 4976, 4991, 4995, 5017, 5036, 5111]));

  // 7. ---- Engineering Authority Clinics (8) ----
  const clinics = files('فرش عيادات دار الهيئه الهندسيه', dsc([4288, 4290, 4294, 4319, 4324, 4325, 4348, 4364]));

  // 8. ---- Cairo Airport Air Services Building (36) ----
  const AS = 'فرش مبنى الخدمات الجويه بمطار القاهره';
  const airServices = [
    ...files(AS, ['2.jpg', '3.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']),
    ...files(AS, wa('2026-10-18 at 5.29.26 PM', 1, 2)),
    ...files(`${AS}/WhatsApp Unknown 2026-10-18 at 4.55.21 PM`, [
      ...wa('2026-10-18 at 4.54.59 PM', 2, 4),
      ...waN('2026-10-18 at 4.55.00 PM', 5),
      ...wa('2026-10-18 at 4.55.01 PM', 2, 4, 5, 6, 7, 8),
      ...waN('2026-10-18 at 4.55.02 PM', 3),
    ]),
    ...files(`${AS}/WhatsApp Unknown 2026-10-18 at 5.31.55 PM`, [
      ...wa('2026-10-18 at 5.30.31 PM', '', 1),
      ...waN('2026-10-18 at 5.30.32 PM', 5),
      ...wa('2026-10-18 at 5.30.33 PM', '', 1),
    ]),
  ];

  // 9. ---- Al-Hussein Mosque – VIP Hall (25) ----
  const hussein = files('قاعه كبار الزوار بمسجد الحسين', [
    ...wa('2024-08-06 at 6.22.25 PM', '', 2, 4),
    ...wa('2024-08-06 at 6.22.26 PM', '', 1, 3, 5),
    ...wa('2024-08-06 at 6.22.27 PM', '', 1, 2, 4, 5, 6),
    ...wa('2024-08-06 at 6.22.28 PM', '', 1, 3, 5, 6, 7),
    ...wa('2024-08-06 at 6.22.29 PM', '', 1, 2, 4, 5),
    ...wa('2024-08-06 at 6.22.30 PM', 1),
  ]);

  // 10. ---- Sayida Zeinab Mosque – VIP Hall (13) ----
  const zeinab = files('قاعه كبار الزوار بمسجد السيدة زينب', [
    ...wa('2024-08-06 at 7.17.17 PM', '', 1, 2),
    ...waN('2024-08-06 at 7.17.18 PM', 6),
    ...wa('2024-08-06 at 7.17.19 PM', '', 1, 2),
  ]);

  // 11. ---- Sayida Nafisa Mosque – VIP Hall (12) ----
  const nafisa = files('قاعه كبار الزوار بمسجد السيده نفيسه', [
    ...wa('2025-07-05 at 2.18.20 PM', ''),
    ...wa('2025-07-05 at 2.18.21 PM', ''),
    ...wa('2025-07-05 at 2.18.23 PM', '', 1),
    ...wa('2025-07-05 at 2.18.24 PM', '', 1),
    ...wa('2025-07-05 at 2.18.26 PM', ''),
    ...wa('2025-07-05 at 2.18.27 PM', ''),
    ...wa('2025-07-05 at 2.18.56 PM', '', 1),
    ...wa('2025-07-05 at 2.18.58 PM', 1),
    ...wa('2025-07-05 at 2.18.59 PM', 1),
  ]);

  // 12. ---- Mazareen Chalets – New Alamein (36) ----
  const MZ = 'ابواب و فرش شاليهات مزارين بالعلمين الجديدة';
  const mzPage = n => `MAZAREENVILLAS & CHALETS 0.6 (3)_page-${String(n).padStart(4, '0')}.jpg`;
  const mazareen = [
    ...files(`${MZ}/نموذج E`, wa('2025-06-14 at 11.25.32 AM', '', 1)),
    ...files(`${MZ}/نموذج E`, wa('2025-06-14 at 11.25.33 AM', '', 1)),
    ...files(`${MZ}/نموذج D`, [71, 73, 75, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100].map(mzPage)),
    ...files(`${MZ}/نموذج E`, [101, 102, 103, 105, 106, 107, 109, 110, 111].map(mzPage)),
  ];

  // 13. ---- Marina Yacht Marina Doors – North Coast (8) ----
  const marinaYacht = files('ابواب مارينا مرسى اليخوت بالساحل الشمالى', [
    ...wa('2026-10-19 at 11.08.52 AM', '', 1, 2, 3),
    ...wa('2026-10-19 at 11.08.53 AM', '', 1, 2, 3),
  ]);

  // 14. ---- Sakan Ahl Misr Doors – New Salam City (3) ----
  const sakanSalam = files('ابواب مشروع سكن أهل مصر مدينه السلام الجديدة', [
    'WhatsApp Image 2026-10-18 at 5.37.27 PM.jpeg',
    'WhatsApp Image 2026-10-19 at 11.20.33 AM.jpeg',
    'WhatsApp Image 2026-10-19 at 11.20.33 AM (1).jpeg',
  ]);

  // 15. ---- Gardenia Buildings Doors – Nasr City (4) ----
  const gardeniaDoors = files('ابواب مشروع عمارات جاردنيا مدينه نصر', [
    'images.jpeg',
    '489926891_692494110048629_7035122058112811295_n.jpg',
    '492501706_692494073381966_8489929851199786071_n.jpg',
    'images (1).jpeg',
  ]);

  // 16. ---- Mayan Project Doors – Near Al-Rehab (5) ----
  const mayanDoors = files('ابواب مشروع مايان بجوار الرحاب', [
    'WhatsApp Image 2026-10-18 at 5.30.10 PM.jpeg',
    'WhatsApp Image 2026-10-18 at 5.29.36 PM.jpeg',
    'WhatsApp Image 2026-10-18 at 5.29.36 PM (1).jpeg',
    'WhatsApp Image 2026-10-18 at 5.29.36 PM (2).jpeg',
    'WhatsApp Image 2026-10-18 at 5.29.36 PM (3).jpeg',
  ]);

  window.newProjectsImages = {
    'hassan-mostafa': hassanMostafa,
    'capital-hall': capitalHall,
    'cairo-stadium': cairoStadium,
    'space-agency': spaceAgency,
    'brigade-152': brigade152,
    'konouz': konouz,
    'clinics': clinics,
    'air-services': airServices,
    'hussein-mosque': hussein,
    'zeinab-mosque': zeinab,
    'nafisa-mosque': nafisa,
    'mazareen': mazareen,
    'marina-yacht': marinaYacht,
    'sakan-salam': sakanSalam,
    'gardenia-doors': gardeniaDoors,
    'mayan-doors': mayanDoors,
  };
})();
