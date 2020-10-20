#!/bin/sh

points=0

echo "Willkommen zum Brooklyn Nine Nine Quiz. Lass uns schauen, wie gut du dich auskennst."

sleep 1s

echo "Wie ist dein Name?"

read name

echo "Okay $name, lass uns beginnen."

sleep 2s

echo "Wie heißen die Spiele, die den olympischen Spielen ähneln, bei denen die Detectives gegeneinander antreten?"

options=('Jimmy Jab Games' 'Ahmadinejad Games' 'Office Olympics')

select opt in "${options[@]}"

do
case $opt in 
	"Jimmy Jab Games")
		echo "Noice! Das ist richtig!"
		points=$(( $points + 5 ))
		break
		;;
	"Ahmadinejad Games")
		echo "Also bitte. Selbst Hitchcock weiß mehr als du."
		points=$(( $points - 5 ))
		break
		;;
	"Office Olympics")
		echo "Falsche Serie."
		points=$(( $points - 5 ))
		break
		;;

	esac
done

sleep 1s

echo "Du hast: $points Punkte."

sleep 2s

echo "Weiter gehts. Wie heiß Ginas Exfreund, der auch der Bruder von Genevieve ist?"

options=('Milton' 'Nadia' 'Charles')

select opt in "${options[@]}"

do
case $opt in 
	"Milton")
		echo "Nein, das ist Enigemas Daddy."
		points=$(( $points - 5 ))
		break
		;;
	"Nadia")
		echo "Cool cool cool cool cool, das ist richtig!"
		points=$(( $points + 5 ))
		break
		;;
	"Charles")
		echo "Charles ist der Bruder seiner Frau?!"
		points=$(( $points - 5 ))
		break
		;;
	esac
done

sleep 2 s

echo "Du hast jetzt $points Punkte" 

