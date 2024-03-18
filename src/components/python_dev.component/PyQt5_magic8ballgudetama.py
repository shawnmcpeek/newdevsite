import PyQt5
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import *
from PyQt5.QtGui import QFont
import random


responses = ["Pah", "Ugh", "Never mind", "Leave me alone", "I can't", "Seriously, I can't", "Meh", "Soy Sauce"]


def main():
    app = QApplication([])
    window = QWidget()
    window.setGeometry(100, 100, 500, 400)
    window.setWindowTitle("Magic Gudetama Box")

    layout = QVBoxLayout()
    
    label = QLabel("Ask Gudetama a question.")
    textbox = QTextEdit()
    button = QPushButton("Press Me!")
    
    button.clicked.connect(lambda: on_clicked(textbox.toPlainText()))
    
    layout.addWidget(label)
    layout.addWidget(textbox)
    layout.addWidget(button)
    
    window.setLayout(layout)
    
    window.show()
    app.exec_()

def on_clicked(msg):
    message = QMessageBox()
    message.setText(random.choice(responses))
    message.exec_()


if __name__ == '__main__':
    main()