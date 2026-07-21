import { Component } from '@angular/core';
import { BuilderModel, INgxViewBuilderBuilderSettings, IStructure, NgxViewBuilderBuilder } from 'ngx-view-builder';
import { loadStructure, saveStructure } from '../../shared/mock';

const builderSettings: INgxViewBuilderBuilderSettings = {};

@Component({
  selector: 'app-builder-page',
  standalone: true,
  imports: [NgxViewBuilderBuilder],
  templateUrl: './builder-page.component.html',
  styleUrl: './builder-page.component.scss',
})
export class BuilderPageComponent {
  builderModel = new BuilderModel();
  builderSettings = builderSettings;

  constructor() {
    this.builderModel.setJson(JSON.stringify(loadStructure()));
  }

  onStructureChanged(structure: IStructure): void {
    saveStructure(structure);
  }
}
