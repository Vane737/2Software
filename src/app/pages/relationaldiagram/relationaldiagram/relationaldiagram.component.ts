import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Diagram, NodeModel, UndoRedo, ConnectorModel, PointPortModel, Connector,
  SymbolInfo, IDragEnterEventArgs, SnapSettingsModel, MarginModel,
  UmlClassifierShape, PaletteModel, DiagramComponent, DiagramContextMenuService, UmlClassifierShapeModel, PointModel, DecoratorModel, StrokeStyleModel, multiplyMatrix, MultiplicityLabel  } from '@syncfusion/ej2-angular-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';
import { Observable } from 'rxjs';
//import { UmlCassifierShape } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(UndoRedo);

@Component({
  selector: 'app-relationaldiagram',
  templateUrl: './relationaldiagram.component.html',
  styleUrls: ['./relationaldiagram.component.css']
})
export class RelationaldiagramComponent implements OnInit {

  c = 0;

  @ViewChild('diagram')
  //Diagram Properties
  public diagram!: DiagramComponent;


  nodes: NodeModel[] = []; // Lista de elementos
  nodosObservable: Observable<NodeModel[]> | undefined; // Observador para rastrear los cambios


  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
        // Inicializar el Observador
        this.nodosObservable = new Observable<NodeModel[]>(observer => {
          // Emitir los cambios en la lista de elementos
          observer.next(this.nodes);
        });

        // Suscribirse al Observador y actualizar la vista cuando haya cambios
        this.nodosObservable.subscribe(() => {
          // Actualizar la vista
          this.cdRef.detectChanges();
        });
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
      this.diagram.setNodeTemplate;
    }
  }

  public addClass(): void {
    this.nodes?.push( this.createNode("node" + this.c, 400, 300, ""));
    this.diagram.add(this.createNode("node" + this.c, 400, 300, ""));
    this.diagram.layout;
    this.c++;
    console.log(this.nodes);

    console.log("Aqui aqui dx");
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

 //Initializes connector symbols for the symbol palette
 private connectorSymbols: ConnectorModel[] = [
  {
    id: 'Asociación',
    type: 'Straight',
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 200 },
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
/*  {
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
*/
];
   //SymbolPalette Properties
  public symbolMargin: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 };

  public expandMode: ExpandMode = 'Multiple';

/*  public nodese: NodeModel[] = [
    {
      id: 'NameClass',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: '',
          attributes: [
            this.createProperty('atributo', 'type'),
          ],
          methods: [this.createMethods('metodo', 'void')]
        },
        classifier: 'Class'
      } as UmlClassifierShapeModel,
      offsetX: -900,
      offsetY: -700
    }

  ];
*/
 // Set the default values of nodes.
 public getNodeDefaults(obj: NodeModel): NodeModel {
  obj.style = { fill: '#26A0DA', strokeColor: 'white' };
  return obj;
}

public created(): void {
  this.diagram.fitToPage();
}

// Set the default values of connectors.
public getConnectorDefaults(connector: ConnectorModel): void {
        connector.type = 'Polyline';
        connector.style!.strokeColor = '#6f409f';
        connector.style!.strokeWidth = 2;
//        connector.targetDecorator = { style: { strokeColor: '#6f409f', fill: '#6f409f' } };
};

// Set an annoation style at runtime.
public setNodeTemplate(node: NodeModel): void {
  if (node.annotations!.length > 0) {
    for (let i: number = 0; i < node.annotations!.length; i++) {
      node.annotations![i].style!.color = 'white';
    }
  }
}

// Create a connector.
public createConnector( id: string, sourceID: string, targetID: string ): ConnectorModel {
  let connector: ConnectorModel = {};
  connector.id = id;
  connector.sourceID = sourceID;
  connector.targetID = targetID;
  return connector;
}

// Create class Diagram shapes.
public createNode(id: string, offsetX: number, offsetY: number, className: string): NodeModel {
  let node: NodeModel = {};
  node.id = id;
  node.offsetX = offsetX;
  node.offsetY = offsetY;
  node.shape = {
    type: 'UmlClassifier',
    classShape: {
      name: className,
      attributes: [
        this.createProperty('atributo', 'type'),
      ],
      methods: [this.createMethods('metodo', 'void')]
    },
    classifier: 'Class'
  } as UmlClassifierShapeModel;
  return node;
}

// create class Property
public createProperty(name: string, type: string): object {
  return { name: name, type: type };
}

// create class Methods
public createMethods(name: string, type: string): object {
  return { name: name, type: type };
}




  public palettes: PaletteModel[] = [
    { id: 'Conectores', expanded: true, symbols: this.connectorSymbols, title: 'Connectors' },
];

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return { fit: true };
  }



}
