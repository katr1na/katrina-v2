import { Component } from "@angular/core";

@Component({
    selector:'app-experience',
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})

export class ExperienceComponent
{
    public readonly jobsList = [
    {
        title: "Software Engineer I",
        company: "Medpace",
        dateRange: "May 2026 - Present",
        desc: []
    },
    {
        title: "Technology Consultant Intern",
        company: "Credera",
        dateRange: "June 2025 - August 2025",
        desc: [
            "Built an AI-powered software audit tool automating version tracking and inventory management.",
            "Delivered technical demos and proof-of-concepts to stakeholders."
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Transamerica",
        dateRange: "May 2024 - August 2024",
        desc: [
            "Developed and tested enterprise-level Generative AI solutions and contributed to rewriting the World Finance Group agent platform, improving usability for 74K+ agents.",
        ]
    },
    ];

    public selectedJobTitle: string = this.jobsList[0].title;
    public selectedJobDesc: string[] = this.jobsList[0].desc;
    public selectedJobDateRange: string = this.jobsList[0].dateRange;
    public selectedCompany: string = this.jobsList[0].company;

    public onChangeJobs(job: { title: string; company: string; dateRange: string; desc: string[] }) {
        this.selectedJobTitle = job.title;
        this.selectedJobDesc = job.desc;
        this.selectedJobDateRange = job.dateRange;
        this.selectedCompany = job.company;
    }
}