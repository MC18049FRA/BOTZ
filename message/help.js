exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator : ${ownerName}*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *Total Fitur : 200+*
├≽ *Total Pengguna : ${pendaftar.length}*
├≽ *Tanggal : ${tanggal}*
├≽ *Pukul : ${jam}*
├≽ *Runtime Bot*
├≽ *${runtime}*
├────────────────────
╞═══ 《 *USER INFO* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├────────────────────
╞═══ 《 *Sticker Menu* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm*
├≽ *${prefix}take*
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp*
├────────────────────
╞═══ 《 *Creator Menu* 》 ═══
├────────────────────
├≽ *${prefix}addprem*
├≽ *${prefix}delprem*
├≽ *${prefix}ban*
├≽ *${prefix}unban*
├≽ *${prefix}join*
├≽ *${prefix}addbaword*
├≽ *${prefix}delbaword*
├≽ *${prefix}addchangelog*
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc*
├≽ *${prefix}setprefix*
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├────────────────────
╞═══ 《 *Grup Menu* 》 ═══
├────────────────────
├≽ *${prefix}afk*
├≽ *${prefix}infogrup*
├≽ *${prefix}add*
├≽ *${prefix}kick*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc*
├≽ *${prefix}setgrupname*
├≽ *${prefix}setppgrup*
├≽ *${prefix}opengrup*
├≽ *${prefix}closegrup*
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak*
├≽ *${prefix}hidetag*
├≽ *${prefix}getpp*
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├────────────────────
╞═══ 《 *Sistem Menu* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}antiwame*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
╞═══ 《 *Gabut Menu* 》 ═══
├────────────────────
├≽ *${prefix}apakah*
├≽ *${prefix}bisakah*
├≽ *${prefix}kapankah*
├≽ *${prefix}hobby*
├≽ *${prefix}rate*
├≽ *${prefix}cekbapak*
├≽ *${prefix}seberapagay*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├────────────────────
╞═══ 《 *Game Menu* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe*
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit*
├────────────────────
╞═══ 《 *Download Menu* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├≽ *${prefix}lirik*
├≽ *${prefix}tiktok*
├≽ *${prefix}tiktokmp3*
├≽ *${prefix}facebook*
├────────────────────
╞═══ 《 *Search Menu* 》 ═══
├────────────────────
├≽ *${prefix}yts*
├≽ *${prefix}pinterest*
├────────────────────
╞═══ 《 *Stalk Menu* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├────────────────────
╞═══ 《 *Random Menu* 》 ═══
├────────────────────
├≽ *${prefix}quotes*
├≽ *${prefix}darkjokes*
├≽ *${prefix}meme*
├≽ *${prefix}pantun*
├≽ *${prefix}bucin*
├≽ *${prefix}fakta*
├≽ *${prefix}puisi*
├≽ *${prefix}katabijak*
├────────────────────
╞═══ 《 *Anime Menu* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}nekonime*
├≽ *${prefix}shinobu*
├────────────────────
╞═══ 《 *Tools Menu* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}hartatahta*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├────────────────────
╞═══ 《 *Sound Menu* 》 ═══
├────────────────────
├≽ *${prefix}sound1*
├≽ *${prefix}sound2*
├≽ *${prefix}sound3*
├≽ *${prefix}sound4*
├≽ *${prefix}sound5*
├≽ *${prefix}sound6*
├≽ *${prefix}sound7*
├≽ *${prefix}sound8*
├≽ *${prefix}sound9*
├≽ *${prefix}sound10*
├────────────────────
╞═══ 《 *Buggc Menu* 》 ═══
├────────────────────
├≽ *${prefix}buggc*
├≽ *${prefix}bugx*
├≽ *${prefix}bugtroli*
├≽ *${prefix}trolix*
├────────────────────
╞═══ 《 *Other Menu* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore*
├────────────────────
╞═══ 《 *THANKS TO* 》 ═══
├────────────────────
├≽ *Xinz-Team*
├≽ *Aqulzz*
├≽ *Nafizz*
├≽ *Y-DhyZx*
├≽ *Ramlan ID*
├≽ *X-MrG3P5*
├≽ *Nanda*
├≽ *Juwen*
├≽ *Adiwajshing/Baileys*
╘═══ 《 *${ownerName}* 》 ═══`
}