const fooReceivedRequests = [
    {
        id: 1,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: '0',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 2,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'AB',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 5,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 6,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: '0',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 7,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'AB',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 8,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 9,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: '0',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 10,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'AB',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 11,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 12,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: 'A',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 13,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'A',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 14,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 15,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: '0',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 16,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'AB',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 17,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 18,
        beneficiaryName: 'Tammy Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'high',
        bloodGroup: '0',
        rh: '+',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    },
    {
        id: 19,
        beneficiaryName: 'Toby Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'medium',
        bloodGroup: 'AB',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'no'
    },
    {
        id: 20,
        beneficiaryName: 'Tristan Hart',
        idDonationCenter: 6554,
        thrombocyteUnits: 39,
        redCellsUnits: 13,
        plasmaUnits: 10,
        urgencyLevel: 'low',
        bloodGroup: 'B',
        rh: '-',
        locationHospital: '"Queen Mary" Hospital, Avram Iancu Street, no. 42',
        activeDonor: 'yes'
    }
];

export default fooReceivedRequests;