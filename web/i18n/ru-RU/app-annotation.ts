const translation = {
  title: 'Аннотации',
  name: 'Ответ на аннотацию',
  editBy: 'Ответ отредактирован {{author}}',
  noData: {
    title: 'Нет аннотаций',
    description: 'Вы можете редактировать аннотации во время отладки программы или импортировать аннотации оптом здесь для получения высококачественного ответа.',
  },
  table: {
    header: {
      question: 'вопрос',
      answer: 'ответ',
      createdAt: 'создано в',
      hits: 'просмотров',
      actions: 'действия',
      addAnnotation: 'Добавить аннотацию',
      bulkImport: 'Массовый импорт',
      bulkExport: 'Массовый экспорт',
      clearAll: 'Очистить все аннотации',
    },
  },
  editModal: {
    title: 'Редактировать ответ на аннотацию',
    queryName: 'Запрос пользователя',
    answerName: 'Бот-рассказчик',
    yourAnswer: 'Ваш ответ',
    answerPlaceholder: 'Введите свой ответ здесь',
    yourQuery: 'Ваш запрос',
    queryPlaceholder: 'Введите свой запрос здесь',
    removeThisCache: 'Удалить эту аннотацию',
    createdAt: 'Создано в',
  },
  addModal: {
    title: 'Добавить ответ на аннотацию',
    queryName: 'Вопрос',
    answerName: 'Ответ',
    answerPlaceholder: 'Введите ответ здесь',
    queryPlaceholder: 'Введите запрос здесь',
    createNext: 'Добавить еще один аннотированный ответ',
  },
  batchModal: {
    title: 'Массовый импорт',
    csvUploadTitle: 'Перетащите файл CSV сюда или',
    browse: 'обзор',
    tip: 'Файл CSV должен соответствовать следующей структуре:',
    question: 'вопрос',
    answer: 'ответ',
    contentTitle: 'содержание части',
    content: 'содержание',
    template: 'Скачайте шаблон здесь',
    cancel: 'Отменить',
    run: 'Запустить партию',
    runError: 'Не удалось запустить партию',
    processing: 'В пакетной обработке',
    completed: 'Импорт завершен',
    error: 'Ошибка импорта',
    ok: 'ОК',
  },
  errorMessage: {
    answerRequired: 'Ответ обязателен',
    queryRequired: 'Вопрос обязателен',
  },
  viewModal: {
    annotatedResponse: 'Ответ на аннотацию',
    hitHistory: 'История просмотров',
    hit: 'Просмотр',
    hits: 'Просмотров',
    noHitHistory: 'Истории просмотров нет',
  },
  hitHistoryTable: {
    query: 'Запрос',
    match: 'Совпадение',
    response: 'Ответ',
    source: 'Источник',
    score: 'Бал',
    time: 'Время',
  },
  initSetup: {
    title: 'Начальная настройка ответа на аннотацию',
    configTitle: 'Настройка ответа на аннотацию',
    confirmBtn: 'Сохранить и включить',
    configConfirmBtn: 'Сохранить',
  },
  embeddingModelSwitchTip: 'Модель векторизации текста аннотации, переключение моделей будет повторно встроено, что приведет к дополнительным затратам.',
}

export default translation

