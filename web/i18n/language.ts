export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'ru-RU': string
  'en-US': string
  'pt-BR': string
  'es-ES': string
  'fr-FR': string
  'de-DE': string
  'ja-JP': string
  'ko-KR': string
  'it-IT': string
  'uk-UA': string
  'vi-VN': string
  'de_DE': string
  'ro-RO': string
  'pl-PL': string
}

export const languages = [
  {
    value: 'ru-RU',
    name: 'Русский (Россия)',
    prompt_name: 'Russian',
    example: 'Привет!',
    supported: true,
  },
  {
    value: 'en-US',
    name: 'English (United States)',
    prompt_name: 'English',
    example: 'Hello, LeadScanner!',
    supported: true,
  },
  {
    value: 'zh-Hans',
    name: '简体中文',
    prompt_name: 'Chinese Simplified',
    example: '你好，LeadScanner！',
    supported: true,
  },

  {
    value: 'pt-BR',
    name: 'Português (Brasil)',
    prompt_name: 'Portuguese',
    example: 'Olá, LeadScanner!',
    supported: true,
  },
  {
    value: 'es-ES',
    name: 'Español (España)',
    prompt_name: 'Spanish',
    example: 'Saluton, LeadScanner!',
    supported: false,
  },
  {
    value: 'fr-FR',
    name: 'Français (France)',
    prompt_name: 'French',
    example: 'Bonjour, LeadScanner!',
    supported: true,
  },
  {
    value: 'de-DE',
    name: 'Deutsch (Deutschland)',
    prompt_name: 'German',
    example: 'Hallo, LeadScanner!',
    supported: true,
  },
  {
    value: 'ja-JP',
    name: '日本語 (日本)',
    prompt_name: 'Japanese',
    example: 'こんにちは、LeadScanner!',
    supported: true,
  },
  {
    value: 'ko-KR',
    name: '한국어 (대한민국)',
    prompt_name: 'Korean',
    example: '안녕하세요, LeadScanner!',
    supported: true,
  },

  {
    value: 'it-IT',
    name: 'Italiano (Italia)',
    prompt_name: 'Italian',
    example: 'Ciao, LeadScanner!',
    supported: false,
  },
  {
    value: 'th-TH',
    name: 'ไทย (ประเทศไทย)',
    prompt_name: 'Thai',
    example: 'สวัสดี LeadScanner!',
    supported: false,
  },
  {
    value: 'id-ID',
    name: 'Bahasa Indonesia',
    prompt_name: 'Indonesian',
    example: 'Saluto, LeadScanner!',
    supported: false,
  },
  {
    value: 'uk-UA',
    name: 'Українська (Україна)',
    prompt_name: 'Ukrainian',
    example: 'Привет, LeadScanner!',
    supported: true,
  },
  {
    value: 'vi-VN',
    name: 'Tiếng Việt (Việt Nam)',
    prompt_name: 'Vietnamese',
    example: 'Xin chào, LeadScanner!',
    supported: true,
  },
  {
    value: 'ro-RO',
    name: 'Română (România)',
    prompt_name: 'Romanian',
    example: 'Salut, LeadScanner!',
    supported: true,
  },
  {
    value: 'pl-PL',
    name: 'Polski (Polish)',
    prompt_name: 'Polish',
    example: 'Cześć, LeadScanner!',
    supported: true,
  },
]

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice',
    zh_Hans: '重要公告',
    pt_BR: 'Aviso Importante',
    es_ES: 'Aviso Importante',
    fr_FR: 'Avis important',
    de_DE: 'Wichtiger Hinweis',
    ja_JP: '重要なお知らせ',
    ko_KR: '중요 공지',
    pl_PL: 'Ważne ogłoszenie',
    uk_UA: 'Важливе повідомлення',
    vi_VN: 'Thông báo quan trọng',
  },
  desc: {
    en_US: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    zh_Hans: '为了有效提升数据检索能力及稳定性，LeadScanner 将于 2023 年 8 月 29 日 03:00 至 08:00 期间进行服务升级，届时 LeadScanner 云端版及应用将无法访问。感谢您的耐心与支持。',
    pt_BR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    es_ES: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    fr_FR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    de_DE: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    ja_JP: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@LeadScanner.ai). We value your patience.',
    ko_KR: '시스템이 업그레이드를 위해 UTC 시간대로 8월 28일 19:00 ~ 24:00에 사용 불가될 예정입니다. 질문이 있으시면 지원 팀에 연락주세요 (support@LeadScanner.ai). 최선을 다해 답변해드리겠습니다.',
    pl_PL: 'Nasz system będzie niedostępny od 19:00 do 24:00 UTC 28 sierpnia w celu aktualizacji. W przypadku pytań prosimy o kontakt z naszym zespołem wsparcia (support@LeadScanner.ai). Doceniamy Twoją cierpliwość.',
    vi_VN: 'Hệ thống của chúng tôi sẽ ngừng hoạt động từ 19:00 đến 24:00 UTC vào ngày 28 tháng 8 để nâng cấp. Nếu có thắc mắc, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi (support@LeadScanner.ai). Chúng tôi đánh giá cao sự kiên nhẫn của bạn.',
  },
  href: '#',
}
