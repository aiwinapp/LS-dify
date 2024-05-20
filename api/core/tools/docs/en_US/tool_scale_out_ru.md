# Быстрая интеграция инструмента

Здесь мы используем GoogleSearch в качестве примера, чтобы продемонстрировать, как быстро интегрировать инструмент.

## 1. Подготовка yaml файла провайдера инструмента

### Введение
Этот yaml файл объявляет нового провайдера инструмента и включает информацию, такую как имя провайдера, иконка, автор и другие детали, которые отображаются на фронтенде.

### Пример

Нам нужно создать модуль `google` (папка) в `core/tools/provider/builtin`, и создать файл `google.yaml`. Имя должно совпадать с именем модуля.

Впоследствии все операции, связанные с этим инструментом, будут выполняться в этом модуле.

```yaml
identity: # Основная информация о провайдере инструмента
  author: Dify # Автор
  name: google # Имя, уникальное, не должно дублироваться с другими провайдерами
  label: # Метка для отображения на фронтенде
    en_US: Google # Метка на английском
    zh_Hans: Google # Метка на китайском
  description: # Описание для отображения на фронтенде
    en_US: Google # Описание на английском
    zh_Hans: Google # Описание на китайском
  icon: icon.svg # Иконка, должна быть размещена в папке _assets текущего модуля

```
- Поле `identity` обязательно, оно содержит основную информацию о провайдере инструмента, включая автора, имя, метку, описание, иконку и т.д.
- Иконка должна быть размещена в папке `_assets` текущего модуля, можно посмотреть пример [здесь](../../provider/builtin/google/_assets/icon.svg).

## 2. Подготовка учетных данных провайдера

Google, как сторонний инструмент, использует API, предоставляемый SerpApi, который требует API-ключ для использования. Это означает, что этот инструмент требует учетных данных для использования. Для инструментов, таких как `wikipedia`, нет необходимости заполнять поле учетных данных, пример можно посмотреть [здесь](../../provider/builtin/wikipedia/wikipedia.yaml).

После настройки поля учетных данных, результат будет следующим:

```yaml
identity:
  author: Dify
  name: google
  label:
    en_US: Google
    zh_Hans: Google
  description:
    en_US: Google
    zh_Hans: Google
  icon: icon.svg
credentials_for_provider: # Поле учетных данных
  serpapi_api_key: # Имя поля учетных данных
    type: secret-input # Тип поля учетных данных
    required: true # Обязательно или нет
    label: # Метка поля учетных данных
      en_US: SerpApi API key # Метка на английском
      zh_Hans: SerpApi API key # Метка на китайском
    placeholder: # Заполнитель поля учетных данных
      en_US: Please input your SerpApi API key # Заполнитель на английском
      zh_Hans: 请输入你的 SerpApi API key # Заполнитель на китайском
    help: # Текст помощи для поля учетных данных
      en_US: Get your SerpApi API key from SerpApi # Текст помощи на английском
      zh_Hans: 从 SerpApi 获取您的 SerpApi API key # Текст помощи на китайском
    url: https://serpapi.com/manage-api-key # Ссылка на помощь для поля учетных данных

```

- `type`: Тип поля учетных данных, в настоящее время может быть `secret-input`, `text-input` или `select`, соответствующие вводу пароля, текстовому вводу и выпадающему списку соответственно. Если установлено `secret-input`, это замаскирует вводимое содержимое на фронтенде, а бэкэнд зашифрует вводимое содержимое.

## 3. Подготовка yaml файла инструмента
Провайдер может иметь несколько инструментов, каждый инструмент нуждается в yaml файле для описания, этот файл содержит основную информацию, параметры, вывод и т.д. инструмента.

Всё ещё используя GoogleSearch в качестве примера, нам нужно создать модуль `tools` в модуле `google`, и создать файл `tools/google_search.yaml`, содержание следующее.

```yaml
identity: # Основная информация о инструменте
  name: google_search # Имя инструмента, уникальное, не должно дублироваться с другими инструментами
  author: Dify # Автор
  label: # Метка для отображения на фронтенде
    en_US: GoogleSearch # Метка на английском
    zh_Hans: 谷歌搜索 # Метка на китайском
description: # Описание для отображения на фронтенде
  human: # Введение для отображения на фронтенде, поддерживает несколько языков
    en_US: A tool for performing a Google SERP search and extracting snippets and webpages. Input should be a search query.
    zh_Hans: 一个用于执行 Google SERP 搜索并提取片段和网页的工具。输入应该是一个搜索查询。
  llm: A tool for performing a Google SERP search and extracting snippets and webpages. Input should be a search query. # Введение для передачи LLM, чтобы LLM лучше понимала этот инструмент, рекомендуется написать как можно более подробную информацию об этом инструменте здесь, чтобы LLM могла понять и использовать этот инструмент
parameters: # Список параметров
  - name: query # Имя параметра
    type: string # Тип параметра
    required: true # Обязательно или нет
    label: # Метка параметра
      en_US: Query string # Метка на английском
      zh_Hans: 查询语句 # Метка на китайском
    human_description: # Введение для отображения на фронтенде, поддерживает несколько языков
      en_US: used for searching
      zh_Hans: 用于搜索网页内容
    llm_description: key words for searching # Введение для передачи LLM, также рекомендуется написать как можно более подробную информацию об этом параметре здесь, чтобы LLM могла понять этот параметр
    form: llm # Тип формы, llm означает, что этот параметр должен быть выведен агентом, фронтенд не будет отображать этот параметр
  - name: result_type
    type: select # Тип параметра
    required: true
    options: # Опции выпадающего списка
      - value: text
        label:
          en_US: text
          zh_Hans: 文本
      - value: link
        label:
          en_US: link
          zh_Hans: 链接
    default: link
    label:
      en_US: Result type
      zh_Hans: 结果类型
    human_description:
      en_US: used for selecting the result type, text or link
      zh_Hans: 用于选择结果类型，使用文本还是链接进行展示
    form: form # Тип формы, form означает, что этот параметр должен быть заполнен пользователем на фронтенде перед началом разговора

```

- Поле `identity` обязательно, оно содержит основную информацию об инструменте, включая имя, автора, метку, описание и т.д.
- `parameters` Список параметров
    - `name` Имя параметра, уникальное, не должно дублироваться с другими параметрами
    - `type` Тип параметра, в настоящее время поддерживает `string`, `number`, `boolean`, `select`, `secret-input` четыре типа, соответствующие строке, числу, булевому значению, выпадающему списку и зашифрованному вводу соответственно. Для конфиденциальной информации рекомендуется использовать тип `secret-input`
    - `required` Обязательно или нет
        - В режиме `llm`, если параметр обязателен, агент должен вывести этот параметр
        - В режиме `form`, если параметр обязателен, пользователь должен заполнить этот параметр на фронтенде перед началом разговора
    - `options` Опции параметра
        - В режиме `llm`, Dify передаст все опции LLM, LLM может выводить на основе этих опций
        - В режиме `form`, когда `type` равно `select`, фронтенд будет отображать эти опции
    - `default` Значение по умолчанию
    - `label` Метка параметра, для отображения на фронтенде
    - `human_description` Введение для отображения на фронтенде, поддерживает несколько языков
    - `llm_description` Введение для передачи LLM, рекомендуется написать как можно более подробную информацию об этом параметре здесь, чтобы LLM могла понять этот параметр
    - `form` Тип формы, в настоящее время поддерживает `llm`, `form` два типа, соответствующие выводу агентом и заполнению на фронтенде

## 4. Добавление логики инструмента
После завершения конфигурации инструмента мы можем начать писать код инструмента, который определяет, как он вызывается.

Создайте `google_search.py` в модуле `google/tools`, содержание следующее.

```python
from core.tools.tool.builtin_tool import BuiltinTool
from core.tools.entities.tool_entities import ToolInvokeMessage

from typing import Any, Dict, List, Union

class GoogleSearchTool(BuiltinTool):
    def _

invoke(self, 
                user_id: str,
               tool_parameters: Dict[str, Any], 
        ) -> Union[ToolInvokeMessage, List[ToolInvokeMessage]]:
        """
            invoke tools
        """
        query = tool_parameters['query']
        result_type = tool_parameters['result_type']
        api_key = self.runtime.credentials['serpapi_api_key']
        # TODO: search with serpapi
        result = SerpAPI(api_key).run(query, result_type=result_type)

        if result_type == 'text':
            return self.create_text_message(text=result)
        return self.create_link_message(link=result)
```

### Параметры
Общая логика инструмента находится в методе `_invoke`, этот метод принимает два параметра: `user_id` и `tool_parameters`, которые представляют ID пользователя и параметры инструмента соответственно.

### Возврат данных
Когда инструмент возвращает данные, вы можете выбрать возвращение одного сообщения или нескольких сообщений, здесь мы возвращаем одно сообщение, используя `create_text_message` и `create_link_message`, чтобы создать текстовое сообщение или сообщение-ссылку.

## 5. Добавление кода провайдера
Наконец, нам нужно создать класс провайдера в модуле провайдера, чтобы реализовать логику проверки учетных данных провайдера. Если проверка учетных данных не удастся, будет выброшено исключение `ToolProviderCredentialValidationError`.

Создайте `google.py` в модуле `google`, содержание следующее.

```python
from core.tools.entities.tool_entities import ToolInvokeMessage, ToolProviderType
from core.tools.tool.tool import Tool
from core.tools.provider.builtin_tool_provider import BuiltinToolProviderController
from core.tools.errors import ToolProviderCredentialValidationError

from core.tools.provider.builtin.google.tools.google_search import GoogleSearchTool

from typing import Any, Dict

class GoogleProvider(BuiltinToolProviderController):
    def _validate_credentials(self, credentials: Dict[str, Any]) -> None:
        try:
            # 1. Здесь нужно создать экземпляр GoogleSearchTool с помощью GoogleSearchTool(), он автоматически загрузит конфигурацию yaml GoogleSearchTool, но в этот момент в нём нет информации об учетных данных
            # 2. Затем вам нужно использовать метод fork_tool_runtime, чтобы передать текущую информацию об учетных данных GoogleSearchTool
            # 3. Наконец, вызвать его, параметры нужно передавать согласно правилам параметров, настроенным в yaml GoogleSearchTool
            GoogleSearchTool().fork_tool_runtime(
                meta={
                    "credentials": credentials,
                }
            ).invoke(
                user_id='',
                tool_parameters={
                    "query": "test",
                    "result_type": "link"
                },
            )
        except Exception as e:
            raise ToolProviderCredentialValidationError(str(e))
```

## Завершение
После выполнения вышеуказанных шагов мы можем видеть этот инструмент на фронтенде, и он может быть использован в агенте.

Конечно, поскольку google_search требует учетных данных, перед использованием вам также нужно ввести свои учетные данные на фронтенде.

![Alt text](../zh_Hans/images/index/image-2.png)