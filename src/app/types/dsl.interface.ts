export interface LayoutComponent {
  name?: string,
  type?: string,
  ratio?: number[],
  children?: LayoutComponent[];
  datasource?: string
}

export interface State {
  mode: string,
  content: LayoutComponent,
  height? : string,
  width?: string,
  padding?: string,
  header?: any
}

export interface Form {
  id: string,
  context?: any[],
  header? : any,
  states: State[]
}

export interface App {
  id: string,
  name: string,
  forms: Form[],
  types: any,
  standalone: boolean,
  color? :string,
  iconHash?: string,
  intents?: any[],
  navigation?: any,
  commands?: any[],
  translations? :any[]

}

export interface DslDescription {
  apps : App[],
  appNetwork?: any,
  scripting?: any
}
