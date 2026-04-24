// E1

app.use('/bevande', (req, res, next) => {
  const header = req.headers['x-gradazione-max'];
  const parsed = parseInt(header);
  req.gradazioneMax = (!header || isNaN(parsed)) ? null : parsed;
  next();
});

app.get('/bevande', (req, res) => {
  if (req.gradazioneMax === null) {
    return res.json(bevande);
  }

  const risultato = bevande.filter(b => b.gradazione <= req.gradazioneMax);
  res.json(risultato); 
});

// E2

app.use('/clienti', (req, res, next) => {
  req.ruolo = req.headers['x-ruolo'] || 'ospite';
  next();
});

app.get('/clienti/:id/ordini', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ errore: 'ID non valido' });
  }

  const cliente = clienti.find(c => c.id === id);
  if (!cliente) {
    return res.status(404).json({ errore: 'Cliente non trovato' });
  }

  const ordiniCliente = ordini.filter(o => o.cliente === cliente.nome);

  if (req.ruolo === 'admin') {
    return res.json(ordiniCliente);
  }

  const ordiniSenzaCosto = ordiniCliente.map(o => {
    const { costo_totale, ...resto } = o;
    return resto;
  });
  res.json(ordiniSenzaCosto);
});

// E3

app.get('/clienti/:id/riepilogo', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ errore: 'ID non valido' });
  }

  const cliente = clienti.find(c => c.id === id);
  if (!cliente) {
    return res.status(404).json({ errore: 'Cliente non trovato' });
  }

  const ordiniCliente = ordini.filter(o => o.cliente === cliente.nome);

  const totale_speso = ordiniCliente.reduce((acc, o) => acc + o.costo_totale, 0);

  let bevanda_preferita = null;
  if (ordiniCliente.length > 0) {
    const contatore = {};
    for (const o of ordiniCliente) {
      contatore[o.bevanda] = (contatore[o.bevanda] || 0) + o.quantita;
    }
    bevanda_preferita = Object.entries(contatore).sort((a, b) => b[1] - a[1])[0][0];
  }

  const taglie_attive = taglie.filter(t => t.clienteId === id && t.attiva === true).length;

  res.json({
    cliente: cliente.nome,
    credito_attuale: cliente.credito,
    numero_ordini: ordiniCliente.length,
    totale_speso,
    bevanda_preferita,
    taglie_attive
  });
});
