let equipmentList = [];

function addEquipment() {
    const selectedEquipment = document.getElementById('equipment').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const durationDays = parseFloat(document.getElementById('duration-days').value);

const equipmentInfo = {
        equipment: selectedEquipment,
        quantity: quantity,
        duration: duration,
        durationDays: durationDays
    };

    equipmentList.push(equipmentInfo);
    displayEquipmentList();
}

function displayEquipmentList() {
    const equipmentListContainer = document.getElementById('equipment-list');
    equipmentListContainer.innerHTML = '<h3>Equipamentos Adicionados:</h3>';

    equipmentList.forEach((equipmentInfo, index) => {
        const equipmentText = equipmentInfo.quantity + ' ' + equipmentInfo.equipment +
            `(s) - ${equipmentInfo.duration} ${getDurationText(equipmentInfo.duration)} (${equipmentInfo.durationDays} ${getDaysText(equipmentInfo.durationDays)})`;

            equipmentListContainer.innerHTML += `
            <p class="equipment-item">
                <img src="delete.png" alt="Delete" onclick="removeEquipment(${index})" class="delete-icon">
                Equipamento ${index + 1}: ${equipmentText}

            </p>`;
    });
}

function removeEquipment(index) {
    equipmentList.splice(index, 1);
    showDeleteModal(index);
}

function showDeleteModal(index) {
    const modal = document.getElementById('deleteModal');
    const modalOverlay = document.getElementById('deleteModalOverlay');
    const modalClose = document.getElementById('deleteModalClose');

    modal.style.display = 'block';
    modalOverlay.style.display = 'block';

    modalClose.onclick = function() {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    modalOverlay.onclick = function() {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };


    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    confirmDeleteButton.onclick = function() {

        equipmentList.splice(index, 1);
        displayEquipmentList();
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };
}
function getDurationText(duration) {
    return duration === 1 ? 'mês' : 'meses';
}

function getDaysText(durationDays) {
    return durationDays === 1 ? 'dia' : 'dias';
}

function calculateQuote() {
    const prices = {
        desktop: 100,
        laptop: 80,
        impressora: 20,
        monitor: 50,
        teclado: 15,
        mouse: 10,
        roteador: 30,
        scanner: 40,
        'hd-externo': 25,
        projetor: 70,
        'caixas-de-som': 30,
        webcam: 25,
        tablet: 60,
        smartphone: 50,
        'placa-de-video': 120,
        'fone-de-ouvido': 20,
        'impressora-scanner': 50,
        'monitor-externo': 60,
        'adaptador-wifi': 15,
        'cadeira-escritorio': 40,
        'luminaria-mesa': 12,
        'mesa-escritorio': 80

    };
    let totalPrice = 0;

equipmentList.forEach(equipmentInfo => {
    const totalMonths = equipmentInfo.duration + equipmentInfo.durationDays / 30;
    totalPrice += prices[equipmentInfo.equipment] * equipmentInfo.quantity * totalMonths;
    });

    document.getElementById('result').innerHTML = `<p>Total estimado: R$ ${totalPrice.toFixed(2)}</p>`;
}