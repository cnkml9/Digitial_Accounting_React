import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import MoneyIcon from "@mui/icons-material/Money";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DashboardIcon from '@mui/icons-material/Dashboard';
export const BaseMenu = [
  {
    menuName: "Dashboard",
    IconComponent: DashboardIcon,
    href: "/",
    altItems: [],
  },
  {
    menuName: "Satışlar",
    IconComponent: ReceiptIcon,
    href: "#",
    altItems: [
      {
        permission: "user",
        href: "/invoices/sales/",
        menuName: "Satış Faturaları",
      },
      {
        permission: "user",
        href: "/orders/sales/",
        menuName: "Siparişler",
      },
    ],
  },
  {
    menuName: "Alışlar",
    IconComponent: ReceiptIcon,
    href: "#",
    altItems: [
      {
        permission: "user",
        href: "/invoices/purchases/",
        menuName: "Alış Faturaları",
      },
      {
        permission: "user",
        href: "/orders/purchases/",
        menuName: "Alış Sipariş",
      },
    ],
  },
  {
    menuName: "Giderler",
    IconComponent: ReceiptIcon,
    href: "/expenses/",
    altItems: [],
  },
  {
    menuName: "Müşteri & Tedarikçi",
    IconComponent: PersonSearchIcon,
    href: "/customers/",
    altItems: [],
  },
  {
    menuName: "Stok & Hizmet",
    IconComponent: Inventory2Icon,
    href: "#",
    altItems: [
      {
        permission: "user",
        href: "/services/",
        menuName: "Hizmetler",
      },
      {
        permission: "user",
        href: "/products/",
        menuName: "Ürünler",
      },
      {
        permission: "user",
        href: "#",
        menuName: "Stok Hareketleri",
      },
    ],
  },
  {
    permission: "user",
    menuName: "Para",
    IconComponent: MoneyIcon,
    href: "#",
    altItems: [
      {
        permission: "user",
        href: "#",
        menuName: "Nakit Durumu",
      },
      {
        permission: "user",
        href: "#",
        menuName: "Kasalar",
      },
      {
        permission: "user",
        href: "#",
        menuName: "Banka Hesapları",
      },
    ],
  },
  {
    menuName: "Ayarlar",
    IconComponent: SettingsSuggestIcon,
    href: "",
    altItems: [
      {
        permission: "user",
        href: "/settings/account/company-information/",
        menuName: "Firma Bilgilerim",
      },
      {
        permission: "user",
        href: "/settings/bills/schematics",
        menuName: "Kağıt Fatura Şablonları",
      },
      {
        permission: "user",
        href: "/settings/reports/import-data",
        menuName: "Verileri içe aktar",
      },
      {
        permission: "user",
        href: "/settings/reports/export-data",
        menuName: "Verileri dışa aktar",
      },
    ],
  },
  {
    menuName: "Güvenli Çıkış",
    IconComponent: ExitToAppIcon,
    href: "/auth/logout",
    altItems: [],
  },
];
export const Menu = {};

