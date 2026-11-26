export const lessons = {
  nominativ: {
    id: "nominativ",
    title: "Nominativ",
    subtitle: "Das Subjekt",
    description:
      "Nominativ digunakan untuk menunjukkan subjek atau pelaku dalam sebuah kalimat.",
    color: "blue",

    introduction: {
      title: "What is Nominativ?",
      content:
        "Nominativ merupakan kasus yang digunakan untuk menunjukkan subjek dalam kalimat. Subjek adalah orang, benda, atau sesuatu yang melakukan tindakan atau menjadi pokok pembicaraan.",
      question: "Wer? (Siapa?) / Was? (Apa?)",
      examples: [
        {
          german: "Der Mann arbeitet.",
          translation: "Pria itu bekerja.",
          explanation: "Der Mann adalah subjek yang melakukan pekerjaan.",
        },
        {
          german: "Die Frau liest.",
          translation: "Wanita itu membaca.",
          explanation: "Die Frau merupakan subjek dari kalimat.",
        },
        {
          german: "Das Kind spielt.",
          translation: "Anak itu bermain.",
          explanation: "Das Kind merupakan subjek yang melakukan tindakan.",
        },
      ],
    },

    definiteArticles: {
      title: "Definite Articles",
      description:
        "Artikel tertentu atau definite article digunakan ketika kita merujuk kepada sesuatu yang sudah diketahui atau spesifik.",
      table: [
        {
          gender: "Maskulin",
          german: "der",
          example: "der Mann",
          translation: "pria itu",
        },
        {
          gender: "Feminin",
          german: "die",
          example: "die Frau",
          translation: "wanita itu",
        },
        {
          gender: "Neutrum",
          german: "das",
          example: "das Kind",
          translation: "anak itu",
        },
        {
          gender: "Plural",
          german: "die",
          example: "die Kinder",
          translation: "anak-anak itu",
        },
      ],
    },

    indefiniteArticles: {
      title: "Indefinite Articles",
      description:
        "Artikel tidak tertentu atau indefinite article digunakan ketika sesuatu belum spesifik atau diperkenalkan untuk pertama kali.",
      table: [
        {
          gender: "Maskulin",
          german: "ein",
          example: "ein Mann",
          translation: "seorang pria",
        },
        {
          gender: "Feminin",
          german: "eine",
          example: "eine Frau",
          translation: "seorang wanita",
        },
        {
          gender: "Neutrum",
          german: "ein",
          example: "ein Kind",
          translation: "seorang anak",
        },
      ],
    },

    pronouns: {
      title: "Personal Pronouns",
      description:
        "Personal pronouns dalam Nominativ digunakan sebagai pengganti subjek.",
      table: [
        {
          german: "ich",
          translation: "aku / saya",
        },
        {
          german: "du",
          translation: "kamu",
        },
        {
          german: "er",
          translation: "dia (laki-laki)",
        },
        {
          german: "sie",
          translation: "dia (perempuan)",
        },
        {
          german: "es",
          translation: "dia (netral)",
        },
        {
          german: "wir",
          translation: "kami / kita",
        },
        {
          german: "ihr",
          translation: "kalian",
        },
        {
          german: "sie",
          translation: "mereka",
        },
        {
          german: "Sie",
          translation: "Anda (formal)",
        },
      ],
    },

    sentenceExamples: [
      {
        german: "Der Lehrer erklärt die Aufgabe.",
        translation: "Guru itu menjelaskan tugas.",
        subject: "Der Lehrer",
        explanation:
          "Der Lehrer adalah subjek yang melakukan tindakan menjelaskan.",
      },
      {
        german: "Die Katze schläft.",
        translation: "Kucing itu tidur.",
        subject: "Die Katze",
        explanation: "Die Katze adalah subjek yang melakukan tindakan tidur.",
      },
      {
        german: "Wir lernen Deutsch.",
        translation: "Kami belajar bahasa Jerman.",
        subject: "Wir",
        explanation: "Wir merupakan subjek dari kalimat.",
      },
      {
        german: "Das Buch ist interessant.",
        translation: "Buku itu menarik.",
        subject: "Das Buch",
        explanation: "Das Buch adalah subjek yang menjadi pokok pembicaraan.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Der Frau arbeitet.",
        correct: "Die Frau arbeitet.",
        explanation:
          "Frau merupakan kata benda feminin. Artikel Nominativ-nya adalah die.",
      },
      {
        incorrect: "Das Mann arbeitet.",
        correct: "Der Mann arbeitet.",
        explanation:
          "Mann merupakan kata benda maskulin. Artikel Nominativ-nya adalah der.",
      },
    ],

    quiz: [
      {
        question: "Welche Person arbeitet? (Siapa yang bekerja?)",
        options: ["Den Mann", "Der Mann", "Dem Mann", "Des Mannes"],
        answer: 1,
        explanation: "Der Mann merupakan subjek dalam Nominativ.",
      },
      {
        question: "___ Katze schläft.",
        options: ["Der", "Das", "Die", "Den"],
        answer: 2,
        explanation:
          "Katze merupakan kata benda feminin, sehingga artikel Nominativ-nya adalah die.",
      },
      {
        question: "___ Kind spielt.",
        options: ["Der", "Die", "Das", "Dem"],
        answer: 2,
        explanation:
          "Kind merupakan kata benda neutrum, sehingga artikel Nominativ-nya adalah das.",
      },
      {
        question: "Manakah pronoun yang berarti 'kami'?",
        options: ["Ihr", "Wir", "Sie", "Du"],
        answer: 1,
        explanation: "Wir berarti kami atau kita.",
      },
      {
        question: "___ Lehrer unterrichtet Deutsch.",
        options: ["Der", "Den", "Dem", "Des"],
        answer: 0,
        explanation:
          "Lehrer merupakan subjek maskulin dalam Nominativ, sehingga menggunakan der.",
      },
    ],
  },

  akkusativ: {
    id: "akkusativ",
    title: "Akkusativ",
    subtitle: "Das direkte Objekt",
    description:
      "Akkusativ digunakan untuk menunjukkan objek langsung yang menerima tindakan dalam sebuah kalimat.",
    color: "red",

    introduction: {
      title: "What is Akkusativ?",
      content:
        "Akkusativ merupakan kasus yang digunakan untuk menunjukkan objek langsung. Objek langsung adalah orang atau benda yang menerima tindakan dari subjek. Untuk mengenalinya, kita dapat menggunakan pertanyaan Wen? (Siapa?) atau Was? (Apa?).",

      question: "Wen? (Siapa?) / Was? (Apa?)",

      examples: [
        {
          german: "Ich sehe den Mann.",
          translation: "Aku melihat pria itu.",
          explanation:
            "Ich merupakan subjek, sedangkan den Mann adalah objek langsung yang dilihat.",
        },
        {
          german: "Sie kauft eine Tasche.",
          translation: "Dia membeli sebuah tas.",
          explanation:
            "Eine Tasche merupakan objek langsung dari tindakan membeli.",
        },
        {
          german: "Er liest das Buch.",
          translation: "Dia membaca buku itu.",
          explanation:
            "Das Buch merupakan objek langsung dari tindakan membaca.",
        },
      ],
    },

    definiteArticles: {
      title: "Definite Articles",
      description:
        "Perhatikan perubahan artikel tertentu dalam Akkusativ. Perubahan paling penting terjadi pada kata benda maskulin.",

      table: [
        {
          gender: "Maskulin",
          german: "den",
          example: "den Mann",
          translation: "pria itu",
        },
        {
          gender: "Feminin",
          german: "die",
          example: "die Frau",
          translation: "wanita itu",
        },
        {
          gender: "Neutrum",
          german: "das",
          example: "das Kind",
          translation: "anak itu",
        },
        {
          gender: "Plural",
          german: "die",
          example: "die Kinder",
          translation: "anak-anak itu",
        },
      ],
    },

    indefiniteArticles: {
      title: "Indefinite Articles",
      description:
        "Indefinite article juga mengalami perubahan pada bentuk maskulin. Ein berubah menjadi einen.",

      table: [
        {
          gender: "Maskulin",
          german: "einen",
          example: "einen Mann",
          translation: "seorang pria",
        },
        {
          gender: "Feminin",
          german: "eine",
          example: "eine Frau",
          translation: "seorang wanita",
        },
        {
          gender: "Neutrum",
          german: "ein",
          example: "ein Kind",
          translation: "seorang anak",
        },
      ],
    },

    pronouns: {
      title: "Personal Pronouns",
      description:
        "Personal pronouns juga mengalami perubahan ketika digunakan sebagai objek langsung dalam Akkusativ.",

      table: [
        {
          german: "mich",
          translation: "aku / saya",
        },
        {
          german: "dich",
          translation: "kamu",
        },
        {
          german: "ihn",
          translation: "dia (laki-laki)",
        },
        {
          german: "sie",
          translation: "dia (perempuan)",
        },
        {
          german: "es",
          translation: "dia (netral)",
        },
        {
          german: "uns",
          translation: "kami / kita",
        },
        {
          german: "euch",
          translation: "kalian",
        },
        {
          german: "sie",
          translation: "mereka",
        },
        {
          german: "Sie",
          translation: "Anda (formal)",
        },
      ],
    },

    sentenceExamples: [
      {
        german: "Ich sehe den Hund.",
        translation: "Aku melihat anjing itu.",
        subject: "Ich",
        explanation:
          "Ich merupakan subjek, sedangkan den Hund merupakan objek langsung. Artikel der berubah menjadi den.",
      },
      {
        german: "Der Lehrer liest das Buch.",
        translation: "Guru itu membaca buku tersebut.",
        subject: "Der Lehrer",
        explanation:
          "Der Lehrer adalah subjek. Das Buch adalah objek langsung dan artikelnya tetap das.",
      },
      {
        german: "Wir kaufen eine Tasche.",
        translation: "Kami membeli sebuah tas.",
        subject: "Wir",
        explanation:
          "Eine Tasche merupakan objek langsung. Artikel feminin eine tidak berubah.",
      },
      {
        german: "Sie besucht ihren Freund.",
        translation: "Dia mengunjungi teman laki-lakinya.",
        subject: "Sie",
        explanation:
          "Sie adalah subjek, sedangkan ihren Freund adalah objek langsung. Artikel kepemilikan maskulin ihren menunjukkan Akkusativ.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Ich sehe der Mann.",
        correct: "Ich sehe den Mann.",
        explanation:
          "Mann merupakan objek langsung maskulin. Artikel der harus berubah menjadi den.",
      },
      {
        incorrect: "Er hat ein Hund.",
        correct: "Er hat einen Hund.",
        explanation:
          "Hund merupakan objek langsung maskulin. Ein berubah menjadi einen dalam Akkusativ.",
      },
      {
        incorrect: "Ich sehe dich? (untuk maksud: Aku melihat dia laki-laki.)",
        correct: "Ich sehe ihn.",
        explanation:
          "Ihn adalah bentuk Akkusativ dari er. Dich berarti kamu sebagai objek.",
      },
      {
        incorrect: "Ich sehe er.",
        correct: "Ich sehe ihn.",
        explanation:
          "Er adalah bentuk Nominativ, sedangkan ihn adalah bentuk Akkusativ untuk kata ganti orang ketiga maskulin.",
      },
    ],

    quiz: [
      {
        question: "Ich sehe ___ Mann.",
        options: ["der", "den", "dem", "des"],
        answer: 1,
        explanation:
          "Mann merupakan objek langsung maskulin. Artikel der berubah menjadi den.",
      },
      {
        question: "Er kauft ___ Auto.",
        options: ["einen", "eine", "ein", "einem"],
        answer: 2,
        explanation:
          "Auto merupakan kata benda neutrum. Artikel ein tetap ein dalam Akkusativ.",
      },
      {
        question: "Apa bentuk Akkusativ dari er?",
        options: ["ihm", "ihn", "sein", "sie"],
        answer: 1,
        explanation:
          "Er berubah menjadi ihn ketika digunakan sebagai objek langsung.",
      },
      {
        question: "Welche Antwort ist richtig?",
        options: [
          "Ich sehe der Hund.",
          "Ich sehe dem Hund.",
          "Ich sehe den Hund.",
          "Ich sehe des Hundes.",
        ],
        answer: 2,
        explanation: "Den Hund merupakan bentuk Akkusativ dari der Hund.",
      },
      {
        question: "Sie besucht ___ Frau.",
        options: ["der", "den", "die", "dem"],
        answer: 2,
        explanation:
          "Frau merupakan kata benda feminin. Artikel die tetap die dalam Akkusativ.",
      },
    ],
  },
};
