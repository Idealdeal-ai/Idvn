import React from 'react';
import {
  Sun, Moon, Menu, X, ChevronDown, ChevronLeft, ChevronRight,
  Truck, AlertCircle, CheckCircle2, ArrowRight, ArrowLeft,
  BadgeCheck, Globe, Search, Package, ShieldCheck, MapPin,
  Mail, Phone, Rocket, Eye, Circle, SlidersHorizontal,
  BarChart2, ExternalLink, Info, Smartphone, Clock, Send,
  ClipboardCheck, Scale, MessageCircle, Anchor, Receipt, ScrollText,
  CreditCard, Tag, FlaskConical, Users, Factory, Settings,
  Activity, TrendingUp, Headphones, FileText, Handshake,
  History, Languages, Snowflake, Navigation, Bell, Code, Building2,
  RefreshCw, Star, Heart, Share2, Download, Upload, Edit, Trash2,
  Plus, Minus, Check, AlertTriangle, Lock, Unlock, User, Calendar,
  Sofa, Leaf, Compass,
  Award, BarChart, Briefcase, CheckSquare, Cpu, DollarSign,
  FileCheck, Link as LucideLink, Microscope, Palette, Plane, Printer,
  Shield, Ship, TrendingDown,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  // Navigation / chevrons
  expand_more: ChevronDown,
  expand_less: ChevronDown,
  chevron_right: ChevronRight,
  chevron_left: ChevronLeft,
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  arrow_forward_ios: ChevronRight,
  arrow_back_ios: ChevronLeft,

  // UI controls
  menu: Menu,
  close: X,
  search: Search,
  tune: SlidersHorizontal,
  open_in_new: ExternalLink,
  info: Info,
  info_outline: Info,
  error_outline: AlertCircle,
  warning: AlertTriangle,
  add: Plus,
  remove: Minus,
  check: Check,
  edit: Edit,
  delete: Trash2,
  refresh: RefreshCw,
  star: Star,
  favorite: Heart,
  share: Share2,
  download: Download,
  upload: Upload,
  lock: Lock,
  lock_open: Unlock,
  person: User,
  calendar_today: Calendar,

  // Theme
  light_mode: Sun,
  dark_mode: Moon,
  brightness_6: Sun,

  // Shipping / logistics
  local_shipping: Truck,
  inventory_2: Package,
  anchor: Anchor,
  route: Navigation,
  track_changes: History,

  // Finance / commerce
  receipt: Receipt,
  receipt_long: ScrollText,
  payments: CreditCard,
  label: Tag,

  // People / support
  groups: Users,
  support_agent: Headphones,
  handshake: Handshake,

  // Industry / manufacturing
  factory: Factory,
  precision_manufacturing: Settings,

  // Location / contact
  apartment: Building2,
  location_on: MapPin,
  mail: Mail,
  email: Mail,
  call: Phone,
  phone_iphone: Smartphone,
  schedule: Clock,
  send: Send,
  chat: MessageCircle,

  // Verification / trust
  verified: BadgeCheck,
  verified_user: ShieldCheck,
  check_circle: CheckCircle2,
  task_alt: ClipboardCheck,
  policy: ShieldCheck,
  gavel: Scale,

  // Science / product
  science: FlaskConical,
  ac_unit: Snowflake,
  scale: Scale,

  // Analytics / data
  trending_up: TrendingUp,
  network_check: Activity,
  bar_chart: BarChart2,
  data_object: Code,

  // Documents
  description: FileText,
  article: FileText,

  // Globe / language
  language: Languages,
  public: Globe,

  // Misc
  rocket_launch: Rocket,
  visibility: Eye,
  circle: Circle,
  notifications_active: Bell,

  // ── Products page: manufacturingIcons ──────────────────────────────────────────────
  chair: Sofa,
  eco: Leaf,
  architecture: Compass,

  // ── Service main card icons ──────────────────────────────────────────────────
  domain_verification: ShieldCheck,
  fact_check: ClipboardCheck,
  inventory: Package,
  analytics: BarChart2,

  // ── Quality Control feature cards ───────────────────────────────────────────
  timeline: Activity,
  bug_report: AlertCircle,
  assignment_turned_in: ClipboardCheck,

  // ── Product Sourcing feature cards ──────────────────────────────────────────
  travel_explore: Globe,
  contract: FileText,

  // ── Supplier Identification feature cards ───────────────────────────────────
  checklist: ClipboardCheck,
  star_rate: Star,
  summarize: FileText,

  // ── Factory Audits feature cards ────────────────────────────────────────────
  checklist_rtl: ClipboardCheck,
  shield: ShieldCheck,
  people: Users,
  photo_camera: Eye,
  notifications: Bell,

  // ── Procurement Management feature cards ─────────────────────────────────────
  videocam: Eye,
  account_balance: CreditCard,

  // ── Packaging & Branding feature cards ─────────────────────────────────────
  design_services: Edit,
  category: Package,
  rule: Scale,
  qr_code: Code,

  // ── Market Research feature cards ─────────────────────────────────────────────
  price_change: TrendingUp,

  // ── Locale translation PascalCase icons (ar / vi JSON files) ─────────────────────
  Activity: Activity,
  Award: Award,
  BarChart: BarChart,
  BarChart2: BarChart2,
  Briefcase: Briefcase,
  CheckSquare: CheckSquare,
  ClipboardCheck: ClipboardCheck,
  Cpu: Cpu,
  DollarSign: DollarSign,
  Eye: Eye,
  Factory: Factory,
  FileCheck: FileCheck,
  FileText: FileText,
  Globe: Globe,
  Leaf: Leaf,
  Link: LucideLink,
  MapPin: MapPin,
  Microscope: Microscope,
  Package: Package,
  Palette: Palette,
  Plane: Plane,
  Printer: Printer,
  RefreshCw: RefreshCw,
  Search: Search,
  Settings: Settings,
  Shield: Shield,
  ShieldCheck: ShieldCheck,
  Ship: Ship,
  Star: Star,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Truck: Truck,
  Users: Users,
};

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  'aria-hidden'?: boolean | 'true' | 'false';
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  className = '',
  style,
  'aria-hidden': ariaHidden,
  strokeWidth = 1.75,
}) => {
  const Comp = ICON_MAP[name];
  if (!Comp) {
    // Fallback: render nothing so broken icons don't show text
    return null;
  }
  return (
    <Comp
      size={size}
      className={className}
      style={style}
      aria-hidden={ariaHidden}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;
