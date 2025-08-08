import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
export const data=new SlashCommandBuilder().setName('mod').setDescription('Basic moderation').setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
 .addSubcommand(s=>s.setName('kick').setDescription('Kick').addUserOption(o=>o.setName('user').setDescription('Target').setRequired(true)))
 .addSubcommand(s=>s.setName('ban').setDescription('Ban').addUserOption(o=>o.setName('user').setDescription('Target').setRequired(true)))
 .addSubcommand(s=>s.setName('unban').setDescription('Unban').addStringOption(o=>o.setName('userid').setDescription('User ID').setRequired(true)));
export async function execute(i){
  const sub=i.options.getSubcommand();
  if(sub==='kick'){ const u=i.options.getUser('user',true); const m=await i.guild.members.fetch(u.id); await m.kick('By moderator'); await i.reply({content:`Kicked ${u}.`});}
  else if(sub==='ban'){ const u=i.options.getUser('user',true); await i.guild.members.ban(u.id,{reason:'By moderator'}); await i.reply({content:`Banned ${u}.`});}
  else { const id=i.options.getString('userid',true); await i.guild.bans.remove(id); await i.reply({content:`Unbanned <@${id}>.`});}
}
