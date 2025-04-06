export function addLabel(newLabel) {
  const retrievedLabels = JSON.parse(localStorage.getItem('defaultLabels')) || [];
  if (!retrievedLabels.includes(newLabel)) {
    const updatedLabels = [...retrievedLabels, newLabel];
    localStorage.setItem('defaultLabels', JSON.stringify(updatedLabels));
  }
}

export function removeLabel(labelToRemove) {
  const retrievedLabels = JSON.parse(localStorage.getItem('defaultLabels')) || [];
  const updatedLabels = retrievedLabels.filter((label) => label !== labelToRemove);
  localStorage.setItem('defaultLabels', JSON.stringify(updatedLabels));
}
export function getLabels() {
  return JSON.parse(localStorage.getItem('defaultLabels')) || [];
}
