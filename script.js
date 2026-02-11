const rtlLanguages = ["ar", "he", "fa", "ur"];
const languageSelect = document.getElementById("language-select");

const translations = {
  en: {
    logo_alt: "Intel corporate logo",
    hero_title: "Sustainability Through the Ages",
    hero_desc:
      "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    language_label: "Site language",
    language_help: "Changing the language updates text direction.",
    language_en: "English (LTR)",
    language_ar: "Arabic (RTL)",
    language_he: "Hebrew (RTL)",
    language_fa: "Persian (RTL)",
    language_ur: "Urdu (RTL)",
    timeline_1968_title: "Intel Founded",
    timeline_1968_desc:
      "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
    timeline_1971_title: "First Microprocessor",
    timeline_1971_desc:
      "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
    timeline_1978_title: "8086 Processor",
    timeline_1978_desc:
      "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
    timeline_1985_title: "386 Processor",
    timeline_1985_desc:
      "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
    timeline_2006_title: "Peak GHG Emissions",
    timeline_2006_desc:
      "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
    timeline_2020_title: "RISE Strategy",
    timeline_2020_desc:
      "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
    timeline_2022_title: "Net-Zero By 2040",
    timeline_2022_desc:
      "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
    timeline_2023_title: "Renewable Electricity",
    timeline_2023_desc:
      "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
    timeline_2024_title: "Sustainability Summit",
    timeline_2024_desc:
      "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.",
    timeline_hint: "Scroll to view timeline | Hover over cards to learn more!",
    impact_title: "Sustainability Focus Areas",
    impact_desc: "Three ways Intel is building a more responsible future.",
    impact_modal_trigger: "Why it matters",
    impact_card1_title: "Climate Action",
    impact_card1_desc:
      "Cutting emissions through clean energy, smart manufacturing, and long-term net-zero commitments.",
    impact_card2_title: "Water Stewardship",
    impact_card2_desc:
      "Restoring water to local communities and reducing usage across every site and process.",
    impact_card3_title: "Circular Innovation",
    impact_card3_desc:
      "Designing products and operations to reduce waste and keep materials in use longer.",
    learn_more: "Learn More",
    subscribe_title: "Subscribe to the Sustainability Newsletter",
    subscribe_desc: "Get monthly updates on Intel's sustainability progress.",
    form_name: "Full name",
    form_email: "Email address",
    form_consent: "I agree to receive email updates from Intel.",
    form_submit: "Subscribe",
    form_privacy: "We respect your privacy. Unsubscribe anytime.",
    footer_copy: "© 2026 Intel Corporation. All rights reserved.",
    modal_title: "Why these areas matter",
    modal_body:
      "Intel invests in climate action, water stewardship, and circular innovation to reduce environmental impact while supporting global communities and responsible technology.",
    modal_close: "Close",
    modal_cta: "Subscribe for updates"
  },
  ar: {
    logo_alt: "شعار شركة إنتل",
    hero_title: "الاستدامة عبر العصور",
    hero_desc:
      "استكشف رحلة إنتل عبر الزمن وكيف شكّل التزامنا بالابتكار مستقبلًا أكثر استدامة للتقنية وكوكبنا.",
    language_label: "لغة الموقع",
    language_help: "تغيير اللغة يحدّث اتجاه النص.",
    language_en: "الإنجليزية (يسار إلى يمين)",
    language_ar: "العربية (يمين إلى يسار)",
    language_he: "العبرية (يمين إلى يسار)",
    language_fa: "الفارسية (يمين إلى يسار)",
    language_ur: "الأردية (يمين إلى يسار)",
    timeline_1968_title: "تأسيس إنتل",
    timeline_1968_desc:
      "روبرت نويس وغوردون مور يعيدان تسمية الشركة الناشئة NM Electronics إلى Intel Corporation، مؤسسين لعقود من الابتكار التقني.",
    timeline_1971_title: "أول معالج دقيق",
    timeline_1971_desc:
      "تكشف إنتل عن 4004، أول معالج دقيق تجاري في العالم، ما أشعل ثورة المعالجات الدقيقة ودفع مستقبل الحوسبة.",
    timeline_1978_title: "معالج 8086",
    timeline_1978_desc:
      "إطلاق معالج 8086 الذي أسس معمارية x86 التي تقود عددًا لا يحصى من الحواسيب والخوادم الحديثة.",
    timeline_1985_title: "معالج 386",
    timeline_1985_desc:
      "تقدم إنتل معالج 386 ببنية 32-بت، فاتحةً عصرًا جديدًا من الأداء وتعدد المهام للحواسيب الشخصية.",
    timeline_2006_title: "ذروة انبعاثات الغازات الدفيئة",
    timeline_2006_desc:
      "شهد هذا العام أعلى انبعاثات غازات دفيئة لعمليات إنتل. وبعد ذلك استثمرت الشركة في المعالجة الكيميائية والطاقة المتجددة وكفاءة التصنيع لعكس هذا الاتجاه.",
    timeline_2020_title: "استراتيجية RISE",
    timeline_2020_desc:
      "تطلق إنتل استراتيجية RISE (مسؤول، شامل، مستدام، ممكّن) وأهداف 2030 لدفع التقدم في العمل المناخي وإدارة المياه وتقليل النفايات.",
    timeline_2022_title: "صافي انبعاثات صفري بحلول 2040",
    timeline_2022_desc:
      "تعلن إنتل التزامها بتحقيق صافي انبعاثات صفري (النطاقان 1 و2) عبر عملياتها العالمية بحلول 2040.",
    timeline_2023_title: "كهرباء متجددة",
    timeline_2023_desc:
      "تحقق الشركة 99% من استخدام الكهرباء المتجددة عالميًا، مما يخفض الانبعاثات ويدعم أهداف الاستدامة طويلة المدى.",
    timeline_2024_title: "قمة الاستدامة",
    timeline_2024_desc:
      "تستضيف إنتل أول قمة للاستدامة، جامعةً الموردين والمسؤولين الحكوميين وقادة الصناعة للتعاون في التصنيع المستدام للشرائح.",
    timeline_hint: "مرر لعرض الجدول الزمني | مرّر المؤشر على البطاقات لمعرفة المزيد!",
    impact_title: "محاور التركيز في الاستدامة",
    impact_desc: "ثلاث طرق تبني بها إنتل مستقبلًا أكثر مسؤولية.",
    impact_modal_trigger: "لماذا يهم هذا",
    impact_card1_title: "العمل المناخي",
    impact_card1_desc:
      "خفض الانبعاثات عبر الطاقة النظيفة والتصنيع الذكي والالتزامات طويلة المدى بصافي صفري.",
    impact_card2_title: "إدارة المياه",
    impact_card2_desc:
      "إعادة المياه للمجتمعات المحلية وتقليل الاستخدام في كل موقع وعملية.",
    impact_card3_title: "الابتكار الدائري",
    impact_card3_desc:
      "تصميم المنتجات والعمليات لتقليل النفايات والحفاظ على المواد قيد الاستخدام لفترة أطول.",
    learn_more: "اعرف المزيد",
    subscribe_title: "اشترك في نشرة الاستدامة",
    subscribe_desc: "احصل على تحديثات شهرية حول تقدم الاستدامة لدى إنتل.",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_consent: "أوافق على تلقي تحديثات عبر البريد الإلكتروني من إنتل.",
    form_submit: "اشتراك",
    form_privacy: "نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",
    footer_copy: "© 2026 شركة إنتل. جميع الحقوق محفوظة.",
    modal_title: "لماذا تهم هذه المحاور",
    modal_body:
      "تستثمر إنتل في العمل المناخي وإدارة المياه والابتكار الدائري لتقليل الأثر البيئي ودعم المجتمعات العالمية والتقنية المسؤولة.",
    modal_close: "إغلاق",
    modal_cta: "اشترك للحصول على التحديثات"
  },
  he: {
    logo_alt: "לוגו אינטל",
    hero_title: "קיימות לאורך השנים",
    hero_desc:
      "גלו את המסע של אינטל בזמן וכיצד המחויבות לחדשנות יצרה עתיד בר-קיימא יותר לטכנולוגיה ולכדור הארץ.",
    language_label: "שפת האתר",
    language_help: "שינוי השפה מעדכן את כיוון הטקסט.",
    language_en: "אנגלית (משמאל לימין)",
    language_ar: "ערבית (מימין לשמאל)",
    language_he: "עברית (מימין לשמאל)",
    language_fa: "פרסית (מימין לשמאל)",
    language_ur: "אורדו (מימין לשמאל)",
    timeline_1968_title: "אינטל נוסדה",
    timeline_1968_desc:
      "רוברט נויס וגורדון מור משנים את שם החברה החדשה NM Electronics ל-Intel Corporation ומניחים בסיס לעשורים של חדשנות טכנולוגית.",
    timeline_1971_title: "המיקרו-מעבד הראשון",
    timeline_1971_desc:
      "אינטל מציגה את 4004, המיקרו-מעבד המסחרי הראשון בעולם, ומניעה את מהפכת המעבדים והעתיד של המחשוב.",
    timeline_1978_title: "מעבד 8086",
    timeline_1978_desc:
      "השקת מעבד 8086 שהקים את ארכיטקטורת x86 שמניעה אינספור מחשבים ושרתים מודרניים.",
    timeline_1985_title: "מעבד 386",
    timeline_1985_desc:
      "אינטל מציגה את מעבד 386 עם ארכיטקטורת 32 ביט ומבשרת עידן חדש של ביצועים וריבוי משימות במחשבים אישיים.",
    timeline_2006_title: "שיא פליטות גזי חממה",
    timeline_2006_desc:
      "שנה זו מסמנת את פליטות גזי החממה השנתיות הגבוהות ביותר של אינטל. לאחר מכן החברה השקיעה בהפחתה כימית, אנרגיה מתחדשת וייצור יעיל אנרגטית.",
    timeline_2020_title: "אסטרטגיית RISE",
    timeline_2020_desc:
      "אינטל משיקה את אסטרטגיית RISE ואת יעדי 2030 לקידום פעולה אקלימית, ניהול מים והפחתת פסולת.",
    timeline_2022_title: "אפס פליטות נטו עד 2040",
    timeline_2022_desc:
      "אינטל מכריזה על התחייבות להגיע לאפס פליטות נטו (תחומים 1 ו-2) בפעילותה הגלובלית עד 2040.",
    timeline_2023_title: "חשמל מתחדש",
    timeline_2023_desc:
      "החברה מגיעה ל-99% שימוש בחשמל מתחדש בעולם ומפחיתה משמעותית פליטות תוך קידום יעדי הקיימות.",
    timeline_2024_title: "פסגת הקיימות",
    timeline_2024_desc:
      "אינטל מארחת את פסגת הקיימות הראשונה שלה ומאחדת ספקים, גורמי ממשל ומנהיגי תעשייה לייצור שבבים בר-קיימא.",
    timeline_hint: "גללו לצפייה בציר הזמן | עברו עם העכבר על הכרטיסים כדי ללמוד עוד!",
    impact_title: "תחומי מיקוד בקיימות",
    impact_desc: "שלוש דרכים שבהן אינטל בונה עתיד אחראי יותר.",
    impact_modal_trigger: "למה זה חשוב",
    impact_card1_title: "פעולה אקלימית",
    impact_card1_desc:
      "הפחתת פליטות באמצעות אנרגיה נקייה, ייצור חכם והתחייבויות ארוכות טווח לאפס נטו.",
    impact_card2_title: "ניהול מים",
    impact_card2_desc:
      "החזרת מים לקהילות מקומיות והפחתת צריכה בכל אתר ותהליך.",
    impact_card3_title: "חדשנות מעגלית",
    impact_card3_desc:
      "תכנון מוצרים ותהליכים להפחתת פסולת ושמירה על חומרים בשימוש זמן רב יותר.",
    learn_more: "למידע נוסף",
    subscribe_title: "הירשמו לניוזלטר הקיימות",
    subscribe_desc: "קבלו עדכונים חודשיים על התקדמות הקיימות של אינטל.",
    form_name: "שם מלא",
    form_email: "כתובת דוא\"ל",
    form_consent: "אני מסכים/ה לקבל עדכונים באימייל מאינטל.",
    form_submit: "הירשם",
    form_privacy: "אנו מכבדים את פרטיותך. ניתן לבטל בכל עת.",
    footer_copy: "© 2026 אינטל. כל הזכויות שמורות.",
    modal_title: "למה התחומים האלה חשובים",
    modal_body:
      "אינטל משקיעה בפעולה אקלימית, ניהול מים וחדשנות מעגלית כדי להפחית השפעה סביבתית ולתמוך בקהילות ובטכנולוגיה אחראית.",
    modal_close: "סגור",
    modal_cta: "הירשמו לעדכונים"
  },
  fa: {
    logo_alt: "لوگوی اینتل",
    hero_title: "پایداری در گذر زمان",
    hero_desc:
      "سفر اینتل در طول زمان را ببینید و اینکه چگونه تعهد به نوآوری آینده ای پایدارتر برای فناوری و سیاره ما ساخته است.",
    language_label: "زبان سایت",
    language_help: "تغییر زبان، جهت متن را به روز می کند.",
    language_en: "انگلیسی (چپ به راست)",
    language_ar: "عربی (راست به چپ)",
    language_he: "عبری (راست به چپ)",
    language_fa: "فارسی (راست به چپ)",
    language_ur: "اردو (راست به چپ)",
    timeline_1968_title: "تاسیس اینتل",
    timeline_1968_desc:
      "رابرت نویس و گوردون مور نام شرکت تازه تاسیس NM Electronics را به Intel Corporation تغییر دادند و پایه های دهه ها نوآوری را گذاشتند.",
    timeline_1971_title: "اولین ریزپردازنده",
    timeline_1971_desc:
      "اینتل 4004 را معرفی کرد، اولین ریزپردازنده تجاری جهان که انقلاب ریزپردازنده ها را آغاز کرد.",
    timeline_1978_title: "پردازنده 8086",
    timeline_1978_desc:
      "معرفی پردازنده 8086 که معماری x86 را بنیان گذاشت و بسیاری از رایانه های امروزی را قدرت می دهد.",
    timeline_1985_title: "پردازنده 386",
    timeline_1985_desc:
      "اینتل پردازنده 386 را با معماری 32 بیتی معرفی کرد و عصر جدیدی از کارایی را رقم زد.",
    timeline_2006_title: "اوج انتشار گازهای گلخانه ای",
    timeline_2006_desc:
      "این سال بالاترین انتشار سالانه گازهای گلخانه ای اینتل را نشان می دهد. پس از آن سرمایه گذاری در کاهش شیمیایی و انرژی تجدیدپذیر انجام شد.",
    timeline_2020_title: "راهبرد RISE",
    timeline_2020_desc:
      "اینتل راهبرد RISE و اهداف 2030 را برای پیشبرد اقدام اقلیمی و مدیریت آب معرفی کرد.",
    timeline_2022_title: "صفر خالص تا 2040",
    timeline_2022_desc:
      "اینتل متعهد شد تا سال 2040 به صفر خالص انتشار (حوزه های 1 و 2) در عملیات جهانی برسد.",
    timeline_2023_title: "برق تجدیدپذیر",
    timeline_2023_desc:
      "شرکت به 99 درصد استفاده از برق تجدیدپذیر در جهان دست یافت و انتشار کربن را کاهش داد.",
    timeline_2024_title: "اجلاس پایداری",
    timeline_2024_desc:
      "اینتل نخستین اجلاس پایداری خود را برگزار کرد و رهبران صنعت را برای تولید پایدار گرد هم آورد.",
    timeline_hint: "برای دیدن تایم لاین پیمایش کنید | برای اطلاعات بیشتر روی کارت ها بروید!",
    impact_title: "محورهای تمرکز پایداری",
    impact_desc: "سه راهی که اینتل آینده ای مسئولانه تر می سازد.",
    impact_modal_trigger: "چرا مهم است",
    impact_card1_title: "اقدام اقلیمی",
    impact_card1_desc:
      "کاهش انتشار با انرژی پاک، تولید هوشمند و تعهدات بلندمدت صفر خالص.",
    impact_card2_title: "مدیریت آب",
    impact_card2_desc:
      "بازگرداندن آب به جوامع محلی و کاهش مصرف در همه سایت ها و فرایندها.",
    impact_card3_title: "نوآوری چرخه ای",
    impact_card3_desc:
      "طراحی محصولات و عملیات برای کاهش پسماند و استفاده طولانی تر از مواد.",
    learn_more: "بیشتر بدانید",
    subscribe_title: "اشتراک در خبرنامه پایداری",
    subscribe_desc: "به روزرسانی های ماهانه درباره پیشرفت پایداری اینتل را دریافت کنید.",
    form_name: "نام کامل",
    form_email: "نشانی ایمیل",
    form_consent: "با دریافت به روزرسانی های ایمیلی از اینتل موافقم.",
    form_submit: "اشتراک",
    form_privacy: "به حریم خصوصی شما احترام می گذاریم. در هر زمان لغو کنید.",
    footer_copy: "© 2026 اینتل. همه حقوق محفوظ است.",
    modal_title: "چرا این حوزه ها مهم هستند",
    modal_body:
      "اینتل در اقدام اقلیمی، مدیریت آب و نوآوری چرخه ای سرمایه گذاری می کند تا اثرات زیست محیطی را کاهش دهد.",
    modal_close: "بستن",
    modal_cta: "برای به روزرسانی ها مشترک شوید"
  },
  ur: {
    logo_alt: "انٹل کا لوگو",
    hero_title: "وقت کے ساتھ پائیداری",
    hero_desc:
      "انٹل کے سفر کو دریافت کریں اور دیکھیں کہ جدت سے وابستگی نے ٹیکنالوجی اور ہمارے سیارے کے لئے زیادہ پائیدار مستقبل کیسے بنایا۔",
    language_label: "سائٹ کی زبان",
    language_help: "زبان بدلنے سے متن کی سمت تبدیل ہوتی ہے۔",
    language_en: "انگریزی (بائیں سے دائیں)",
    language_ar: "عربی (دائیں سے بائیں)",
    language_he: "عبرانی (دائیں سے بائیں)",
    language_fa: "فارسی (دائیں سے بائیں)",
    language_ur: "اردو (دائیں سے بائیں)",
    timeline_1968_title: "انٹل کی بنیاد",
    timeline_1968_desc:
      "روبرٹ نوائس اور گورڈن مور نے نئی کمپنی NM Electronics کا نام بدل کر Intel Corporation رکھا اور دہائیوں کی جدت کی بنیاد رکھی۔",
    timeline_1971_title: "پہلا مائیکروپروسیسر",
    timeline_1971_desc:
      "انٹل نے 4004 متعارف کرایا، دنیا کا پہلا تجارتی مائیکروپروسیسر، جس نے کمپیوٹنگ کے مستقبل کو آگے بڑھایا۔",
    timeline_1978_title: "8086 پروسیسر",
    timeline_1978_desc:
      "8086 پروسیسر کا اجرا، جس نے x86 آرکیٹیکچر کی بنیاد رکھی جو جدید کمپیوٹرز کو طاقت دیتا ہے۔",
    timeline_1985_title: "386 پروسیسر",
    timeline_1985_desc:
      "انٹل نے 32-بٹ آرکیٹیکچر کے ساتھ 386 پروسیسر متعارف کرایا اور کارکردگی میں نئی راہیں کھولیں۔",
    timeline_2006_title: "گرین ہاؤس گیسوں کی بلند ترین سطح",
    timeline_2006_desc:
      "اس سال انٹل کی آپریشنز میں سب سے زیادہ گرین ہاؤس گیسوں کا اخراج ہوا، بعد میں کمپنی نے توانائی اور مینوفیکچرنگ میں بہتری کی۔",
    timeline_2020_title: "RISE حکمت عملی",
    timeline_2020_desc:
      "انٹل نے RISE حکمت عملی اور 2030 اہداف شروع کیے تاکہ موسمیاتی عمل، پانی کی نگہداشت اور فضلہ میں کمی کو فروغ دیا جا سکے۔",
    timeline_2022_title: "2040 تک نیٹ زیرو",
    timeline_2022_desc:
      "انٹل نے 2040 تک عالمی آپریشنز میں نیٹ زیرو اخراج (اسکوپ 1 اور 2) حاصل کرنے کا عہد کیا۔",
    timeline_2023_title: "قابل تجدید بجلی",
    timeline_2023_desc:
      "کمپنی نے دنیا بھر میں 99% قابل تجدید بجلی کا استعمال حاصل کیا، جس سے اخراج کم ہوا۔",
    timeline_2024_title: "پائیداری سمٹ",
    timeline_2024_desc:
      "انٹل نے پہلی پائیداری سمٹ منعقد کی، جہاں صنعت کے رہنماؤں نے پائیدار مینوفیکچرنگ پر تعاون کیا۔",
    timeline_hint: "ٹائم لائن دیکھنے کے لئے اسکرول کریں | مزید جاننے کے لئے کارڈز پر ہوور کریں!",
    impact_title: "پائیداری کے نمایاں پہلو",
    impact_desc: "تین طریقے جن سے انٹل زیادہ ذمہ دار مستقبل بنا رہا ہے۔",
    impact_modal_trigger: "یہ کیوں اہم ہے",
    impact_card1_title: "موسمیاتی عمل",
    impact_card1_desc:
      "صاف توانائی، اسمارٹ مینوفیکچرنگ اور نیٹ زیرو عہد کے ذریعے اخراج میں کمی۔",
    impact_card2_title: "پانی کی نگہداشت",
    impact_card2_desc:
      "مقامی برادریوں کو پانی واپس دینا اور ہر عمل میں استعمال کم کرنا۔",
    impact_card3_title: "سرکولر جدت",
    impact_card3_desc:
      "مصنوعات اور آپریشنز کو اس طرح ڈیزائن کرنا کہ فضلہ کم ہو اور مواد زیادہ دیر تک استعمال میں رہے۔",
    learn_more: "مزید جانیں",
    subscribe_title: "پائیداری نیوز لیٹر سبسکرائب کریں",
    subscribe_desc: "انٹل کی پائیداری پیش رفت پر ماہانہ اپ ڈیٹس حاصل کریں۔",
    form_name: "مکمل نام",
    form_email: "ای میل پتہ",
    form_consent: "میں انٹل سے ای میل اپ ڈیٹس وصول کرنے پر رضامند ہوں۔",
    form_submit: "سبسکرائب کریں",
    form_privacy: "ہم آپ کی پرائیویسی کا احترام کرتے ہیں۔ کسی بھی وقت ان سبسکرائب کریں۔",
    footer_copy: "© 2026 انٹل۔ جملہ حقوق محفوظ ہیں۔",
    modal_title: "یہ پہلو کیوں اہم ہیں",
    modal_body:
      "انٹل ماحولیاتی اثرات کم کرنے کے لئے موسمیاتی عمل، پانی کی نگہداشت اور سرکولر جدت میں سرمایہ کاری کر رہا ہے۔",
    modal_close: "بند کریں",
    modal_cta: "اپ ڈیٹس کے لئے سبسکرائب کریں"
  }
};

const updateDirectionFromLang = (lang) => {
  const isRtl = rtlLanguages.some((rtl) => lang.startsWith(rtl));
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
  document.body.classList.toggle("rtl", isRtl);
};

const applyTranslations = (lang) => {
  const selectedLang = translations[lang] ? lang : "en";
  const strings = translations[selectedLang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (strings[key]) {
      element.textContent = strings[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const attr = element.getAttribute("data-i18n-attr");
    if (strings[key] && attr) {
      element.setAttribute(attr, strings[key]);
    }
  });
};

const applyLanguageChoice = () => {
  const newLang = languageSelect.value;
  document.documentElement.setAttribute("lang", newLang);
  updateDirectionFromLang(newLang);
  applyTranslations(newLang);
};

languageSelect.addEventListener("change", applyLanguageChoice);
updateDirectionFromLang(document.documentElement.lang);
applyTranslations(document.documentElement.lang);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "lang") {
      const lang = document.documentElement.lang;
      updateDirectionFromLang(lang);
      applyTranslations(lang);
    }
  });
});

observer.observe(document.documentElement, { attributes: true });
