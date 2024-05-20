const translation = {
  api: {
    success: 'Успешно',
    actionSuccess: 'Действие успешно выполнено',
    saved: 'Сохранено',
    create: 'Создано',
    remove: 'Удалено',
  },
  operation: {
    create: 'Создать',
    confirm: 'Подтвердить',
    cancel: 'Отменить',
    clear: 'Очистить',
    save: 'Сохранить',
    edit: 'Редактировать',
    add: 'Добавить',
    added: 'Добавлено',
    refresh: 'Перезапустить',
    reset: 'Сбросить',
    search: 'Поиск',
    change: 'Изменить',
    remove: 'Удалить',
    send: 'Отправить',
    copy: 'Копировать',
    lineBreak: 'Перенос строки',
    sure: 'Уверен',
    download: 'Скачать',
    delete: 'Удалить',
    settings: 'Настройки',
    setup: 'Настроить',
    getForFree: 'Получить бесплатно',
    reload: 'Перезагрузить',
    ok: 'ОК',
    log: 'Журнал',
    learnMore: 'Узнать больше',
    params: 'Параметры',
    duplicate: 'Дублировать',
    rename: 'Переименовать',
  },
  placeholder: {
    input: 'Пожалуйста, введите',
    select: 'Пожалуйста, выберите',
  },
  voice: {
    language: {
      zhHans: 'Китайский (упрощенный)',
      zhHant: 'Китайский (традиционный)',
      enUS: 'Английский',
      deDE: 'Немецкий',
      frFR: 'Французский',
      esES: 'Испанский',
      itIT: 'Итальянский',
      thTH: 'Тайский',
      idID: 'Индонезийский',
      jaJP: 'Японский',
      koKR: 'Корейский',
      ptBR: 'Португальский',
      ruRU: 'Русский',
      ukUA: 'Украинский',
      viVN: 'Вьетнамский',
      plPL: 'Польский',
    },
  },
  unit: {
    char: 'символов',
  },
  actionMsg: {
    noModification: 'На данный момент изменений нет.',
    modifiedSuccessfully: 'Успешно изменено',
    modifiedUnsuccessfully: 'Изменение не удалось',
    copySuccessfully: 'Успешно скопировано',
    paySucceeded: 'Оплата прошла успешно',
    payCancelled: 'Оплата отменена',
    generatedSuccessfully: 'Успешно сгенерировано',
    generatedUnsuccessfully: 'Сгенерировать не удалось',
  },
  model: {
    params: {
      temperature: 'Температура',
      temperatureTip:
        'Контролирует случайность: уменьшение приводит к меньшей случайности. При приближении температуры к нулю, модель становится детерминированной и повторяющейся.',
      top_p: 'Top P',
      top_pTip:
        'Контролирует разнообразие через выбор ядра: 0.5 означает, что рассматривается половина всех вариантов с наивысшей вероятностью.',
      presence_penalty: 'Штраф за присутствие',
      presence_penaltyTip:
        'Насколько сильно штрафовать новые токены, основываясь на их присутствии в тексте до сих пор.\nУвеличивает вероятность модели говорить о новых темах.',
      frequency_penalty: 'Штраф за частоту',
      frequency_penaltyTip:
        'Насколько сильно штрафовать новые токены, основываясь на их частоте в тексте до сих пор.\nУменьшает вероятность модели повторять одно и то же слово в точности.',
      max_tokens: 'Максимум токенов',
      max_tokensTip:
        'Используется для ограничения максимальной длины ответа в токенах. \nБольшие значения могут ограничить пространство для слов подсказки, журналов чатов и Знаний. \nРекомендуется установить ниже двух третей\ngpt-4-1106-preview, gpt-4-vision-preview максимум токенов (ввод 128k, вывод 4k)',
      maxTokenSettingTip: 'Ваше значение максимального токена высокое, что может ограничить пространство для подсказок, запросов и данных. Рассмотрите возможность установки ниже 2/3.',
      setToCurrentModelMaxTokenTip: 'Максимальное количество токенов обновлено до 80% от максимального значения текущей модели {{maxToken}}.',
      stop_sequences: 'Последовательности остановки',
      stop_sequencesTip: 'До четырех последовательностей, при встрече с которыми API остановит генерацию дальнейших токенов. Возвращенный текст не будет содержать последовательность остановки.',
      stop_sequencesPlaceholder: 'Введите последовательность и нажмите Tab',
    },
    tone: {
      Creative: 'Креативный',
      Balanced: 'Сбалансированный',
      Precise: 'Точный',
      Custom: 'Пользовательский',
    },
    addMoreModel: 'Перейдите в настройки, чтобы добавить больше моделей',
  },
  menus: {
    status: 'бета',
    explore: 'Исследовать',
    apps: 'Студия',
    plugins: 'Плагины',
    pluginsTips: 'Интегрируйте сторонние плагины или создайте AI-Plugins, совместимые с ChatGPT.',
    datasets: 'Знания',
    datasetsTips: 'СКОРО: Импортируйте свои собственные текстовые данные или пишите данные в реальном времени через Webhook для улучшения контекста LLM.',
    newApp: 'Новое приложение',
    newDataset: 'Создать знания',
    tools: 'Инструменты',
  },
  userProfile: {
    settings: 'Настройки',
    workspace: 'Рабочее пространство',
    createWorkspace: 'Создать рабочее пространство',
    helpCenter: 'Помощь',
    roadmapAndFeedback: 'Обратная связь',
    community: 'Сообщество',
    about: 'О нас',
    logout: 'Выйти',
  },
  settings: {
    accountGroup: 'АККАУНТ',
    workplaceGroup: 'РАБОЧЕЕ ПРОСТРАНСТВО',
    account: 'Мой аккаунт',
    members: 'Участники',
    billing: 'Биллинг',
    integrations: 'Интеграции',
    language: 'Язык',
    provider: 'Поставщик модели',
    dataSource: 'Источник данных',
    plugin: 'Плагины',
    apiBasedExtension: 'API расширение',
  },
  account: {
    avatar: 'Аватар',
    name: 'Имя',
    email: 'Электронная почта',
    password: 'Пароль',
    passwordTip: 'Вы можете установить постоянный пароль, если не хотите использовать временные коды входа',
    setPassword: 'Установить пароль',
    resetPassword: 'Сбросить пароль',
    currentPassword: 'Текущий пароль',
    newPassword: 'Новый пароль',
    confirmPassword: 'Подтвердите пароль',
    notEqual: 'Пароли не совпадают.',
    langGeniusAccount: 'Аккаунт Dify',
    langGeniusAccountTip: 'Ваш аккаунт Dify и связанные пользовательские данные.',
    editName: 'Редактировать имя',
    showAppLength: 'Показать {{length}} приложений',
  },
  members: {
    team: 'Команда',
    invite: 'Добавить',
    name: 'ИМЯ',
    lastActive: 'ПОСЛЕДНЯЯ АКТИВНОСТЬ',
    role: 'РОЛИ',
    pending: 'В ожидании...',
    owner: 'Владелец',
    admin: 'Администратор',
    adminTip: 'Может создавать приложения и управлять настройками команды',
    normal: 'Обычный',
    normalTip: 'Может использовать только приложения, не может создавать приложения',
    inviteTeamMember: 'Добавить участника команды',
    inviteTeamMemberTip: 'Они смогут получить доступ к вашим командным данным сразу после входа.',
    email: 'Электронная почта',
    emailInvalid: 'Недействительный формат электронной почты',
    emailPlaceholder: 'Пожалуйста, введите электронные почты',
    sendInvite: 'Отправить приглашение',
    invitedAsRole: 'Приглашен как пользователь с ролью {{role}}',
    invitationSent: 'Приглашение отправлено',
    invitationSentTip: 'Приглашение отправлено, и они могут войти в Dify для доступа к вашим командным данным.',
    invitationLink: 'Ссылка на приглашение',
    failedinvitationEmails: 'Следующие пользователи не были приглашены успешно',
    ok: 'ОК',
    removeFromTeam: 'Удалить из команды',
    removeFromTeamTip: 'Удалит доступ к команде',
    setAdmin: 'Назначить администратором',
    setMember: 'Назначить обычным участником',
    disinvite: 'Отменить приглашение',
    deleteMember: 'Удалить участника',
    you: '(Вы)',
  },
  integrations: {
    connected: 'Подключено',
    google: 'Google',
    googleAccount: 'Войти с аккаунтом Google',
    github: 'GitHub',
    githubAccount: 'Войти с аккаунтом GitHub',
    connect: 'Подключить',
  },
  language: {
    displayLanguage: 'Язык отображения',
    timezone: 'Часовой пояс',
  },
  provider: {
    apiKey: 'API ключ',
    enterYourKey: 'Введите ваш API ключ здесь',
    invalidKey: 'Неверный ключ OpenAI API',
    validatedError: 'Ошибка проверки: ',
    validating: 'Проверка ключа...',
    saveFailed: 'Сохранение API ключа не удалось',
    apiKeyExceedBill: 'У этого API ключа нет доступной квоты, пожалуйста, прочитайте',
    addKey: 'Добавить ключ',
    comingSoon: 'Скоро будет',
    editKey: 'Редактировать',
    invalidApiKey: 'Неверный API ключ',
    azure: {
      apiBase: 'API база',
      apiBasePlaceholder: 'URL API базы вашего Azure OpenAI Endpoint.',
      apiKey: 'API ключ',
      apiKeyPlaceholder: 'Введите ваш API ключ здесь',
      helpTip: 'Узнайте о службе Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'Хостинг OpenAI',
      onTrial: 'ПРОБНЫЙ ПЕРИОД',
      exhausted: 'КВОТА ИСЧЕРПАНА',
      desc: 'Услуга хостинга OpenAI, предоставляемая Dify, позволяет использовать такие модели, как GPT-3.5. До исчерпания вашей пробной квоты, вам необходимо настроить других поставщиков моделей.',
      callTimes: 'Вызовы',
      usedUp: 'Пробная квота исчерпана. Добавьте собственного поставщика модели.',
      useYourModel: 'В настоящее время используется собственный поставщик модели.',
      close: 'Закрыть',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'ПРОБНЫЙ ПЕРИОД',
      exhausted: 'КВОТА ИСЧЕРПАНА',
      desc: 'Мощная модель, которая превосходно справляется с широким спектром задач, от сложного диалога и создания творческого контента до подробной инструкции.',
      callTimes: 'Вызовы',
      usedUp: 'Пробная квота исчерпана. Добавьте собственного поставщика модели.',
      useYourModel: 'В настоящее время используется собственный поставщик модели.',
      close: 'Закрыть',
    },
    anthropic: {
      using: 'Возможность встраивания использует',
      enableTip: 'Чтобы включить модель Anthropic, сначала необходимо привязать к OpenAI или Azure OpenAI Service.',
      notEnabled: 'Не включено',
      keyFrom: 'Получите свой API ключ от Anthropic',
    },
    encrypted: {
      front: 'Ваш API ключ будет зашифрован и сохранен с использованием',
      back: ' технологии.',
    },
  },
  modelProvider: {
    notConfigured: 'Системная модель еще не полностью настроена, некоторые функции могут быть недоступны.',
    systemModelSettings: 'Настройки системной модели',
    systemModelSettingsLink: 'Почему необходимо настроить системную модель?',
    selectModel: 'Выберите свою модель',
    setupModelFirst: 'Пожалуйста, сначала настройте свою модель',
    systemReasoningModel: {
      key: 'Системная модель рассуждений',
      tip: 'Установите модель умолчания для создания приложений, а также такие функции, как генерация имен диалогов и предложение следующего вопроса, будут использовать модель умолчания.',
    },
    embeddingModel: {
      key: 'Модель встраивания',
      tip: 'Установите модель умолчания для обработки встраивания документов в Знания. Как импорт, так и поиск в Знаниях используют эту модель для векторизации. Переключение вызовет несоответствие векторов между импортированными Знаниями и вопросами, что приведет к ошибке поиска. Чтобы избежать ошибки поиска, пожалуйста, не переключайте эту модель без необходимости.',
      required: 'Модель встраивания обязательна',
    },
    speechToTextModel: {
      key: 'Модель преобразования речи в текст',
      tip: 'Установите модель умолчания для ввода речи в текст в разговоре.',
    },
    ttsModel: {
      key: 'Модель преобразования текста в речь',
      tip: 'Установите модель умолчания для ввода текста в речь в разговоре.',
    },
    rerankModel: {
      key: 'Модель переупорядочивания',
      tip: 'Модель переупорядочивания будет перезагружать список кандидатов на документы на основе семантического совпадения с запросом пользователя, улучшая результаты семантического ранжирования.',
    },
    quota: 'Квота',
    searchModel: 'Модель поиска',
    noModelFound: 'Модель для {{model}} не найдена',
    models: 'Модели',
    showMoreModelProvider: 'Показать больше поставщиков моделей',
    selector: {
      tip: 'Эта модель была удалена. Пожалуйста, добавьте модель или выберите другую модель.',
      emptyTip: 'Доступных моделей нет',
      emptySetting: 'Пожалуйста, перейдите в настройки для конфигурации',
      rerankTip: 'Пожалуйста, настройте модель переупорядочивания',
    },
    card: {
      quota: 'КВОТА',
      onTrial: 'Пробный период',
      paid: 'Платный',
      quotaExhausted: 'Квота исчерпана',
      callTimes: 'Вызовы',
      tokens: 'Токены',
      buyQuota: 'Купить квоту',
      priorityUse: 'Приоритетное использование',
      removeKey: 'Удалить API ключ',
      tip: 'Приоритет будет отдан платной квоте. Пробная квота будет использована после исчерпания платной квоты.',
    },
    item: {
      deleteDesc: '{{modelName}} используются как системные модели рассуждений. Некоторые функции будут недоступны после удаления. Пожалуйста, подтвердите.',
      freeQuota: 'БЕСПЛАТНАЯ КВОТА',
    },
    addApiKey: 'Добавить ваш API ключ',
    invalidApiKey: 'Неверный API ключ',
    encrypted: {
      front: 'Ваш API ключ будет зашифрован и сохранен с использованием',
      back: ' технологии.',
    },
    freeQuota: {
      howToEarn: 'Как заработать',
    },
    addMoreModelProvider: 'ДОБАВИТЬ БОЛЬШЕ ПОСТАВЩИКОВ МОДЕЛЕЙ',
    addModel: 'Добавить модель',
    modelsNum: '{{num}} Моделей',
    showModels: 'Показать модели',
    showModelsNum: 'Показать {{num}} моделей',
    collapse: 'Свернуть',
    config: 'Конфигурация',
    modelAndParameters: 'Модель и параметры',
    model: 'Модель',
    featureSupported: 'Поддерживается {{feature}}',
    callTimes: 'Вызовы',
    credits: 'Сообщения',
    buyQuota: 'Купить квоту',
    getFreeTokens: 'Получить бесплатные токены',
    priorityUsing: 'Приоритетное использование',
    deprecated: 'Устаревший',
    confirmDelete: 'подтвердить удаление?',
    quotaTip: 'Оставшиеся доступные бесплатные токены',
    loadPresets: 'Загрузить предустановки',
    parameters: 'ПАРАМЕТРЫ',
  },
  dataSource: {
    add: 'Добавить источник данных',
    connect: 'Подключить',
    notion: {
      title: 'Notion',
      description: 'Использование Notion как источника данных для Знаний.',
      connectedWorkspace: 'Подключенное рабочее пространство',
      addWorkspace: 'Добавить рабочее пространство',
      connected: 'Подключено',
      disconnected: 'Отключено',
      changeAuthorizedPages: 'Изменить авторизованные страницы',
      pagesAuthorized: 'Авторизованные страницы',
      sync: 'Синхронизировать',
      remove: 'Удалить',
      selector: {
        pageSelected: 'Выбранные страницы',
        searchPages: 'Искать страницы...',
        noSearchResult: 'Результатов поиска нет',
        addPages: 'Добавить страницы',
        preview: 'ПРЕДПРОСМОТР',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API ключ',
      apiKeyPlaceholder: 'Введите ваш API ключ',
      keyFrom: 'Получите ваш ключ SerpAPI со страницы аккаунта SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'API расширения предоставляют централизованное управление API, упрощая настройку для легкого использования в приложениях Dify.',
    link: 'Узнайте, как разработать собственное API расширение.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Добавить API расширение',
    selector: {
      title: 'API расширение',
      placeholder: 'Пожалуйста, выберите API расширение',
      manage: 'Управление API расширением',
    },
    modal: {
      title: 'Добавить API расширение',
      editTitle: 'Редактировать API расширение',
      name: {
        title: 'Имя',
        placeholder: 'Пожалуйста, введите имя',
      },
      apiEndpoint: {
        title: 'API Endpoint',
        placeholder: 'Пожалуйста, введите API endpoint',
      },
      apiKey: {
        title: 'API ключ',
        placeholder: 'Пожалуйста, введите API ключ',
        lengthError: 'Длина API ключа не может быть меньше 5 символов',
      },
    },
    type: 'Тип',
  },
  about: {
    changeLog: 'Журнал изменений',
    updateNow: 'Обновить сейчас',
    nowAvailable: 'Dify {{version}} теперь доступен.',
    latestAvailable: 'Dify {{version}} - последняя доступная версия.',
  },
  appMenus: {
    overview: 'Обзор',
    promptEng: 'Оркестровка',
    apiAccess: 'Доступ к API',
    logAndAnn: 'Журналы и объявления',
    logs: 'Журналы',
  },
  environment: {
    testing: 'ТЕСТИРОВАНИЕ',
    development: 'РАЗРАБОТКА',
  },
  appModes: {
    completionApp: 'Генератор текста',
    chatApp: 'Чат приложение',
  },
  datasetMenus: {
    documents: 'Документы',
    hitTesting: 'Тестирование поиска',
    settings: 'Настройки',
    emptyTip: 'Знания не были связаны, пожалуйста, перейдите в приложение или плагин для завершения связывания.',
    viewDoc: 'Просмотреть документацию',
    relatedApp: 'связанные приложения',
  },
  voiceInput: {
    speaking: 'Говорите сейчас...',
    converting: 'Преобразование в текст...',
    notAllow: 'микрофон не авторизован',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Переименовать разговор',
    conversationName: 'Имя разговора',
    conversationNamePlaceholder: 'Пожалуйста, введите имя разговора',
    conversationNameCanNotEmpty: 'Имя разговора обязательно',
    citation: {
      title: 'ЦИТАТЫ',
      linkToDataset: 'Ссылка на Знания',
      characters: 'Символы:',
      hitCount: 'Количество поисков:',
      vectorHash: 'Хеш вектора:',
      hitScore: 'Оценка поиска:',
    },
  },
  promptEditor: {
    placeholder: 'Напишите свое слово для подсказки здесь, введите \'{\', чтобы вставить переменную, введите \'/\', чтобы вставить блок контента подсказки',
    context: {
      item: {
        title: 'Контекст',
        desc: 'Вставить шаблон контекста',
      },
      modal: {
        title: '{{num}} Знаний в контексте',
        add: 'Добавить контекст ',
        footer: 'Вы можете управлять контекстами в разделе Контекст ниже.',
      },
    },
    history: {
      item: {
        title: 'История разговора',
        desc: 'Вставить шаблон исторического сообщения',
      },
      modal: {
        title: 'ПРИМЕР',
        user: 'Привет',
        assistant: 'Привет! Как я могу вам помочь сегодня?',
        edit: 'Редактировать имена ролей разговора',
      },
    },
    variable: {
      item: {
        title: 'Переменные и внешние инструменты',
        desc: 'Вставить переменные и внешние инструменты',
      },
      outputToolDisabledItem: {
        title: 'Переменные',
        desc: 'Вставить переменные',
      },
      modal: {
        add: 'Новая переменная',
        addTool: 'Новый инструмент',
      },
    },
    query: {
      item: {
        title: 'Запрос',
        desc: 'Вставить шаблон пользовательского запроса',
      },
    },
    existed: 'Уже существует в подсказке',
  },
  imageUploader: {
    uploadFromComputer: 'Загрузить с компьютера',
    uploadFromComputerReadError: 'Ошибка чтения изображения, попробуйте снова.',
    uploadFromComputerUploadError: 'Ошибка загрузки изображения, попробуйте снова.',
    uploadFromComputerLimit: 'Загружаемые изображения не могут превышать {{size}} МБ',
    pasteImageLink: 'Вставить ссылку на изображение',
    pasteImageLinkInputPlaceholder: 'Вставьте ссылку на изображение здесь',
    pasteImageLinkInvalid: 'Неверная ссылка на изображение',
    imageUpload: 'Загрузка изображения',
  },
  tag: {
    placeholder: 'Все теги',
    addNew: 'Добавить новый тег',
    noTag: 'Нет тегов',
    noTagYet: 'Тегов пока нет',
    addTag: 'Добавить теги',
    editTag: 'Редактировать теги',
    manageTags: 'Управление тегами',
    selectorPlaceholder: 'Введите для поиска или создания',
    create: 'Создать',
    delete: 'Удалить тег',
    deleteTip: 'Тег используется, удалить его?',
    created: 'Тег успешно создан',
    failed: 'Не удалось создать тег',
  },
}

export default translation