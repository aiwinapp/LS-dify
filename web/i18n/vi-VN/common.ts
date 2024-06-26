const translation = {
    api: {
      success: 'Успех',
      actionSuccess: 'Действие выполнено успешно',
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
      refresh: 'Обновить',
      reset: 'Сбросить',
      search: 'Поиск',
      change: 'Изменить',
      remove: 'Удалить',
      send: 'Отправить',
      copy: 'Копировать',
      lineBreak: 'Разрыв строки',
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
        zhHans: 'Китайский',
        zhHant: 'Традиционный китайский',
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
      char: 'символы',
    },
    actionMsg: {
      noModification: 'На данный момент изменений нет.',
      modifiedSuccessfully: 'Изменено успешно',
      modifiedUnsuccessfully: 'Не удалось изменить',
      copySuccessfully: 'Скопировано успешно',
      paySucceeded: 'Оплата прошла успешно',
      payCancelled: 'Оплата отменена',
      generatedSuccessfully: 'Успешно сгенерировано',
      generatedUnsuccessfully: 'Не удалось сгенерировать',
    },
    model: {
      params: {
        temperature: 'Температура',
        temperatureTip: 'Контролирует случайность: снижение приводит к менее случайным завершениям. При температуре, близкой к нулю, модель становится детерминированной и повторяемой.',
        top_p: 'Top P',
        top_pTip: 'Контролирует разнообразие через выбор ядра: 0,5 означает, что рассматривается половина всех вариантов, взвешенных по вероятности.',
        presence_penalty: 'Штраф за присутствие',
        presence_penaltyTip: 'Насколько штрафовать новые токены в зависимости от того, появлялись ли они уже в тексте. Увеличивает вероятность того, что модель начнет говорить на новые темы.',
        frequency_penalty: 'Штраф за частоту',
        frequency_penaltyTip: 'Насколько штрафовать новые токены на основе их существующей частоты в тексте. Уменьшает вероятность того, что модель будет дословно повторять одну и ту же строку.',
      },
    },
  };
  
  export default translation;