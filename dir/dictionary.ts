type keyType = { "en-US": string, "he-IL": string }
interface iDictionary {
    homepage: keyType,
    profile: keyType,
    projects: keyType,
    contact: keyType,
    contactByEmail: keyType,
    help: keyType,
    archive: keyType,
    services: keyType,
    messages: keyType,
    pageNotFound:keyType,
    badRequest: keyType,
    contactTitle: keyType,
    call: keyType,
    whatsapp: keyType,
    whatsappGreeting: keyType,
    linkedin: keyType,
    emailTitle:keyType,
    formMandatoryFields: keyType,
    formFieldMessage: keyType,
    formFieldName: keyType,
    formFieldSubject: keyType,
    formFieldPhone: keyType,
    formFieldEmail: keyType,
    formSubmit:keyType,
    formDescriptionMessage: keyType,
    formDescriptionName: keyType,
    formDescriptionSubject:keyType,
    formDescriptionPhone: keyType,
    formDescriptionEmail: keyType,
    creator: keyType,
    profileText: keyType,
    helpTitle:keyType,
    helpDocumentsTitle: keyType,
    helpDocumentsText: keyType,
    helpQuestionsTitle: keyType,
    helpQuestionsText: keyType,
}

const dictionary: iDictionary = {
    // pages 
    homepage: {
        "en-US": "Homepage",
        "he-IL": "דף הבית"
    },
    profile: {
        "en-US": "Profile",
        "he-IL": "פרופיל"
    },
    projects: {
        "en-US": "Projects",
        "he-IL": "עבודות"
    },
    contact: {
        "en-US": "Contact",
        "he-IL": "צור קשר"
    },
    contactByEmail: {
        "en-US": "Send an Email",
        "he-IL": 'שלח דוא"ל'
    },
    help: {
        "en-US": "Help",
        "he-IL": "עזרה"
    },
    archive: {
        "en-US": "Archive",
        "he-IL": "ארכיון"
    },
    services: {
        "en-US": "Services",
        "he-IL": "שירותים"
    },
    messages: {
        "en-US": "Messages",
        "he-IL": "הודעות"
    },
    pageNotFound: {
        "en-US": "Page not found",
        "he-IL": "דף לא נמצא"
    },
    badRequest: {
        "en-US": "Bad request",
        "he-IL": "שגיאת שרת"
    },
    // contact page
    contactTitle: {
        "en-US": "Are you curious? Do you have a question? call or send an email, you may also contact via whatsapp or linkedin. ",
        "he-IL": 'יש לך שאלה או גילית סקרנות? אפשר להתקשר או לשלוח דוא"ל. אפשר גם לשלוח הודעה בוואטסאפ או בלינקדאין.'
    },
    call: {
        "en-US": "Call",
        "he-IL": "חייג"
    },
    whatsapp: {
        "en-US": "Siman Tov on whatsapp",
        "he-IL": "שלח וואטסאפ"
    },
    whatsappGreeting: {
        "en-US": "Hi Siman Tov please tell me more",
        "he-IL": "היי סימן-טוב אשמח לשמוע עוד"
    },
    linkedin: {
        "en-US": "Siman Tov on LinkedIn",
        "he-IL": "סימן טוב ג'מברו בלינקדאין"
    },
    // email page
    emailTitle: {
        "en-US": "Submit your questions, feedback or suggestions right here.",
        "he-IL": 'רוצה לשלוח דוא"ל כבר עכשיו? אפשר לשלוח דוא"ל ממש פה.'
    },
    formMandatoryFields: {
        "en-US": "*mandatory fields",
        "he-IL": "*שדות חובה"
    },
    // 1.fields
    formFieldMessage: {
        "en-US": "*Message",
        "he-IL": "*הודעה"
    },
    formFieldName: {
        "en-US": "*Name",
        "he-IL": "*שם"
    },
    formFieldSubject: {
        "en-US": "Subject",
        "he-IL": "נושא"
    },
    formFieldPhone: {
        "en-US": "Phone",
        "he-IL": "טלפון"
    },
    formFieldEmail: {
        "en-US": "*Email",
        "he-IL": '*דוא"ל'
    },
    formSubmit: {
        "en-US": "Submit",
        "he-IL": 'שליחה'
    },
    // 2.input description
    formDescriptionMessage: {
        "en-US": "Maximum amount of characters: 300",
        "he-IL": "מס' תווים מקסימלי: 300"
    },
    formDescriptionName: {
        "en-US": "I would like to address you properly",
        "he-IL": "לא חובה שם מלא"
    },
    formDescriptionSubject: {
        "en-US": "Optionally add a title ",
        "he-IL": "מומלץ להוסיף נושא"
    },
    formDescriptionPhone: {
        "en-US": "Phone number during office hours.",
        "he-IL": "יש דברים שיותר קל להגיד"
    },
    formDescriptionEmail: {
        "en-US": "Valid email address. For example: user@mail.com",
        "he-IL": 'דוא"ל תקני, לדוגמא: user@mail.com'
    },
    // profile page
    creator: {
        "en-US": "Jamberu Siman Tov",
        "he-IL": "סימן טוב גמברו"
    },
    profileText: {
        "en-US": "As a developer I always find myself broadening my knowledge and expanding my interests and I just love it. I'm naturally curios and in constant hunger to learn more and sharpen my skills. Recently I completed theoretical and practical studies in programming including: HTML, CSS, JavaScript, TypeScript, MongoDB, ExpressJS, ReactJS, NodeJS, Redux. I have conceptual thinking and concurrently I remember to pay attention to sub-components. Currently I work as System Integrator on Cognyte. During my work I kept learning and acquired new skills and knowledge including: Ansible, Jenkins, Docker, Linux, SQL. Among my responsibilities were: integrating servers and services, locating and investigating system errors and bugs, being a focal point for technical support internally and also write internal procedures documents. I read a lot and consult professionals so I am sure there's no challenge I can't overcome. On my free time I enjoy writing automation scripts and practicing yoga. Did i mention I'm versatile and flexible?😄 .I'm currently looking for my first position as BackEnd/ FrontEnd/ FullStack.",
        "he-IL": "בתור מפתח אני תמיד מוצא את עצמי מרחיב את הידע ואני פשוט אוהב את זה. יש בי סקרנות טבעית ורעב ללמוד ולהתפתח ברמה המקצועית וברמה האישית. לאחרונה סיימתי לימודים תיאורטיים ומעשיים בפיתוח ותכנות הכוללים בין השאר HTML, CSS, JavaScript, TypeScript, MongoDB, ExpressJS, ReactJS, NodeJS, Redux.יש לי תפיסה קונספטואלית ברמת המאקרו ובמקביל אני יודע לתת תשומת לב לחלקים הקטנים המרכיבים את השלם. כרגע אני עובד בתפקיד SI בחברת Cognyte. במהלך עבודתי המשכתי בלימודים עצמאים ורכשתי כלים נוספים הכוללים בין השאר: Ansible, Jenkins, Docker, Linux, SQL. בין תחומי האחריות שלי: אינטגרציה של שרתים ושירותים, איתור וחקירת באגים, מתן מענה טכני לצוותי פיתוח ובקרת איכות וכתיבת מסמכים לשימוש פנימי. אני קורא הרבה ומרבה להתייעץ עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו. בזמני הפנוי אני נהנה לכתוב אוטומציות ולתרגל יוגה. כבר אמרתי שאני ורסטילי וגמיש?😄 .אני מאוד מעוניין להתפתח ולגדול בענף הפיתוח ומחפש את המשרה הראשונה שלי כמפתח BackEnd/ FrontEnd/ FullStack."
    },
    // help page
    helpTitle: {
        "en-US": "portfoio-simantov.herokuapp.com provides information about Siman Tov Jamberu in English and Hebrew. You may ask questions and contact me regarding the website and me.",
        "he-IL": "portfoio-simantov.herokuapp.com מספק מידע מקצועי על סימן טוב ג'מברו. ניתן ואף רצוי לשאול שאלות וליצור קשר בכל נושא בקשר לאתר או אליי."
    },
    helpDocumentsTitle: {
        "en-US": "Documents on portfoio-simantov.herokuapp.com",
        "he-IL": "מסמכים ב-portfoio-simantov.herokuapp.com"
    },
    helpDocumentsText: {
        "en-US": "portfoio-simantov.herokuapp.com provides documents in PDF (portable document format). You will need a program to read and print PDF files. These programs are available for various operating systems, like Windows, Mac OS and Linux, and can usually be downloaded for free. An example is Adobe Reader.",
        "he-IL": "portfoio-simantov.herokuapp.com מגיש מסמכים בתצורת PDF. על מנת להציג ולהדפיס יש צורך בתוכנה מתאימה. תוכנות מסוג זה זמינות למגוון מערכות הפעלה כגון: Windows, Mac OS, Linux וניתנות בדרך כלל להורדה ללא עלות. לדוגמא Adobe Reader."
    },
    helpQuestionsTitle: {
        "en-US": "Questions and feedback on portfoio-simantov.herokuapp.com",
        "he-IL": "שאלות ומשוב ב-portfoio-simantov.herokuapp.com"
    },
    helpQuestionsText: {
        "en-US": "I aim to keep the information on my website comprehensive, accurate, up to date and user-friendly. The website is managed by Jamberu Siman Tov and the website’s development is a continuous process. If you have any questions, feedback or suggestions regarding the website, please submit them using ",
        "he-IL": "בכוונתי לשמור על מידע מקיף, מדוייק, מעודכן וידידותי למשתמש ככל שיעלה בידיי. האתר מנוהל  על ידי והוא בפיתוח מתמשך. אם צצה לך שאלה, משוב או הצעה לגביי האתר, אשמח לשמוע וניתן לפנות בעזרת טופס "
    },
}

export default dictionary