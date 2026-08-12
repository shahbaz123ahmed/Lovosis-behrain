import { BlogPost } from '@/types';

const svgBlog1 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="%230B1F33"/><circle cx="300" cy="200" r="100" fill="%231683F3" opacity="0.1"/><circle cx="300" cy="200" r="60" fill="%231683F3"/><circle cx="300" cy="200" r="20" fill="%23111827"/><rect x="200" y="320" width="200" height="20" rx="10" fill="white" opacity="0.3"/><text x="300" y="335" fill="white" font-family="sans-serif" font-weight="bold" font-size="12" text-anchor="middle">BUYING GUIDE</text></svg>`;

const svgBlog2 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="%230B1F33"/><rect x="80" y="100" width="180" height="120" rx="10" fill="%23111827"/><rect x="340" y="100" width="180" height="120" rx="10" fill="%231683F3"/><text x="170" y="165" fill="white" font-family="sans-serif" font-weight="bold" font-size="28" text-anchor="middle">DVR</text><text x="430" y="165" fill="white" font-family="sans-serif" font-weight="bold" font-size="28" text-anchor="middle">NVR</text><text x="300" y="300" fill="white" font-family="sans-serif" font-weight="bold" font-size="16" text-anchor="middle">COAXIAL vs ETHERNET</text></svg>`;

const svgBlog3 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="%230B1F33"/><rect x="150" y="120" width="300" height="160" rx="8" fill="white" opacity="0.1"/><path d="M100 100L180 140M100 300L180 260M500 100L420 140M500 300L420 260" stroke="%231683F3" stroke-width="4" stroke-dasharray="8 4"/><circle cx="100" cy="100" r="15" fill="%231683F3"/><circle cx="100" cy="300" r="15" fill="%231683F3"/><circle cx="500" cy="100" r="15" fill="%231683F3"/><circle cx="500" cy="300" r="15" fill="%231683F3"/></svg>`;

const svgBlog4 = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="%23111827"/><path d="M300 200L100 400H500L300 200Z" fill="%231683F3" opacity="0.3"/><circle cx="300" cy="150" r="40" fill="%230B1F33"/><circle cx="300" cy="150" r="25" fill="%231683F3"/><circle cx="300" cy="150" r="8" fill="white"/></svg>`;

export const blogs: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Choose the Right CCTV Camera for Your Property',
    slug: 'how-to-choose-the-right-cctv-camera-for-your-property',
    category: 'CCTV Buying Guides',
    excerpt: 'Selecting the perfect security camera system can be confusing. Learn the difference between indoor and outdoor cameras, wired and wireless setups, and which specifications matter most for your property.',
    content: `When looking to purchase a security camera system, you are immediately confronted with a massive array of models, acronyms, and technical jargon. Making the wrong choice can lead to blind spots, fuzzy images when you need details most, or systems that fail under bad weather.

## 1. Define Your Surveillance Location: Indoor vs. Outdoor
The first sorting factor is where the cameras will be mounted:
- **Outdoor Cameras:** Must have strong weather protection rating (minimum IP66, ideally IP67) to withstand heavy rain, dust, and temperature swings. They should also possess a metal construction (like IK10 vandal-proof rating) to resist tampering.
- **Indoor Cameras:** Often smaller and more compact. Standard dome cameras are excellent here as they blend seamlessly into corners, making them less intrusive for guests and customers.

## 2. Lens Options: Fixed vs. Varifocal
- **Fixed Lens:** Usually 2.8mm or 3.6mm. A 2.8mm lens offers a very wide field of view (around 100 degrees), ideal for broad area coverage like rooms or parking spaces.
- **Varifocal Lens:** Allows you to adjust the focal length manually or via motorized zoom (e.g., 2.8mm to 12mm) to zoom in on a gate or cash register while maintaining high image resolution.

## 3. Image Resolution Matters
Resolution determines how far you can digitally zoom in before the image pixelates:
- **1080p (2MP):** Good for small offices or monitoring immediate doorways.
- **4MP (2K):** The current business standard. Provides excellent details like facial features and clothing patterns.
- **8MP (4K):** Premium coverage. Perfect for wide spaces or areas where license plates must be read.

Choosing the right system involves evaluating these requirements against your budget. We recommend contacting our team of security experts for a custom layout assessment before purchasing equipment.`,
    author: 'Sarah Jenkins',
    date: 'July 15, 2026',
    readTime: '6 min read',
    imageUrl: svgBlog1,
    tags: ['CCTV Guide', 'Home Security', 'Business Security', 'IP Cameras']
  },
  {
    id: 'blog-2',
    title: 'DVR vs NVR: Which Recording System Is Better?',
    slug: 'dvr-vs-nvr-which-recording-system-is-better',
    category: 'Product Comparisons',
    excerpt: 'Understanding the backend difference between Digital Video Recorders (DVR) and Network Video Recorders (NVR) is critical for matching budget with wiring needs.',
    content: `All CCTV cameras require a centralized system to capture, record, and process the video feeds. This system is typically either a Digital Video Recorder (DVR) or a Network Video Recorder (NVR). While both serve the same ultimate purpose, they utilize completely different wiring infrastructures and technologies.

## What is a DVR (Digital Video Recorder)?
DVR systems represent analog camera grids. The cameras translate analog electrical signals over thick coaxial cables directly to the recorder.
- **Processing Power:** The DVR box is responsible for processing, compressing, and encoding the raw video signal received from the cameras.
- **Cabling:** Coaxial cables (RG59) are bulkier, stiffer, and do not transmit power. This means each camera needs a separate power cable or power box next to the recorder.
- **Pros:** Lower hardware cost, works well on pre-existing legacy cabling.
- **Cons:** Lower max resolution, cabling is difficult to run, and no smart AI analytics at the camera level.

## What is an NVR (Network Video Recorder)?
NVR systems are built for IP (Internet Protocol) cameras. The cameras themselves are mini-computers that encode and compress the video signals internally before sending them as data over Ethernet cables.
- **Processing Power:** The cameras do the encoding, allowing the NVR to focus on saving, displaying, and executing database indexing.
- **Cabling:** Standard Cat5e or Cat6 Ethernet cables are thin, easy to route, and support Power over Ethernet (PoE). A single cable handles video, audio, control data, and power!
- **Pros:** Superior 4K resolution, intelligent AI search (line crossing, facial detection), simple plug-and-play PoE setup, and flexible installation.
- **Cons:** Higher initial equipment cost.

## Summary: Which Should You Choose?
For new installations, **an NVR system is highly recommended**. The cabling is future-proof, setup is simple, and advanced features like remote alerts and smart searching save hours of manual review. If you have existing coaxial wiring and a tight budget, a modern HD-TVI DVR system can provide a decent upgrade without rewiring.`,
    author: 'Michael Chen',
    date: 'June 28, 2026',
    readTime: '8 min read',
    imageUrl: svgBlog2,
    tags: ['Recording Systems', 'NVR', 'DVR', 'Tech Guide']
  },
  {
    id: 'blog-3',
    title: 'Best CCTV Camera Placement for Complete Coverage',
    slug: 'best-cctv-camera-placement-for-complete-coverage',
    category: 'Installation Guides',
    excerpt: 'Avoid blind spots and maximize your surveillance investment. Here are the strategic areas to install cameras on residential and commercial buildings.',
    content: `Where you put your security cameras is just as important as the quality of the hardware. A 4K camera pointing directly into a bright sun glare or placed too high will render useless recordings during an incident. Let's look at the optimal spots to configure surveillance cameras.

## 1. Main Entrances and Back Doors
Statistics show that a large percentage of break-ins occur through front doors, back doors, or first-floor windows.
- **Placement:** Position cameras directly above doors or windows, angled downward. Ensure the camera is between 8 to 9 feet off the ground—high enough to be out of reach of vandals, but low enough to capture clear facial images.
- **Tip:** Use cameras with wide dynamic range (WDR) to compensate for backlight when doors open to bright outdoor light.

## 2. Corner Mounts for Perimeter Coverage
Installing a camera at the corner of a building allows it to monitor two walls simultaneously.
- **Placement:** Use wide-angle fixed lenses (2.8mm) to cover the maximum area. Dual-corner layouts pointing towards each other create overlapping coverage, meaning each camera monitors the blind spot of the other.

## 3. High-Traffic Interior Paths
For business and residential spaces, monitor areas where intruders are forced to walk if they break in.
- **Placement:** Focus on hallways, main lobbies, and staircases. A camera positioned at the end of a long hallway captures clean, head-on facial angles.

## Common Placement Mistakes to Avoid:
1. **Pointing Directly at Light Sources:** Avoid direct sun exposure or strong streetlights.
2. **Glass Reflections:** Do not mount cameras behind glass panels looking outside, as the camera's infrared LED lights will reflect off the glass at night, blinding the sensor.
3. **Leaving Cameras Unsecured:** Ensure cabling is hidden in conduits or walls so intruders can't cut the line.`,
    author: 'David Vance',
    date: 'May 12, 2026',
    readTime: '5 min read',
    imageUrl: svgBlog3,
    tags: ['Installation', 'Camera Placement', 'Surveillance Tips']
  },
  {
    id: 'blog-4',
    title: 'Why Full-Color Night Vision Cameras Are Growing in Demand',
    slug: 'why-full-color-night-vision-cameras-are-growing-in-demand',
    category: 'Technology Updates',
    excerpt: 'Traditional infrared cameras produce black and white images at night, losing crucial details. Learn how modern full-color cameras solve this.',
    content: `For decades, night surveillance meant looking at grainy, black-and-white footage illuminated by glowing red infrared LEDs. While better than darkness, black-and-white footage makes it impossible to answer critical questions during a crime: "What color jacket was the suspect wearing?" or "What color was the getaway car?"

This is why **Full-Color Night Vision Cameras** are rapidly replacing traditional IR models.

## How Full-Color Night Vision Works
Unlike infrared cameras, which rely on light outside the visible spectrum, full-color cameras combine two primary innovations:
- **Large Apertures (F1.0):** An F1.0 aperture lens captures up to four times more light than a standard F2.0 security lens. This allows the camera sensor to gather ambient starlight or streetlights and output colorful detail.
- **Highly Sensitive CMOS Sensors:** Advanced back-illuminated sensors can extract color in extremely dim environments down to 0.0005 Lux.
- **Warm White LED Lights:** If the environment drops to absolute zero light (like a locked warehouse), the camera emits a soft, warm visible light, acting as a gentle floodlight to paint the scene in color.

## The Advantages of Full Color
1. **Critical Identification Info:** Knowing the exact color of pants, shirts, shoes, or vehicles helps police track suspects much faster.
2. **Better Contrast & Separation:** It is easier to see details like facial hair, logos, or license letters on a colorful background compared to gray-scale.
3. **Deterrence Factor:** The soft white light emitted by these cameras acts as an active visual warning to trespassers, telling them they are being watched.

With the prices of large-aperture optics coming down, investing in full-color cameras is a smart, future-proof step for any business or residential surveillance update.`,
    author: 'Elena Rostova',
    date: 'April 05, 2026',
    readTime: '7 min read',
    imageUrl: svgBlog4,
    tags: ['Night Vision', 'Color CCTV', 'Security Tech', 'New Products']
  }
];
