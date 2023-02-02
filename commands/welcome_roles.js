const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() 
       .setName(`courses`)
       .setDescription(`assign courses to yourself`)
       .addRoleOption(option => option.setName(`role1`).setDescription(`First role you want to see set up`).setRequired(true)),
       //.addRoleOption(option => option.setName(`role2`).setDescription(`Second role you want to see set up`).setRequired(true))
       //.addRoleOption(option => option.setName(`role3`).setDescription(`Third role you want to see set up`).setRequired(true)),
    
       async execute(interaction, client) {

        const role1 = interaction.options.getRole(`role1`);
        //const role2 = interaction.options.getRole(`role2`);
        //const role3 = interaction.options.getRole(`role3`);

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`button1`)
            .setLabel(`${role1.name}`)
            .setStyle(ButtonStyle.Secondary),
            
           /*
            new ButtonBuilder()
            .setCustomId(`button2`)
            .setLabel(`${role2.name}`)
            .setStyle(ButtonStyle.Secondary),
            
            new ButtonBuilder()
            .setCustomId(`button3`)
            .setLabel(`${role3.name}`)
            .setStyle(ButtonStyle.Secondary),
            */
        )

        const embed = new EmbedBuilder()
        .setTitle(`Select a course that you are registered to below to obtain access to the appropriate channels.`)
        .setColor("Black")

        await interaction.reply({ embeds: [embed], components: [button]});

        const collector = await interaction.channel.createMessageComponentCollector();
        
        collector.on(`collect`, async (i) => {
            const member = i.member;
            
            if (i.guild.members.me.roles.highest.position < role1.position) {
                i.update({ content: "My role is below the roles I am trying to mess wit.", ephemeral:true});
                return;
            } 

            if (i.customId === 'button1') {
                member.roles.add(role1);
                i.reply({content: `Role added`, ephemeral:true})
            }else {
                member.roles.remove(role1);
                i.reply({content: `Role removed`, ephemeral:true})
            }


        })
    }
    
    
};