export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  insights: string[];
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Home Lab Security Setup",
    description: "Built and configured a home cybersecurity lab environment with multiple virtual machines for practicing ethical hacking techniques and defense strategies.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    tags: ["Virtualization", "Network Security", "proxmox"],
    insights: [
      "Implemented network segmentation using VMware",
      "Configured IDS/IPS with Snort for traffic monitoring",
      "Created vulnerable machines for penetration testing practice"
    ],
    details: "This project involved setting up a comprehensive cybersecurity lab environment at home to practice and enhance my skills. The lab consists of multiple virtual machines running different operating systems, including Kali Linux for penetration testing, Windows Server for domain management, and several vulnerable machines for practice.\n\nI implemented proper network segmentation to isolate the lab environment from my home network, ensuring that my penetration testing activities remained contained. The lab is configured with Snort as an Intrusion Detection/Prevention System to monitor network traffic and identify potential threats.\n\nThe vulnerable machines are configured with intentional security flaws to practice identifying and exploiting common vulnerabilities. This helps me understand how attackers operate and how to better defend against such attacks.\n\nThis ongoing project has significantly enhanced my practical cybersecurity skills and provided a safe environment to experiment with different security tools and techniques."
  },
  {
    title: "Security Monitoring Dashboard",
    description: "Developed a custom security monitoring dashboard that aggregates logs from various sources and visualizes potential security threats for quick analysis.",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    tags: ["Python", "Node.js", "Data Visualization"],
    insights: [
      "all the usb and netowork logs will be monitoried ",
      "Implemented real-time alerts for suspicious activities",
      "Created custom visualizations for different types of attacks"
    ],
    details: "For this project, I developed a custom security dashboard to consolidate and visualize security logs from multiple sources. The dashboard processes log data  and displays it in an intuitive interface for quick analysis.\n\nThe system processes over 10,000 log entries daily. I implemented real-time alerting functionality that notifies security personnel when suspicious activities are detected, allowing for prompt investigation and response.\n\nThe dashboard features custom visualizations tailored to different types of attacks, making it easier to identify and understand security incidents. The visualizations include heatmaps for temporal pattern detection, network graphs for connection analysis.\n\nThis project significantly improved my skills in data processing, visualization, and security event management, providing practical experience in developing tools for security operations centers."
  },
  {
    title: "Zero Trust USB Port Security",
    description: "Implemented a Zero Trust security model for USB ports to protect against malicious USB devices and data exfiltration in educational environments.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    tags: ["Endpoint Security", "Zero Trust", "USB Protection"],
    insights: [
      "Configured port-level access controls using whitelist",
      "Implemented USB device whitelisting and authentication",
      "Created automated incident response for unauthorized devices"
    ],
    details: "This project focused on implementing a comprehensive Zero Trust security model for USB ports in an educational lab environment. The solution addresses the security risks associated with unauthorized USB devices, which can be used for data theft, malware introduction, or as attack vectors.\n\nI configured port-level access controls , restricting USB access based on device identifiers, user roles, and time-based constraints. The implementation includes a robust USB device whitelisting system that requires devices to be registered and authenticated before they can be used.\n\nA key component of the solution is the automated incident response system that detects unauthorized USB connections and immediately triggers security protocols, including alerts to system administrators, logging of the event, and optional automatic shutdown of the affected system.\n\nThe project also involved creating educational materials on USB security risks and best practices for students and faculty, promoting a security-conscious culture within the educational institution. This implementation has successfully prevented unauthorized data transfers while maintaining necessary functionality for legitimate educational purposes."
  }
];