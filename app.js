let hiddenCourse = document.querySelector(".hidden-course");
let courseText = document.querySelector(".course-text");
let digitalTechnology = document.querySelector(".digital-technology")
let educationCenter = document.querySelector(".education-center")
let select = document.querySelector(".language");
let left = document.querySelector(".ri-arrow-left-fill")
let right = document.querySelector(".ri-arrow-right-fill")
let informationH1 = document.querySelector(".information h1")
let informationP = document.querySelector(".information p")
let openImg = document.querySelector(".open img")
let animation = document.querySelector(".animation")
let animationOne = document.querySelector(".animation-one")
let animationTwo = document.querySelector(".animation-two")
let animationthree = document.querySelector(".animation-three")
let home = document.querySelector(".ri-home-2-line")
let main = document.querySelector(".main")
let translator = document.querySelector(".translator")
let commentEditorRight = document.querySelector(".ri-corner-up-right-line");
let commentEditorHome = document.querySelector(".ri-home-4-line")
let commentEditorLeft = document.querySelector(".ri-corner-up-left-fill")
let commentsBoxImg = document.querySelector(".comments-boxs img");
let commentsBoxP = document.querySelector(".comments-boxs p");
let name = document.querySelector(".name");
let specialty = document.querySelector(".specialty");
let subscribeButton = document.querySelector(".subscribe button");
let subscribeInput = document.querySelector(".subscribe input")
let subscribeMessage = document.querySelector(".subscribe-message")
let registration = document.querySelector(".registration")
let registr = document.querySelectorAll("#registr")
let close1 = document.querySelector(".ri-close-line")
let closeInput = document.querySelectorAll(".close div input")
let closeButton = document.querySelector(".close div button")
let closeP = document.querySelector(".close div p")
let closeH2 = document.querySelector(".close h2")
let label = document.querySelectorAll("label")
let courseID = document.querySelectorAll("#course option")
let fixedWhatsappOne = document.querySelector(".fixed-whatsapp-one")
let fixedInstagramOne = document.querySelector(".fixed-instagram-one")
let fixedWhatsappOneP = document.querySelector(".fixed-whatsapp-one p")
let fixedInstagramOneP = document.querySelector(".fixed-instagram-one p")

let flag = true;
let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;

function sendAbune() {
    (function () {
        emailjs.init("nyMYn831UkKwlPBCW")
    })();

    let params = {
        email_id: document.querySelector("#abune").value,
    }

    let servicesID = "service_7y3yk4i";
    let templateID = "template_z20a2dn";

    emailjs.send(servicesID, templateID, params)
        .then(res => {
            if (select.value == "az"){
                subscribeMessage.innerText = "Uğurla Abunə Olundu!"
                subscribeMessage.style.color = "green"
                setTimeout(()=>{
                    subscribeMessage.style.display = "none"
                },2000)
            } else if (select.value == "en"){
                subscribeMessage.innerText = "Subscribed Successfully!"
                subscribeMessage.style.color = "green"
                setTimeout(()=>{
                    subscribeMessage.style.display = "none"
                },2000)
            }
        })
        .catch(error => {
            alert('Bir hata oluştu: ' + error);
        });
}

subscribeButton.addEventListener("click", ()=>{
    if(subscribeInput.value != ""){
        sendAbune()
    } else if (subscribeInput.value == ""){
            subscribeMessage.style.display = "block"
            if(select.value == "az"){
                subscribeMessage.innerText = "Alanı doldurun! "
                subscribeMessage.style.color = "red"
            } else if (select.value == "en"){
                subscribeMessage.innerText = "Fill in the field!"
                subscribeMessage.style.color = "red"
            }
            setTimeout(()=>{
                subscribeMessage.style.display = "none"
            }, 2000)
    }
})

// closeButton.addEventListener("click", ()=>{
//     closeButton.style.backgroundColor = "#053e95"
// })

// closeButton.addEventListener("mouseleave", ()=>{
//     closeButton.style.backgroundColor = "#00d68f"
// })

function sendMail() {
    (function () {
        emailjs.init("nyMYn831UkKwlPBCW")
    })();

    let params = {
        from_name: document.querySelector("#sendername").value,
        subject: document.querySelector("#course").value,
        email_id: document.querySelector("#to").value,
        message: document.querySelector("#message").value,
    }

    let servicesID = "service_7y3yk4i";
    let templateID = "template_z20a2dn";

    emailjs.send(servicesID, templateID, params)
        .then(res => {
            if (select.value == "az"){
                closeP.innerText = "Müraciətiniz qəbul edildi! Tezliklə geri dönüş olacaq."
            } else if (select.value == "en"){
                closeP.innerText = "Your application has been accepted! There will be a comeback soon."
                closeP.style.color = "green"
            }
        })
        .catch(error => {
            alert('Bir hata oluştu: ' + error);
        });
}

closeButton.addEventListener("click", ()=>{
    closeP.style.display = "block"
    setTimeout(()=>{
        closeP.style.display = "none"
    }, 3500)
    closeInput.forEach(item =>{
        if(item.value != ""){
            sendMail();
            closeP.style.color = "green"
        } else if (item.value == ""){

            if (select.value == "az"){
                closeP.innerText = "Bütün alanları doldurun!"
                closeP.style.color = "red"
            } else if (select.value == "en"){
                closeP.innerText = "Fill in all fields!"
                closeP.style.color = "red"
            }
        }
    })
})

fixedInstagramOne.addEventListener("mouseover", () => {
    setTimeout(() => {
        fixedInstagramOneP.innerText = "Telegram"
    }, 950)
})

fixedInstagramOne.addEventListener("mouseleave", () => {
    setTimeout(() => {
        fixedInstagramOneP.innerText = ""
    }, 950)
})

fixedWhatsappOne.addEventListener("mouseenter", () => {
    setTimeout(() => {
        fixedWhatsappOneP.innerText = "You Tube"
    }, 1000)
})

fixedWhatsappOne.addEventListener("mouseleave", () => {
    setTimeout(() => {
        fixedWhatsappOneP.innerText = ""
    }, 100)
})

window.onscroll = function () {
    let goToTopButton = document.getElementById('goToTopButton');

    if (window.scrollY > 1000) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
};

function goToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - 30);
        setTimeout(goToTop, 10);
    }
}


registr.forEach(item => {
    item.addEventListener("click", () => {
        registration.style.display = "block"

        select.addEventListener("click", () => {
            if (select.value == "en") {
                closeH2.innerText = "Enter your details so we can contact you:"
                label.forEach(item => {
                    if (item.innerText == "Ad, Soyad") {
                        item.innerText = "First name, last name"
                    } else if (item.innerText == "E-poçt") {
                        item.innerText = "E-mail"
                    } else if (item.innerText == "Telefon") {
                        item.innerText = "Phone"
                    } else if (item.innerText == "Kurs") {
                        item.innerText = "Course"
                    }
                })

                closeInput.forEach(item => {
                    item.placeholder = "Insert"
                })

                courseID.forEach(item => {
                    if (item.innerText == "Şəbəkə") {
                        item.innerText = "Network"
                    } else if (item.innerText == "Sistem İnzibatçılığı") {
                        item.innerText = "System Administration"
                    } else if (item.innerText == "İT Helpdesk") {
                        item.innerText = "IT Helpdesk"
                    }
                })
                closeButton.innerText = "Send"

                closeInput.forEach(item =>{
                    if (item.value != ""){
                        closeP.innerText = "Your application has been accepted! There will be a comeback soon."
                        closeP.style.color = "green"
                    } else if  (item.value == ""){
                        closeP.innerText = "Fill in all fields!"
                        closeP.style.color = "red"
                    }
                })

                closeP.style.marginLeft = "93px"
            } else if (select.value == "az") {
                closeH2.innerText = "Sizinlə əlaqəyə keçməyimiz üçün məlumatlarınızı daxil edin:"
                label.forEach(item => {
                    if (item.innerText == "First name, last name") {
                        item.innerText = "Ad, Soyad"
                    } else if (item.innerText == "E-mail") {
                        item.innerText = "E-poçt"
                    } else if (item.innerText == "Phone") {
                        item.innerText = "Telefon"
                    } else if (item.innerText == "Course") {
                        item.innerText = "Kurs"
                    }
                })

                closeInput.forEach(item => {
                    item.placeholder = "Daxil olun"
                })

                courseID.forEach(item => {
                    if (item.innerText == "Network") {
                        item.innerText = "Şəbəkə"
                    } else if (item.innerText == "System Administration") {
                        item.innerText = "Sistem İnzibatçılığı"
                    } else if (item.innerText == "İT Helpdesk") {
                        item.innerText = "IT Helpdesk"
                    }
                })

                closeButton.innerText = "Göndər"
                closeInput.forEach(item =>{
                    if (item.value != ""){
                        closeP.innerText = "Müraciətiniz qəbul edildi! Tezliklə geri dönüş olacaq."
                        closeP.style.color = "grean"
                    } else if  (item.value == ""){
                        closeP.innerText = "Bütün alanları doldurun!"
                        closeP.style.color = "red"
                    }
                })
                closeP.style.marginLeft = "93px"
            }

        })

        close1.addEventListener('click', () => {
            registration.style.display = "none"
            closeInput.forEach(item => {
                item.value = ""
            })
        })

        if (select.value == "en") {
            closeH2.innerText = "Enter your details so we can contact you:"
            label.forEach(item => {
                if (item.innerText == "Ad, Soyad") {
                    item.innerText = "First name, last name"
                } else if (item.innerText == "E-poçt") {
                    item.innerText = "E-mail"
                } else if (item.innerText == "Telefon") {
                    item.innerText = "Phone"
                } else if (item.innerText == "Kurs") {
                    item.innerText = "Course"
                }
            })

            closeInput.forEach(item => {
                item.placeholder = "Insert"
            })

            courseID.forEach(item => {
                if (item.innerText == "Şəbəkə") {
                    item.innerText = "Network"
                } else if (item.innerText == "Sistem İnzibatçılığı") {
                    item.innerText = "System Administration"
                } else if (item.innerText == "İT Helpdesk") {
                    item.innerText = "IT Helpdesk"
                }
            })
            closeButton.innerText = "Send"
            closeP.innerText = "Your application has been accepted! There will be a comeback soon."
            closeP.style.marginLeft = "93px"
        } else if (select.value == "az") {
            closeH2.innerText = "Sizinlə əlaqəyə keçməyimiz üçün məlumatlarınızı daxil edin:"
            label.forEach(item => {
                if (item.innerText == "First name, last name") {
                    item.innerText = "Ad, Soyad"
                } else if (item.innerText == "E-mail") {
                    item.innerText = "E-poçt"
                } else if (item.innerText == "Phone") {
                    item.innerText = "Telefon"
                } else if (item.innerText == "Course") {
                    item.innerText = "Kurs"
                }
            })

            closeInput.forEach(item => {
                item.placeholder = "Daxil olun"
            })

            courseID.forEach(item => {
                if (item.innerText == "Network") {
                    item.innerText = "Şəbəkə"
                } else if (item.innerText == "System Administration") {
                    item.innerText = "Sistem İnzibatçılığı"
                } else if (item.innerText == "İT Helpdesk") {
                    item.innerText = "IT Helpdesk"
                }
            })

            closeButton.innerText = "Göndər"
            closeP.innerText = "Müraciətiniz qəbul edildi! Tezliklə geri dönüş olacaq."
            closeP.style.marginLeft = "93px"
        }
    })
})

subscribeButton.addEventListener("click", () => {
    if (subscribeInput.value != "") {
        subscribeMessage.style.display = "block"
    }
})

commentEditorHome.addEventListener("click", () => {
    if (select.value == "az") {
        commentsBoxP.innerText = "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. 'Digital Technology Education Center' bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də 'Digital Technology Education Center'-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi 'IT Help Desk' mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!"
        specialty.innerText = "IT Support"
    } else if (select.value == "en") {
        commentsBoxP.innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, 'Digital Technology Education Center' assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. I also took advantage of the course's high-level educational opportunities as part of the Digital Technology Education Center. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!"
        specialty.innerText = "IT Support"
    }
    commentsBoxImg.src = "./foto/arif muradov.jpg"
    name.innerText = "Arif Muradov"
    commentEditorHome.style.color = "black"
    commentEditorLeft.style.color = "#5292e1"
    commentEditorRight.style.color = "#5292e1"

    select.addEventListener("click", () => {
        if (select.value == "en" && flag4 == true) {
            commentsBoxP.innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, 'Digital Technology Education Center' assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. I also took advantage of the course's high-level educational opportunities as part of the Digital Technology Education Center. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!"
            specialty.innerText = "Sistem Administratoru"
            subscribeMessage.innerText = "Subscribed Successfully!"

            if (informationH1.innerText == "Cəmi 6 aya ixtisaslaşacağın IT HelpDesk kursu") {
                informationH1.innerText = "Specialize in IT HelpDesk in just 6 months"
            }

            closeH2.innerText = "Enter your details so we can contact you:";
            label.forEach(item => {
                item[0].innerText = "First name, last name"
                item[1].innerText = "E-mail"
                item[2].innerText = "Phone"
                item[3].innerText = "Course"
            })
            closeInput.forEach(item => {
                item.placeholder = "Insert"
            })

            if (informationP.innerText == "İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir.") {
                informationP.innerText = "Becoming an IT specialist requires starting from the basics. You must familiarize yourself with everything related to computers and information technologies: understanding how they work, installing operating systems like Windows on machines, facilitating their communication, managing them effectively, and solving hardware-related problems. Additionally, it is essential to learn how to manage users within the network by logging in via accounts, permissions, passwords, and Active Directory."
            }
            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });
            flag4 = false
        } else if (select.value == "az" && flag4 == false) {
            subscribeMessage.innerText = "Uğurla abunə olundu!"
            specialty.innerText = "Sistem Administratoru"
            commentsBoxP.innerText = "Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. 'Digital Technology Education Center' bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də 'Digital Technology Education Center'-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi 'IT Help Desk' mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!"

            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });
            flag4 = true
        }
    })
})

commentEditorLeft.addEventListener("click", () => {
    if (select.value == "az") {
        commentsBoxP.innerText = "'Digital Technology Education Center' mükəmməl bir bootcampdır. Hər zaman dediyim kimi illəri və ayları həftələrə çevirən bir düşərgədir. Hər kəsin Akademiyada sənə yanaşmağı çox xüsusidir, verdiyi təhsil və məsləhətlər yüksək səviyyədədir. Akademiyada təhsil aldığım və təhsilimdən sonrakı vaxtlarda mənə köməklik göstərən hər kəsə səmimi qəlbdən təşəkkürümü bildirirəm və əminliklə deyirəm ki 'Digital Technology Education Center' İT ekosisteminin inkişafında, keyfiyyətli IT mühəndisləri yetişdirilməsində mühim rol oynamaqdadır və bu hər zaman belə olacaq!"
        specialty.innerText = "Sistem İnzibatçılığı"
        name.style.marginTop = "-67px"
    } else if (select.value == "en") {
        commentsBoxP.innerText = "The 'Digital Technology Education Center' program is a bootcamp. As I always say, it is a camp that turns years and months into weeks. The way everyone treats you at the Academy is very special, the education and advice given is top notch. I would like to express my sincere thanks to everyone who helped me during my studies and training in the academy and with this I say that 'Digital Technology Education Center' will play an important role in the development of IT ecosystem and training of IT engineers and it will always be so!"
        specialty.innerText = "Sistem Administratoru"
        name.style.marginTop = "-67px"
    }
    commentsBoxImg.src = "./foto/gulsum memedova.jpg"
    name.innerText = "Gülsüm Məmmədova"
    commentEditorLeft.style.color = "black"
    commentEditorHome.style.color = "#5292e1"
    commentEditorRight.style.color = "#5292e1"

    commentEditorRight.addEventListener("click", () => {
        name.style.marginTop = "-7px"
    })

    commentEditorHome.addEventListener("click", () => {
        name.style.marginTop = "9px"
    })


    select.addEventListener("click", () => {
        if (select.value == "en" && flag5 == true) {
            subscribeMessage.innerText = "Subscribed Successfully!"
            name.style.marginTop = "1px"
            commentsBoxP.innerText = "The 'Digital Technology Education Center' program is a bootcamp. As I always say, it is a camp that turns years and months into weeks. The way everyone treats you at the Academy is very special, the education and advice given is top notch. I would like to express my sincere thanks to everyone who helped me during my studies and training in the academy and with this I say that 'Digital Technology Education Center' will play an important role in the development of IT ecosystem and training of IT engineers and it will always be so!"
            specialty.innerText = "Sistem Administratoru"

            if (informationH1.innerText == "Cəmi 6 aya ixtisaslaşacağın IT HelpDesk kursu") {
                informationH1.innerText = "Specialize in IT HelpDesk in just 6 months"
            }

            if (informationP.innerText == "İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir.") {
                informationP.innerText = "Becoming an IT specialist requires starting from the basics. You must familiarize yourself with everything related to computers and information technologies: understanding how they work, installing operating systems like Windows on machines, facilitating their communication, managing them effectively, and solving hardware-related problems. Additionally, it is essential to learn how to manage users within the network by logging in via accounts, permissions, passwords, and Active Directory."
            }

            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });
            flag5 = false
        } else if (select.value == "az" && flag5 == false) {
            commentsBoxP.innerText = "'Digital Technology Education Center' mükəmməl bir bootcampdır. Hər zaman dediyim kimi illəri və ayları həftələrə çevirən bir düşərgədir. Hər kəsin Akademiyada sənə yanaşmağı çox xüsusidir, verdiyi təhsil və məsləhətlər yüksək səviyyədədir. Akademiyada təhsil aldığım və təhsilimdən sonrakı vaxtlarda mənə köməklik göstərən hər kəsə səmimi qəlbdən təşəkkürümü bildirirəm və əminliklə deyirəm ki 'Digital Technology Education Center' İT ekosisteminin inkişafında, keyfiyyətli IT mühəndisləri yetişdirilməsində mühim rol oynamaqdadır və bu hər zaman belə olacaq!"
            specialty.innerText = "Sistem İnzibatçılığı"
            subscribeMessage.innerText = "Uğurla abunə' olundu!"
            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });
            flag5 = true
        }
    })
})

commentEditorRight.addEventListener("click", () => {

    if (select.value == "az") {
        commentsBoxP.innerText = "'Digital Technology Education Center' haqqında məlumatı bu sahə ilə məşğul olan dostlardan aldım. İnkişafa meyilli, daim yeniliklərə açıq olan kollektivi ilə tanışlıqdan sonra buranı əbəs yerə seçmədiyimi özlüyümdə sübut etdim. 6 illik universitet həyatımda yiyələndiyim ixtisas, İT sahəsi ilə kəskin fərqlənsə də, bu sahəyə marağım artmağa başlamışdı. İT sahəsi ilə məşğul olmaq qərarını aldıqdan sonra, 'Digital Technology Education Center' kursuna müraciət etdim. Bizə keçirilən alqoritmik baza biliklərindən başlayaraq, ən üst mövzulara qədər məlumat toplamağa, praktik olaraq tətbiq etməyə başladım. Zamanla özümdə inkişafı görmək məni daha da həvəsləndirdi. Bunun üçün bütün 'Digital Technology Education Center' ailəsinə təşəkkürümü bildirir və gələcək planlarında dayanıqlı və davamlı inkişaf yolu arzulayıram."
        specialty.innerText = "Şəbəkə"
    } else if (select.value == "en") {
        commentsBoxP.innerText = "I got information about 'Digital Technology Education Center' from friends who are involved in this field. After getting acquainted with the team, which is inclined to development and is always open to innovations, I proved to myself that I did not choose this place in vain. Although the specialty I studied in my 6-year university life was very different from the IT field, my interest in this field began to increase. After deciding to do IT, I applied for the Digital Technology Education Center course. Starting from the algorithmic base knowledge that was taught to us, I started to collect information and apply it practically to the top topics. Seeing the progress in myself over time made me even more motivated. I would like to thank the entire 'Digital Technology Education Center' family for this and wish them a stable and sustainable development path in their future plans."
        specialty.innerText = "Network"
    }
    commentsBoxImg.src = "./foto/girl foto.jpg"
    name.innerText = "İhsan Büyükugur"
    commentEditorRight.style.color = "black"
    commentEditorHome.style.color = "#5292e1"
    commentEditorLeft.style.color = "#5292e1"


    select.addEventListener("click", () => {
        if (select.value == "en" && flag4 == true) {
            commentsBoxP.innerText = "I got information about 'Digital Technology Education Center' from friends who are involved in this field. After getting acquainted with the team, which is inclined to development and is always open to innovations, I proved to myself that I did not choose this place in vain. Although the specialty I studied in my 6-year university life was very different from the IT field, my interest in this field began to increase. After deciding to do IT, I applied for the Digital Technology Education Center course. Starting from the algorithmic base knowledge that was taught to us, I started to collect information and apply it practically to the top topics. Seeing the progress in myself over time made me even more motivated. I would like to thank the entire 'Digital Technology Education Center' family for this and wish them a stable and sustainable development path in their future plans."
            specialty.innerText = "Network"

            if (informationH1.innerText == "Cəmi 6 aya ixtisaslaşacağın IT HelpDesk kursu") {
                informationH1.innerText = "Specialize in IT HelpDesk in just 6 months"
            }

            if (informationP.innerText == "İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir.") {
                informationP.innerText = "Becoming an IT specialist requires starting from the basics. You must familiarize yourself with everything related to computers and information technologies: understanding how they work, installing operating systems like Windows on machines, facilitating their communication, managing them effectively, and solving hardware-related problems. Additionally, it is essential to learn how to manage users within the network by logging in via accounts, permissions, passwords, and Active Directory."
            }
            subscribeMessage.innerText = "Subscribed Successfully!"
            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });
            flag4 = false
        } else if (select.value == "az" && flag4 == false) {
            specialty.innerText = "Şəbəkə"
            subscribeMessage.innerText = "Uğurla abunə olundu!"
            commentsBoxP.innerText = "'Digital Technology Education Center' haqqında məlumatı bu sahə ilə məşğul olan dostlardan aldım. İnkişafa meyilli, daim yeniliklərə açıq olan kollektivi ilə tanışlıqdan sonra buranı əbəs yerə seçmədiyimi özlüyümdə sübut etdim. 6 illik universitet həyatımda yiyələndiyim ixtisas, İT sahəsi ilə kəskin fərqlənsə də, bu sahəyə marağım artmağa başlamışdı. İT sahəsi ilə məşğul olmaq qərarını aldıqdan sonra, 'Digital Technology Education Center' kursuna müraciət etdim. Bizə keçirilən alqoritmik baza biliklərindən başlayaraq, ən üst mövzulara qədər məlumat toplamağa, praktik olaraq tətbiq etməyə başladım. Zamanla özümdə inkişafı görmək məni daha da həvəsləndirdi. Bunun üçün bütün 'Digital Technology Education Center' ailəsinə təşəkkürümü bildirir və gələcək planlarında dayanıqlı və davamlı inkişaf yolu arzulayıram."

            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });
            flag4 = true
        }
    })
})


home.addEventListener("click", () => {

    if (select.value == "az") {

        informationH1.innerHTML = "Cəmi 6 aya ixtisaslaşacağın IT Helpdesk  kursu"
        informationP.innerHTML = "İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir."
        translator.style.marginTop = "-70px"
    } else if (select.value == "en") {
        informationH1.innerHTML = "Only 6 months you will specialize IT HelpDesk course"
        informationP.innerText = "Becoming an IT specialist requires starting from the basics. You must familiarize yourself with everything related to computers and information technologies: understanding how they work, installing operating systems like Windows on machines, facilitating their communication, managing them effectively, and solving hardware-related problems. Additionally, it is essential to learn how to manage users within the network by logging in via accounts, permissions, passwords, and Active Directory."
        translator.style.marginTop = "-45px"
        main.style.height = "905px"
    }

    if (select.value == "en") {
        right.addEventListener("click", () => {
            translator.style.marginTop = "-40px"
        })
    }

    informationH1.style.width = "500px"
    openImg.src = "./foto/IT support.png"
    animation.style.marginLeft = "43%"
    animation.style.marginTop = "50px"
    right.style.color = "white"
    left.style.color = "white"
    home.style.color = "#053e95"
    animationthree.style.backgroundColor = "white"
    animationOne.style.backgroundColor = "white"
    animationTwo.style.backgroundColor = "#053e95"

    select.addEventListener("click", () => {
        if (select.value == "en" && flag1 == true) {
            document.querySelector(".main h1").innerText = "Only 6 months you will specialize IT HelpDesk course"
            informationP.innerText = "Becoming an IT professional requires starting with the basics. You must master everything related to computers and information technology: understanding how they work, installing operating systems such as Windows on machines, facilitating their communication, managing them effectively, and troubleshooting hardware problems. At the same time, it is important to learn how to manage users within the network, including user accounts, permissions, passwords, and access through Active Directory."
            animation.style.marginTop = "40px"
            translator.style.marginTop = "35px"
            main.style.height = "1050px"
            subscribeMessage.innerText = "Subscribed Successfully!"
            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });
            flag1 = false
        } else if (select.value == "az" && flag1 == false) {
            document.querySelector(".main h1").innerText = "Cəmi 6 aya ixtisaslaşacağın IT HelpDesk kursu"
            informationP.innerText = "İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir."
            animation.style.marginTop = "50px"
            translator.style.marginTop = "-20px"
            subscribeMessage.innerText = "Uğurla abunə olundu!"
            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });
            flag1 = true
        }
    })
})


left.addEventListener("click", () => {

    if (select.value == "az") {

        informationH1.innerHTML = "Cəmi 6 aya ixtisaslaşacağın Sistem inzibatçılığ  kursu"
        informationP.innerHTML = "Çox istifadəçi hesablama sisteminin, rabitə sisteminin, yaxud onların hər ikisinin idarə olunması və istifadəsinə cavabdeh olan şəxs. Sistem inzibatçısı istifadəçilərə kimlik nömrələri (identifikatorlar) və parollar vermək, onların əlçatanlıq səviyyələrini qurmaq və yaddaş həcmini bölüşdürmək kimi səlahiyyətləri yerinə yetirir."
        translator.style.marginTop = "-10px"
    } else if (select.value == "en") {
        informationH1.innerHTML = "System administration course where you will specialize in just 6 months"
        informationP.innerText = "A person responsible for the management and operation of a multi-user computing system, communications system, or both. The system administrator is responsible for assigning user IDs and passwords, setting their access levels, and allocating storage space."
        main.style.height = "1000px"
        translator.style.marginTop = "-38px"
    }
    informationH1.style.width = "500px"
    openImg.src = "./foto/sistem inzibatciligi.jpg"
    animation.style.marginLeft = "43%"
    animation.style.marginTop = "50px"
    home.style.color = "white"
    right.style.color = "white"
    left.style.color = "#053e95"
    animationthree.style.backgroundColor = "white"
    animationTwo.style.backgroundColor = "white"
    animationOne.style.backgroundColor = "#053e95"

    if (select.value == "en") {
        right.addEventListener("click", () => {
            translator.style.marginTop = "6px"
        })
    }


    select.addEventListener("click", () => {
        if (select.value == "en" && flag2 == true) {
            document.querySelector(".main h1").innerText = "System administration course where you will specialize in just 6 months"
            informationP.innerText = "A person responsible for the management and operation of a multi-user computing system, communications system, or both. The system administrator is responsible for assigning user IDs and passwords, setting their access levels, and allocating storage space."
            animation.style.marginTop = "40px"
            translator.style.marginTop = "8px"
            main.style.height = "1050px"
            subscribeMessage.innerText = "Subscribed Successfully!"


            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });
            flag2 = false
        } else if (select.value == "az" && flag2 == false) {
            document.querySelector(".main h1").innerText = "Cəmi 6 aya ixtisaslaşacağın Sistem Inzibatçılığı kursu"
            informationP.innerText = "Çox istifadəçi hesablama sisteminin, rabitə sisteminin, yaxud onların hər ikisinin idarə olunması və istifadəsinə cavabdeh olan şəxs. Sistem inzibatçısı istifadəçilərə kimlik nömrələri (identifikatorlar) və parollar vermək, onların əlçatanlıq səviyyələrini qurmaq və yaddaş həcmini bölüşdürmək kimi səlahiyyətləri yerinə yetirir."
            animation.style.marginTop = "50px"
            translator.style.marginTop = "-12px"
            subscribeMessage.innerText = "ugurla abunə olundu!"


            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });
            flag2 = true
        }
    })
})


right.addEventListener("click", () => {

    if (select.value == "az") {

        informationH1.innerHTML = "Cəmi 6 aya ixtisaslaşacağın Şəbəkə kursu"
        informationP.innerHTML = "Şəbəkə sadəcə cihazların bir-birilə əlaqə qurması və müəyyən edilmiş məlumatların paylaşılması deməkdir.Bunlar kompüterlər (PC),Server-lər,router-lər və s. ola bilər.Ən böyük şəbəkəyə İnterneti , ən kiçik şəbəkəyə isə iki kompüterin bir-birinə bağlanmasını nümunə göstərə bilərik."
        translator.style.marginTop = "90px"
    } else if (select.value == "en") {
        informationH1.innerHTML = "Networking course where you will specialize in just 6 months"
        informationP.innerText = "A network simply means that devices communicate with each other and share certain information. These are computers (PCs), servers, routers, etc. It can be. The largest network is the Internet, and the smallest network is the connection of two computers."
        translator.style.marginTop = "-64px"
    }

    if (select.value == "en") {
        left.addEventListener("click", () => {
            translator.style.marginTop = "-40px"
        })
    }

    informationH1.style.width = "500px"
    openImg.src = "./foto/network.jpg"
    animation.style.marginLeft = "43%"
    animation.style.marginTop = "50px"
    home.style.color = "white"
    left.style.color = "white"
    right.style.color = "#053e95"
    animationOne.style.backgroundColor = "white"
    animationTwo.style.backgroundColor = "white"
    animationthree.style.backgroundColor = "#053e95"

    select.addEventListener("click", () => {
        if (select.value == "en" && flag3 == true) {
            document.querySelector(".main h1").innerText = "Networking course where you will specialize in just 6 months"
            informationP.innerText = "A network simply means that devices communicate with each other and share certain information. These are computers (PCs), servers, routers, etc. It can be. The largest network is the Internet, and the smallest network is the connection of two computers."
            animation.style.marginTop = "40px"
            translator.style.marginTop = "-50px"
            subscribeMessage.innerText = "Subscribed Successfully!"

            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });

            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'Haqqımızda') {
                    element.innerText = 'About Us';
                } else if (element.innerText == 'Suallar') {
                    element.innerText = 'Questions';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Kurslar') {
                    element.innerText = 'Courses';
                } else if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText == 'Resurslar') {
                    element.innerText = 'Resources';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });

            document.querySelector('.texts button').innerText = 'Apply';
            document.querySelector('.information h1').style.width = "500px";
            document.querySelector('.information button').innerText = 'Apply';
            document.querySelector('.our-courses').innerText = 'Our Courses';
            document.querySelector('.tedristext').innerText = 'Courses we offer';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelector('.btn').innerText = 'Apply Now';
            document.querySelector('.career center h1').innerText = 'Career Support';
            document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV hazırlanmasına dəstək') {
                    element.innerText = 'CV Preparation Support';
                } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                    element.innerText = 'Relations with employers';
                } else if (element.innerText == 'Karyera bələdçisi') {
                    element.innerText = 'Career guide';
                    element.style.marginLeft = "-60px"
                } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                    element.innerText = 'Interview preparation training';
                    element.style.marginLeft = "-95px"
                } else if (element.innerText == 'Təcrübə proqramları') {
                    element.innerText = 'Internship programs';
                } else if (element.innerText == 'Tövsiyə məktubu') {
                    element.innerText = 'letter of recommendation';
                    element.style.marginLeft = "-105px"
                }
            });

            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                    element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
                } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                    element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
                } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                    element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
                } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                    element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
                } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                    element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
                } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                    element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Build your future today!';
            document.querySelector('.our-boxs h1').innerText = 'Our difference';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 saat açıq mərkəz') {
                    element.innerText = '24 hour open center';
                    element.style.marginLeft = "126px"
                } else if (element.innerText == 'Flipped Classroom metodu') {
                    element.innerText = 'The Flipped Classroom method';
                } else if (element.innerText == 'Karyera dəstəyi') {
                    element.innerText = 'Career support';
                } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                    element.innerText = 'Free trial lesson';
                    element.style.marginLeft = "115px"
                } else if (element.innerText == 'Tədris formatında seçim') {
                    element.innerText = 'Choice of teaching format';
                } else if (element.innerText == 'Mentor dəstəyi') {
                    element.innerText = 'Mentor support';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                    element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
                } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                    element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
                } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                    element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
                } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                    element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
                } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                    element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
                } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                    element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
                }
            });

            document.querySelector('.header').innerText = 'Our graduates';
            document.querySelector('.ourtext').innerText = 'They talk about us';
            document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
            document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
            document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
            document.querySelector('.main-duties').innerText = 'Main Duties';


            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                    element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
                } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                    element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
                } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                    element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
                } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                    element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
                } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                    element.innerText = 'Manage user accounts, access permissions and security configurations.';
                } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                    element.innerText = 'Providing remote technical assistance using remote desktop tools.';
                } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                    element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
                } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                    element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
                } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                    element.innerText = 'Informing users about the status of their support requests.';
                } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                    element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
                }
            });


            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'Daha ətrafli') {
                    element.innerText = 'More details';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == 'Yeni nə var ?') {
                    element.innerText = "What's new?";
                }
            });


            document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
            document.querySelector('.subscribe input').placeholder = 'Enter your email';
            document.querySelector('.subscribe button').innerText = 'Subscribe';
            document.querySelector('.subscribe').style.marginLeft = '70px';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
            document.querySelector('.kurs h2').innerText = 'Courses';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Şəbəkə') {
                    element.innerText = 'Network';
                } else if (element.innerText == 'Sistem Inzibatçılığı') {
                    element.innerText = 'System Administrator';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Karyera Dəstəyi') {
                    element.innerText = 'Career Support';
                } else if (element.innerText === 'Suallar') {
                    element.innerText = 'Questions';
                } else if (element.innerText == 'Əlaqə') {
                    element.innerText = 'Contact';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Contact';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                    element.innerText = "Masazir village, Absheron district";
                }
            });

            flag3 = false
        } else if (select.value == "az" && flag3 == false) {

            document.querySelector(".main h1").innerText = "Cəmi 6 aya ixtisaslaşacağın Şəbəkə kursu"
            informationP.innerText = "Şəbəkə sadəcə cihazların bir-birilə əlaqə qurması və müəyyən edilmiş məlumatların paylaşılması deməkdir.Bunlar kompüterlər (PC),Server-lər,router-lər və s. ola bilər.Ən böyük şəbəkəyə İnterneti , ən kiçik şəbəkəyə isə iki kompüterin bir-birinə bağlanmasını nümunə göstərə bilərik."
            animation.style.marginTop = "50px"
            translator.style.marginTop = "150px"
            subscribeMessage.innerText = "Uğurla abunə olundu!"


            document.querySelectorAll('.hidden-course a').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll(".digital-technology a").forEach(function (element) {
                if (element.innerText == 'About Us') {
                    element.innerText = 'Haqqımızda';
                } else if (element.innerText == 'Questions') {
                    element.innerText = 'Suallar';
                }
            });

            document.querySelectorAll(".texts a").forEach(function (element) {
                if (element.innerText == 'Courses') {
                    element.innerText = 'Kurslar';
                } else if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText == 'Resources') {
                    element.innerText = 'Resurslar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.texts button').innerText = 'Müraciət et';
            document.querySelector('.our-courses').innerText = 'Kurslarımız';
            document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


            document.querySelectorAll('.container p').forEach(function (element) {
                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelector('.btn').innerText = 'indi müraciət et';
            document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
            document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


            document.querySelectorAll(".cv-support h4").forEach(function (element) {
                if (element.innerText == 'CV Preparation Support') {
                    element.innerText = 'CV hazırlanmasına dəstək';
                } else if (element.innerText == 'Relations with employers') {
                    element.innerText = 'İşə götürənlərlə əlaqələr';
                } else if (element.innerText == 'Career guide') {
                    element.innerText = 'Karyera bələdçisi';
                    element.style.marginLeft = "-75px"
                } else if (element.innerText == 'Interview preparation training') {
                    element.innerText = 'Müsahibəyə hazırlıq təlimi';
                } else if (element.innerText == 'Internship programs') {
                    element.innerText = 'Təcrübə proqramları';
                } else if (element.innerText == 'letter of recommendation') {
                    element.innerText = 'Tövsiyə məktubu';
                    element.style.marginLeft = "-76px"
                }
            });


            document.querySelectorAll(".cv-support p").forEach(function (element) {
                if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                    element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
                } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                    element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
                } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                    element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
                } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                    element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
                } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                    element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
                } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                    element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
                }
            });


            document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
            document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


            document.querySelectorAll(".information-boxes h3").forEach(function (element) {
                if (element.innerText == '24 hour open center') {
                    element.innerText = '24 saat açıq mərkəz';
                    element.style.marginLeft = "95px"
                } else if (element.innerText == 'The Flipped Classroom method') {
                    element.innerText = 'Flipped Classroom metodu';
                } else if (element.innerText == 'Career support') {
                    element.innerText = 'Karyera dəstəyi';
                } else if (element.innerText == 'Free trial lesson') {
                    element.innerText = 'Ödənişsiz sınaq dərsi';
                    element.style.marginLeft = "85px"
                } else if (element.innerText == 'Choice of teaching format') {
                    element.innerText = 'Tədris formatında seçim';
                } else if (element.innerText == 'Mentor support') {
                    element.innerText = 'Mentor dəstəyi';
                }
            });


            document.querySelectorAll(".information-boxes p").forEach(function (element) {
                if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                    element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
                } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                    element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
                } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                    element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
                } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                    element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
                } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                    element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
                } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                    element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
                }
            });

            document.querySelector('.header').innerText = 'Məzunlarımız';
            document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
            document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
            document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
            document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
            document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



            document.querySelectorAll("li").forEach(function (element) {
                if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                    element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
                } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                    element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
                } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                    element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
                } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                    element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
                } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                    element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
                } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                    element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
                } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                    element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
                } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                    element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
                } else if (element.innerText == ' Informing users about the status of their support requests.') {
                    element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
                } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                    element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
                }
            });

            document.querySelectorAll('.instagram-box a').forEach(function (element) {
                if (element.innerText == 'More details') {
                    element.innerText = 'Daha ətrafli';
                }
            });

            document.querySelectorAll('.the-media p').forEach(function (element) {
                if (element.innerText == "What's new ?") {
                    element.innerText = "Yeni nə var ?";
                }
            });


            document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
            document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
            document.querySelector('.subscribe button').innerText = 'Abunə ol';
            document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
            document.querySelector('.kurs h2').innerText = 'Kurslar';


            document.querySelectorAll('.kurs a').forEach(function (element) {

                if (element.innerText == 'IT HelpDesk') {
                    element.innerText = 'IT HelpDesk';
                } else if (element.innerText === 'Network') {
                    element.innerText = 'Şəbəkə';
                } else if (element.innerText == 'System Administrator') {
                    element.innerText = 'Sistem Inzibatçılığı';
                }
            });


            document.querySelectorAll('.menu p').forEach(function (element) {

                if (element.innerText == 'Career Support') {
                    element.innerText = 'Karyera Dəstəyi';
                } else if (element.innerText === 'Questions') {
                    element.innerText = 'Suallar';
                } else if (element.innerText == 'Contact') {
                    element.innerText = 'Əlaqə';
                }
            });


            document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
            document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


            document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
                if (element.innerText == 'Masazir village, Absheron district ') {
                    element.innerText = "Abşeron rayonu Masazir qesebesi";
                }
            });

            flag3 = true
        }
    })

})




select.addEventListener("click", () => {
    if (select.value == "en" && flag == true) {
        subscribeMessage.innerText = "Subscribed Successfully!"

        document.querySelectorAll('.hidden-course a').forEach(function (element) {
            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Şəbəkə') {
                element.innerText = 'Network';
            } else if (element.innerText == 'Sistem Inzibatçılığı') {
                element.innerText = 'System Administrator';
            }
        });

        document.querySelectorAll(".digital-technology a").forEach(function (element) {
            if (element.innerText == 'Haqqımızda') {
                element.innerText = 'About Us';
            } else if (element.innerText == 'Suallar') {
                element.innerText = 'Questions';
            }
        });

        document.querySelectorAll(".texts a").forEach(function (element) {
            if (element.innerText == 'Kurslar') {
                element.innerText = 'Courses';
            } else if (element.innerText == 'Karyera Dəstəyi') {
                element.innerText = 'Career Support';
            } else if (element.innerText == 'Resurslar') {
                element.innerText = 'Resources';
            } else if (element.innerText == 'Əlaqə') {
                element.innerText = 'Contact';
            }
        });

        document.querySelector('.texts button').innerText = 'Apply';
        document.querySelector('.information h1').innerText = 'Specialize in IT HelpDesk in just 6 months';
        document.querySelector('.information h1').style.width = "500px";
        document.querySelector('.information p').innerText = 'Becoming an IT specialist requires starting from the basics. You must familiarize yourself with everything related to computers and information technologies: understanding how they work, installing operating systems like Windows on machines, facilitating their communication, managing them effectively, and solving hardware-related problems. Additionally, it is essential to learn how to manage users within the network by logging in via accounts, permissions, passwords, and Active Directory.';
        document.querySelector('.information button').innerText = 'Apply';
        document.querySelector('.our-courses').innerText = 'Our Courses';
        document.querySelector('.tedristext').innerText = 'Courses we offer';


        document.querySelectorAll('.container p').forEach(function (element) {
            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Şəbəkə') {
                element.innerText = 'Network';
            } else if (element.innerText == 'Sistem Inzibatçılığı') {
                element.innerText = 'System Administrator';
            }
        });


        document.querySelector('.btn').innerText = 'Apply Now';
        document.querySelector('.career center h1').innerText = 'Career Support';
        document.querySelector('.career center p').innerText = 'Start with "Digital Technology Education Center"';


        document.querySelectorAll(".cv-support h4").forEach(function (element) {
            if (element.innerText == 'CV hazırlanmasına dəstək') {
                element.innerText = 'CV Preparation Support';
            } else if (element.innerText == 'İşə götürənlərlə əlaqələr') {
                element.innerText = 'Relations with employers';
            } else if (element.innerText == 'Karyera bələdçisi') {
                element.innerText = 'Career guide';
                element.style.marginLeft = "-60px"
            } else if (element.innerText == 'Müsahibəyə hazırlıq təlimi') {
                element.innerText = 'Interview preparation training';
                element.style.marginLeft = "-95px"
            } else if (element.innerText == 'Təcrübə proqramları') {
                element.innerText = 'Internship programs';
            } else if (element.innerText == 'Tövsiyə məktubu') {
                element.innerText = 'letter of recommendation';
                element.style.marginLeft = "-105px"
            }
        });

        document.querySelectorAll(".cv-support p").forEach(function (element) {
            if (element.innerText == 'IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.') {
                element.innerText = "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.";
            } else if (element.innerText == "Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.") {
                element.innerText = 'We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.';
            } else if (element.innerText == 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.') {
                element.innerText = 'The career guide is always with you during the course, guides you and prepares you for a successful career.                ';
            } else if (element.innerText == 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.') {
                element.innerText = 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.';
            } else if (element.innerText == 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!') {
                element.innerText = 'All job postings require experience. We will provide the internship program after successful graduation!';
            } else if (element.innerText == 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.') {
                element.innerText = 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.';
            }
        });


        document.querySelector('.our-future h1').innerText = 'Build your future today!';
        document.querySelector('.our-boxs h1').innerText = 'Our difference';


        document.querySelectorAll(".information-boxes h3").forEach(function (element) {
            if (element.innerText == '24 saat açıq mərkəz') {
                element.innerText = '24 hour open center';
                element.style.marginLeft = "126px"
            } else if (element.innerText == 'Flipped Classroom metodu') {
                element.innerText = 'The Flipped Classroom method';
            } else if (element.innerText == 'Karyera dəstəyi') {
                element.innerText = 'Career support';
            } else if (element.innerText == 'Ödənişsiz sınaq dərsi') {
                element.innerText = 'Free trial lesson';
                element.style.marginLeft = "115px"
            } else if (element.innerText == 'Tədris formatında seçim') {
                element.innerText = 'Choice of teaching format';
            } else if (element.innerText == 'Mentor dəstəyi') {
                element.innerText = 'Mentor support';
            }
        });


        document.querySelectorAll(".information-boxes p").forEach(function (element) {
            if (element.innerText == 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.') {
                element.innerText = 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.';
            } else if (element.innerText == 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.') {
                element.innerText = 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.';
            } else if (element.innerText == 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.') {
                element.innerText = 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.';
            } else if (element.innerText == 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.') {
                element.innerText = 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.';
            } else if (element.innerText == 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.') {
                element.innerText = 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.';
            } else if (element.innerText == 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.') {
                element.innerText = 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.';
            }
        });

        document.querySelector('.header').innerText = 'Our graduates';
        document.querySelector('.ourtext').innerText = 'They talk about us';
        document.querySelector('.comments-boxs p').innerText = "One of the main goals of the education strategy is to prepare personnel who can compete in the global market. Considering this, Digital Technology Education Center assesses the potential of those who want to build a career in this field in Azerbaijan and abroad, and provides them with the necessary knowledge and practical skills for their personal and professional development. It teaches people the technology skills they need to build new careers using interactive technology. As part of the Digital Technology Education Center, I also took advantage of the course's high-level learning opportunities. I am sure that this will have a positive impact on my future career plans. I would like to express my gratitude to the management and work team that created this situation for us. I recommend this course to anyone who wants to become a better IT Help Desk professional. Remember that anyone can learn IT and become a good IT professional. Just believe you can do it!";
        document.querySelector('.teaching-teacher h1').innerText = 'Teaching';
        document.querySelector('.teaching-teacher p').innerText = 'Our teacher';
        document.querySelector('.main-duties').innerText = 'Main Duties';


        document.querySelectorAll("li").forEach(function (element) {
            if (element.innerText == 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.') {
                element.innerText = 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.';
            } else if (element.innerText == 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.') {
                element.innerText = 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.';
            } else if (element.innerText == 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.') {
                element.innerText = 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.';
            } else if (element.innerText == 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.') {
                element.innerText = 'Installing, updating and configuring software applications to optimize functionality.';
            } else if (element.innerText == 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.') {
                element.innerText = 'Manage user accounts, access permissions and security configurations.';
            } else if (element.innerText == 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.') {
                element.innerText = 'Providing remote technical assistance using remote desktop tools.';
            } else if (element.innerText == 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.') {
                element.innerText = 'Documenting support activities and solutions to maintain knowledge base.';
            } else if (element.innerText == 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.') {
                element.innerText = 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.';
            } else if (element.innerText == 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.') {
                element.innerText = 'Informing users about the status of their support requests.';
            } else if (element.innerText == 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.') {
                element.innerText = 'Ensuring high customer satisfaction through professional and friendly interactions.';
            }
        });


        document.querySelectorAll('.instagram-box a').forEach(function (element) {
            if (element.innerText == 'Daha ətrafli') {
                element.innerText = 'More details';
            }
        });

        document.querySelectorAll('.the-media p').forEach(function (element) {
            if (element.innerText == 'Yeni nə var ?') {
                element.innerText = "What's new?";
            }
        });


        document.querySelector('.abuntext').innerText = 'If you want to be informed about our news and campaigns, subscribe';
        document.querySelector('.subscribe input').placeholder = 'Enter your email';
        document.querySelector('.subscribe button').innerText = 'Subscribe';
        document.querySelector('.subscribe').style.marginLeft = '70px';
        document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, the address of those who want to become a professional "IT specialist (IT Helpdesk, Network, System administrator)"!';
        document.querySelector('.kurs h2').innerText = 'Courses';


        document.querySelectorAll('.kurs a').forEach(function (element) {

            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Şəbəkə') {
                element.innerText = 'Network';
            } else if (element.innerText == 'Sistem Inzibatçılığı') {
                element.innerText = 'System Administrator';
            }
        });


        document.querySelectorAll('.menu p').forEach(function (element) {

            if (element.innerText == 'Karyera Dəstəyi') {
                element.innerText = 'Career Support';
            } else if (element.innerText === 'Suallar') {
                element.innerText = 'Questions';
            } else if (element.innerText == 'Əlaqə') {
                element.innerText = 'Contact';
            }
        });


        document.querySelector('.the-end-Contact h2').innerText = 'Contact';
        document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, All rights reserved!';


        document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
            if (element.innerText == 'Abşeron rayonu Masazir qesebesi') {
                element.innerText = "Masazir village, Absheron district";
            }
        });

        flag = false

    } else if (flag == false && select.value == "az") {
        subscribeMessage.innerText = "Uğurla abunə olundu!"

        document.querySelectorAll('.hidden-course a').forEach(function (element) {
            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Network') {
                element.innerText = 'Şəbəkə';
            } else if (element.innerText == 'System Administrator') {
                element.innerText = 'Sistem Inzibatçılığı';
            }
        });


        document.querySelectorAll(".digital-technology a").forEach(function (element) {
            if (element.innerText == 'About Us') {
                element.innerText = 'Haqqımızda';
            } else if (element.innerText == 'Questions') {
                element.innerText = 'Suallar';
            }
        });

        document.querySelectorAll(".texts a").forEach(function (element) {
            if (element.innerText == 'Courses') {
                element.innerText = 'Kurslar';
            } else if (element.innerText == 'Career Support') {
                element.innerText = 'Karyera Dəstəyi';
            } else if (element.innerText == 'Resources') {
                element.innerText = 'Resurslar';
            } else if (element.innerText == 'Contact') {
                element.innerText = 'Əlaqə';
            }
        });


        document.querySelector('.texts button').innerText = 'Müraciət et';
        document.querySelector('.information h1').innerText = 'Cəmi 6 aya ixtisaslaşacağın IT HelpDesk kursu';
        document.querySelector('.information h1').style.width = "500px";
        document.querySelector('.information p').innerText = 'İT mütəxəssisi olmaq əsaslardan başlamağı tələb edir. Siz kompüterləri və informasiya texnologiyaları ilə əlaqəli hər şeyi mənimsəməlisiniz: onların necə işlədiyini anlamaq, Windows kimi əməliyyat sistemlərini maşınlara quraşdırmaq, onların ünsiyyətini asanlaşdırmaq, onları effektiv idarə etmək və aparatla bağlı problemləri həll etmək. Eyni zamanda, istifadəçi hesabları, icazələr, parollar və Active Directory vasitəsilə giriş daxil olmaqla, şəbəkə daxilində istifadəçiləri necə idarə etməyi öyrənmək çox vacibdir.';
        document.querySelector('.information button').innerText = 'Müraciət et';
        document.querySelector('.main').style.height = '970px';
        document.querySelector('.our-courses').innerText = 'Kurslarımız';
        document.querySelector('.tedristext').innerText = 'Tədris etdiyimiz kurslar';


        document.querySelectorAll('.container p').forEach(function (element) {
            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Network') {
                element.innerText = 'Şəbəkə';
            } else if (element.innerText == 'System Administrator') {
                element.innerText = 'Sistem Inzibatçılığı';
            }
        });


        document.querySelector('.btn').innerText = 'indi müraciət et';
        document.querySelector('.career center h1').innerText = 'Karyera Dəstəyi';
        document.querySelector('.career center p').innerText = '"Digital Technology Education Center" ile başla';


        document.querySelectorAll(".cv-support h4").forEach(function (element) {
            if (element.innerText == 'CV Preparation Support') {
                element.innerText = 'CV hazırlanmasına dəstək';
            } else if (element.innerText == 'Relations with employers') {
                element.innerText = 'İşə götürənlərlə əlaqələr';
            } else if (element.innerText == 'Career guide') {
                element.innerText = 'Karyera bələdçisi';
                element.style.marginLeft = "-75px"
            } else if (element.innerText == 'Interview preparation training') {
                element.innerText = 'Müsahibəyə hazırlıq təlimi';
            } else if (element.innerText == 'Internship programs') {
                element.innerText = 'Təcrübə proqramları';
            } else if (element.innerText == 'letter of recommendation') {
                element.innerText = 'Tövsiyə məktubu';
                element.style.marginLeft = "-76px"
            }
        });


        document.querySelectorAll(".cv-support p").forEach(function (element) {
            if (element.innerText == "What does an IT engineer's CV look like? We will prepare for you when you graduate. Because our graduates work in local and global companies with the CVs we prepare.") {
                element.innerText = "IT muhəndisinin, CV-si necə olur? Məzun olanda sənə də hazırlayacağıq. Çünki hazırladığımız CV-lərləməzunlarımız yerli və qlobal şirkətlərdə çalışır.";
            } else if (element.innerText == "We facilitate the opportunity to find a job by establishing close relations with local and foreign companies, government institutions, startups.") {
                element.innerText = 'Yerli və xarici şirkətlər, dövlət qurumları, startaplarla sıx əlaqələr quraraq iş tapma imkanını asanlaşdırırıq.';
            } else if (element.innerText == 'The career guide is always with you during the course, guides you and prepares you for a successful career.') {
                element.innerText = 'Karyera bələdçisi kurs müddətində daim yanında olur, səni istiqamətləndirir və uğurlu karyeraya hazırlayır.';
            } else if (element.innerText == 'In this training, we will share real experiences with you, inform you of the questions and tasks that await you, and fully prepare you for the interview.') {
                element.innerText = 'Bu təlimdə real təcrübələri səninlə bölüşəcək, səni gözləyən sual və tapşırıqlardan xəbərdar edəcək və müsahibəyə tam hazırlayacağıq.';
            } else if (element.innerText == 'All job postings require experience. We will provide the internship program after successful graduation!') {
                element.innerText = 'Bütün iş elanlarında təcrübə tələb olunur. Təcrübə proqramını isə uğurla məzun olduqdan sonra biz təmin edəcəyik!';
            } else if (element.innerText == 'Upon successful graduation from the Digital Technology Education center, the letter of recommendation we write on behalf of our Academy helps in the recruitment process.') {
                element.innerText = 'Digital Technology Education center -dən uğurla məzun olduqda Akademiyamız adından yazdığımız tövsiyə məktubu işə qəbul prosesində köməyinə çatır.';
            }
        });


        document.querySelector('.our-future h1').innerText = 'Gələcəyini bu gün inşa et!';
        document.querySelector('.our-boxs h1').innerText = 'Bizim fərqimiz';


        document.querySelectorAll(".information-boxes h3").forEach(function (element) {
            if (element.innerText == '24 hour open center') {
                element.innerText = '24 saat açıq mərkəz';
                element.style.marginLeft = "95px"
            } else if (element.innerText == 'The Flipped Classroom method') {
                element.innerText = 'Flipped Classroom metodu';
            } else if (element.innerText == 'Career support') {
                element.innerText = 'Karyera dəstəyi';
            } else if (element.innerText == 'Free trial lesson') {
                element.innerText = 'Ödənişsiz sınaq dərsi';
                element.style.marginLeft = "85px"
            } else if (element.innerText == 'Choice of teaching format') {
                element.innerText = 'Tədris formatında seçim';
            } else if (element.innerText == 'Mentor support') {
                element.innerText = 'Mentor dəstəyi';
            }
        });


        document.querySelectorAll(".information-boxes p").forEach(function (element) {
            if (element.innerText == 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned, and benefit from the experience of professionals.') {
                element.innerText = 'Əsl peşəkar olmaq üçün peşəkarların mühitində olmaq lazımdır. Akademiyamız 7/24 açıqdır. Burada öyrənə, öyrəndiklərini paylaşa, peşəkarların təcrübələrindən yararlana bilərsən.';
            } else if (element.innerText == 'During the course, theoretical knowledge is sent to you through video tutorials. You learn theoretical knowledge at home, and in class you spend time in practical exercises and complete your knowledge with experience.') {
                element.innerText = 'Kurs müddətində nəzəri biliklər video-dərsliklər vasitəsilə sənə göndərilir. Nəzəri bilikləri evdə öryənir, dərsdə isə vaxt itirmədən praktiki məşğələlər keçir, biliklərini təcrübə ilə tamamlayırsan.';
            } else if (element.innerText == 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide an opportunity to start working life quickly.') {
                element.innerText = 'Uğurlu karyera üçün zəruri bilik və bacarıqlara yiyələnməlisən. Peşəkar komandamız bu yolda sənə kömək edəcək. Biznes əlaqələrimiz isə iş həyatına tez başlamağın üçün imkan yaradacaq.';
            } else if (element.innerText == 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.') {
                element.innerText = 'Yüz eşitməkdənsə, bir görmək yaxşıdır. Ödənişsiz sınaq dərsimiz sənə qərar verməkdə kömək edir. Dərslərdə iştirak edib, suallarına mütəxəssislərimizin köməyi ilə cavab tapa bilərsən.';
            } else if (element.innerText == 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.') {
                element.innerText = 'Təlim prosesində həm əyani, həm də distant formada iştirak edə bilərsən. İstər əyani, istərsə də istədiyin məkandan distant formada qoşulduğun dərslər eyni proqram əsasında tədris olunur.';
            } else if (element.innerText == 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.') {
                element.innerText = 'Öyrənmə prosesini asanlaşdırmaq üçün mentorlarımız daima yanında olur. Onlar öyrənmə prosesində rahatlıqla suallarını verib, qısa zamanda cavab ala biləcəyin əlçatan bələdçilərdir.';
            }
        });

        document.querySelector('.header').innerText = 'Məzunlarımız';
        document.querySelector('.ourtext').innerText = 'Bizdən bəhs edirlər';
        document.querySelector('.comments-boxs p').innerText = 'Təhsil strategiyasının əsas məqsədlərindən biri qlobal bazarda rəqabət apara biləcək kadrlar hazırlamaqdır. "Digital Technology Education Center" bunu nəzərə alaraq Azərbaycanda və xaricdə bu sahə üzrə karyera qurmaq istəyənlərin potensialını dəyərləndirərək, fərdi və peşəkar inkişafları üçün onları zəruri bilik və praktiki vərdişlərlə təmin edir. İnsanlara yeni karyera qurmaq üçün lazım olan texnoloji bacarıqları interaktiv texnologiyadan istifadə edərək öyrədir. Mən də "Digital Technology Education Center"-nin bir parçası olaraq kursun yüksək səviyyəli təhsil imkanlarından yararlandım. Bunun mənim gələcəkdəki kayera planlarıma bir müsbət olaraq yansıyacağına əminəm. Bizə bu şəraiti yaradan rəhbərliyə, iş kollektivinə minnətdarlığımı bildirmək istərdim. Bu kursu daha yaxsi "IT Help Desk " mütəxəsisi olmaq isteyen hər kəsə tövsiyə edirəm. Hər kəsin İT öyrənməyi və yaxşı bir İT mütəxəsisi ola biləcəyini unutmayın. Yalnız bunu edə biləcəyinizə inanın!';
        document.querySelector('.teaching-teacher h1').innerText = 'Tədris';
        document.querySelector('.teaching-teacher p').innerText = 'Müəllimimiz';
        document.querySelector('.main-duties').innerText = 'Əsas Vəzifələri';



        document.querySelectorAll("li").forEach(function (element) {
            if (element.innerText == 'Providing prompt and effective technical assistance to end users, resolving hardware, software and network related issues.') {
                element.innerText = 'Son istifadəçilərə operativ və effektiv texniki yardımın göstərilməsi, aparat, proqram təminatı və şəbəkə ilə bağlı məsələlərin həlli.';
            } else if (element.innerText == 'Diagnose and resolve complex technical issues to minimize downtime and restore services efficiently.') {
                element.innerText = 'Boş vaxtları minimuma endirmək və xidmətləri səmərəli şəkildə bərpa etmək üçün mürəkkəb texniki problemlərin diaqnostikası və həlli.';
            } else if (element.innerText == 'Perform computer installation, upgrades, and repairs in addition to configuring peripherals.') {
                element.innerText = 'Periferik qurğuların konfiqurasiyası ilə yanaşı, kompüter quraşdırma, təkmilləşdirmə və təmir işlərini yerinə yetirmək.';
            } else if (element.innerText == 'Installing, updating and configuring software applications to optimize functionality.') {
                element.innerText = 'Funksionallığı optimallaşdırmaq üçün proqram proqramlarının quraşdırılması, yenilənməsi və konfiqurasiyası.';
            } else if (element.innerText == 'Manage user accounts, access permissions and security configurations.') {
                element.innerText = 'İstifadəçi hesablarını, giriş icazələrini və təhlükəsizlik konfiqurasiyalarını idarə etmək.';
            } else if (element.innerText == 'Providing remote technical assistance using remote desktop tools.') {
                element.innerText = 'Uzaqdan iş masası alətlərindən istifadə edərək uzaqdan texniki yardımın göstərilməsi.';
            } else if (element.innerText == 'Documenting support activities and solutions to maintain knowledge base.') {
                element.innerText = 'Bilik bazasını saxlamaq üçün dəstək fəaliyyətlərinin və həllərin sənədləşdirilməsi.';
            } else if (element.innerText == 'Collaborate with IT teams to escalate complex issues and ensure timely resolution.') {
                element.innerText = 'Mürəkkəb problemləri artırmaq və vaxtında həllini təmin etmək üçün İT komandaları ilə əməkdaşlıq etmək.';
            } else if (element.innerText == ' Informing users about the status of their support requests.') {
                element.innerText = 'İstifadəçilərin dəstək sorğularının statusu haqqında məlumatlandırılması.';
            } else if (element.innerText == 'Ensuring high customer satisfaction through professional and friendly interactions.') {
                element.innerText = 'Peşəkar və səmimi qarşılıqlı əlaqə vasitəsilə yüksək müştəri məmnuniyyətinin təmin edilməsi.';
            }
        });

        document.querySelectorAll('.instagram-box a').forEach(function (element) {
            if (element.innerText == 'More details') {
                element.innerText = 'Daha ətrafli';
            }
        });

        document.querySelectorAll('.the-media p').forEach(function (element) {
            if (element.innerText == "What's new ?") {
                element.innerText = "Yeni nə var ?";
            }
        });


        document.querySelector('.abuntext').innerText = 'Yeniliklərdən və kampaniyalarımızdan xəbərdar olmaq istəyirsinizsə abunə olu';
        document.querySelector('.subscribe input').placeholder = 'Emailinizi daxil edin';
        document.querySelector('.subscribe button').innerText = 'Abunə ol';
        document.querySelector('.about-dtec').innerText = 'Digital Technology Education Center, məqsədi peşəkar "It mütəxəssisi (IT Helpdesk, Şəbəkə, Sistem administratoru )" olmaq istəyənlərin ünvanı!';
        document.querySelector('.kurs h2').innerText = 'Kurslar';


        document.querySelectorAll('.kurs a').forEach(function (element) {

            if (element.innerText == 'IT HelpDesk') {
                element.innerText = 'IT HelpDesk';
            } else if (element.innerText === 'Network') {
                element.innerText = 'Şəbəkə';
            } else if (element.innerText == 'System Administrator') {
                element.innerText = 'Sistem Inzibatçılığı';
            }
        });


        document.querySelectorAll('.menu p').forEach(function (element) {

            if (element.innerText == 'Career Support') {
                element.innerText = 'Karyera Dəstəyi';
            } else if (element.innerText === 'Questions') {
                element.innerText = 'Suallar';
            } else if (element.innerText == 'Contact') {
                element.innerText = 'Əlaqə';
            }
        });


        document.querySelector('.the-end-Contact h2').innerText = 'Əlaqə';
        document.querySelector('.endtext').innerText = '© Digital Technology Education Center 2024, Bütün hüquqlar qorunur !';


        document.querySelectorAll('.the-end-Contact a').forEach(function (element) {
            if (element.innerText == 'Masazir village, Absheron district ') {
                element.innerText = "Abşeron rayonu Masazir qesebesi";
            }
        });
        flag == true
    }
})



courseText.addEventListener("mouseover", () => {
    hiddenCourse.style.display = "flex"
})

courseText.addEventListener("mouseleave", () => {

    hiddenCourse.addEventListener("mouseover", () => {
        hiddenCourse.style.display = "flex"
    })

    hiddenCourse.addEventListener("mouseleave", () => {
        hiddenCourse.style.display = "none"
    })
    hiddenCourse.style.display = "none"
})

educationCenter.addEventListener("mouseover", () => {
    digitalTechnology.style.display = "flex"
})

educationCenter.addEventListener("mouseleave", () => {

    digitalTechnology.addEventListener("mouseover", () => {
        digitalTechnology.style.display = "flex"
    })

    digitalTechnology.addEventListener("mouseleave", () => {
        digitalTechnology.style.display = "none"
    })
    digitalTechnology.style.display = "none"
})