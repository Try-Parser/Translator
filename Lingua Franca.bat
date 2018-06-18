@Echo Off

Start /WAIT cmd /c "npm install nodemon --save && exit"

Start /WAIT cmd /c "py -m pip install requests && exit"

Start cmd /c "npm run dev"

Start cmd /c "py trans_ui.py"

Exit