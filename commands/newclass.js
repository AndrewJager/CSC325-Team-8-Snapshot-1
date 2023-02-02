const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newclass')
		.setDescription('Create a class')
		.addStringOption((option) => option.setName('dept').setDescription('The class dept (without the class number)').setRequired(true))
		.addStringOption((option) => option.setName('classcode').setDescription('The class number (without the dept)').setRequired(true))
		.addStringOption((option) => option.setName('semester').setDescription('The class semester (example: "Fall 2022"').setRequired(true)),
	async execute(interaction) {
		const dept = interaction.options.getString('dept');
		const course = interaction.options.getString('classcode');
		const semester = interaction.options.getString('semester');
		await interaction.reply({ content: 'user entered class ' + dept
                        + course + ' in semester ' + semester, fetchReply: true });
	},
};