import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Talleres disponibles';

  talleres = [
    { id: 1, nombre: 'Introducción a HTML', duracion: '2 horas' },
    { id: 2, nombre: 'CSS básico', duracion: '3 horas' },
    { id: 3, nombre: 'JavaScript', duracion: '4 horas' },
    { id: 4, nombre: 'Angular', duracion: '4 horas' },
    { id: 5, nombre: 'React', duracion: '5 horas' }
  ];

  inscritos = signal<number[]>([]);

  inscribirse(id: number) {
    if (this.inscritos().includes(id)) {
      return;
    }

    if (this.inscritos().length >= 2) {
      return;
    }

    this.inscritos.update(lista => [...lista, id]);
  }

  cancelarInscripcion(id: number) {
    this.inscritos.update(lista =>
      lista.filter(tallerId => tallerId !== id)
    );
  }

  cancelarTodas() {
    this.inscritos.set([]);
  }

  estaInscrito(id: number) {
    return this.inscritos().includes(id);
  }

  get talleresSeleccionados() {
    return this.talleres.filter(taller =>
      this.inscritos().includes(taller.id)
    );
  }
}