import { Component, signal } from '@angular/core';
import { IStructure, NgxViewBuilderRuntime } from 'ngx-view-builder';
import { initialData, loadStructure } from '../../shared/mock';

@Component({
  selector: 'app-runtime-page',
  standalone: true,
  imports: [NgxViewBuilderRuntime],
  templateUrl: './runtime-page.component.html',
  styleUrl: './runtime-page.component.scss',
})
export class RuntimePageComponent {
  pageJson = signal<IStructure>(loadStructure());
  dataJson = signal<Record<string, unknown>>(initialData);
}
