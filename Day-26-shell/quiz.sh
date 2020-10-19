#!/bin/sh
points=0
echo "Willkommen zum Brooklyn Nine Nine Quiz. Lass uns schauen, wie gut du dich auskennst."
echo "Wie ist dein Name?"
read name
echo "Okay $name, lass uns beginnen."
echo "Wie heißen die Spiele, die den olympischen Spielen ähneln, bei denen die Detectives gegeneinander antreten?"
read answerOne
do
case $answerOne in 
	"Jimmy Jab Games")
		echo "Das ist richtig! Nächste Frage:"
		points=$(( $points + 5 ))
		break
		;;
	"jimmy jab games")
		echo "Richtig, weiter geht's"
		points=(( $points + 5 ))
		break
		;;
	*)
		echo "Sorry, das ist falsch"
		points=(( $points - 5))
		break
		;;
	esac
done

echo "Du hast: " $points






