var inputArray = [
  {
    id: '1321',
    supplier_id: '25',
    name: '-',
    description: '-',
    type: 'phone',
    contact_number: '01382184712804'
  },
  {
    id: '1750',
    supplier_id: '25',
    name: 'Sales Admin',
    description: 'Sales Baru Training',
    type: 'phone',
    contact_number: '+628222222222'
  },
  {
    id: '1751',
    supplier_id: '25',
    name: 'Admin',
    description: 'Wa Admin',
    type: 'whatsapp',
    contact_number: '62833333333'
  },
  {
    id: '1753',
    supplier_id: '25',
    name: '-',
    description: '-',
    type: 'viber',
    contact_number: '444'
  },
  {
    id: '1754',
    supplier_id: '25',
    name: 'Admin',
    description: 'Administration',
    type: 'phone',
    contact_number: '62777777777777'
  }
];

var outObject = inputArray.reduce(function(a, e) {
  // GROUP BY estimated key (estKey), well, may be a just plain key
  // a -- Accumulator result object
  // e -- sequentally checked Element, the Element that is tested just at this itaration

  // new grouping name may be calculated, but must be based on real value of real field
  let estKey = (e['type']); 

  (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
  return a;
}, []);

console.log(outObject);

var inputArray = [
  {
    id: '1321',
    supplier_id: '25',
    name: '-',
    description: '-',
    type: 'phone',
    contact_number: '01382184712804'
  },
  {
    id: '1750',
    supplier_id: '25',
    name: 'Sales Admin',
    description: 'Sales Baru Training',
    type: 'phone',
    contact_number: '+628222222222'
  },
  {
    id: '1751',
    supplier_id: '25',
    name: 'Admin',
    description: 'Wa Admin',
    type: 'whatsapp',
    contact_number: '62833333333'
  },
  {
    id: '1753',
    supplier_id: '25',
    name: '-',
    description: '-',
    type: 'viber',
    contact_number: '444'
  },
  {
    id: '1754',
    supplier_id: '25',
    name: 'Admin',
    description: 'Administration',
    type: 'phone',
    contact_number: '62777777777777'
  }
];

var outObject = inputArray.reduce(function(a, e) {
  // GROUP BY estimated key (estKey), well, may be a just plain key
  // a -- Accumulator result object
  // e -- sequentally checked Element, the Element that is tested just at this itaration

  // new grouping name may be calculated, but must be based on real value of real field
  let estKey = (e['type']); 

  (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
  return a;
}, {});

console.log(outObject);

// output: ====================================
// {
//     phone: [
//       {
//         id: '1321',
//         supplier_id: '25',
//         name: '-',
//         description: '-',
//         type: 'phone',
//         contact_number: '01382184712804'
//       },
//       {
//         id: '1750',
//         supplier_id: '25',
//         name: 'Sales Admin',
//         description: 'Sales Baru Training',
//         type: 'phone',
//         contact_number: '+628222222222'
//       },
//       {
//         id: '1754',
//         supplier_id: '25',
//         name: 'Admin',
//         description: 'Administration',
//         type: 'phone',
//         contact_number: '62777777777777'
//       }
//     ],
//     whatsapp: [
//       {
//         id: '1751',
//         supplier_id: '25',
//         name: 'Admin',
//         description: 'Wa Admin',
//         type: 'whatsapp',
//         contact_number: '62833333333'
//       }
//     ],
//     viber: [
//       {
//         id: '1753',
//         supplier_id: '25',
//         name: '-',
//         description: '-',
//         type: 'viber',
//         contact_number: '444'
//       }
//     ]
//   }