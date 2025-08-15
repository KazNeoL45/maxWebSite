import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maxWeb');
  
  protected readonly sections: Section[] = [
    { id: 'hero', name: 'Home' },
    { id: 'bio', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'hobbies', name: 'Hobbies' },
    { id: 'facts', name: 'Facts' },
    { id: 'contact', name: 'Contact' }
  ];

  protected readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'pi pi-palette',
      color: 'text-blue-500',
      skills: [
        { name: 'React', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Angular', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Live View', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Astro', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'TypeScript', category: 'frontend', color: 'bg-blue-100 text-blue-800' },
        { name: 'Tailwind CSS', category: 'frontend', color: 'bg-blue-100 text-blue-800' }
      ]
    },
    {
      title: 'Backend',
      icon: 'pi pi-cog',
      color: 'text-green-500',
      skills: [
        { name: 'C++', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'C#', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Swift', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Elixir', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Java Script', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'LUA', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Python', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'Java', category: 'backend', color: 'bg-green-100 text-green-800' },
        { name: 'PostgreSQL', category: 'backend', color: 'bg-green-100 text-green-800' }
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
  
  protected activeSection = 'hero';
  
  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  protected downloadCV(): void {
    console.log('Attempting to download CV...');
    fetch('/CvMaxV1.5.pdf')
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
        link.download = 'CvMaxV1.5.pdf';
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
}
