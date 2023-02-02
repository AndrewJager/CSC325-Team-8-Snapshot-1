const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Generate a welcome message.'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
            .setTitle(`Welcome to Profressor Spradling's Discord!`)
            .setColor(0x18e1ee)
            .addFields([
                {
                name: 'Rules',
                value: 'This is where the rules would go.',
                },
                {
                    name: 'Tutorial',
                    value: 'Select the classes you are registered in by clicking the emoji down below. *NOTE*: Make sure you are completely registered for the class in SIS before selecting it down below.'
                }
            ]);
            await interaction.reply({
                embeds: [embed]
            });
	},
};
