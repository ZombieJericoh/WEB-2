var html5_audiotypes = { //define la lista de las extensiones de los sonidos. 
			"mp3": "audio/mpeg",
			"mp4": "audio/mp4",
			"ogg": "audio/ogg",
			"wav": "audio/wav"
		}

		function createsound(sound){
			var html5audio = document.createElement('audio')

			if (html5audio.canPlayType){ //chequear soporte HTML5
				for (var i=0; i<arguments.length; i++){
					var source = document.createElement('source')
					source.setAttribute('src', arguments[i])
					if (arguments[i].match(/\.(\w+)$/i))
						source.setAttribute('type', html5_audiotypes[RegExp.$1])
					html5audio.appendChild(source)
				}
				html5audio.load()
				html5audio.playclip = function(){
					html5audio.pause()
					html5audio.currentTime=0
					html5audio.play()
				}
				return html5audio
			}
			else {
				return { 
					playclip:function(){
						throw new Error("Tu navegador no soporta HTML5 Audio!")
					}
				}
			}
		}

		//Iniciar los sonidos:

		var clicksound1=createsound("download/Aerosal Can 11.oggvorbis.ogg", "download/Aerosal Can 11.wav")
		var clicksound2=createsound("download/Telephone Ring 02.oggvorbis.ogg", "download/Telephone Ring 02.wav")
		var clicksound3=createsound("download/Tune FM Radio 01.oggvorbis.ogg", "download/Tune FM Radio 01.wav")
		var clicksound4=createsound("download/Walkie Talkie Chatter 02.oggvorbis.ogg", "download/Walkie Talkie Chatter 02.wav")
