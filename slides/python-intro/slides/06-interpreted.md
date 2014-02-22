## Python Интерпретируемый

`.py` файл `->` `.pyc` файл (байт-код) `->` выполнение

`.py`

    def hello():
      print('Hello')

`.pyc`

    1           0 LOAD_CONST               1 ('Hello')
                3 PRINT_ITEM
                4 PRINT_NEWLINE
                5 LOAD_CONST               0 (None)
                8 RETURN_VALUE
