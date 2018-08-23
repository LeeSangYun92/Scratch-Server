from modi import *

import time
import sys

m = modi.MODI()

time.sleep(1)

while True:
    try:
        command = sys.stdin.readline()
        excute = compile(command,'<string>','exec')
        exec(excute)
    
        time.sleep(0.01)
        sys.stdout.flush()
        sys.stdin.flush()
    except:
        print()
        