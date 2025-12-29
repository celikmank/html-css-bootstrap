function getStatusBadge(status) {
  if (status === "Görevde") {
    return `
      <span class="status-badge bg-soft-success text-success">
        <span class="dot bg-success"></span>${status}
      </span>
    `;
  }

  return `
    <span class="status-badge bg-soft-warning text-warning">
      <span class="dot bg-warning"></span>${status}
    </span>
  `;
}

function renderVehicles(list) {
  const table = document.getElementById("vehicleTable");
  table.innerHTML = "";

  list.forEach(v => {
    table.innerHTML += `
      <tr>
        <td class="ps-4 fw-bold">${v.plate}</td>
        <td>${v.brandModel} <span class="badge bg-light border">${v.year}</span></td>
        <td class="text-center">${getStatusBadge(v.status)}</td>
        <td>${v.km.toLocaleString()} KM</td>
        <td>${v.lastActivity}</td>
        <td class="text-end pe-4">
          <button class="btn btn-action text-primary"><i class="fas fa-eye"></i></button>
          <button class="btn btn-action text-danger"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

function renderDashboardStats(list) {
  const total = list.length;
  const active = list.filter(v => v.status === "Görevde").length;
  const service = list.filter(v => v.status === "Serviste").length;
  const totalKm = list.reduce((sum, v) => sum + v.km, 0);

  document.getElementById("totalVehicles").innerText = total;
  document.getElementById("activeVehicles").innerText = active;
  document.getElementById("serviceVehicles").innerText = service;
  document.getElementById("totalKm").innerText = totalKm.toLocaleString();
}
