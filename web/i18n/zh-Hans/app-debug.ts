const translation = {
    pageTitle: {
      line1: 'ПОДСКАЗКА',
      line2: 'Инженерия',
    },
    orchestrate: 'Оркестровать',
    promptMode: {
      simple: 'Перейти в экспертный режим, чтобы редактировать весь запрос ПОДСКАЗКА',
      advanced: 'Экспертный режим',
      switchBack: 'Изменить настройки',
      advancedWarning: {
        title: 'Вы перешли в экспертный режим, и после того, как вы измените ПОДСКАЗКА, вы НЕ сможете вернуться в базовый режим.',
        description: 'В экспертном режиме вы можете редактировать весь ПОДСКАЗКА.',
        learnMore: 'Подробнее',
        ok: 'Хорошо',
      },
      operation: {
        addMessage: 'Добавить сообщение',
      },
      contextMissing: 'Компонент контекста отсутствует, эффективность подсказки может быть не наилучшей.',
    },
    operation: {
      applyConfig: 'Опубликовать',
      resetConfig: 'Сбросить',
      debugConfig: 'Отладка',
      addFeature: 'Добавить функционал',
      automatic: 'Автоматически',
      stopResponding: 'Прекратить реагировать',
      agree: 'лайк',
      disagree: 'дизлайк',
      cancelAgree: 'Отменить лайк',
      cancelDisagree: 'Отменить дизлайк',
      userAction: 'Пользователь ',
    },
    notSetAPIKey: {
      title: 'Ключ провайдера LLM не установлен',
      trailFinished: 'Демо завершено',
      description: 'Ключ провайдера LLM не установлен, и его нужно установить перед отладкой.',
      settingBtn: 'Перейти к настройкам',
    },
    trailUseGPT4Info: {
      title: 'Пока не поддерживает gpt-4',
      description: 'Чтобы использовать gpt-4, пожалуйста, установите ключ API.',
    },
    feature: {
      groupChat: {
        title: 'Улучшение чата',
        description: 'Добавьте настройки предыдущего разговора для приложений, чтобы улучшить пользовательский опыт.',
      },
      groupExperience: {
        title: 'Улучшение опыта',
      },
      conversationOpener: {
        title: 'Инициаторы разговора',
        description: 'В чат-приложениях первое предложение, которое ИИ активно произносит пользователю, обычно используется как приветствие.',
      },
      suggestedQuestionsAfterAnswer: {
        title: 'Следующие',
        description: 'Настройка предложений следующих вопросов может предоставить пользователям лучший чат.',
        resDes: '3 предложения для следующего вопроса пользователя.',
        tryToAsk: 'Попробуйте спросить',
      },
      moreLikeThis: {
        title: 'Больше такого',
        description: 'Сгенерировать несколько текстов одновременно, а затем редактировать и продолжить генерацию',
        generateNumTip: 'Количество каждой генерации ',
        tip: 'Использование этой функции приведет к дополнительным затратам токенов',
      },
      speechToText: {
        title: 'Речь в текст',
        description: 'После включения вы можете использовать голосовой ввод.',
        resDes: 'Голосовой ввод включен',
      },
      textToSpeech: {
        title: 'Текст в речь',
        description: 'После включения текст может быть преобразован в речь.',
        resDes: 'Преобразование текста в аудио включено',
      },
      citation: {
        title: 'Цитаты и Атрибуции',
        description: 'После активации показывать исходный документ и атрибутированный раздел сгенерированного контента.',
        resDes: 'Цитаты и Атрибуции активированы',
      },
      annotation: {
        title: 'Ответ-Аннотация',
        description: 'Вы можете вручную добавить высококачественный ответ в кэш для приоритетного сравнения с похожими вопросами пользователей.',
        resDes: 'Ответ-Аннотация включена',
        scoreThreshold: {
          title: 'Порог оценки',
          description: 'Используется для установки порога схожести для ответа-аннотации.',
          easyMatch: 'Легкое совпадение',
          accurateMatch: 'Точное совпадение',
        },
        matchVariable: {
          title: 'Совпадение переменных',
          choosePlaceholder: 'Выберите переменную соответствия',
        },
        cacheManagement: 'Аннотации',
        cached: 'Аннотировано',
        remove: 'Удалить',
        removeConfirm: 'Удалить эту аннотацию?',
        add: 'Добавить аннотацию',
        edit: 'Редактировать аннотацию',
      },
      dataSet: {
        title: 'Контекст',
        noData: 'Вы можете импортировать знания как контекст',
        words: 'Слова',
        textBlocks: 'Текстовые блоки',
        selectTitle: 'Выберите справочные знания',
        selected: 'Знания выбраны',
        noDataSet: 'Знания не найдены',
        toCreate: 'Перейти к созданию',
        notSupportSelectMulti: 'В настоящее время поддерживается только одно знание',
        queryVariable: {
          title: 'Переменная запроса',
          tip: 'Эта переменная будет использоваться как входной запрос для получения контекста, получения контекстной информации, связанной с вводом этой переменной.',
          choosePlaceholder: 'Выберите переменную для запроса',
          noVar: 'Переменных нет',
          noVarTip: 'пожалуйста, создайте переменную в разделе Переменные',
          unableToQueryDataSet: 'Невозможно выполнить запрос к Знаниям',
          unableToQueryDataSetTip: 'Не удалось успешно выполнить запрос к Базе Знаний, пожалуйста, выберите переменную контекстного запроса в разделе контекста.',
          ok: 'ОК',
          contextVarNotEmpty: 'переменная контекстного запроса не может быть пустой',
          deleteContextVarTitle: 'Удалить переменную “{{varName}}”?',
          deleteContextVarTip: 'Эта переменная была установлена ​​как переменная контекстного запроса, и ее удаление повлияет на нормальное использование Знаний. Если вам все еще нужно ее удалить, пожалуйста, выберите ее повторно в разделе контекста.',
        }
      },
    },
    otherError: {
      promptNoBeEmpty: 'Команда не может быть пустой',
      historyNoBeEmpty: 'Историю разговора необходимо установить в подсказке',
      queryNoBeEmpty: 'Запрос должен быть установлен в подсказке',
    },
    variableConig: {
      'addModalTitle': 'Добавить Поле Ввода',
      'editModalTitle': 'Редактировать Поле Ввода',
      'description': 'Настройки для переменной {{varName}}',
      'fieldType': 'Тип поля',
      'string': 'Короткий текст',
      'text-input': 'Короткий текст',
      'paragraph': 'Параграф',
      'select': 'Выбрать',
      'number': 'Число',
      'notSet': 'Не установлено, попробуйте ввести {{input}} в префиксной подсказке',
      'stringTitle': 'Параметры поля ввода формы',
      'maxLength': 'Максимальная длина',
      'options': 'Опции',
      'addOption': 'Добавить опцию',
      'apiBasedVar': 'Переменная на основе API',
      'varName': 'Название переменной',
      'labelName': 'Название метки',
      'inputPlaceholder': 'Пожалуйста, введите',
      'required': 'Обязательно',
      'errorMsg': {
        varNameRequired: 'Необходимо указать название переменной',
        labelNameRequired: 'Необходимо указать название метки',
        varNameCanBeRepeat: 'Название переменной не может повторяться',
        atLeastOneOption: 'Необходимо как минимум одну опцию',
        optionRepeat: 'Есть повторные опции',
      },
    },
    vision: {
      name: 'Изображение',
      description: 'Включение функции "Изображение" позволит модели принимать изображения и отвечать на вопросы о них.',
      settings: 'Настройки',
      visionSettings: {
        title: 'Настройки изображений',
        resolution: 'Разрешение',
        resolutionTooltip: 'низкое разрешение позволит модели получить изображение с низким разрешением 512 x 512 пикселей и представить изображение с ограничением в 65 токенов. Это позволяет API быстрее возвращать ответы и потреблять меньше входных токенов для случаев использования, таких как визуальный поиск и анализ изображений.',
      },
    },
    modelConfig: {
      model: 'Модель',
      setTone: 'Установить тон ответов',
      title: 'Модель и параметры',
      modeType: {
        chat: 'Чат',
        completion: 'Завершение',
      },
    },
    inputs: {
      title: 'Отладка и предварительный просмотр',
      noPrompt: 'Попробуйте написать какой-нибудь запрос в поле ввода префикса команды',
      userInputField: 'Поле ввода пользователя',
      noVar: 'Заполните значение переменной, которая будет автоматически заменена в слове-подсказке при каждом запуске нового сеанса.',
      chatVarTip: 'Заполните значение переменной, которая будет автоматически заменена в слове-подсказке при каждом запуске нового сеанса.',
      completionVarTip: 'Заполните значение переменной, которая будет автоматически заменена в словах-подсказках при каждом отправлении запроса.',
      previewTitle: 'Предварительный просмотр подсказки',
      queryTitle: 'Содержание запроса',
      queryPlaceholder: 'Пожалуйста, введите текст запроса',
      run: 'ЗАПУСТИТЬ',
    },
    result: 'Выходной текст',
    datasetConfig: {
      settingTitle: 'Настройки поиска',
      knowledgeTip: 'Нажмите кнопку “+”, чтобы добавить знания',
      retrieveOneWay: {
        title: 'Односторонний поиск',
        description: 'На основе намерений пользователя и описаний Знаний Агент самостоятельно выбирает лучшие Знания для запросов. Лучше всего подходит для приложений с отдельными, ограниченными Знаниями.',
      },
      retrieveMultiWay: {
        title: 'Многопутевой поиск',
        description: 'На основе намерений пользователя запрашивает по всем Базам Знаний, получает релевантный текст из нескольких источников и выбирает лучшие результаты, соответствующие запросу пользователя, после переранжирования. Необходима конфигурация API модели переранжирования.',
      },
      rerankModelRequired: 'Необходима модель переранжирования',
      params: 'Параметры',
      top_k: 'Лучших K',
      top_kTip: 'Используется для фильтрации фрагментов, наиболее похожих на вопросы пользователей. Система также динамически регулирует значение K в соответствии с max_tokens выбранной модели.',
      score_threshold: 'Порог оценки',
      score_thresholdTip: 'Используется для установки порога схожести для фильтрации фрагментов.',
      retrieveChangeTip: 'Изменение режима индексирования и режима получения может повлиять на приложения, связанные с этими знаниями.',
    },
    tools: {
      title: 'Инструменты',
      tips: 'Инструменты предоставляют стандартный метод вызова API, принимая входные данные пользователя или переменные как параметры запроса для запроса внешних данных как контекста.',
      toolsInUse: 'Используется инструментов: {{count}}',
      modal: {
        title: 'Инструмент',
        toolType: {
          title: 'Тип инструмента',
          placeholder: 'Пожалуйста, выберите тип инструмента',
        },
        name: {
          title: 'Название',
          placeholder: 'Пожалуйста, введите название',
        },
        variableName: {
          title: 'Название переменной',
          placeholder: 'Пожалуйста, введите название переменной',
        },
      },
    },
    conversationHistory: {
      title: 'История разговоров',
      description: 'Установите префиксы для ролей в разговоре',
      tip: 'История разговоров не включена, добавьте <histories> в запрос выше.',
      learnMore: 'Узнать больше',
      editModal: {
        title: 'Редактировать названия ролей в разговоре',
        userPrefix: 'Префикс пользователя',
        assistantPrefix: 'Префикс помощника',
      },
    },
    valueOfVarRequired: 'значение {{key}} не может быть пустым',
    queryRequired: 'Текст запроса обязателен.',
    waitForResponse: 'Пожалуйста, подождите, пока будет завершен ответ на предыдущее сообщение.',
    waitForBatchResponse: 'Пожалуйста, дождитесь завершения ответа на пакетное задание.',
    notSelectModel: 'Пожалуйста, выберите модель',
    waitForImgUpload: 'Пожалуйста, подождите, пока изображение загрузится',
    chatSubTitle: 'Инструкции',
    completionSubTitle: 'Префикс команды',
    promptTip: 'Запросы управляют ответами ИИ, предоставляя инструкции и ограничения. Вставьте переменные, такие как {{input}}. Этот запрос не будет виден пользователям.',
    formattingChangedTitle: 'Изменено форматирование',
    formattingChangedText: 'Изменение форматирования приведет к сбросу области отладки. Вы уверены?',
    variableTitle: 'Переменные',
    variableTip: 'Пользователи заполняют переменные в форме, автоматически заменяя переменные в команде.',
    notSetVar: 'Переменные позволяют пользователям вводить подсказки или вступительные замечания при заполнении форм. Вы можете попробовать ввести "{{input}}" в слова подсказки.',
    autoAddVar: 'На неопределенные переменные, на которые ссылаются в предыдущем запросе, есть ссылка. Вы хотите добавить их в форму ввода пользователя?',
    variableTable: {
      key: 'Ключ переменной',
      name: 'Название поля для ввода пользователя',
      optional: 'Дополнительно',
      type: 'Тип ввода',
      action: 'Действия',
      typeString: 'Строка',
      typeSelect: 'Выбрать',
    },
    varKeyError: {
      canNoBeEmpty: 'Ключ переменной не может быть пустым',
      tooLong: 'Ключ переменной: {{key}} слишком длинный. Не может быть больше 30 символов',
      notValid: 'Ключ переменной: {{key}} недействителен. Может содержать только буквы, цифры и подчеркивания',
      notStartWithNumber: 'Ключ переменной: {{key}} не может начинаться с цифры',
      keyAlreadyExists: 'Ключ переменной: :{{key}} уже существует',
    }
  };
  
  export default translation;