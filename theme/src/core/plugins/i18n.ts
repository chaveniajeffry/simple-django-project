import { createI18n } from "vue-i18n";

const messages = {
  en: {
    dashboard: "Dashboard",
    pages: "Pages",
    aboutUs: "About Us",
    invoice: "Invoice",
    faq: "FAQ",
    wizard: "Wizard",
    pricing: "Pricing",
    account: "Account",
    overview: "Overview",
    settings: "Settings",
    security: "Security",
    auditLogs: "Audit Logs",
    activity: "Activity",
    authentication: "Authentication",
    base: "Base",
    signIn: "Sign-in",
    signUp: "Sign-up",
    passwordReset: "Password Reset",
    extended: "Extended",
    multiStep: "Multi-steps",
    freeTrial: "Free Trial",
    comingSoon: "Coming Soon",
    general: "General",
    welcome: "Welcome",
    verifyEmail: "Verify Email",
    passwordConfirmation: "Password Confirmation",
    closeAccount: "Close Account",
    error404: "Error 404",
    error500: "Error 500",
    email: "Email",
    passwordChange: "Password Change",
    subscriptions: "Subscriptions",
    getStarted: "Getting Started",
    subscriptionList: "Subscription List",
    addSubscription: "Add Subscription",
    viewSubscription: "View Subscription",
    chat: "Chat",
    privateChat: "Private Chat",
    groupChat: "Group Chat",
    drawerChat: "Drawer Chat",
    components: "Components",
    documentation: "Documentation",
    layoutBuilder: "Layout Builder",
    changelog: "Changelog",
    calendar: "Calendar",
  },
  es: {
    dashboard: "Tablero",
    pages: "Páginas",
    aboutUs: "Sobre Nosotros",
    invoice: "Factura",
    faq: "Preguntas Más Frecuentes",
    wizard: "Mago",
    pricing: "Precios",
    account: "Cuenta",
    overview: "Visión General",
    settings: "Ajustes",
    security: "Secuiridad",
    auditLogs: "Registros De Auditoría",
    activity: "Actividad",
    authentication: "Autenticación",
    base: "Base",
    signIn: "Registrarse",
    signUp: "Inscribirse",
    passwordReset: "Restablecimiento De Contraseña",
    extended: "Extendido",
    multiStep: "Multi-Pasos",
    freeTrial: "Prueba Gratis",
    comingSoon: "Próximamente, En Breve, Pronto",
    general: "General",
    welcome: "Bienvenido",
    verifyEmail: "Verificar El Correo Electrónico",
    passwordConfirmation: "Confirmación De Contraseña",
    closeAccount: "Cerrar Cuenta",
    error404: "Error 404",
    error500: "Error 500",
    email: "Correo Electrónico",
    passwordChange: "Cambio De Contraseña",
    subscriptions: "Suscripciones",
    getStarted: "Empezando",
    subscriptionList: "Lista De Suscripción",
    addSubscription: "Añadir Suscripción",
    viewSubscription: "Suscripción",
    chat: "Chat",
    privateChat: "Chat Privado",
    groupChat: "Grupo De Chat",
    drawerChat: "Chat De Cajones",
    components: "Componentes",
    documentation: "Documentación",
    layoutBuilder: "Constructor De Diseño",
    changelog: "Log",
    calendar: "Calendario",
  },
  de: {
    dashboard: "Armaturenbrett",
    pages: "Seiten",
    aboutUs: "Über Uns",
    invoice: "Rechnung",
    faq: "Faq",
    wizard: "Magier",
    pricing: "Preisgestaltung",
    account: "Konto",
    overview: "Überblick",
    settings: "Einstellungen",
    security: "Secuirity.",
    auditLogs: "Auditprotokolle",
    activity: "Aktivität",
    authentication: "Authentifizierung",
    base: "Base",
    signIn: "Einloggen",
    signUp: "Anmelden",
    passwordReset: "Passwort Zurücksetzen",
    extended: "Erweitert",
    multiStep: "Mehrstufen",
    freeTrial: "Kostenlose Testphase",
    comingSoon: "Kommt Bald",
    general: "Allgemein",
    welcome: "Willkommen",
    verifyEmail: "E-Mail Bestätigen",
    passwordConfirmation: "Passwort Bestätigung",
    closeAccount: "Konto Schließen",
    error404: "Fehler 404",
    error500: "Fehler 500.",
    email: "Email",
    passwordChange: "Passwortänderung",
    subscriptions: "Abonnements",
    getStarted: "Einstieg",
    subscriptionList: "Abonnementliste",
    addSubscription: "Subskription Hinzufügen.",
    viewSubscription: "Abonnement Anzeigen.",
    chat: "Plaudern",
    privateChat: "Privater Chat",
    groupChat: "Gruppenchat",
    drawerChat: "Schubladen-Chat.",
    components: "Bauteile",
    documentation: "Dokumentation",
    layoutBuilder: "Layout-Builder",
    changelog: "Änderungsprotokoll",
    calendar: "Kalender",
  },
  ja: {
    dashboard: "ダッシュボード",
    pages: "ページ",
    aboutUs: "私たちに関しては",
    invoice: "請求書",
    faq: "よくある質問",
    wizard: "魔法使い",
    pricing: "価格設定",
    account: "アカウント",
    overview: "概要",
    settings: "設定",
    security: "セキリティ",
    auditLogs: "監査ログ",
    activity: "アクティビティ",
    authentication: "認証",
    base: "ベース",
    signIn: "ログイン",
    signUp: "サインアップ",
    passwordReset: "パスワードのリセット",
    extended: "伸びる",
    multiStep: "マルチステップ",
    freeTrial: "無料の裁判",
    comingSoon: "近日公開",
    general: "全般的",
    welcome: "いらっしゃいませ",
    verifyEmail: "Eメールを確認します",
    passwordConfirmation: "パスワード確認",
    closeAccount: "閉じる",
    error404: "エラー404",
    error500: "エラー500.",
    email: "Eメール",
    passwordChange: "パスワードの変更",
    subscriptions: "購読",
    getStarted: "入門",
    subscriptionList: "サブスクリプションリスト",
    addSubscription: "サブスクリプションを追加します",
    viewSubscription: "購読を見る",
    chat: "チャット",
    privateChat: "プライベートチャット",
    groupChat: "グループチャット",
    drawerChat: "引き出しチャット",
    components: "コンポーネント",
    documentation: "ドキュメンテーション",
    layoutBuilder: "レイアウトビルダー",
    changelog: "チェンジログ",
    calendar: "カレンダー",
  },
  fr: {
    dashboard: "Tableau De Bord",
    pages: "Pages",
    aboutUs: "À Propos De Nous",
    invoice: "Facture D'Achat",
    faq: "Faq",
    wizard: "Sorcier",
    pricing: "Tarification",
    account: "Compte",
    overview: "Aperçu",
    settings: "Paramètres",
    security: "Séculirity",
    auditLogs: "Journaux D'Audit",
    activity: "Activité",
    authentication: "Authentification",
    base: "Base",
    signIn: "S'Identifier",
    signUp: "Inscrivez-Vous",
    passwordReset: "Réinitialisation Du Mot De Passe",
    extended: "Élargi",
    multiStep: "Multi-Étapes",
    freeTrial: "Essai Gratuit",
    comingSoon: "À Venir",
    general: "Général",
    welcome: "Bienvenue",
    verifyEmail: "Vérifier Les Courriels",
    passwordConfirmation: "Confirmation Mot De Passe",
    closeAccount: "Fermer Le Compte",
    error404: "Erreur 404",
    error500: "Erreur 500",
    email: "E-Mail",
    passwordChange: "Changement De Mot De Passe",
    subscriptions: "Abonnements",
    getStarted: "Commencer",
    subscriptionList: "Liste D'Abonnement",
    addSubscription: "Ajouter Un Abonnement",
    viewSubscription: "Voir L'Abonnement",
    chat: "Discuter",
    privateChat: "Discussion Privée",
    groupChat: "Discussion De Groupe",
    drawerChat: "Chat Tireur",
    components: "Composants",
    documentation: "Documentation",
    layoutBuilder: "Constructeur",
    changelog: "Changelog",
    calendar: "Calendrier",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages,
});

export default i18n;
