import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Talleres disponibles';

  talleres = [
    {
      id: 1,
      nombre: 'Introducción a HTML',
      duracion: '2 horas'
    },
    {
      id: 2,
      nombre: 'CSS básico',
      duracion: '3 horas'
    },
    {
      id: 3,
      nombre: 'JavaScript',
      duracion: '4 horas'
    },
    {
      id: 4,
      nombre: 'Angular',
      duracion: '4 horas'
    },
    {
      id: 5,
      nombre: 'React',
      duracion: '5 horas'
    }
  ];

  inscritos = signal<number[]>([]);

  inscribirse(id: number) {
    if (this.inscritos().includes(id)) {
      return;
    }

    this.inscritos.update(actuales => [...actuales, id]);
  }

  cancelarInscripcion(id: number) {
    this.inscritos.update(actuales =>
      actuales.filter(tallerId => tallerId !== id)
    );
  }
}