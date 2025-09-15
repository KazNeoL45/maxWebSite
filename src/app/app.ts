import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';

interface Section {
  id: string;
  name: string;
}

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops';
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'current' | 'past';
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in_progress' | 'paused';
  gpa?: string;
  description: string;
  relevantCourses: string[];
  achievements: string[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, TopBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('maxWeb');
  
  protected readonly sections: Section[] = [
    { id: 'hero', name: 'Home' },
    { id: 'bio', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'studies', name: 'Studies' },
    { id: 'hobbies', name: 'Hobbies' },
    { id: 'facts', name: 'Facts' },
    { id: 'contact', name: 'Contact' }
  ];

  protected readonly skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: 'pi pi-code',
      color: 'text-red-500',
      skills: [
        { name: 'C++', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'TypeScript', category: 'frontend', color: 'bg-red-100 text-red-800' },
        { name: 'JavaScript', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'Python', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'Java', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'C#', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'Elixir', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'Swift', category: 'backend', color: 'bg-red-100 text-red-800' },
        { name: 'LUA', category: 'backend', color: 'bg-red-100 text-red-800' }
      ]
    },
    {
      title: 'Frontend',
      icon: 'pi pi-palette',
      color: 'text-blue-500',
      skills: [
        { name: 'React', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Angular', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Live View', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Astro', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Tailwind CSS', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'HTML/CSS', category: 'frontend', color: 'bg-blue-100 text-blue-800' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'pi pi-cog',
      color: 'text-green-500',
      skills: [
        { name: 'PostgreSQL', category: 'backend', color: 'bg-green-100 text-green-800' },
        {name: 'Maven', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Phoenix', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Django', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Node.js', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'REST APIs', category: 'backend', color: 'bg-green-100 text-green-800' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: 'pi pi-rocket',
      color: 'text-purple-500',
      skills: [
        { name: 'Docker', category: 'devops', color: 'bg-purple-100 text-purple-800' },
        { name: 'AWS', category: 'devops', color: 'bg-purple-100 text-purple-800' },
        { name: 'Git', category: 'devops', color: 'bg-purple-100 text-purple-800' },
        { name: 'CI/CD', category: 'devops', color: 'bg-purple-100 text-purple-800' },
        { name: 'Kubernetes', category: 'devops', color: 'bg-purple-100 text-purple-800' }
      ]
    }
  ];

  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'Kanae Game Engine',
      description: 'A game engine built from scratch in C++ featuring custom shader.',
      technologies: ['C++', 'Vulkan', 'GLSL', 'Lua'],
      githubUrl: 'https://github.com/Kyon-Soft-Develpment/KanaeGameEngine.git',
      featured: true
    },
    {
      id: 2,
      title: 'Codename Solaris',
      description: 'An RPG game currently in development using a custom version of Unreal Engine, it focuses on storytelling.',
      technologies: ['C++', 'Unreal Engine'],
      featured: true
    },
        {
      id: 6,
      title: 'Codename Crimson',
      description: 'A first person Horror adventure game, focused on storytelling and gameplay.',
      technologies: ['C++', 'Unreal Engine'],
      featured: true
    },
    {
      id: 3,
      title: 'Powder Posting',
      description: 'Powder posting takes LinkedIn posting to the next level, generating posts with AI and scheduling them for maximum engagement, built with Elixir and LiveView, with an intuitive and responsive UI, featuring an AI client for post generation, LinkedIn integration and internationalization support',
      technologies: ['Elixir', 'LiveView', 'Phoenix','DaisyUI', 'Linkedin API', 'Gemini API', 'Stripe', 'OTP'],
      githubUrl: 'https://github.com/Synthetica-Solutions/powder-posting.git',
      featured: false
    },
    {
      id: 4,
      title: 'Sorbo Web Frontend',
      description: 'A project for a startup, Sorbo Web is a small ecommerce platform meant to sell handmade products, I worked as the only developer',
      technologies: ['Angular', 'TypeScript', 'DJango', 'Python'],
      githubUrl: 'https://github.com/KazNeoL45/Sorbo-Frontend.git',
      featured: false
    },
        {
      id: 5,
      title: 'Sorbo Web Backend',
      description: 'This is the backend for Sorbo Web, handles product management, a CRUD API, with user authentication and order processing with a Stripe integration',
      technologies: ['DJango', 'Python', 'Stripe API'],
      githubUrl: 'https://github.com/KazNeoL45/sorbo_back.git',
      featured: false
    },

  ];

  protected readonly experiences: Experience[] = [
        {
      id: 1,
      company: 'Epic Games',
      position: 'Software Developer intern',
      location: 'Remote',
      duration: '9 months',
      startDate: 'November 2022',
      endDate: 'August 2023',
      description: 'Worked on various software development projects focusing on business applications and system integrations. Gained valuable experience in enterprise software development.',
      achievements: [
        'Achieved proficiency in C++ and Unreal Engine 5',
        'Contributed to internal tools and applications',
        'Collaborated with cross-functional teams',
        'Enhanced problem-solving and coding skills'
      ],
      technologies: ['C++', 'Unreal Engine 5'],
      type: 'past'
    },
    {
      id: 2,
      company: 'Freelancer',
      position: 'Full Stack Developer',
      location: 'Remote',
      duration: '1+ years',
      startDate: 'December 2023',
      endDate: 'Present',
      description: 'Providing custom web development solutions for various clients, specializing in modern web applications and e-commerce platforms.',
      achievements: [
        'Delivered 2 custom web applications for diverse client needs',
        'Built responsive e-commerce platforms with payment integrations such as stripe',
        'Maintained 100% client satisfaction with on-time project delivery',
        'Implemented modern development practices and performance optimizations'
      ],
      technologies: ['Angular', 'React', 'TypeScript', 'Elixir', 'Python', 'PostgreSQL', 'Stripe API'],
      type: 'current'
    },
    {
      id: 3,
      company: 'Vordutec | Qualitas',
      position: 'Full Stack Developer',
      location: 'Hybrid - Mexico City',
      duration: '9 months',
      startDate: 'October 21st, 2024',
      endDate: 'Present',
      description: 'Currently working as a full-stack developer focusing on modern web applications and enterprise solutions for Qualitas.',
      achievements: [
        'Architected and developed multiple enterprise-level web applications',
        'Implemented modern UI/UX designs with responsive frameworks',
        'Optimized application performance',
        'Collaborated with cross-functional teams to deliver high-quality solutions'
      ],
      technologies: ['Angular', 'TypeScript', 'Java', 'Elixir', 'PostgreSQL', 'Docker'],
      type: 'current'
    }
  ];

  protected readonly education: Education[] = [
    {
      id: 1,
      institution: 'TecMilenio University Campus Toluca',
      degree: 'Software Developer Engineer',
      field: 'Software Engineering',
      location: 'Toluca, Mexico',
      startDate: 'August 2022',
      endDate: 'August 2026',
      status: 'in_progress',
      description: 'Currently pursuing a Software Engineering degree at TecMilenio University in Mexico, focusing on modern development practices and real-world applications.',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management',
        'Software Engineering',
        'Web Development',
        'Advanced Networking',
        'Dev Ops'
      ],
      achievements: [
        'Amazon Web Services (AWS)',
        'Led team projects in software development',
        'Active participation in programming courses'
      ]
    }
  ];

  protected activeSection = 'hero';
  private isScrolling = false;

  protected get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  protected get otherProjects(): Project[] {
    return this.projects.filter(p => !p.featured);
  }

  ngOnInit(): void {
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }

  private handleScroll(): void {
    if (this.isScrolling) return;

    const sections = this.sections.map(section => section.id);
    const scrollPosition = window.scrollY + 100; // Offset for top bar

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        if (this.activeSection !== sections[i]) {
          this.activeSection = sections[i];
        }
        break;
      }
    }
  }

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      this.isScrolling = true;
      this.activeSection = sectionId;

      element.scrollIntoView({ behavior: 'smooth' });

      // Reset scrolling flag after animation
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  protected downloadCV(): void {
    console.log('Attempting to download CV...');
    fetch('/Max-cv.pdf')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        console.log('File blob created, size:', blob.size);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Max-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log('Download completed successfully');
      })
      .catch(error => {
        console.error('Error downloading file:', error);
        alert(`Error downloading CV: ${error.message}. Please check if the file exists in the public folder.`);
      });
  }

  protected contactMe(): void {
    const email = 'maxninesdc143c@proton.me';
    const subject = 'Job Opportunity - Full Stack Developer';
    const body = `Hi Maxim,

I came across your portfolio and would like to discuss potential opportunities.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  }

  protected openGitHub(): void {
    window.open('https://github.com/KazNeoL45', '_blank');
  }

  protected openInstagram(): void {
    window.open('https://www.instagram.com/maxnines_06/', '_blank');
  }

  protected openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/maxim-lamas-284120252/', '_blank');
  }

  protected openWhatsApp(): void {
    const phoneNumber = '7224437729';
    const message = 'Hi Maxim! I found your portfolio and would like to connect.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  protected openProjectUrl(url: string): void {
    window.open(url, '_blank');
  }
}
