import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonExampleComponent } from 'src/app/component-examples/button-example/button-example.component';
import { InputExampleComponent } from 'src/app/component-examples/input-example/input-example.component';
import { AdComponent } from 'src/app/components/ad-component';
import { AdHostDirective } from 'src/app/components/ad-host.directive';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  components: {
    name: string;
    component: any;
    factory: any;
  }[] = [
    {
      name: 'Button',
      component: ButtonExampleComponent,
      factory: undefined,
    },

    {
      name: 'Input',
      component: InputExampleComponent,
      factory: undefined,
    },
  ];

  @ViewChild(AdHostDirective) private adHost!: AdHostDirective;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  loadComponent(index: number) {
    const adItem = this.components[index];
    let factory;
    if (adItem['factory']) {
      factory = adItem['factory'];
    } else {
      factory = this.componentFactoryResolver.resolveComponentFactory(
        adItem.component
      );
      adItem['factory'] = factory;
    }

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(factory);
  }
}