import { Component } from '@angular/core';
import { EpisodeService } from './episodes.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {

  lstEpisodes: any[] = [];

  constructor(
    private episodesService: EpisodeService
  ){

  }

  ngOnInit(): void {
    this.listarEpisodios();
  }

  async listarEpisodios(){
    let episodes$ = this.episodesService.listarEpisodios();

    let res: any = await lastValueFrom(episodes$)

    if(res) {
      this.lstEpisodes = res;
    } else {
      this.lstEpisodes = [];
    }

    console.log(res)
  }
}
