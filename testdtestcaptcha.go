package main

import ("bytes"
		"fmt"
		"log"
		"os"
		"github.com/dchest/captcha"
		)

func main() {


	_ = os.Mkdir("gen/dtestcaptcha", os.ModePerm)

	var content bytes.Buffer

	d := captcha.RandomDigits(10)
	img := captcha.NewImage("", d, 400, 200)
	img.WriteTo(&content)

	fmt.Println(d)


	// c := captcha.NewLen(10)
	// captcha.WriteImage(&content, c, 400, 200)

	f, err := os.Create("gen/dtestcaptcha/file.png")
	if err != nil {
		log.Fatal(err)
	}
	// remember to close the file
	defer f.Close()

	// write bytes to the file
	_, err = f.Write(content.Bytes())
	if err != nil {
		log.Fatal(err)
	}

	err = os.WriteFile("gen/dtestcaptcha/file.txt", d, 0666)
	if err != nil {
		log.Fatal(err)
	}

}
