// Displaying time the note was last edited
const displayLastEditedTime = () => {
  let lastEditedTime = moment(noteToEdit.updatedAt);
  lastEditedSection.textContent = `Last edited: ${lastEditedTime.from(
    moment().valueOf()
  )}`;
};
