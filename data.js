/* ============================================================
   CONTENU DU PORTFOLIO — modifiez uniquement ce fichier
   pour mettre à jour textes, projets, compétences et liens.
   ============================================================ */
window.PORTFOLIO = {
  name: "Marie A. A. Sène",
  handle: "CookieKOD",
  title: "Ingénieure IA & Big Data, AI Forward Deployed Engineer",
  location: "Dakar, Sénégal",
  pitch:
    "Je conçois et déploie des systèmes d'IA au plus près des utilisateurs : assistants médicaux RAG, vision par ordinateur, agents Microsoft et pipelines de données. Master Génie Informatique (IA & Big Data) à l'ESP/UCAD, promotion 2026.",
  avatar: "https://github.com/cookieKOD.png",
  links: {
    github: "https://github.com/cookieKOD",
    linkedin: "https://www.linkedin.com/in/marie-a-a-sene-1b7309249/",
    email: "mariesene.tech@gmail.com",
    cv: "",    // ex. "/cv.pdf" — déposez le PDF à côté de index.html
  },

  featured: {
    name: "KORAI ORL",
    subtitle: "Assistant clinique IA pour les consultations ORL",
    context: "Mémoire de Master, DiCentre4AI × service ORL du CHNU de Fann",
    summary:
      "Plateforme qui aide les médecins ORL à poser un pré-diagnostic à partir d'une image d'otoscopie et à interroger une base de connaissances médicales en français, avec des réponses sourcées et contrôlées contre l'hallucination.",
    points: [
      "Classification d'images ORL sur 10 classes avec EfficientNet-B0 exporté en ONNX, inférence CPU pour un déploiement hospitalier sans GPU.",
      "Pipeline RAG multilingue : embeddings multilingual-e5-base, ChromaDB, recherche MMR et Mistral Large.",
      "Deux modes de réponse : un mode clinique strict qui refuse de répondre hors des sources, un mode pédagogique pour la formation des internes.",
      "Évaluation quantitative RAGAS et questionnaire d'acceptabilité (modèle TAM) auprès des praticiens du service.",
    ],
    metrics: [
      { value: "97,8 %", label: "précision top-3 (vision)" },
      { value: "80,8 %", label: "F1 macro (vision)" },
      { value: "86,9 %", label: "pertinence des réponses (RAGAS)" },
      { value: "76,1 %", label: "fidélité aux sources (RAGAS)" },
    ],
    stack: ["Python", "FastAPI", "PyTorch", "ONNX Runtime", "LangChain", "ChromaDB", "Mistral", "React", "SQLite"],
    // Projet confidentiel : pas de lien vers le code, bandeau d'information affiché.
    // Mettez false (et remettez repo) si la structure vous autorise à le publier.
    confidential: true,
    confidentialNote: "Projet réalisé en stage au Data Innovation Centre. Le code et les données cliniques sont confidentiels.",
    // Publication officielle du Data Innovation Centre : collez le lien du post LinkedIn
    // (bouton « … » du post → « Copier le lien vers le post »). Vide = bouton masqué.
    publicPost: { label: "Voir la présentation par le Data Innovation Centre", url: "" },
    // repo: "https://github.com/cookieKOD/KORAI-chatbot",
    // demo: "https://korai-demo.vercel.app",          // lien vers une démo en ligne
    // video: "https://youtu.be/XXXXXXXXXXX",          // YouTube, ou "/captures/korai-demo.mp4"
    // images: [
    //   { src: "/captures/korai-chat.png", alt: "Interface de chat clinique de KORAI" },
    //   { src: "/captures/korai-vision.png", alt: "Résultat de classification d'une image d'otoscopie" },
    // ],
  },

  projects: [
    {
      name: "Solution multi-agents sur Microsoft Foundry",
      year: "2026",
      tags: ["agents", "llm", "cloud"],
      summary:
        "Projet final de la formation AI Agent Architect : conception d'une solution multi-agents orientée production sur Microsoft Foundry, après une série de labs sur la construction, la supervision, l'évaluation et le déploiement de workflows agentiques.",
      stack: ["Microsoft Foundry", "Azure AI", "Agents", "Python"],
      repo: "https://github.com/cookieKOD/Agent-Architect-Final-Project",
      extra: { label: "Labs du hackathon", url: "https://github.com/cookieKOD/FrontierWeekHack-AI-Architect" },
    },
    {
      name: "Collecte numérique de signatures et cachets",
      year: "2024",
      tags: ["api", "entreprise", "web"],
      summary:
        "Réalisé en stage chez SENELEC : API REST et application web qui numérisent la collecte des signatures manuscrites et des cachets, puis les mettent à disposition des applications internes de l'entreprise pour supprimer les circuits papier.",
      stack: ["API REST", "Développement web"],
      repo: "https://github.com/cookieKOD/SignAPI-project",
    },
    {
      name: "Banc d'évaluation d'un RAG médical",
      year: "2025",
      tags: ["rag", "llm", "evaluation"],
      summary:
        "Notebook de recherche reproductible sur Kaggle en deux phases : sélection du LLM générateur par métriques RAGAS et tests statistiques, puis comparaison de cinq architectures RAG de complexité croissante. Optimisé pour tenir dans les 20 Go de disque de Kaggle.",
      stack: ["Python", "RAGAS", "Qwen2.5-7B", "Hugging Face", "Kaggle"],
      confidential: true,
    },
    {
      name: "API de nettoyage de données",
      year: "2025",
      tags: ["big data", "data engineering", "api"],
      summary:
        "Service REST qui automatise la préparation de jeux de données CSV, JSON et XML : imputation des valeurs manquantes, suppression des valeurs aberrantes et des doublons, normalisation min-max. Livré avec une interface web pour téléverser un fichier et récupérer la version nettoyée.",
      stack: ["Scala", "Akka HTTP", "Spray JSON", "ScalaTest", "Bootstrap"],
      repo: "https://github.com/cookieKOD/API-nettoyage-de-donnees",
    },
    {
      name: "Détection de malwares",
      year: "2025",
      tags: ["machine learning", "cybersécurité"],
      summary:
        "Classifieur qui détermine si un exécutable Windows est malveillant à partir de caractéristiques statiques de sa structure PE. Arbre de décision optimisé par GridSearchCV, puis variante réseau de neurones TensorFlow, déployée dans une interface Streamlit.",
      stack: ["Python", "scikit-learn", "TensorFlow", "Streamlit", "pandas"],
      repo: "https://github.com/cookieKOD/MachineLearning",
      extra: { label: "Version Streamlit", url: "https://github.com/cookieKOD/MalwareDetection" },
    },
    {
      name: "Tableau de bord des ventes en Afrique de l'Ouest",
      year: "2025",
      tags: ["data viz", "bi"],
      summary:
        "Rapport Power BI sur trois ans de ventes au Sénégal, au Mali et au Nigeria : préparation des données avec Power Query, mesures DAX pour le chiffre d'affaires, la marge brute et le taux de marge, comparaison de la rentabilité par pays.",
      stack: ["Power BI", "Power Query", "DAX", "Excel"],
      repo: "https://github.com/cookieKOD/PowerBI-projects",
      // Exemple de captures pour un projet (décommentez après avoir ajouté le fichier) :
      // images: [{ src: "/captures/powerbi-rapport.png", alt: "Rapport Power BI des ventes par pays" }],
    },
    {
      name: "Reconnaissance de chiffres manuscrits",
      year: "2024",
      tags: ["machine learning", "vision"],
      summary:
        "Modèle SVM entraîné sur des images de chiffres manuscrits, sérialisé puis servi par une petite application de démonstration pour tester la prédiction sur de nouvelles images.",
      stack: ["Python", "scikit-learn", "SVM"],
      repo: "https://github.com/cookieKOD/deep-learning",
    },
    {
      name: "Suivi de l'effectivité des enseignements",
      year: "2024",
      tags: ["bases de données"],
      summary:
        "Application de gestion des cahiers de texte pour vérifier que les heures de cours prévues sont réellement dispensées, avec modélisation UML complète (cas d'utilisation, classes, séquences) et base MySQL.",
      stack: ["Python", "MySQL", "UML"],
      repo: "https://github.com/cookieKOD/projetSGBD",
    },
  ],

  others: [
    { name: "Plateforme de discussion (PHP, XML/XSD)", url: "https://github.com/cookieKOD/Plateforme-de-Discussion" },
    { name: "Gestion de bibliothèque en Java (POO)", url: "https://github.com/cookieKOD/ProjetPOO" },
    { name: "Architecture MVC en PHP", url: "https://github.com/cookieKOD/Architecture-MVC" },
    { name: "Application mobile Cordova", url: "https://github.com/cookieKOD/Application-Mobile-Cordova" },
  ],

  skills: [
    { group: "IA générative & agents", items: ["RAG", "LangChain", "Microsoft Foundry", "Copilot Studio", "Microsoft 365 Copilot", "Évaluation RAGAS", "Mistral, Qwen"] },
    { group: "Machine learning & vision", items: ["PyTorch", "TensorFlow", "scikit-learn", "EfficientNet", "ONNX Runtime", "Hugging Face"] },
    { group: "Données & analyse", items: ["SQL / MySQL", "Power BI, DAX, Power Query", "pandas, matplotlib", "Excel avancé", "Scala, Akka", "Bases vectorielles (ChromaDB)"] },
    { group: "Développement & déploiement", items: ["FastAPI", "API REST", "React", "Streamlit", "Azure", "Git"] },
  ],

  timeline: [
    { when: "2026", what: "Formation AI Agent Architect (Founderz × Microsoft)", where: "Projet final : solution multi-agents sur Microsoft Foundry" },
    { when: "janv. – juil. 2026", what: "Data scientist, Data Innovation Centre (DiCentre4AI)", where: "Mémoire KORAI ORL avec le service ORL du CHNU de Fann, sous la direction du Pr Mouhamadou Lamine Ba" },
    { when: "2022 – 2026", what: "Master Génie Informatique, option IA & Big Data", where: "École Supérieure Polytechnique, UCAD, Dakar" },
    { when: "mai – juin 2024", what: "Développeuse web, SENELEC", where: "API REST et application web de collecte des signatures et cachets pour les applications internes" },
    { when: "mai – juin 2023", what: "Développeuse web, Groupe Sonatel", where: "API REST d'interconnexion entre une API distante et les applications internes pour la gestion des tickets" },
    { when: "2021", what: "Diplôme Supérieur de Technologie en informatique", where: "École Supérieure Polytechnique, Dakar" },
  ],

  certifications: [
    { name: "Fundamentals of Deep Learning", by: "NVIDIA" },
    { name: "Introducing Generative AI with AWS", by: "AWS" },
    { name: "Machine Learning Foundations", by: "AWS Educate" },
    { name: "Introduction to Cybersecurity", by: "Cisco" },
    // Ajoutez ici le certificat Agent Architect quand vous l'aurez.
  ],
};
