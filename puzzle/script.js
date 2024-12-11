const questions = [
  "شيء بيني وبينك لا عيني رأته ولا عينك ؟ ",
  "شيء يستطيع حمل قنطار ولا يستطيع حمل مسمار ؟",
  "ماالشيء الذي كلما زاد نقص؟",
  "ضعيف حتى أن النسيم يحركه وقوي حتى أن السكين الحاد لا يترك في أي أثر ؟فما هو ؟",
  "ماالشيء الذي صانعه يبيعه وشاريه لايستعمله ومستعمله لايراه؟",
  "ماهوالشيء الموجود في كل شيء ؟",
  "يسير بلارجلين ولايدخل إلى الإذن ماهو؟",
  "ماهو الذي يكون أخضر في الأرض ويكون أسود في السوق ويكون أحمر في البيت؟",
  "ماهو الشيء الذي يكتب ولا يقرأ؟",
  "ماهو الشيء الذي إن غليته جمد؟",
  "ماهو الحيوان الذي يحك أذنه بأنفه؟",
  "من هو الشخص الذي يتمنى أن يكون للإنسان رأسان بدلا من رأس واحد؟",
  "ماهو البيت الذي لايسكن فيه أحد؟",
  "هناك عقرب لا يلدغ ولا يخاف منه أحد الأطفال ماهو؟",
  "ماهو الشيء الذي تملكه أنت ولكن يستعمله الآخرون أكثر منك؟",
  "ماهو الشيء الذي كلما أخذت منه كبر؟",
  "ماهو الشيء الذي يتكلم جميع اللغات؟",
  "ماهو الشيئ الذي اسمه على لونه؟",
  "ماهوالشيء الذي ينقلنا من مكان إلى آخر دون أن يتحرك؟",
  "ماهو الشيء الذي يخترق الزجاج ولايكسره؟",
  "ماهو الشيء الذي له أربع أرجل ومع ذلك لايمشي ؟",
  "شيء أعمى وأخرس وأطرش ولا يمشي إلا على رأسه ماهو؟ ",
  "ماهو الشيء الذي إذاأردت أن تستعمله رميته؟",
  "هو داخل الغرفة وخارجها في نفس الوقت فما هو؟",
  "ليس شجرة رغم أنه يحوي أوراقا كثيرة فما هو؟",
  "حامل ومحمول نصفه في الماء ونصفه في الهواء ؟",
  "ماهي التي تمشي بلا رجلين وتبكي بلا عينين؟",
  "له جسم وله عظم بلا أنفاس ولا يعيش إلا بقطع الرأس ماهو ؟",
  "يحبها الناس جدا وعندما يحصلون عليها يضربونها بأقدامهم ماهي ؟",
  " ماهو الشيء الذي لايتنفس ولا روح له ؟",
  "ماهي التي تأكل ولا تشبع؟",
  "ماهو الشيء الذي يستحيل كسره؟",
  "ماهو الشيء الذي ينبض بلا قلب ؟",
  "ماهوالشيء الذي يمشي ويقف وليس له أرجل ؟",
  "من هي التي تسمع من قدميها ؟",
  "ماهي السورة التي يوجد في جميع آياتها لفظ الجلالة؟",
  "ماهوالشيء الذي له جلد وليس بحيوان وله ورق وليس نبات وله مخ وليس بإنسان ؟",
  "شيء في جمسك من ثلاثة حروف الأول و الثاني طائر والأول والثالث مشروب مشهور والثاني والثالث وحدة موازين ماهو؟",
  "يسمع بلا أذن ويتكلم بلا لسان فما هو ؟",
  "ماهو الشيء الذي إذاضغطه صاح؟",
  "ترى كل شيء ولكن ليس لها عيون ؟",
  "يتحرك دائما حواليك لكنك لا تراه ماهو؟",
  "ماهوالشيء الذي لايتكلم إذاأكل صدق وإذاجاع كذب ؟",
  "له عين ولا يرى ماهو ؟",
  "ماالذي يطلبه الناس إذا غاب عنهم وإذا حضر هربوامنه؟",
  "نوع من أنواع الطيور يتكون من حرفين وإذا قلبت الكلمة صارت اسم مهنة؟",
  "شيء يجلس مجلس الرجال ويلبس لبس النساء؟",
  "بارع في الكتابة وماهر في الرسم يذيب جسمه في عمله فيزداد قصرا كلما طال عمره فما هو؟",
  "ماهو الذي يلف جسمك ولا تلمسه ويدخل كفك ولاتمسكه ويدخل فمك ولا تأكله؟",
  "سورة في القرآن لم يذكر فيها حرف الفاء؟",
  "يستطيع أن يحمل أطنانا من الخشب ولكنه لا يستطيع أن يحمل مسمارا فماهو؟",
  "ماهو الشيء الذي يكون أمام كل إنسان ولا يراه ؟",
  " شهر هجري إذاحذفت وسطه يتحول إلى فاكهة؟",
  "وش اللي أول ما يولد يكون أربع بعدين إثنين بعدين ثلاث؟",
  "ماهوالشيء الذي إذا قطعت رأسه طار؟",
  "ابنه في بطنه يركله ويلكمه وكلما ركله ولكمه علاصوته؟",
  "طير طار في الأسحار ليس له ريش أو منقار ماهو؟",
  "ثلاثة بالاسم سموا لا اجتمعو ولا التموا واحد بالسما لماع واحد مندفن في القاع واحد في يد الصناع ؟",
  "ماهو الشيء الذي موجود في جسم كل الناس إلا سيدنا آدم؟",
  "يكون نظيفا كلما كان أسود فماذا يكون؟",
  "بنت في كل مجلس تخضع لها الروؤس وإن مرت عند رجال انحنى ؟",
  "هو الطائر الذي ينهى عن قتله في الحل والحرم ؟ ",
];
const wordsarray = [
  "الهواء",
  "البحر",
  "العمر",
  "الماء",
  "الكفن",
  "الاسم",
  "الصوت",
  "الشاي",
  "القلم",
  "البيض",
  "الفيل",
  "الحلاق",
  "بيتالشعر",
  "عقربالساعة",
  "الاسم",
  "الحفرة",
  "الصدى",
  "البيضة",
  "الطريق",
  "الضوء",
  "الكرسي",
  "العلم",
  "شبكةالصيد",
  "بابالغرفة",
  "الكتاب",
  "السفينة",
  "السحابة",
  "الرصاص",
  "كرةالقدم",
  "الصبح",
  "النار",
  "المبتدأ",
  "الساعة",
  "الساعة",
  "الجرادة",
  "المجادلة",
  "الكتاب",
  "بطن",
  "التلفون",
  "الجرس",
  "مرآة",
  "الهواء",
  "الجوع",
  "الإبرة",
  "المطر",
  "بط",
  "الصقر",
  "القلم",
  "الهواء",
  "الفاتحة",
  "الماء",
  "المستقبل",
  "شهررمضان",
  "الإنسان",
  "قطار",
  "الجرس",
  "الوطواط",
  "عقرب",
  "السرة",
  "السبورة",
  "المبخرة",
  ",الهدهد",
];

alphabet = [
  "أ",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
];

///////////////////////////////////////////////////////////////////////
var Turn = 0;
var MyRecord = 0;
var wordanswer = 0;
var wordaslist = [];
var sugg_letters = "";
///////////////////////////////////////////////////////////////////////
let date = new Date();
let year = date.getFullYear();
const blanksq_cont = document.querySelectorAll(".blanksq_cont")[0];
const sugg_letters_cont = document.querySelectorAll(".sugg_letters")[0];
const popup = document.querySelector("#popup");
const next = document.querySelector("#next");
const stars = document.querySelector("#stars");
const question = document.querySelector("#question");
const record = document.querySelector("#record");
const turnnum = document.querySelector("#turn");
const back = document.querySelector("#back");
var counter = 0;
var collectedword = "";
var Group = 0;
///////////////////////////////////////////////////////////////////////
function Start() {
  //////////Reset values//////////////////
  counter = 0;
  wordaslist = [];
  collectedword = "";
  Turn = getTurn();
  MyRecord = getrecord();
  wordanswer = wordsarray[Turn];
  question.textContent = questions[Turn];
  turnnum.textContent = Turn + 1;
  record.textContent = MyRecord;
  Group = Math.floor(Turn / 10);
  detrgroup();
  introsound.play();
  ////////////////////////////////////////

  //make word in list
  for (let index = 0; index < wordanswer.length; index++) {
    wordaslist.push(wordanswer[index]);
  }
  sugg_letters = makeselarray(wordaslist);

  //
  displaybtns(wordanswer);
  btnevents(wordaslist, wordanswer, Turn);
}
///////////////////////////////////////////////////////////////////////
function getTurn() {
  var doccok = document.cookie.slice(document.cookie.indexOf("【"));
  var cok;
  if (doccok.startsWith("【CUT")) {
    cok = doccok.split(";")[0];
  } else {
    cok = doccok.split(";")[1];
  }

    return parseInt(cok.replace(/\D/g, ""));

}
function getrecord() {
    var doccok = document.cookie.slice(document.cookie.indexOf("【"));
  var cok;
  if (doccok.startsWith("【RCDS")) {
    cok =doccok.split(";")[0];
  } else {
    cok = doccok.split(";")[1];
  }
 
    return parseInt(cok.replace(/\D/g, ""));

}

//////////////////////////////////////////////////////////////////////

function makeselarray(wordaslist) {
  const l = wordaslist.length;
  const wantedl = 12 - l;

  let randomletters = selectRandomValue(alphabet, wantedl);

  //return randomletters;
  return sortString(wordaslist.concat(randomletters));
}

function selectRandomValue(arr, last) {
  var r = Math.floor(Math.random() * arr.length);
  r > 18 ? (r = Math.floor(r / 2)) : false;
  return arr.slice(r, r + last);
}

function sortString(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = arr[randomIndex];

    arr[randomIndex] = arr[i];
    arr[i] = itemAtIndex;
  }

  return arr;
}

/////////////////////////////////////////

function displaybtns(wordanswer) {
  blanksq_cont.innerHTML = "";
  sugg_letters_cont.innerHTML = "";
  for (let index = 0; index < wordanswer.length; index++) {
    blanksq_cont.innerHTML += `<span class="blanksq"></span>`;
  }
  sugg_letters.forEach((element) => {
    sugg_letters_cont.innerHTML += `<span class="letter">${element}</span>`;
  });

  return true;
}

var letter, blanksq, unblanksq;

function getbtns() {
  letter = document.querySelectorAll(".letter");
  blanksq = document.querySelectorAll(".blanksq");
  unblanksq = document.querySelectorAll(".upblanksq");
}

function btnevents(wordaslist, wordanswer, Turn) {
  getbtns();
  letter.forEach((el, index) => {
    el.addEventListener("click", () => {
      getbtns();
      if (blanksq.length == 0) return;

      let s = counter++;
      el.classList.add("selected");
      blanksq[0].classList.replace("blanksq", "upblanksq");
      blanksq[0].textContent = el.textContent;
      blanksq[0].setAttribute("data-from", index);
      addlettersound.play();
      getbtns();
      if (unblanksq.length == wordaslist.length) {
        collectedword = blanksq_cont.textContent;
        if (collectedword == wordanswer) {
          //alert("Well done");
          showpopup((wordaslist.length / s) * 100);
          changeRecord(MyRecord + 5);
          //changeTurn(Turn + 1);
          //Start();
        } else {
          wrong();
          wrongsound.play();
        }
      }
    });
  });

  blanksq.forEach((el) => {
    el.addEventListener("click", () => {
      getbtns();
      if (el.classList != "blanksq") {
        removewrong();
        var datafrom = el.getAttribute("data-from");
        letter[datafrom].classList.remove("selected");
        el.classList.replace("upblanksq", "blanksq");
        el.textContent = "";
        getbtns();
        removelettersound.play();
      }
    });
  });
}

function changeTurn(i) {
  document.cookie = `【CUT=${i}; expires=${new Date(
    date.setFullYear(year + 2)
  )} UTC; path=/`;
}
function changeRecord(i) {
  document.cookie = `【RCDS=${i}; expires=${new Date(
    date.setFullYear(year + 2)
  )} UTC; path=/`;
}
/////////////////////////////////
function wrong() {
  unblanksq.forEach((element) => {
    element.classList.add("wrong");
  });
}
function removewrong() {
  unblanksq.forEach((element) => {
    element.classList.remove("wrong");
  });
}

function showpopup(percent) {
  console.log(percent);
  if (percent <= 100 / 3) {
    stars.innerHTML = `<span class="s">★</span>
                        <span class="s">☆</span>
                        <span class="s">☆</span>`;
  } else if (percent <= 200 / 3 && percent > 100 / 3) {
    stars.innerHTML = `<span class="s">★</span>
                        <span class="s">★</span>
                        <span class="s">☆</span>`;
  } else {
    stars.innerHTML = `<span class="s">★</span>
                        <span class="s">★</span>
                        <span class="s">★</span>`;
  }

  popup.classList.remove("hide");
  popupsound.play();
}

next.addEventListener("click", () => {
  popup.classList.add("hide");
  changeTurn(Turn + 1);
  Start();
});
const groups = document.querySelectorAll(".group");
const skipq = document.querySelector("#skipq");
const okok = document.querySelector("#ok");
function detrgroup() {
  groups.forEach((el) => {
    el.classList.remove("active");
  });
  const g = document.querySelector(`div[data-id="${Group}"]`);
  g.classList.add("active");

  g.addEventListener("click", () => {
    document.querySelector("#inroGroups").classList.add("hide");
    introsound.play();
  });
}

back.addEventListener("click", () => {
  document.querySelector("#inroGroups").classList.remove("hide");
});

okok.addEventListener("click", () => {
  document.querySelector("#popup2").classList.add("hide");
});
skipq.addEventListener("click", () => {
  if (MyRecord >= 100) {
    changeRecord(MyRecord - 10);
    changeTurn(Turn + 1);
    Start();
  } else {
    document.querySelector("#popup2").classList.remove("hide");
  }
});

/////////////////////////////////////////////////////////////////////////

const addlettersound = new Audio("../myassets/sounds/add.ogg");
const removelettersound = new Audio("../myassets/sounds/remove.ogg");
const wrongsound = new Audio("../myassets/sounds/wrong.ogg");
const popupsound = new Audio("../myassets/sounds/popup.ogg");
const introsound = new Audio("../myassets/sounds/start.ogg");


if(!document.cookie.includes("【CUT")){
    changeTurn(0);
    changeRecord(0);
}

Start();
