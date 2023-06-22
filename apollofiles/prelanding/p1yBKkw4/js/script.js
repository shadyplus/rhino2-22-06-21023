setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "RHINO";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year;
const massange = [{
    m: "مرحبا بكم في الإستشارة المجانية  عبر الإنترنت! أنا الطبيب   دينيس بوتوف. هنا أقوم بإجراء تشخيصات مجانية وتقنيات شخصية ساعدت الكثير من  الرجال على التخلص من مشاكل البروستات . "
}, {
    m: "أعتقد انك هنا  من أجل مسألة حساسة للغاية تتعلق بتحسين صحة البروستات وتحسين رفاهيتك. لحسن الحظ انك جئت إلى هنا  ، حتى تتمكن من التخلص من مشاكل البروستات  ."
}, {
    m: "للحصول على التشخيص المناسب  ، أجب عن بعض الأسئلة من فضلك . "
}, {
    m: '<p class="quest">كم عمرك؟ </p>'
}, {
    m: '<p class="quest">ما  هي الأعراض الأكثر انتشارًا بالنسبة ليك؟</p>'
}, {
    m: '<p class="quest"> كم من الوقت و انت تعاني بالفعل من هذه المشكلة؟ </p>'
}, {
    m: '<p class="quest">هل تعاني من كثرة التبول أو صعوبة التبول؟</p>'
}, {
    m: '<p class="quest">هل هناك تغير في لون البول ؟</p>'
}, {
    m: '<p class="quest">هل تعاني من ألم أو حرقان أثناء التبول؟ </p>'
}, {
    m: "شكرا لك على الرد . سوف أكون صريحاً معك : مشكلتك  لها عواقب منهجية معقدة . في هذه الحالة ، ليس من المنطقي اللجوء إلى  طرق الطرق  للتهلص من هذه المشاكل .  "
}, {
    m: "يجب أن تفهم أن مشاكل  البروستات ليس فقط هي  مشكلة  التبول. إنها حالة جدية  ، إذا تركتها بدون حل  ،سوف  تؤدي إلى الإصابة بمشاكل صحية كبيرة .\n"
}, {
    m: "يمكن أن تتطور المشكلة  ببطء ، مثل قنبلة موقوتة لن تنفجر بالضرورة على الفور ، ولكن مع احتمال كبير جداً  سوف تنفجر عاجلا أم آجلا\n "
}, {
    m: "حتى وقت قريب ، لم يكن هناك طريقة فعالة للتخلص من مشاكل البروستات ."
}, {
    m: "نظرًا لتعقيد حالتك وأهمية حلها في أسرع وقت ممكن ، لن اعطيك المزيد من المنتجات غير المفيدة التي لن تعود عليك بأي نفع ."
}, {
    m: "الحل الأكثر فعالية الذي  يمكن أن أنصحك  به هو "+ OFFER +". "
},{
    m: "سيؤدي ذلك المنتج  بشكل طبيعي إلى تحسين عملية التمثيل الغذائي في أنسجة العضو المصاب ، وتحسين الدورة الدموية ، وبالتالي القضاء على مشاكل البروستات  ، وبالتالي تنشيط  الجهاز البولي. "+ OFFER +" سوف يساعد في التخلص من مشاكل  البروستات في أقل وقت "
}, {
    m: "هذا مكمل غذائي  فريد من نوعه ، ليس له نظائر الأن ."
}, {
    m: "هذا هو شكل العبوة :"
}, {
    m: ' <img src="apollofiles/prelanding/p1yBKkw4/img/prod.png" class="product-img" style="width: 100%; max-width: 240px;">'
}, {
    m: "يساعد حتى في حالات الضعف الجنسي و ضعف الإنتصاب و مشاكل البروستات  ، و تنشيط  الجهاز البولي و التخلص من مشاكل البروستات خصوصاً للأشخاص فوق سن 25 سنة . والأهم من ذلك ، يمكن استخدامه في المنزل. "
}, {
    m: "بالإضافة إلى المشاكل الجنسية عند الرجال  ، "+ OFFER +" نجح في ان يحصل على رضا جميع من إستخدموه من اللذين لديهم مشاكل البروستات  "
}, {
    m: "تكمن ميزته في  المكونات الطبيعية فيه  و تركيبته  الخاصة للعمل على جسم الرجل . و تنشيط هرمون التستستيرون  "+ OFFER +"."
}, {
    m: "المميزات  الرئيسية التي يمكن توقعها بعد استخدام هذا المكمل الغذائي هي : تطبيع الوظيفة البولية والوظيفة الجنسية. "
}, {
    m: " الكثير  من الرجال الذين إستخدموا  "+ OFFER + " أكدوا فعاليته ."
}, {
    m: 'أشاركك  سراً هذه  المراجعات من الأشخاص اللذين إستخدموا هذا المنتج المذهل : '
},  {
    m: ' <img src="apollofiles/prelanding/p1yBKkw4/img/Rev1.jpg"> '
},{
    m: '<img src="apollofiles/prelanding/p1yBKkw4/img/Rev2.jpg">'
},{
    m: '<img src="apollofiles/prelanding/p1yBKkw4/img/Rev3.jpg"> '
},{
    m: "لدي أيضاً خبر سار لك . أنت الشخص رقم 200 الذي اشخصه عبر الإنترنت ."
}, {
    m: "إضغط على زر SPIN أدناه و إذا كنت  محظوظاً  ، يمكنك  طلب "+ OFFER +" بسعر أقل من المعتاد! عدد العبوات المتاحة في هذا العرض  محدود ،فأنصحك  بالإسراع في الطلب."
}];
var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0,
    text = "",
    speedtext = 85,
    process = !0;

function app() {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2),
        t = ("0" + e.getHours()).slice(-2) + ":" + s;
    if ($(".chat").height() + 100 > $(".content").height()) {
        $("#scroll_id").removeClass("hide");
        var n = $(".inp").val();
        $(".inp").val(++n)
    }
    const c = '<div class="chat-content-item manager "><div class="img-doc"><img src="apollofiles/prelanding/p1yBKkw4/img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">دينيس بوتوف</span><div class="chat-content-desc-item manager ch1"><p class="text text_img" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + t + '</p></div></div>';
    $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
        let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><span class="doc-name doc-dir">أنت</span><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + "</p></div>"+ '<p className="message-time new_time" id="time">' + (("0" + s.getHours()).slice(-2) + ':' + t) + '</p></div></div>';
    $(".chat-content-list").append(n), $(".content").animate({
        scrollTop: $(".chat-content-list").height()
    }, 700), $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">حتى 20 عامًا</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">21-30 عامًا</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">31-40 عامًا</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">أكثر من 40 عامًا</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 20 عامًا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("21-30 عامًا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("31-40 عامًا"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 40 عامًا"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">التغيرات في لون البول</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">ألم أو حرق في الأعضاء التناسلية</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">مشاكل التبول</span></div></div>')
}

function choise2() {

    $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("التغيرات في لون البول"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ألم أو حرق في الأعضاء التناسلية"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("مشاكل التبول"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">سنة أو أقل</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">1-3 سنوات</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أكثر من 3 سنوات</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("سنة أو أقل"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("1-3 سنوات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 3 سنوات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">لا</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">لا</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">لا</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}




setTimeout(() => {
    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="img-doc"><img src="apollofiles/prelanding/p1yBKkw4/img/header-ava-eac-arb.png" alt=""> </div><div class="chat-content-desc"><span class="doc-name">دينيس بوتوف</span><div class="chat-content-desc-item manager ch1"><p class="text" id="mass' + mass_id + '"></p></div><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height()
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height()
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app()
                }
            } else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});

function viewDiv(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";
  };

  function viewDiv2(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";
    
  };
  function viewDiv3(){
    document.getElementById("div1").style.display = "none";
    document.querySelector(".content").style.opacity = "1";
    
  };
  function viewDiv4(){
    document.getElementById("div1").style.display = "block";
    document.querySelector(".content").style.opacity = "0.5";
    
  };





 