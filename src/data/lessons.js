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
};
