@Echo Off

Start /WAIT cmd /c "npm install && exit"

Start /WAIT cmd /c "npm install nodemon --save && exit"

Start /WAIT cmd /c "py -m pip install requests && exit"

Exit