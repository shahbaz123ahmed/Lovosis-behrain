import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const switches: Product[] = [
  {
    id: 'nsw5130-24gt4xp-poe-in',
    name: 'NSW5130-24GT4XP-POE-IN',
    slug: 'nsw5130-24gt4xp-poe-in',
    category: 'Transmission',
    subcategory: 'Switches',
    description: '24-Port Gigabit PoE Ethernet Switch',
    imageUrl: '/Transmission/swc1.png',
    specifications: {
      'Ports': '24 × Gigabit PoE RJ45 + 4 × Gigabit SFP',
      'Switching Capacity': '56 Gbps',
      'Forwarding Rate': '41.66 Mpps',
      'MAC Table': '16K',
      'Total PoE Budget': 'Maximum 370 W',
      'PoE per Port': 'Maximum 30 W',
      'Power Consumption': '22 W excluding PoE',
      'Power Supply': 'AC 100–240 V, 50/60 Hz',
      'Operating Temperature': '0°C to 45°C',
      'Dimensions': '440 × 208 × 44 mm'
    },
    features: [
      'Provides high-density Gigabit Ethernet access',
      'Supports PoE for powering network cameras and other compatible devices',
      'Supports IEEE 802.1Q VLAN with up to 4K VLANs',
      'Supports port aggregation, port mirroring and port isolation',
      'Supports STP, RSTP and MSTP for network reliability',
      'Provides advanced QoS with 8 priority queues per port',
      'Supports DHCP Client, DHCP Server and DHCP Snooping',
      'Supports IGMP Snooping for multicast applications',
      'Offers MAC, 802.1X and Portal-based authentication',
      'Supports SNMP, CLI and Web-based network management'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nsw5130-48gt4xp-in',
    name: 'NSW5130-48GT4XP-IN',
    slug: 'nsw5130-48gt4xp-in',
    category: 'Transmission',
    subcategory: 'Switches',
    description: '48GE Ethernet Switch',
    imageUrl: '/Transmission/swc1.png',
    specifications: {
      'Ethernet Ports': '48 × 10/100/1000 Mbps RJ45',
      'Uplink Ports': '4 × 1G/10G SFP+',
      'Switch Type': 'Layer 2 Managed Ethernet Switch',
      'Management': 'Web-based network management',
      'VLAN': 'Supported',
      'Spanning Tree': 'STP / RSTP / MSTP',
      'Link Aggregation': 'Supported',
      'Power Supply': '100–240 V AC, 50/60 Hz',
      'Operating Temperature': '–10°C to +55°C',
      'Installation': 'Standard rack-mount design'
    },
    features: [
      'Provides 48 Gigabit Ethernet ports for high-density network connectivity',
      '10G SFP+ uplinks enable high-speed backbone transmission',
      'Supports comprehensive Layer 2 management functions',
      'VLAN support enables efficient network isolation and management',
      'Supports port-based traffic and bandwidth management',
      'Loop prevention improves overall network reliability',
      'Link aggregation provides higher bandwidth and connection redundancy',
      'Supports multicast management for efficient video transmission',
      'Web-based management simplifies configuration and maintenance',
      'Ideal for CCTV, enterprise, campus, and large network deployments'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'nsw5110-48gt4gp-poe-in',
    name: 'NSW5110-48GT4GP-POE-IN',
    slug: 'nsw5110-48gt4gp-poe-in',
    category: 'Transmission',
    subcategory: 'Switches',
    description: '48GE Managed PoE Ethernet Switch',
    imageUrl: '/Transmission/swc1.png',
    specifications: {
      'Ports': '48 × GE PoE + 4 × GE SFP',
      'Switching Capacity': '104 Gbps',
      'Forwarding Rate': '77 Mpps',
      'MAC Address Table': '16K',
      'Maximum Power': '850 W',
      'Cooling': '4 built-in fans',
      'Power Supply': 'AC 100–240 V, 50/60 Hz',
      'Operating Temperature': '0°C to 40°C',
      'Operating Humidity': '5%–95%, non-condensing',
      'Dimensions': '440 × 330 × 44 mm'
    },
    features: [
      'Supports RJ45 Auto-MDI/MDIX for easy network connectivity',
      'Supports IEEE 802.3az Energy-Efficient Ethernet (EEE)',
      'Provides 802.1Q VLAN and QinQ functionality',
      'Supports STP, RSTP, and MSTP for network reliability',
      'Link Aggregation Control Protocol improves bandwidth and redundancy',
      'Supports port mirroring, port isolation, and traffic identification',
      'Provides Web, CLI, Telnet, SSH, SNMP, and RMON management',
      'Supports QoS traffic classification based on DSCP/COS',
      'Includes DHCP Client, Relay, and Snooping functionality',
      'Supports IGMP Snooping V1/V2/V3 for multicast management'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'sfp-xg-sx-mm850-in',
    name: 'SFP-XG-SX-MM850-IN',
    slug: 'sfp-xg-sx-mm850-in',
    category: 'Transmission',
    subcategory: 'Switches',
    description: '10 Gigabit Multi-Mode 300m Optical Module',
    imageUrl: '/Transmission/swc4.png',
    specifications: {
      'Module Type': 'SFP+ Optical Transceiver',
      'Data Transfer Rate': '10 Gbps',
      'Fiber Type': 'Multi-Mode Fiber (MMF)',
      'Wavelength': '850 nm',
      'Transmission Distance': 'Up to 300 m',
      'Connector': 'Duplex LC',
      'Optical Output Power': '-7.3 dBm to -1 dBm',
      'Operating Temperature': '0°C to 70°C',
      'Application': '10 Gigabit optical network transmission',
      'Model': 'SFP-XG-SX-MM850-IN'
    },
    features: [
      'Provides high-speed 10 Gigabit optical connectivity',
      'Designed for multi-mode fiber network applications',
      'Supports transmission distances up to 300 meters',
      'Uses an 850 nm wavelength for short-range optical links',
      'Duplex LC interface provides reliable fiber connectivity',
      'Compact SFP+ form factor simplifies network deployment',
      'Suitable for high-bandwidth network transmission',
      'Designed for use with compatible network switches',
      'Provides stable optical data transmission',
      'Ideal for enterprise, surveillance, and network infrastructure applications'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'sfp-xg-rx1270-tx1330-in',
    name: 'SFP-XG-RX1270/TX1330-IN',
    slug: 'sfp-xg-rx1270-tx1330-in',
    category: 'Transmission',
    subcategory: 'Switches',
    description: '10 Gigabit Single-Mode 20 km BIDI Optical Module',
    imageUrl: '/Transmission/swc4.png',
    specifications: {
      'Module Type': '10 Gigabit BIDI Optical Module',
      'Data Transfer Rate': '10 Gbps',
      'Fiber Type': 'Single Mode',
      'Transmission Distance': 'Up to 20 km',
      'TX Wavelength': '1330 nm',
      'RX Wavelength': '1270 nm',
      'Optical Output Power': '−3 dBm to +2 dBm',
      'Connector': 'Simplex LC',
      'Transmission Mode': 'Bidirectional (BIDI)',
      'Operating Temperature': '0°C to 70°C'
    },
    features: [
      'Supports high-speed 10 Gigabit optical communication',
      'BIDI technology enables bidirectional transmission over a single fiber',
      'Designed for long-distance connections up to 20 km',
      'Uses 1330 nm wavelength for transmitting optical signals',
      'Uses 1270 nm wavelength for receiving optical signals',
      'Single-mode fiber support provides reliable long-range transmission',
      'Simplex LC connector simplifies fiber connectivity',
      'Compact SFP+ form factor for compatible network equipment',
      'Suitable for high-bandwidth network and surveillance infrastructure',
      'Designed for stable and reliable optical data transmission'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
