import { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionFlagsBits } from 'discord.js';
export const data = new SlashCommandBuilder().setName('roles').setDescription('Create a role menu').setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);
export async function execute(i){
  const select = new StringSelectMenuBuilder().setCustomId('role_menu').setPlaceholder('Choose your colors & pings')
    .addOptions([{label:'Crimson',value:'crimson'},{label:'Ivory',value:'ivory'},{label:'Shadow',value:'shadow'}]);
  const row = new ActionRowBuilder().addComponents(select as any);
  await i.reply({ content: 'Role menu:', components: [row] });
}
