import { Component, ViewChild } from '@angular/core';
import { Diagram, NodeModel, UndoRedo, ConnectorModel, PointPortModel, Connector,
  SymbolInfo, IDragEnterEventArgs, SnapSettingsModel, MarginModel,
  UmlClassifierShape, PaletteModel, DiagramComponent, DiagramContextMenuService, UmlClassifierShapeModel, PointModel, DecoratorModel, StrokeStyleModel, multiplyMatrix, MultiplicityLabel  } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';
//import { UmlCassifierShape } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(UndoRedo);

@Component({
  selector: 'app-relationaldiagram',
  templateUrl: './relationaldiagram.component.html',
  styleUrls: ['./relationaldiagram.component.css']
})
export class RelationaldiagramComponent {

  @ViewChild('diagram')
  //Diagram Properties
  public diagram!: DiagramComponent;

  public created(): void {
    this.diagram.fitToPage();
  }

  public interval: number[] = [
    1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25,
    9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
  ];

  public snapSettings: SnapSettingsModel = {
    horizontalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval },
    verticalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval }
  };


  public dragEnter(args: IDragEnterEventArgs): void {
    let obj: NodeModel = args.element as NodeModel;
    if (obj && obj.width && obj.height) {

    }
  }

  // Paleta

  public getConnectorStyle(dashArrayed?: boolean) {
    let style: StrokeStyleModel = {};
    if (dashArrayed) {
        style = { strokeWidth: 2, strokeColor: '#757575', strokeDashArray: '4 4', };
    } else {
        style = { strokeWidth: 2, strokeColor: '#757575' };
    }
    return style;
}

       // initializes connector symbols to the connector palette in the symbol palette
 //Initializes connector symbols for the symbol palette
 private connectorSymbols: ConnectorModel[] = [
  {
    id: 'Asociación',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: {strokeColor: '#757575', fill: '#757575'} },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    shape: {
      type: "UmlClassifier",
      relationship: "Association",
      //Define type of association
    }
  },
  {
    id: 'Dependencia',
    type: 'Polyline',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: 'None' },
    shape: {
      type: "UmlClassifier",
       //set an relation of connector
      relationship: "Dependency"
     }
  },
  {
    id: 'Composición',
    type: 'Polyline',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'None', style: {strokeColor: '#757575', fill: '#757575'} },
    style: { strokeWidth: 2, strokeColor: '#757575', fill: '#757575' },
    shape: {
      type: "UmlClassifier",
      relationship: "Composition",
      multiplicity: {
        type: 'OneToMany'
      }
      //Define type of association
    }
  },
  {
    id: 'Agregación',
    type: 'Polyline',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Diamond', style: {strokeColor: '#000000', fill: '#ffffff'} },
    style: { strokeWidth: 1, strokeColor: '#757575', fill: '#ffffff' }
  },
  {
    id: 'Generalización',
    type: 'Polyline',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#000000', fill: '#ffffff' },
    targetDecorator: { shape: 'None', style: { strokeColor: '#000000', fill:'#ffffff'} },
    shape: {
      type: "UmlClassifier",
       //set an relation of connector
      relationship: "Realization"
     }
  },
  {
    id: 'Realización',
    type: 'Polyline',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: 'None', style: { strokeColor: '#000000', fill:'#ffffff'} },
    shape: {
      type: "UmlClassifier",
       //set an relation of connector
      relationship: "Inheritance"
     }
  }
];
   //SymbolPalette Properties
  public symbolMargin: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 };

  public expandMode: ExpandMode = 'Multiple';

  public nodes: NodeModel[] = [
    {
      id: 'NameClass',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'NameClass',
          attributes: [
            this.createProperty('atributo', 'type'),
          ],
          methods: [this.createMethods('metodo', 'void')]
        },
        classifier: 'Class'
      } as UmlClassifierShapeModel,
      offsetX: -900,
      offsetY: -750
    }

  ];




    // create class Methods
    public createMethods(name: string, type: string): object {
      return { name: name, type: type };
    }

  public createProperty(name: string, type: string): object {
    return { name: name, type: type };
  }

  public palettes: PaletteModel[] = [
    { id: 'Conectores', expanded: true, symbols: this.connectorSymbols, title: 'Connectors' },
];

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return { fit: true };
  }



}
