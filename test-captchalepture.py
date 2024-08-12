from captcha.image import ImageCaptcha
import os
import random
import string

total = 20

os.makedirs('gen/captchalepture', exist_ok=True)


for x in range(1, 20):
    image = ImageCaptcha(width=320, height=120)
    s = string.ascii_lowercase+string.ascii_uppercase+string.digits
    text = ''.join(random.sample(s, 10))

    image.write(text, 'gen/captchalepture/' + str(x) + '.png')

    with open('gen/captchalepture/' + str(x) + '.txt', 'w') as writer:
        writer.write(text)
