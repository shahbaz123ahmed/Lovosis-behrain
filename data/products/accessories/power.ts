import { Product } from '@/types';
import { 
  svgAccessControl, svgVideoIntercom, svgAccessories, svgNvr, 
  svgStorage, svgTransmission, svgBulletCamera, svgDomeCamera, 
  svgThermal, svgPtz, svgNetworkCamera, svgRecorder, svgDoorPhone, svgNetworkSwitch
} from '../icons';

export const power: Product[] = [
  {
    id: 'ups600-sea-cee',
    name: 'UPS600-SEA-CEE',
    slug: 'ups600-sea-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '600VA/360W Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '600 VA',
      'Input Voltage': '169–278 VAC',
      'Output Voltage': '198–242 VAC',
      'Output Power': '360 W max (mains), 270 W max (battery)',
      'Frequency': '50 Hz / 60 Hz adaptive',
      'Power Factor': '0.6',
      'Battery': '12 V, 7 Ah × 1 lead-acid',
      'Switch Time': '<10 ms',
      'Dimensions': '335 × 87 × 143 mm',
      'Operating Temperature': '0°C to 40°C'
    },
    features: [
      'Provides reliable backup power during mains power failures',
      'Supports adaptive 50 Hz / 60 Hz operating frequency',
      'Pure sine wave output during mains electricity operation',
      'Integrated rechargeable lead-acid battery',
      'Battery reaches approximately 90% capacity within 4–6 hours',
      'LED indicators provide clear power and charging status',
      'Audible alarms indicate low battery, overload, and system faults',
      'Built-in short-circuit and surge protection',
      'Supports overload, deep-discharge, and overcharge protection',
      'Compact and durable iron-and-plastic enclosure'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ups1200-sea-cee',
    name: 'UPS1200-SEA-CEE',
    slug: 'ups1200-sea-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '1200VA Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '1200 VA',
      'Input': '169–278 VAC, 7.5 A',
      'Output': '198–242 VAC',
      'Output Power': '700 W max (mains) / 530 W max (battery)',
      'Frequency': '50/60 Hz adaptive',
      'Power Factor': '0.6',
      'Transfer Time': '<10 ms',
      'Battery': '2 × 12 V, 7 Ah lead-acid',
      'Charging Time': '4–6 hours to recover 90% capacity',
      'Dimensions / Weight': '312 × 122 × 195 mm / 8.64 kg'
    },
    features: [
      'Provides reliable backup power during electrical outages',
      'Built-in batteries ensure continuous operation of connected equipment',
      'Supports short-circuit protection',
      'Integrated surge protection safeguards connected devices',
      'Overload protection improves operational safety',
      'Heavy-discharge protection helps protect the batteries',
      'Overcharge protection supports longer battery service life',
      'LED indicators provide clear power and charging status',
      'Audible alarms indicate low power, overload, and system faults',
      'Supports pure sine wave output in mains mode and square wave output in battery mode'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ups800-sea-cee',
    name: 'UPS800-SEA-CEE',
    slug: 'ups800-sea-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '800VA/480W Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '800 VA',
      'Input Voltage': '169–278 VAC',
      'Input Current': '4 A',
      'Output Voltage': '198–242 VAC',
      'Power Factor': '0.6',
      'Transfer Time': '<10 ms',
      'Battery': '12 V, 9 Ah × 1 Lead-Acid',
      'Charging Time': '4–6 hours to 90% capacity',
      'Dimensions': '312 × 122 × 195 mm',
      'Operating Temperature': '0°C to 40°C'
    },
    features: [
      'Provides reliable backup power during mains failure',
      'Built-in rechargeable lead-acid battery',
      'Supports short-circuit protection',
      'Integrated surge protection safeguards connected equipment',
      'Overload protection improves operational safety',
      'Supports heavy-discharge protection',
      'Built-in overcharge protection extends battery reliability',
      'LED indicators display mains, battery and charging status',
      'Audible alarms indicate low battery, overload and system faults',
      'European-standard input plug with two universal output sockets'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ups600-eu-cee',
    name: 'UPS600-EU-CEE',
    slug: 'ups600-eu-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '600VA/360W Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '600 VA',
      'Input Voltage': '145–280 VAC',
      'Output Voltage': '198–242 VAC',
      'Output Power': '360 W max (mains), 270 W max (battery)',
      'Frequency': '50/60 Hz adaptive',
      'Battery': '12 V, 7 Ah × 1 lead-acid',
      'Transfer Time': '<10 ms',
      'Charging Time': '4–6 hours to 90% capacity',
      'Dimensions': '335 × 87 × 143 mm',
      'Operating Temperature': '0°C to 40°C'
    },
    features: [
      'Provides reliable backup power during mains power failures',
      'Built-in rechargeable lead-acid battery',
      'Supports 50 Hz / 60 Hz adaptive frequency operation',
      'Pure sine wave output during mains electricity mode',
      'Automatic battery charging with 4–6 hour recovery to 90% capacity',
      'Short-circuit protection for connected equipment',
      'Built-in surge and overload protection',
      'Overcharge and deep-discharge protection',
      'LED indicators provide clear power and charging status',
      'Audible alarms indicate low battery, overload, and system faults'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ups1200-eu-cee',
    name: 'UPS1200-EU-CEE',
    slug: 'ups1200-eu-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '1200VA/720W Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '1200 VA',
      'Input Voltage': '145–280 VAC',
      'Input Current': '7.5 A',
      'Output Voltage': '198–242 VAC',
      'Output Power': '700 W max (mains) / 530 W max (battery)',
      'Power Factor': '0.6',
      'Battery': '2 × 12 V, 7 Ah lead-acid',
      'Charging Time': '4–6 hours to 90% capacity',
      'Dimensions': '312 × 122 × 195 mm',
      'Operating Environment': '0°C–40°C, 0–90% RH non-condensing'
    },
    features: [
      'Provides reliable backup power during mains failure',
      'Built-in lead-acid battery system',
      'Supports short-circuit protection',
      'Integrated surge protection',
      'Overload protection for connected equipment',
      'Heavy-discharge protection',
      'Overcharge protection for battery safety',
      'LED indicators display power and charging status',
      'Audible alarms for low power, overload, and faults',
      'European-standard input plug with universal output sockets'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  },
  {
    id: 'ups800-eu-cee',
    name: 'UPS800-EU-CEE',
    slug: 'ups800-eu-cee',
    category: 'Accessories',
    subcategory: 'Power',
    description: '800VA/480W Uninterruptible Power Supply',
    imageUrl: '/Accessories/power1.png',
    specifications: {
      'Capacity': '800 VA',
      'Input Voltage': '145–280 VAC',
      'Output Voltage': '198–242 VAC',
      'Output Power': '530 W max (mains) / 360 W max (battery)',
      'Frequency': '50 Hz / 60 Hz adaptive',
      'Transfer Time': '<10 ms',
      'Battery': '12 V, 9 Ah × 1 lead-acid',
      'Charging Time': '4–6 hours to approximately 90%',
      'Dimensions': '335 × 87 × 143 mm',
      'Operating Environment': '0°C–40°C, 0–90% RH (non-condensing)'
    },
    features: [
      'Provides reliable backup power during mains power failure',
      'Supports automatic 50 Hz / 60 Hz frequency adaptation',
      'Built-in rechargeable lead-acid battery',
      'Battery reaches approximately 90% capacity within 4–6 hours',
      'Supports short-circuit protection',
      'Integrated surge protection safeguards connected equipment',
      'Overload and overcharge protection improve operational safety',
      'Heavy-discharge protection helps protect the battery',
      'LED indicators provide power, battery, and charging status',
      'Audible alarms indicate low battery, overload, and system faults'
    ],
    availability: 'In Stock',
    datasheetUrl: '#'
  }
];
