exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `Selamat ${ucapan.data.result} Im ${botName}

┌─❖ *「 INFO DEVELOPER 」*
│✎ *Creator : ${ownerName}*
│✎ *Github* : github.com/jaya255
│✎ *Ig* : instagram.com/jayasantika_26
└─❖

┌─❖ *「 INFO USER 」*
│❦ *Name* : *${pushname}*
│❦ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
│❦ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
│❦ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
│❦ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
└─❖

┌─❖ *「 INFO BOT 」*
│➫ *Baileys V.3.5.1*
│➫ *Prefix/Awalan : 「 ${prefix} 」*
│➫ *Total Pengguna : ${pendaftar.length}*
├─────────────┈ ⳹
│➫ *Tanggal : ${tanggal}*
│➫ *Pukul : ${jam}*
│➫ *Runtime Bot : ${runtime}*
└─❖

┌─❖
│「 *FULL MENU KEBAWAH* 」
└┬❖
    │ *「 Self And Public」*
┌┤✑  *${prefix}public*
││✑  *${prefix}self* 
│└────────────┈ ⳹
│ *「 Sticker Menu 」*
│✙ *${prefix}sticker*
│✙ *${prefix}stickergif*
│✙ *${prefix}swm*
│✙ *${prefix}take*
│✙ *${prefix}toimg*
│✙ *${prefix}tovideo*
│✙ *${prefix}attp*
├─────────
│ *「 Creator Menu 」*
│✙ *${prefix}addprem*
│✙ *${prefix}delprem*
│✙ *${prefix}ban*
│✙ *${prefix}unban*
│✙ *${prefix}join*
│✙ *${prefix}addbaword*
│✙ *${prefix}delbaword*
│✙ *${prefix}addchangelog*
│✙ *${prefix}exif*
│✙ *${prefix}bc*
│✙ *${prefix}setprefix*
│✙ *${prefix}setthumb*
│✙ *${prefix}clearall*
│✙ *${prefix}>*
│✙ *${prefix}$*
├─────────
│ *「 Group Menu 」*
│✙ *${prefix}afk*
│✙ *${prefix}infogrup*
│✙ *${prefix}add*
│✙ *${prefix}kick*
│✙ *${prefix}promote*
│✙ *${prefix}demote*
│✙ *${prefix}linkgc*
│✙ *${prefix}leave*
│✙ *${prefix}setdesc*
│✙ *${prefix}setgrupname*
│✙ *${prefix}setppgrup*
│✙ *${prefix}opengrup*
│✙ *${prefix}closegrup*
│✙ *${prefix}tagall*
│✙ *${prefix}tagme*
│✙ *${prefix}kontak*
│✙ *${prefix}hidetag*
│✙ *${prefix}getpp*
│✙ *${prefix}mute*
│✙ *${prefix}unmute*
├─────────
│ *「 System Menu 」*
│✙ *${prefix}antilink*
│✙ *${prefix}antivirtex*
│✙ *${prefix}antihoax*
│✙ *${prefix}antiwame*
│✙ *${prefix}antibadword*
│✙ *${prefix}welcome*
│✙ *${prefix}left*
├─────────
│ *「 Gabut Menu 」*
│✙ *${prefix}apakah*
│✙ *${prefix}bisakah*
│✙ *${prefix}kapankah*
│✙ *${prefix}hobby*
│✙ *${prefix}rate*
│✙ *${prefix}cekbapak*
│✙ *${prefix}seberapagay*
│✙ *${prefix}truth*
│✙ *${prefix}dare*
├─────────
│ *「 Game Menu 」*
│✙ *${prefix}tictactoe*
│✙ *${prefix}delttt*
│✙ *${prefix}tebakgambar*
│✙ *${prefix}family100*
│✙ *${prefix}suit*
├─────────
│ *「 Download Menu 」*
│✙ *${prefix}ytmp3*
│✙ *${prefix}ytmp4*
│✙ *${prefix}play*
│✙ *${prefix}playmp4*
│✙ *${prefix}tiktok*
│✙ *${prefix}tiktokmp3*
│✙ *${prefix}facebook*
│✙ *${prefix}instagram*
├─────────
│ *「 Search Menu 」*
│✙ *${prefix}yts*
│✙ *${prefix}pinterest*
├─────────
│ *「 Stalk Menu 」*
│✙ *${prefix}igstalk*
│✙ *${prefix}ghstalk*
├─────────
│ *「 Maker Menu 」*
│✙ *${prefix}barcode*
│✙ *${prefix}naruto*
│✙ *${prefix}bneon*
│✙ *${prefix}matrix*
│✙ *${prefix}breakwall*
│✙ *${prefix}gneon*
│✙ *${prefix}dropwater*
│✙ *${prefix}flowertext*
│✙ *${prefix}crosslogo*
│✙ *${prefix}silktext*
│✙ *${prefix}flametext*
│✙ *${prefix}glowtext*
│✙ *${prefix}smoketext*
│✙ *${prefix}skytext*
│✙ *${prefix}cslogo*
│✙ *${prefix}lithgtext*
│✙ *${prefix}crismes*
│✙ *${prefix}snowwrite*
│✙ *${prefix}tfire*
│✙ *${prefix}sandw*
│✙ *${prefix}epep*
│✙ *${prefix}gplaybutton*
│✙ *${prefix}splaybutton*
│✙ *${prefix}text3dbox*
│✙ *${prefix}text3d*
│✙ *${prefix}logobp*
│✙ *${prefix}leavest*
│✙ *${prefix}thundertext*
│✙ *${prefix}tlight*
│✙ *${prefix}qrcreator*
│✙ *${prefix}hartatahta*
│✙ *${prefix}pubglogo*
│✙ *${prefix}watercolour*
│✙ *${prefix}logoaveng*
│✙ *${prefix}phlogo*
│✙ *${prefix}marvellogo*
│✙ *${prefix}gtext*
│✙ *${prefix}wolflogo*
│✙ *${prefix}retrotext*
│✙ *${prefix}quotemaker*
├─────────
│ *「 Videomaker Menu 」*
│✙ *${prefix}video1*
│✙ *${prefix}video2*
│✙ *${prefix}video3*
│✙ *${prefix}video4*
│✙ *${prefix}video5*
│✙ *${prefix}video6*
├─────────
│ *「 Random Menu 」*
│✙ *${prefix}quotes*
│✙ *${prefix}darkjokes*
│✙ *${prefix}darkjokes2*
│✙ *${prefix}darkjokes3*
│✙ *${prefix}meme*
│✙ *${prefix}meme2*
│✙ *${prefix}meme3*
│✙ *${prefix}pantun*
│✙ *${prefix}katailham*
│✙ *${prefix}bucin*
│✙ *${prefix}citacita*
│✙ *${prefix}katabijak*
│✙ *${prefix}fakta*
│✙ *${prefix}puisi*
│✙ *${prefix}asupan*
├─────────
│ *「 Kpop Menu 」*
│✙ *${prefix}blackpink*
│✙ *${prefix}exo*
│✙ *${prefix}bts*
├─────────
│ *「 Font Menu 」*
│✙ *${prefix}textfont*
│✙ *${prefix}hilih*
├─────────
│ *「 Anime Menu 」*
│✙ *${prefix}waifu*
│✙ *${prefix}loli*
│✙ *${prefix}neko*
│✙ *${prefix}awoo*
│✙ *${prefix}husbu*
│✙ *${prefix}nekonime*
│✙ *${prefix}megumin*
│✙ *${prefix}trapnime*
│✙ *${prefix}shinobu*
├─────────
│ *「 Tools Menu 」*
│✙ *${prefix}nulis*
│✙ *${prefix}nuliskiri*
│✙ *${prefix}nuliskanan*
│✙ *${prefix}foliokiri*
│✙ *${prefix}foliokanan*
│✙ *${prefix}tinyurl*
│✙ *${prefix}translate*
│✙ *${prefix}ebase64*
│✙ *${prefix}debase64*
│✙ *${prefix}ehex*
│✙ *${prefix}dehex*
│✙ *${prefix}ebinary*
│✙ *${prefix}debinary*
├─────────
│ *「 Information Menu 」*
│✙ *${prefix}brainly*
│✙ *${prefix}ramalancuaca*
│✙ *${prefix}artinama*
│✙ *${prefix}tafsirmimpi*
│✙ *${prefix}nomorhoki*
├─────────
│ *「 Sound Menu 」*
│✙ *${prefix}sound1*
│✙ *${prefix}sound2*
│✙ *${prefix}sound3*
│✙ *${prefix}sound4*
│✙ *${prefix}sound5*
│✙ *${prefix}sound6*
│✙ *${prefix}sound7*
│✙ *${prefix}sound8*
│✙ *${prefix}sound9*
│✙ *${prefix}sound10*
├─────────
│ *「 Buggc Menu 」*
│✙ *${prefix}buggc*
│✙ *${prefix}bugx*
│✙ *${prefix}bugtroli*
│✙ *${prefix}trolix*
├─────────
│ *「 Other Menu 」*
│✙ *cekprefix*
│✙ *${prefix}stats*
│✙ *${prefix}limit*
│✙ *${prefix}balance*
│✙ *${prefix}runtime*
│✙ *${prefix}speed*
│✙ *${prefix}owner*
│✙ *${prefix}donasi*
│✙ *${prefix}sourcecode*
│✙ *${prefix}cekprem*
│✙ *${prefix}listprem*
│✙ *${prefix}listban*
│✙ *${prefix}listbadword*
│✙ *${prefix}buylimit*
│✙ *${prefix}buyglimit*
│✙ *${prefix}topglobal*
│✙ *${prefix}toplocal*
│✙ *${prefix}readmore*
╰┬────────────┈ ⳹
┌┤➤ *DEVELOPER* 
││
││script bot ini di susun
││oleh developer dibawah!
│├──────── 
││✙ *Xinz-Team*
││✙ *Aqulzz*
││✙ *${ownerName}*
│└──────── 
│✙ *Nafizz*
│✙ *Y-DhyZx*
│✙ *Ramlan ID*
│✙ *X-MrG3P5*
│✙ *Nanda*
│✙ *Juwen*
│✙ *Adiwajshing/Baileys*
╰─━━━─── • ───━━━❋ཻུ۪۪⸙

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
      *「 *${ownerName}* 」*`
}