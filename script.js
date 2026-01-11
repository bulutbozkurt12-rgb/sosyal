const questions = [
    // Evimiz Dünya & Doğal Varlıklar
    { question: "Ordu ilimiz Türkiye'nin hangi bölgesindedir?", options: ["Ege", "Akdeniz", "Karadeniz", "Marmara"], correct: 2 },
    { question: "Aşağıdakilerden hangisi Ordu'da sıkça görülen bir doğal afettir?", options: ["Heyelan", "Deprem", "Çığ", "Kuraklık"], correct: 0 },
    { question: "Ordu'nun en önemli tarım ürünü hangisidir?", options: ["Çay", "Fındık", "Zeytin", "Buğday"], correct: 1 },
    { question: "Türkiye'nin başkenti neresidir?", options: ["İstanbul", "İzmir", "Ankara", "Samsun"], correct: 2 },
    { question: "Dünya üzerindeki suları gösteren harita rengi hangisidir?", options: ["Yeşil", "Kahverengi", "Mavi", "Sarı"], correct: 2 },
    { question: "Fiziki haritalarda dağlar genellikle hangi renkle gösterilir?", options: ["Mavi", "Yeşil", "Kahverengi", "Sarı"], correct: 2 }, // 6
    { question: "Hangisi doğal bir varlıktır?", options: ["Peri Bacaları", "Anıtkabir", "Topkapı Sarayı", "Boğaziçi Köprüsü"], correct: 0 },
    { question: "Hangisi tarihi bir mekandır?", options: ["Van Gölü", "Sümela Manastırı", "Ilgaz Dağı", "Düden Şelalesi"], correct: 1 },
    { question: "Ülkemizin kuzey komşusu olan deniz hangisidir?", options: ["Ege Denizi", "Akdeniz", "Marmara Denizi", "Karadeniz"], correct: 3 },
    { question: "Hangisi Türkiye'nin doğu komşularından biridir?", options: ["Yunanistan", "Bulgaristan", "İran", "İtalya"], correct: 2 }, // 10

    // Kültür ve Miras
    { question: "Kültürümüzün bir parçası olan, düğünlerde oynanan yöresel oyunlara ne denir?", options: ["Tiyatro", "Halk Oyunu", "Opera", "Bale"], correct: 1 },
    { question: "Hangisi dini bayramlarımızdan biridir?", options: ["Kurban Bayramı", "Zafer Bayramı", "Cumhuriyet Bayramı", "23 Nisan"], correct: 0 },
    { question: "Misafire ikram etmek kültürümüzde neyi gösterir?", options: ["Savurganlığı", "Misafirperverliği", "Zenginliği", "Üşengeçliği"], correct: 1 },
    { question: "Hangisi milli bayramlarımızdan biridir?", options: ["Ramazan Bayramı", "Kurban Bayramı", "29 Ekim Cumhuriyet Bayramı", "Nevruz"], correct: 2 },
    { question: "Geçmişte Anadolu'da yaşamış uygarlıklardan biri hangisidir?", options: ["Hititler", "Mısırlılar", "Çinliler", "İnkalar"], correct: 0 }, // 15
    { question: "Parayı icat eden Anadolu uygarlığı hangisidir?", options: ["Lidyalılar", "Urartular", "Sümerler", "Hititler"], correct: 0 },
    { question: "Hangisi geleneksel el sanatlarımızdan biridir?", options: ["Ebru", "Kodlama", "Robotik", "Futbol"], correct: 0 },
    { question: "Nasreddin Hoca dendiğinde aklımıza hangi şehir gelir?", options: ["Konya (Akşehir)", "İstanbul", "Trabzon", "İzmir"], correct: 0 },
    { question: "Mevlana Müzesi hangi ilimizdedir?", options: ["Bursa", "Konya", "Edirne", "Sivas"], correct: 1 },
    { question: "Hangisi Ordu yöresine ait bir yemektir?", options: ["Mantı", "Pancar Çorbası", "Kebap", "Tantuni"], correct: 1 }, // 20

    // Haklar, Birey ve Toplum
    { question: "Çocuk Hakları Sözleşmesi'ne göre kaç yaşına kadar herkes çocuktur?", options: ["12", "15", "18", "21"], correct: 2 },
    { question: "Hangisi çocukların haklarından biridir?", options: ["Çalışmak", "Eğitim Almak", "Oy Kullanmak", "Vergi Vermek"], correct: 1 },
    { question: "Hangi kurum afetlerde yardımımıza koşar?", options: ["AFAD", "TÜBİTAK", "TDK", "RTÜK"], correct: 0 },
    { question: "Trafik kurallarına uymak neyin gereğidir?", options: ["Zenginliğin", "Vatandaşlık görevini", "Hobinin", "Eğlencenin"], correct: 1 },
    { question: "Toplumda huzuru sağlayan en önemli değer nedir?", options: ["Saygı", "Para", "Kıskançlık", "Hız"], correct: 0 }, // 25
    { question: "Grup çalışmalarında başarılı olmak için ne önemlidir?", options: ["Kavga etmek", "İş birliği", "Küs kalmak", "Geç kalmak"], correct: 1 },
    { question: "Hangisi bir sivil toplum kuruluşu (STK) örneğidir?", options: ["TBMM", "Kızılay", "Milli Eğitim Bakanlığı", "Valilik"], correct: 1 },
    { question: "Hangisi temel ihtiyaçlarımızdan biridir?", options: ["Tablet", "Beslenme", "Bisiklet", "Oyun Konsolu"], correct: 1 },
    { question: "İstek ve ihtiyaçlarımızı sıralarken hangisine öncelik vermeliyiz?", options: ["İsteklerimize", "İhtiyaçlarımıza", "Pahalı olanlara", "Oyuncaklara"], correct: 1 },
    { question: "Bilinçli tüketici ne yapar?", options: ["Reklama aldanır", "Son kullanma tarihine bakar", "Pahalı olanı alır", "Fiş almaz"], correct: 1 }, // 30

    // Bilim, Teknoloji, Çevre
    { question: "Teknolojiyi yanlış kullanmak hangisine sebep olabilir?", options: ["Zaman tasarrufuna", "Bağımlılığa", "Bilgiye ulaşmaya", "İletişime"], correct: 1 },
    { question: "İnternetteki her bilgi doğru mudur?", options: ["Evet", "Hayır", "Bazen", "Kesinlikle"], correct: 1 },
    { question: "Doğayı korumak için ne yapmalıyız?", options: ["Çöp atmalıyız", "Ağaç dikmeliyiz", "Suyu israf etmeliyiz", "Poşet kullanmalıyız"], correct: 1 },
    { question: "Geri dönüşüm kutusuna hangisi atılmaz?", options: ["Kağıt", "Cam", "Pil", "Yemek artığı"], correct: 3 },
    { question: "Ampulü icat eden bilim insanı kimdir?", options: ["Edison", "Tesla", "Einstein", "Newton"], correct: 0 }, // 35
    { question: "Yerçekimini bulan bilim insanı kimdir?", options: ["Newton", "Pasteur", "Arşimet", "Galileo"], correct: 0 },
    { question: "Telefonu kim icat etmiştir?", options: ["Graham Bell", "Marconi", "Wright Kardeşler", "Morse"], correct: 0 },
    { question: "Hangisi çevre kirliliğine neden olur?", options: ["Ağaçlandırma", "Sanayi atıkları", "Bisiklet sürmek", "Güneş enerjisi"], correct: 1 },
    { question: "Erozyonu önlemek için ne yapılmalıdır?", options: ["Ormanları yok etmek", "Ağaçlandırma yapmak", "Toprağı sulamak", "Bina yapmak"], correct: 1 },
    { question: "Hangisi yenilenebilir enerji kaynağıdır?", options: ["Kömür", "Petrol", "Güneş", "Doğalgaz"], correct: 2 }, // 40

    // Ekstra
    { question: "TBMM hangi ilimizdedir?", options: ["İstanbul", "Ankara", "Samsun", "Erzurum"], correct: 1 },
    { question: "Cumhuriyet ne zaman ilan edildi?", options: ["1919", "1920", "1923", "1938"], correct: 2 },
    { question: "İstiklal Marşı'mızın şairi kimdir?", options: ["Mehmet Akif Ersoy", "Namık Kemal", "Ziya Gökalp", "Orhan Veli"], correct: 0 },
    { question: "Mustafa Kemal Atatürk nerede doğmuştur?", options: ["Ankara", "İstanbul", "Selanik", "Manastır"], correct: 2 },
    { question: "Okulumuzun adı nedir?", options: ["Cumhuriyet O.O", "Atatürk Ortaokulu", "Gazi O.O", "Fatih O.O"], correct: 1 }, // 45
    // Afet Önleme
    { question: "Deprem zararını azaltmak için ne yapılmalıdır?", options: ["Çürük binalar yapmak", "Sağlam binalar yapmak", "Binaları dere yatağına yapmak", "Asansör kullanmak"], correct: 1 },
    { question: "Sel felaketinden korunmak için ne yapılmalıdır?", options: ["Dere yataklarına ev yapmak", "Ağaç kesmek", "Dere yataklarını temiz tutmak", "Çöp atmak"], correct: 2 },
    { question: "Heyelanı önlemek için en etkili yöntem nedir?", options: ["Ağaçlandırma yapmak", "Yol yapmak", "Tünel kazmak", "Toprağı kazmak"], correct: 0 },
    { question: "Çığ tehlikesinden korunmak için ne yapılmalıdır?", options: ["Yüksek sesle bağırmak", "Eğimli yerlere ev yapmak", "Yamaçları ağaçlandırmak", "Karda koşmak"], correct: 2 },
    // Deprem Cantasi
    { question: "Deprem çantasında hangisi BULUNMALIDIR?", options: ["Ütü", "El feneri ve pil", "Saç kurutma makinesi", "Televizyon"], correct: 1 },
    { question: "Deprem çantasında hangisi BULUNMALIDIR?", options: ["Oyun konsolu", "Vazo", "Düdük", "Tablo"], correct: 2 },
    { question: "Deprem çantasında hangisi BULUNMALIDIR?", options: ["Su ve kuru gıda", "Tablet", "Ders kitapları", "Oyuncak"], correct: 0 },
    { question: "Deprem çantasında hangisi BULUNMALIDIR?", options: ["Futbol topu", "Gitar", "İlk yardım çantası", "Saksı"], correct: 2 },
    // Turkiye Siniri
    { question: "Türkiye'nin en uzun kara sınırı hangi ülkedir?", options: ["Irak", "İran", "Suriye", "Yunanistan"], correct: 2 },
];

let questionsPool = [];
let currentQuestionIndex = 0;
let scores = [0, 0, 0]; // Group 1, Group 2, Group 3
let currentTurn = 0; // 0=Group 1, 1=Group 2, 2=Group 3
let timer;
let timeLeft = 15;
let totalQuestionsPlayed = 0;
const MAX_QUESTIONS = 54;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplays = [
    document.querySelector('#group1-score .score'),
    document.querySelector('#group2-score .score'),
    document.querySelector('#group3-score .score')
];
const groupCards = [
    document.getElementById('group1-score'),
    document.getElementById('group2-score'),
    document.getElementById('group3-score')
];
const turnIndicator = document.getElementById('current-turn');
const timerDisplay = document.getElementById('timer');
const finalScoreDisplay = document.getElementById('final-score');
const feedbackMessage = document.getElementById('feedback-message');
const progressBar = document.getElementById('progress_bar');
const starsContainer = document.getElementById('stars-container');

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', restartGame);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    scores = [0, 0, 0];
    currentTurn = 0;
    totalQuestionsPlayed = 0;
    updateScoreBoard();
    updateTurnIndicator();

    // Copy and shuffle questions
    questionsPool = [...questions];
    shuffleArray(questionsPool);

    // Ensure we don't exceed max available
    if (questionsPool.length > MAX_QUESTIONS) {
        questionsPool = questionsPool.slice(0, MAX_QUESTIONS);
    }

    startScreen.classList.remove('active');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('active');
    loadQuestion();
}

function restartGame() {
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    startScreen.classList.add('active');
}

function updateScoreBoard() {
    scoreDisplays[0].innerText = scores[0];
    scoreDisplays[1].innerText = scores[1];
    scoreDisplays[2].innerText = scores[2];
}

function updateTurnIndicator() {
    turnIndicator.innerText = `${currentTurn + 1}. GRUP`;
    turnIndicator.className = 'turn-indicator'; // Reset animations if any

    // Update active card styling
    groupCards.forEach((card, index) => {
        if (index === currentTurn) {
            card.classList.add('active-turn');
        } else {
            card.classList.remove('active-turn');
        }
    });
}

function loadQuestion() {
    if (totalQuestionsPlayed >= questionsPool.length || totalQuestionsPlayed >= MAX_QUESTIONS) {
        endGame();
        return;
    }

    resetState();
    const currentQuestion = questionsPool[totalQuestionsPlayed];
    questionText.innerText = currentQuestion.question;

    // Update progress bar
    const progress = (totalQuestionsPlayed / MAX_QUESTIONS) * 100;
    progressBar.style.width = `${progress}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    timeLeft = 15;
    timerDisplay.innerText = `00:${timeLeft}`;
    optionsContainer.innerHTML = '';
    feedbackMessage.classList.add('hidden');
    feedbackMessage.innerText = '';
    feedbackMessage.className = '';
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false, -1);
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestion = questionsPool[totalQuestionsPlayed];
    const isCorrect = selectedIndex === currentQuestion.correct;

    if (isCorrect) {
        scores[currentTurn] += 10;
        updateScoreBoard();
    }

    showFeedback(isCorrect, selectedIndex);
}

function showFeedback(isCorrect, selectedIndex) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    const question = questionsPool[totalQuestionsPlayed];
    const correctIndex = question.correct;

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    feedbackMessage.innerText = isCorrect ? "TEBRİKLER! DOĞRU CEVAP" : "MAALESEF YANLIŞ CEVAP";
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.style.color = isCorrect ? 'var(--success-color)' : 'var(--error-color)';

    setTimeout(() => {
        // Pass turn to next group
        currentTurn = (currentTurn + 1) % 3;
        totalQuestionsPlayed++;
        updateTurnIndicator();
        loadQuestion();
    }, 2000);
}

function endGame() {
    gameScreen.classList.remove('active');
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');

    // Sort scores to find winner
    // Create an array of objects to sort: [{id: 1, score: 50}, ...]
    let results = scores.map((s, i) => ({ id: i + 1, score: s }));
    results.sort((a, b) => b.score - a.score);

    let resultHTML = '<div style="font-size: 2rem; margin-bottom: 20px;">SKOR TABLOSU</div>';
    results.forEach((r, index) => {
        let medal = '';
        if (index === 0) medal = '🥇';
        if (index === 1) medal = '🥈';
        if (index === 2) medal = '🥉';
        resultHTML += `<p>${medal} ${r.id}. GRUP: ${r.score} Puan</p>`;
    });

    // Determine winner text
    let winnerText = "";
    if (results[0].score === results[1].score) {
        winnerText = "BERABERE!";
    } else {
        winnerText = `KAZANAN: ${results[0].id}. GRUP!`;
    }

    finalScoreDisplay.innerHTML = resultHTML;

    // Stars just for decoration or fun
    starsContainer.innerText = winnerText;
} 
