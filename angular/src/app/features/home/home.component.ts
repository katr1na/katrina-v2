import { Component } from "@angular/core";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ExperienceComponent]
})

export class HomeComponent
{

}