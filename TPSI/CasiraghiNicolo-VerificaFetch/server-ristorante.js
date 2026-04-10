// ============================================
// RISTORANTE - REST API Server
// Sistema di gestione ristorante con tavoli, prenotazioni e menu
// ============================================

const express = require('express');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

const generateId = function(prefix, counter) {
  return prefix + '-' + String(counter).padStart(3, '0');
};

// ============================================
// SYSTEM STATE
// ============================================

let systemState = {
  tables: [
    {
      id: 'TAV-001',
      number: 1,
      seats: 4,
      location: 'interno',
      available: true
    },
    {
      id: 'TAV-002',
      number: 2,
      seats: 2,
      location: 'esterno',
      available: true
    },
    {
      id: 'TAV-003',
      number: 3,
      seats: 6,
      location: 'interno',
      available: true
    },
    {
      id: 'TAV-004',
      number: 4,
      seats: 8,
      location: 'esterno',
      available: false
    }
  ],
  
  reservations: [
    {
      id: 'RES-001',
      tableId: 'TAV-001',
      customerName: 'Marco Bianchi',
      time: '19:00',
      date: '2026-03-21',
      guests: 4,
      status: 'confermata',
      notes: 'Menu vegetariano'
    },
    {
      id: 'RES-002',
      tableId: 'TAV-002',
      customerName: 'Sara Verdi',
      time: '20:30',
      date: '2026-03-21',
      guests: 2,
      status: 'confermata',
      notes: ''
    },
    {
      id: 'RES-003',
      tableId: 'TAV-001',
      customerName: 'Luigi Rossi',
      time: '21:30',
      date: '2026-03-21',
      guests: 3,
      status: 'confermata',
      notes: 'Compleanno'
    }
  ],
  
  menu: [
    {
      id: 'MENU-001',
      name: 'Carbonara',
      category: 'primi',
      price: 12.0,
      cuisine: 'italiana',
      vegetarian: false
    },
    {
      id: 'MENU-002',
      name: 'Risotto funghi',
      category: 'primi',
      price: 14.0,
      cuisine: 'italiana',
      vegetarian: true
    },
    {
      id: 'MENU-003',
      name: 'Tagliata',
      category: 'secondi',
      price: 18.0,
      cuisine: 'italiana',
      vegetarian: false
    },
    {
      id: 'MENU-004',
      name: 'Sushi misto',
      category: 'secondi',
      price: 22.0,
      cuisine: 'giapponese',
      vegetarian: false
    },
    {
      id: 'MENU-005',
      name: 'Tiramisù',
      category: 'dolci',
      price: 6.0,
      cuisine: 'italiana',
      vegetarian: true
    }
  ],
  
  nextReservationId: 4
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function findTable(tableId) {
  return systemState.tables.find(function(t) { return t.id === tableId; });
}

function findReservation(reservationId) {
  return systemState.reservations.find(function(r) { return r.id === reservationId; });
}

function checkTableAvailability(tableId, date, time) {
  for (const reservation of systemState.reservations) {
    if (reservation.tableId === tableId && 
        reservation.date === date && 
        reservation.time === time &&
        reservation.status === 'confermata') {
      return false;
    }
  }
  return true;
}

// ============================================
// GET ENDPOINTS
// ============================================

app.get('/tables', function(req, res) {
  res.json({
    timestamp: new Date().toISOString(),
    count: systemState.tables.length,
    tables: systemState.tables
  });
});

app.get('/reservations', function(req, res) {
  res.json({
    timestamp: new Date().toISOString(),
    count: systemState.reservations.length,
    reservations: systemState.reservations
  });
});

app.get('/menu', function(req, res) {
  res.json({
    timestamp: new Date().toISOString(),
    count: systemState.menu.length,
    items: systemState.menu
  });
});

// ============================================
// POST ENDPOINTS
// ============================================

app.post('/reservations', function(req, res) {
  const data = req.body;
  
  if (!data.tableId || !data.customerName || !data.time || !data.date || !data.guests) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: tableId, customerName, time, date, guests'
    });
  }
  
  const table = findTable(data.tableId);
  if (!table) {
    return res.status(404).json({
      success: false,
      error: 'Table not found: ' + data.tableId
    });
  }
  
  if (data.guests > table.seats) {
    return res.status(400).json({
      success: false,
      error: 'Too many guests. Table capacity: ' + table.seats
    });
  }
  
  const isAvailable = checkTableAvailability(data.tableId, data.date, data.time);
  if (!isAvailable) {
    return res.status(400).json({
      success: false,
      error: 'Table already reserved for ' + data.date + ' at ' + data.time
    });
  }
  
  const newReservation = {
    id: generateId('RES', systemState.nextReservationId),
    tableId: data.tableId,
    customerName: data.customerName,
    time: data.time,
    date: data.date,
    guests: data.guests,
    status: 'confermata',
    notes: data.notes || ''
  };
  
  systemState.reservations.push(newReservation);
  systemState.nextReservationId = systemState.nextReservationId + 1;
  
  res.status(201).json({
    success: true,
    reservation: newReservation
  });
});

// ============================================
// PUT ENDPOINTS
// ============================================

app.put('/reservations/:reservationId', function(req, res) {
  const reservationId = req.params.reservationId;
  const data = req.body;
  
  const reservation = findReservation(reservationId);
  if (!reservation) {
    return res.status(404).json({
      success: false,
      error: 'Reservation not found: ' + reservationId
    });
  }
  
  if (!data.time) {
    return res.status(400).json({
      success: false,
      error: 'Missing required field: time'
    });
  }
  
  // Verifica che il tavolo sia disponibile al nuovo orario
  const isAvailable = checkTableAvailability(reservation.tableId, reservation.date, data.time);
  if (!isAvailable) {
    return res.status(400).json({
      success: false,
      error: 'Table not available at ' + data.time
    });
  }
  
  const oldTime = reservation.time;
  reservation.time = data.time;
  
  res.json({
    success: true,
    reservation: reservation,
    changed: {
      from: oldTime,
      to: data.time
    }
  });
});

// ============================================
// DELETE ENDPOINTS
// ============================================

app.delete('/reservations/:reservationId', function(req, res) {
  const reservationId = req.params.reservationId;
  
  const reservationIndex = systemState.reservations.findIndex(function(r) {
    return r.id === reservationId;
  });
  
  if (reservationIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Reservation not found: ' + reservationId
    });
  }
  
  const reservation = systemState.reservations[reservationIndex];
  systemState.reservations.splice(reservationIndex, 1);
  
  res.json({
    success: true,
    message: 'Reservation ' + reservationId + ' deleted',
    reservation: reservation
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(3000, function() {
  console.log('');
  console.log('============================================');
  console.log('RISTORANTE - REST API');
  console.log('Server running on http://localhost:3000');
  console.log('============================================');
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET    /tables');
  console.log('  GET    /reservations');
  console.log('  GET    /menu');
  console.log('  POST   /reservations');
  console.log('  PUT    /reservations/:reservationId');
  console.log('  DELETE /reservations/:reservationId');
  console.log('');
  console.log('============================================');
});
