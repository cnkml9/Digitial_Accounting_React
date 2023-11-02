export const TrackableRadioGroup = {
  // bu kısım veri tabanında nasıl tutulacak sorulacak.
  list: [
    {
      label: "Takipsiz",
      value: "untrackable",
      inputLabel: undefined,
      canDisplayInput: false,
    },
    {
      label: "Lot Numarası",
      value: "lotNumber",
      inputLabel: "Lot Numarası",
      canDisplayInput: true,
    },
    {
      label: "Seri Numarası",
      value: "serialNumber",
      inputLabel: "Seri Numarası",
      canDisplayInput: true,
    },
  ],
};

export const CompanyTypeRadioGroup = {
  list: [
    {
      label: "Kurumsal",
      value: 1,
      inputLabel: undefined,
      canDisplayInput: false,
    },
    {
      label: "Bireysel",
      value: 0,
      inputLabel: undefined,
      canDisplayInput: false,
    },
  ],
};

export const PaymentStatusRadioGroup = {
  list: [
    {
      label: "Ödendi",
      value: "1",
      inputLabel: undefined,
      canDisplayInput: false,
    },
    {
      label: "Ödenmedi",
      value: "0",
      inputLabel: undefined,
      canDisplayInput: false,
    },
  ],
};
