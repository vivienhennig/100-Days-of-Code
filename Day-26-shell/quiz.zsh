#!/bin/sh
points=0
echo "Willkommen zum Brooklyn Nine Nine Quiz. Lass uns schauen, wie gut du dich auskennst."
echo "Wie ist dein Name?"
read name
echo "Okay $name, lass uns beginnen."
echo "Wie heißen die Spiele, die den olympischen Spielen ähneln, bei denen die Detectives gegeneinander antreten?"
options=('Jimmy Jab Games' 'Ahmadinejad Games' 'Office Olympics')

select opt in "${options[@]}"

do
case $opt in 
	"Jimmy Jab Games")
		echo "Noice! Das ist richtig! Nächste Frage:"
		points=$(( $points + 5 ))
		break
		;;
	"Ahmadinejad Games")
		echo "Also bitte. Selbst Hitchcock weiß mehr als du."
		points=$(( $points - 5 ))
		;;
	"Office Olympics")
		echo "Falsche Serie."
		points=$(( $poinrs - 5 ))
		;;

	esac
done

echo "Du hast: $points Punkte."






