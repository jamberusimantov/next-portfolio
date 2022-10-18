import { describe, expect, test } from '@jest/globals';
import dictionary from "../dir/dictionary"


describe('Dictionary', () => {
    test("Does Creator on'en-US' equals 'Jamberu Siman Tov'?", () => {
        expect(dictionary.creator["en-US"]).toMatch('Jamberu Siman Tov');
    });
    test("Does Creator on 'he-IL'equals ''?", () => {
        expect(dictionary.creator["he-IL"]).toMatch('סימן טוב גמברו');
    });
    // test("Does Homepage on'en-US' equals 'Homepage'?", () => {
    //     expect(dictionary.homepage["en-US"]).toMatch('Homepage');
    // });
    // test("Does Homepage on 'he-IL'equals 'דף הבית'?", () => {
    //     expect(dictionary.homepage["he-IL"]).toMatch('דף הבית');
    // });
    // test("Does Profile on'en-US' equals 'Profile'?", () => {
    //     expect(dictionary.profile["en-US"]).toMatch('Profile');
    // });
    // test("Does Profile on 'he-IL'equals 'פרופיל'?", () => {
    //     expect(dictionary.profile["he-IL"]).toMatch('פרופיל');
    // });
    // test("Does Projects on'en-US' equals 'Projects'?", () => {
    //     expect(dictionary.projects["en-US"]).toMatch('Projects');
    // });
    // test("Does Projects on 'he-IL'equals 'עבודות'?", () => {
    //     expect(dictionary.projects["he-IL"]).toMatch('עבודות');
    // });
    // test("Does Contact on'en-US' equals 'Contact'?", () => {
    //     expect(dictionary.contact["en-US"]).toMatch('Contact');
    // });
    // test("Does Contact on 'he-IL'equals 'צור קשר'?", () => {
    //     expect(dictionary.contact["he-IL"]).toMatch('צור קשר');
    // });
    // test("Does contactByEmail on'en-US' equals 'Send an Email'?", () => {
    //     expect(dictionary.contactByEmail["en-US"]).toMatch('Send an Email');
    // });
    // test("Does contactByEmail on 'he-IL'equals 'שלח דואל'?", () => {
    //     expect(dictionary.contactByEmail["he-IL"]).toMatch('שלח דוא"ל');
    // });
    // test("Does Help on'en-US' equals 'Help'?", () => {
    //     expect(dictionary.help["en-US"]).toMatch('Help');
    // });
    // test("Does Help on 'he-IL'equals 'עזרה'?", () => {
    //     expect(dictionary.help["he-IL"]).toMatch('עזרה');
    // });
    // test("Does Archive on'en-US' equals 'Archive'?", () => {
    //     expect(dictionary.archive["en-US"]).toMatch('Archive');
    // });
    // test("Does Archive on 'he-IL'equals 'עזרה'?", () => {
    //     expect(dictionary.archive["he-IL"]).toMatch('ארכיון');
    // });
    // test("Does Services on'en-US' equals 'Services'?", () => {
    //     expect(dictionary.services["en-US"]).toMatch('Services');
    // });
    // test("Does Services on 'he-IL'equals 'שירותים'?", () => {
    //     expect(dictionary.services["he-IL"]).toMatch('שירותים');
    // });
    // test("Does Messages on'en-US' equals 'Messages'?", () => {
    //     expect(dictionary.messages["en-US"]).toMatch('Messages');
    // });
    // test("Does Messages on 'he-IL'equals 'הודעות'?", () => {
    //     expect(dictionary.messages["he-IL"]).toMatch('הודעות');
    // });
    // test("Does pageNotFound on'en-US' equals 'Page not found'?", () => {
    //     expect(dictionary.pageNotFound["en-US"]).toMatch('Page not found');
    // });
    // test("Does pageNotFound on 'he-IL'equals 'דף לא נמצא'?", () => {
    //     expect(dictionary.pageNotFound["he-IL"]).toMatch("דף לא נמצא");
    // });
    // test("Does badRequest on'en-US' equals 'Bad request'?", () => {
    //     expect(dictionary.badRequest["en-US"]).toMatch('Bad request');
    // });
    // test("Does badRequest on 'he-IL'equals 'שגיאת שרת'?", () => {
    //     expect(dictionary.badRequest["he-IL"]).toMatch('שגיאת שרת');
    // });
    // test("Does Call on'en-US' equals 'Call'?", () => {
    //     expect(dictionary.call["en-US"]).toMatch('Call');
    // });
    // test("Does Call on 'he-IL'equals 'חייג'?", () => {
    //     expect(dictionary.call["he-IL"]).toMatch('חייג');
    // });
    // test("Does whatsapp on'en-US' equals 'Siman Tov on whatsapp'?", () => {
    //     expect(dictionary.whatsapp["en-US"]).toMatch('Siman Tov on whatsapp');
    // });
    // test("Does whatsapp on 'he-IL'equals 'שלח וואטסאפ'?", () => {
    //     expect(dictionary.whatsapp["he-IL"]).toMatch('שלח וואטסאפ');
    // });
    // test("Does linkedin on'en-US' equals 'Siman Tov on LinkedIn'?", () => {
    //     expect(dictionary.linkedin["en-US"]).toMatch('Siman Tov on LinkedIn');
    // });
    // test("Does linkedin on 'he-IL'equals 'סימן טוב ג'מברו בלינקדאין'?", () => {
    //     expect(dictionary.linkedin["he-IL"]).toMatch("סימן טוב ג'מברו בלינקדאין");
    // });
    // test("Does formMandatoryFields on'en-US' equals '*mandatory fields'?", () => {
    //     expect(dictionary.formMandatoryFields["en-US"]).toMatch('*mandatory fields');
    // });
    // test("Does formMandatoryFields on 'he-IL'equals '*שדות חובה'?", () => {
    //     expect(dictionary.formMandatoryFields["he-IL"]).toMatch('*שדות חובה');
    // });
    // test("Does formFieldMessage on'en-US' equals '*Message'?", () => {
    //     expect(dictionary.formFieldMessage["en-US"]).toMatch('*Message');
    // });
    // test("Does formFieldMessage on 'he-IL'equals '*הודעה'?", () => {
    //     expect(dictionary.formFieldMessage["he-IL"]).toMatch('*הודעה');
    // });
    // test("Does formFieldName on'en-US' equals '*Name'?", () => {
    //     expect(dictionary.formFieldName["en-US"]).toMatch('*Name');
    // });
    // test("Does formFieldName on 'he-IL'equals '*שם'?", () => {
    //     expect(dictionary.formFieldName["he-IL"]).toMatch('*שם');
    // });
    // test("Does formFieldSubject on'en-US' equals 'Subject'?", () => {
    //     expect(dictionary.formFieldSubject["en-US"]).toMatch('Subject');
    // });
    // test("Does formFieldSubject on 'he-IL'equals 'נושא'?", () => {
    //     expect(dictionary.formFieldSubject["he-IL"]).toMatch('נושא');
    // });
    // test("Does formFieldPhone on'en-US' equals 'Phone'?", () => {
    //     expect(dictionary.formFieldPhone["en-US"]).toMatch('Phone');
    // });
    // test("Does formFieldPhone on 'he-IL'equals 'טלפון'?", () => {
    //     expect(dictionary.formFieldPhone["he-IL"]).toMatch('טלפון');
    // });
    // test("Does formFieldEmail on'en-US' equals '*Email'?", () => {
    //     expect(dictionary.formFieldEmail["en-US"]).toMatch('*Email');
    // });
    // test('Does formFieldEmail on "he-IL"equals "*דוא"ל"?', () => {
    //     expect(dictionary.formFieldEmail["he-IL"]).toMatch('*דוא"ל');
    // });
    // test("Does formSubmit on'en-US' equals 'Submit'?", () => {
    //     expect(dictionary.formSubmit["en-US"]).toMatch('Submit');
    // });
    // test("Does formSubmit on 'he-IL'equals 'שליחה'?", () => {
    //     expect(dictionary.formSubmit["he-IL"]).toMatch('שליחה');
    // });
    // test("Does formDescriptionMessage on'en-US' equals 'Maximum amount of characters: 300'?", () => {
    //     expect(dictionary.formDescriptionMessage["en-US"]).toMatch('Maximum amount of characters: 300');
    // });
    // test("Does formDescriptionMessage on 'he-IL'equals 'מס' תווים מקסימלי: 300'?", () => {
    //     expect(dictionary.formDescriptionMessage["he-IL"]).toMatch("מס' תווים מקסימלי: 300");
    // });
    // test("Does formDescriptionName on'en-US' equals 'I would like to address you properly'?", () => {
    //     expect(dictionary.formDescriptionName["en-US"]).toMatch('I would like to address you properly');
    // });
    // test("Does formDescriptionName on 'he-IL'equals 'לא חובה שם מלא'?", () => {
    //     expect(dictionary.formDescriptionName["he-IL"]).toMatch("לא חובה שם מלא");
    // });
    // test("Does formDescriptionSubject on'en-US' equals 'Optionally add a title'?", () => {
    //     expect(dictionary.formDescriptionSubject["en-US"]).toMatch('Optionally add a title');
    // });
    // test("Does formDescriptionSubject on 'he-IL'equals 'מומלץ להוסיף נושא'?", () => {
    //     expect(dictionary.formDescriptionSubject["he-IL"]).toMatch('מומלץ להוסיף נושא');
    // });
    // test("Does formDescriptionPhone on'en-US' equals 'Phone number during office hours.'?", () => {
    //     expect(dictionary.formDescriptionPhone["en-US"]).toMatch('Phone number during office hours.');
    // });
    // test("Does formDescriptionPhone on 'he-IL'equals 'יש דברים שיותר קל להגיד'?", () => {
    //     expect(dictionary.formDescriptionPhone["he-IL"]).toMatch('יש דברים שיותר קל להגיד');
    // });
    // test("Does formDescriptionEmail on'en-US' equals 'Valid email address. For example: user@mail.com'?", () => {
    //     expect(dictionary.formDescriptionEmail["en-US"]).toMatch('Valid email address. For example: user@mail.com');
    // });
    // test("Does formDescriptionEmail on 'he-IL'equals 'דואל תקני, לדוגמא: user@mail.com'?", () => {
    //     expect(dictionary.formDescriptionEmail["he-IL"]).toMatch('דוא"ל תקני, לדוגמא: user@mail.com');
    // });
    // test("Does contactText on'en-US' equals 'Are you curious? Do you have a question? call or send an email, you may also contact via whatsapp or linkedin.'?", () => {
    //     expect(dictionary.contactText["en-US"]).toMatch('Are you curious? Do you have a question? call or send an email, you may also contact via whatsapp or linkedin.');
    // });
    // test("Does contactText on 'he-IL'equals 'יש לך שאלה או גילית סקרנות? אפשר להתקשר או לשלוח דואל. אפשר גם לשלוח הודעה בוואטסאפ או בלינקדאין.'?", () => {
    //     expect(dictionary.contactText["he-IL"]).toMatch('יש לך שאלה או גילית סקרנות? אפשר להתקשר או לשלוח דוא"ל. אפשר גם לשלוח הודעה בוואטסאפ או בלינקדאין.');
    // });
    // test("Does emailText on'en-US' equals 'Submit your questions, feedback or suggestions right here.'?", () => {
    //     expect(dictionary.emailText["en-US"]).toMatch('Submit your questions, feedback or suggestions right here.');
    // });
    // test("Does emailText on 'he-IL' equals 'רוצה לשלוח דואל כבר עכשיו? אפשר לשלוח דואל ממש פה.'?", () => {
    //     expect(dictionary.emailText["he-IL"]).toMatch('רוצה לשלוח דוא"ל כבר עכשיו? אפשר לשלוח דוא"ל ממש פה.');
    // });
    // test("Does helpText on'en-US' equals 'provides information about Siman Tov Jamberu in English and Hebrew. You may ask questions and contact me regarding the website and me.'?", () => {
    //     expect(dictionary.helpText["en-US"]).toMatch(' provides information about Siman Tov Jamberu in English and Hebrew. You may ask questions and contact me regarding the website and me.');
    // });
    // test("Does helpText on 'he-IL'equals ' מספק מידע מקצועי על סימן טוב ג'מברו. ניתן ואף רצוי לשאול שאלות וליצור קשר בכל נושא בקשר לאתר או אליי.'?", () => {
    //     expect(dictionary.helpText["he-IL"]).toMatch(" מספק מידע מקצועי על סימן טוב ג'מברו. ניתן ואף רצוי לשאול שאלות וליצור קשר בכל נושא בקשר לאתר או אליי.");
    // });
    // test("Does helpDocuments on'en-US' equals 'Documents on '?", () => {
    //     expect(dictionary.helpDocuments["en-US"]).toMatch('Documents on ');
    // });
    // test("Does helpDocuments on 'he-IL'equals 'מסמכים ב-'?", () => {
    //     expect(dictionary.helpDocuments["he-IL"]).toMatch('מסמכים ב-');
    // });
    // test("Does helpDocumentsText on'en-US' equals ' provides documents in PDF (portable document format). You will need a program to read and print PDF files. These programs are available for various operating systems, like Windows, Mac OS and Linux, and can usually be downloaded for free. An example is Adobe Reader.'?", () => {
    //     expect(dictionary.helpDocumentsText["en-US"]).toMatch(' provides documents in PDF (portable document format). You will need a program to read and print PDF files. These programs are available for various operating systems, like Windows, Mac OS and Linux, and can usually be downloaded for free. An example is Adobe Reader.');
    // });
    // test("Does helpDocumentsText on 'he-IL'equals ' מגיש מסמכים בתצורת PDF. על מנת להציג ולהדפיס יש צורך בתוכנה מתאימה. תוכנות מסוג זה זמינות למגוון מערכות הפעלה כגון: Windows, Mac OS, Linux וניתנות בדרך כלל להורדה ללא עלות. לדוגמא Adobe Reader.  '?", () => {
    //     expect(dictionary.helpDocumentsText["he-IL"]).toMatch(' מגיש מסמכים בתצורת PDF. על מנת להציג ולהדפיס יש צורך בתוכנה מתאימה. תוכנות מסוג זה זמינות למגוון מערכות הפעלה כגון: Windows, Mac OS, Linux וניתנות בדרך כלל להורדה ללא עלות. לדוגמא Adobe Reader.  ');
    // });
    // test("Does helpQuestionsAndFeedback on'en-US' equals 'Questions and feedback on '?", () => {
    //     expect(dictionary.helpQuestionsAndFeedback["en-US"]).toMatch('Questions and feedback on ');
    // });
    // test("Does helpQuestionsAndFeedback on 'he-IL'equals 'שאלות ומשוב ב-'?", () => {
    //     expect(dictionary.helpQuestionsAndFeedback["he-IL"]).toMatch('שאלות ומשוב ב-');
    // });
    // test("Does helpQuestionsAndFeedbackText on'en-US' equals 'I aim to keep the information on my website comprehensive, accurate, up to date and user-friendly. The website is managed by Jamberu Siman Tov and the website’s development is a continuous process. If you have any questions, feedback or suggestions regarding the website, please submit them using '?", () => {
    //     expect(dictionary.helpQuestionsAndFeedbackText["en-US"]).toMatch('I aim to keep the information on my website comprehensive, accurate, up to date and user-friendly. The website is managed by Jamberu Siman Tov and the website’s development is a continuous process. If you have any questions, feedback or suggestions regarding the website, please submit them using ');
    // });
    // test("Does helpQuestionsAndFeedbackText on 'he-IL'equals 'בכוונתי לשמור על מידע מקיף, מדוייק, מעודכן וידידותי למשתמש ככל שיעלה בידיי. האתר מנוהל  על ידי והוא בפיתוח מתמשך. אם צצה לך שאלה, משוב או הצעה לגביי האתר, אשמח לשמוע וניתן לפנות בעזרת טופס '?", () => {
    //     expect(dictionary.helpQuestionsAndFeedbackText["he-IL"]).toMatch('בכוונתי לשמור על מידע מקיף, מדוייק, מעודכן וידידותי למשתמש ככל שיעלה בידיי. האתר מנוהל  על ידי והוא בפיתוח מתמשך. אם צצה לך שאלה, משוב או הצעה לגביי האתר, אשמח לשמוע וניתן לפנות בעזרת טופס ');
    // });
    // test("Does aboutMe1 on'en-US' equals 'As a developer I always find myself broadening my knowledge and expanding my interests and I just love it. I'm naturally curios and in constant hunger to learn more and sharpen my skills. Recently I completed theoretical and practical studies in programming including: '?", () => {
    //     expect(dictionary.aboutMe1["en-US"]).toMatch("As a developer I always find myself broadening my knowledge and expanding my interests and I just love it. I'm naturally curios and in constant hunger to learn more and sharpen my skills. Recently I completed theoretical and practical studies in programming including: ");
    // });
    // test("Does aboutMe1 on 'he-IL'equals '   בתור מפתח אני תמיד  מוצא את עצמי מרחיב את הידע ואני פשוט אוהב את זה. יש בי סקרנות טבעית ורעב ללמוד ולהתפתח ברמה המקצועית וברמה האישית. לאחרונה סיימתי לימודים תיאורטיים ומעשיים בפיתוח ותכנות הכוללים בין השאר'?", () => {
    //     expect(dictionary.aboutMe1["he-IL"]).toMatch('   בתור מפתח אני תמיד  מוצא את עצמי מרחיב את הידע ואני פשוט אוהב את זה. יש בי סקרנות טבעית ורעב ללמוד ולהתפתח ברמה המקצועית וברמה האישית. לאחרונה סיימתי לימודים תיאורטיים ומעשיים בפיתוח ותכנות הכוללים בין השאר');
    // });
    // test("Does aboutMe2 on'en-US' equals 'I have conceptual thinking and concurrently I remember to pay attention to sub-components. Currently I work as System Integrator on '?", () => {
    //     expect(dictionary.aboutMe2["en-US"]).toMatch('I have conceptual thinking and concurrently I remember to pay attention to sub-components. Currently I work as System Integrator on ');
    // });
    // test("Does aboutMe2 on 'he-IL'equals 'יש לי תפיסה קונספטואלית ברמת המאקרו ובמקביל אני יודע לתת תשומת לב לחלקים הקטנים המרכיבים את השלם. כרגע אני עובד באינטגרציה באחד מבתי התוכנה הגדולים:  '?", () => {
    //     expect(dictionary.aboutMe2["he-IL"]).toMatch('יש לי תפיסה קונספטואלית ברמת המאקרו ובמקביל אני יודע לתת תשומת לב לחלקים הקטנים המרכיבים את השלם. כרגע אני עובד באינטגרציה באחד מבתי התוכנה הגדולים:  ');
    // });
    // test("Does aboutMe3 on'en-US' equals ' During my work I kept learning and acquired new skills and knowledge including: '?", () => {
    //     expect(dictionary.aboutMe3["en-US"]).toMatch(' During my work I kept learning and acquired new skills and knowledge including: ');
    // });
    // test("Does aboutMe3 on 'he-IL'equals ' במהלך עבודתי המשכתי בלימודים עצמאים ורכשתי כלים נוספים הכוללים בין השאר:'?", () => {
    //     expect(dictionary.aboutMe3["he-IL"]).toMatch(' במהלך עבודתי המשכתי בלימודים עצמאים ורכשתי כלים נוספים הכוללים בין השאר:');
    // });
    // test("Does aboutMe4 on'en-US' equals 'Among my responsibilities were: integrating servers and services, locating and investigating system errors and bugs, being a focal point for technical support for clients and internal and also write internal procedures documents. I read a lot and consult professionals so I am sure there's no challenge I can't overcome. On my free time I enjoy writing automation scripts and practicing yoga. Did i mention I'm versatile and flexible?'?", () => {
    //     expect(dictionary.aboutMe4["en-US"]).toMatch("Among my responsibilities were: integrating servers and services, locating and investigating system errors and bugs, being a focal point for technical support for clients and internal and also write internal procedures documents. I read a lot and consult professionals so I am sure there's no challenge I can't overcome. On my free time I enjoy writing automation scripts and practicing yoga. Did i mention I'm versatile and flexible?");
    // });
    // test("Does aboutMe4 on 'he-IL'equals '        בין תחומי האחריות שלי: אינטגרציה של שרתים ושירותים,  איתור וחקירת באגים, מתן מענה טכני לצוותי פיתוח ובקרת איכות וללקוחות החברה וכתיבת מסמכים לשימוש פנימי. אני קורא הרבה ומרבה להתייעץ עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו. בזמני הפנוי אני נהנה לכתוב אוטומציות ולתרגל יוגה. כבר אמרתי שאני ורסטילי וגמיש?'?", () => {
    //     expect(dictionary.aboutMe4["he-IL"]).toMatch('        בין תחומי האחריות שלי: אינטגרציה של שרתים ושירותים,  איתור וחקירת באגים, מתן מענה טכני לצוותי פיתוח ובקרת איכות וללקוחות החברה וכתיבת מסמכים לשימוש פנימי. אני קורא הרבה ומרבה להתייעץ עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו. בזמני הפנוי אני נהנה לכתוב אוטומציות ולתרגל יוגה. כבר אמרתי שאני ורסטילי וגמיש?');
    // });
    // test("Does aboutMe5 on'en-US' equals 'I'm currently looking for my first position as '?", () => {
    //     expect(dictionary.aboutMe5["en-US"]).toMatch("I'm currently looking for my first position as ");
    // });
    // test("Does aboutMe5 on 'he-IL'equals 'אני מאוד מעוניין להתפתח ולגדול בענף הפיתוח ומחפש את המשרה הראשונה שלי כמפתח'?", () => {
    //     expect(dictionary.aboutMe5["he-IL"]).toMatch('אני מאוד מעוניין להתפתח ולגדול בענף הפיתוח ומחפש את המשרה הראשונה שלי כמפתח');
    // });
})