const Discord = require('discord.js');
const client = new Discord.Client();
client.on('guildMemberAdd', Sal => { //By aymen
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('http://live-timely-4jepdssgmc.time.ly/wp-content/uploads/2018/08/welcomeEvents.jpg')	//هنا حط الصوره الي تبيها
	.setImage('https://media.discordapp.net/attachments/512356207206334476/512370332515172352/b3d94329d8107c71_1.gif')
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'welcome') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    
	client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "welcome");
    logChannel.send(`${member.user.tag} دخل باستخدام الانفايت ${invite.code} من قبل ${inviter.tag}. تم استخدام الانفايت ${invite.uses} مرة من حين انشائها.`);
  });
});
    });

client.login('NzA1NTgyNTYwNjI4OTY1NDk3.Xqubpg.JjsbPFPisZLqHy7rUdoenD6GxvY');

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

const prefix = "++";

client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(` Alissar |${prefix}help |→ ${prefix}inv`);
});



  client.on('message', message => {
	var prefix ="+++";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .setFooter(`🏁것FRS3A것🏁`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

client.on("message", (message) => {
if (message.content.startsWith("+++ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});

client.on("message", (message) => {
if (message.content.startsWith("+++cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});

client.on('message', message => {
	var prefix = "+++";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'مسح')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', omar => {
var prefix = "+++";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / Codes
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
});

 client.on('message', message => {
	    var prefix = "+++";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "bot arab";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {

  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('سيرفر', message.guild.name)
       .addField('المرسل', message.author.username)
       .addField('الرسالة', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

client.on("message", message => {
	var prefix = "+++";
	var args = message.content.split(' ').slice(1);
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		}
	}
});

client.on('message', message => {
    if (message.content === "+++rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)

.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content == "++اسئلة") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

client.on('message', msg => {
	var prefix = "+++";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});

client.on('message', message => {
let PREFIX = '++'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(List)
            .setFooter(message.guild.name)
        message.channel.send(EmojiList)
    }
});

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "+++";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

    client.on('message', message => {
var prefix = "++";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message',async msg => {
  var p = "+++";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });
  }

});

client.on("message", message => {
    const prefix = "++"

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
	   var prefix = "++";
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Super bot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
	var prefix = "+++"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "+++"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    if (message.content.startsWith("+++bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on('message', message => {
     if (message.content === "++help") {
message.author.send("**اوامر ادارية**" + `  **
 → +++kick   → لطرد عضوو غير محترم
 → +++ban    → اعطاء باند(تجميد) لشخص
 → +++user   → انشاء روم صوتي ومعرفة كم واحد في الرومات
 → +++role   → لاعطاء شخص رتبة
 → +++roleremove → لسحب الرتب من الشخص
 → +++mute   → لاعطاء شخص ميوت
 → +++unmute → لفك الميوت
 → +++حذف دردشة →    مسح
 → +++rooms  → لمعرفة كم روم في السيرفر
 → +++ct     → لانشاء روم كتابي
 → +++cv     → لانشاء روم صوتي
 → +++dr     → لحذف جميع الرتب
 → +++dc     → لحذف جميع الرومات
 → +++bc      → لارسال للجميع رسالة
 → +++add-colors → اضافة 110 لون

 →+اوامر عامة+
 → ++bc+users → منشن الشخص وارسله وش تبي
 → ++server → معلومات عن السيرفر
 → +++bans → لمعرفة الاشخاص المبنديين
 → ++emojilist → لمعرفة الايموجي الموجودة في السيرفر
 → ++رابط
 → ++للعلم يلي يقدم الشكوه يكون قدها او يتعرض هو لميوت اوباند → تقديم شكوه 

 
 →+اوامر الالعاب+

 → ++كت تويت
 → ++نكت
 → ++اسئلة
 → ++للعلم هي اول لعبة تكون في البوتات كلها → هل يكذب 
 
 اوامر اخرى
 
 → ++inv → لدعوة البوت
 → ++image → شعار السيرفر

 
        اوامر خاص لتجديد السيرفر
 
 → +readyserver1 → لانشاء 20 رتبة
 
 → +readyserver2 → انشاء رومات كتابية
 
 → +readyserver3 → انشاء رومات صوتية
            
			للعلم كل الرتبة والرومات قابلة للصيانة
**`);
    }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" هلا !!");
    }
});

  
  client.on('message', message => {
        if (message.content === "++inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond:    ةوعدلل انه طغضا `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=504399655258423315&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendEmbed(embed);
       }
   });
   
   client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ولكم نورت السيرفر :rose: 
        :crown: اسم العضو  ${member}:crown:  
        انت العضو رقم ${member.guild.memberCount} `) 
    }).catch(console.error)
})


client.on('message', message=>{
	var prefix = "+++";
    if (message.content === prefix + 'add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 110; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage('? **You do not have permission to write this command**')
            }
        }else{
            message.channel.sendMessage('?  **This command only in servers**')
        }
    }
    if (message.content === prefix + 'de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 110; x++){
            message.guild.roles.find('name', x).delete()
      }
            }else{
                message.channel.sendMessage('**You do not have permission to write this command**')
            }
        }else{
            message.channel.sendMessage('**This command only in servers**')
        }
    }
    
})
client.on('message', msg => {
  if (msg.content === '*add-colors') {
    msg.reply('**تم اضافه الالوان بنجاح**');
  }
});

client.on('message', message => { // حقوق اوميجا كودز
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('++bc-bot')){ // البريفكس والامر
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')// حقوق اوميجا كودز
    client.users.forEach(m =>{// حقوق اوميجا كودز
    m.sendMessage(args)// حقوق اوميجا كودز
    })
    }
    });

	
	client.on('message', message => {
    if (message.content.startsWith("++رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});

client.on('message', message => {
      var prefix = "++"
    if (message.author.bot) return;
     if (message.content === prefix + "bot") {


 message.author.sendMessage(`
 
اسم البوت
Alissar : هنا
bot link : https://discordapp.com/api/oauth2/authorize?client_id=705582560628965497&permissions=0&scope=bot
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "welcome");
    logChannel.send(`Invited by: <@${inviter.id}>`);
  });
});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('++bc+users')){
if(!message.author.id === 'اي دي صاحب البوت') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('guildCreate', guild => {
    

    var star = new Discord.RichEmbed()
    .setTitle("DarknessBot")
    .setColor(000000)
    .setDescription(`***مشكور ياحبي لانك دخلتني في سيرفرك فيني اخدمك الان***`)                      
              .setFooter(`Alissar`, 'data:image/png;base64,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')
        guild.owner.send(star)
  })
  
  client.on('message', message => {
    if (message.content === "-server4") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type`-roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
	
	client.on('message', msg =>{
    var silfix = "++";
       if(msg.content.startsWith( silfix + "users")){
           msg.channel.send(`Users Bot Count Is [ ${client.users.size} ]`)
       }
       if(msg.content.startsWith( silfix + "guilds")){
           msg.channel.send(`Guilds Bot Count Is [ ${client.guilds.size} ]`)
       }
       if(msg.content.startsWith( silfix + "channels")){
           msg.channel.send(`Channels Bot Count Is [ ${client.channels.size} ]`)
       }
})

  
client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send(`${user}:relieved:  هاهاهاا , كشفتك وانت تكتب ي اوف لاين✉`)
          .then(msg => {
              msg.delete(10000)
          })
      }
  })
  
  client.on('message', message => {
    if (message.content === "bots*") {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});


client.on('message', message => {
	var prefix = "+++";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "say") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
  if (message.content.startsWith("+readyserver1")) {
   if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
   message.guild.createRole({
name: 'Emperor',
color: 'RANDOM',
position: (1),
permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
  name: 'Captain',
  color: 'RANDOM',
  position: (2),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
      'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
       'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
   position: (3),
  permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
  name: 'Queen',
  color: 'RANDOM',
  postion: (4),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Prince',
  color: 'RANDOM',
  postion: (5),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({
  name: 'Princess',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Knight',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Soldier',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Admin',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'BC',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Embed',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Pic',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Link',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade One',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Two',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Three',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Four',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Five',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Six',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({
  name: 'Grade Seven',
  color: '#030303',
  postion: (6),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**')
.catch(console.error);
  }
});
client.on('message', message => {
  if (message.content.startsWith("+readyserver2")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
   message.guild.createChannel('Info', 'text')
   message.guild.createChannel('welcome', 'text')
   message.guild.createChannel('chat', 'text')
   message.guild.createChannel('youtubers', 'text')
   message.guild.createChannel('giveaway', 'text')
   message.guild.createChannel('سوالف1', 'text')
   message.guild.createChannel('سوالف2', 'text')
   message.guild.createChannel('Bots', 'text')
   message.guild.createChannel('Felling', 'text')
   message.guild.createChannel('Pic', 'text')
   message.guild.createChannel('Avatar', 'text')
   message.guild.createChannel('Quote', 'text')
   message.guild.createChannel('-Admins', 'text')
   message.guild.createChannel('Problems', 'text')
   message.guild.createChannel('Suggestion', 'text')
   message.guild.createChannel('Staff', 'text')
   message.guild.createChannel('🔊Congress', 'text')
   message.guild.createChannel('🔊Office', 'text')
   message.guild.createChannel('log', 'text')
   message.guild.createChannel('shop', 'text')
   message.guild.createChannel('AFK', 'text')
 
   
 
message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});
 
client.on('message', message => {
  if (message.content.startsWith("+readyserver3")) {
  if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
  }
});


client.on('message', message => {
 var prefix = "++"
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Alissar");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        if(!args) {
            return message.channel.send('الرجاء كتابة سبب التذكرة');
        };
                if(!support) {
                    return message.channel.send('**Please make sure that `Support Team` role exists and it\'s not duplicated.**');
                };
            if(!ticketsStation) {
                message.guild.createChannel("Ticket", "category");
            };
                message.guild.createChannel(`𝑻𝑰𝑪𝑲𝑬𝑻`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`تم انشاء تذكرتك. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**تذكرة جديدة.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('سبب التذكرة', args)
                                .addField('صاحب التذكرة', message.author)
                                .addField('الروم', `<#${message.channel.id}>`);

                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("𝑻𝑰𝑪𝑲𝑬𝑻")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("هل تريد فعلآ اغلاق التذكرة ؟.")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {

                    
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**Operation has been cancelled.**')) .then((c) => {
                                    c.delete(4000);
                                })
                                    
                            
                        })


                    })


            
    }
});


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('name', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
        
        
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     

       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                        
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "active"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });

								   
client.on('message', message => { // Falsteni Is Here
    const responses = [
    'نعم', 'لا','لا', 'لا','نعم', 'لا','لا', 'نعم','نعم', 'لا','نعم','نعم','لا',
    ]
        if(message.content.startsWith(prefix + 'هل يكذب')) { // Falsteni Is Here
                if(!message.channel.guild) return;
            let args = message.content.split(" ").slice(1); // Falsteni Is Heressss
            if (!args[0]) {
                message.channel.send('**Please type Your question!**');
                return;
                }
       message.channel.sendMessage(`${responses[Math.floor(Math.random() * responses.length)]}`); // Falsteni Is Here
                   if (!args[0]) {
              message.edit('1')
              return; // Falsteni Is Here
            } // Falsteni Is Here
        } // Falsteni Is Here
    }); // Falsteni Is Here
	
	
	client.on('message', function(message) {
    if(message.content.startsWith(prefix + "تقديم شكوه")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});
