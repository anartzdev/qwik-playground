import { component$, $, useStore, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ScoreBoard } from '~/components/game/scoreboard';

export default component$(() => {
  const info = useStore({
    result: 'Esperando a la primera jugada...',
    user: 0,
    computer: 0,
  });

  /**
   * Math Random para generar un random y multiplicamos por 3
   * Redondeamos el entero superior, quedando 0,1,2 como posibles resultados
   * y con ello selecciona Piedra (r), Papel (p) ó Tijera (s)
   */
  const getComputerChoice = $(() => {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  });

  const gameManage = $(async (userChoice: string) => {
    const playUserComp = userChoice + (await getComputerChoice());
    console.log(`Jugada realizada: ${playUserComp}`);
    switch (playUserComp) {
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        info.result = 'Ganas a la computadora';
        info.user++;
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        info.result = 'Gana la computadora';
        info.computer++;
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        info.result = 'Habéis elegido la misma jugada y habéis empatado';
        break;
    }
  });

  // $ ES SUPER IMPORTANTE
  const play = $(async (value: any) => {
    console.log(await getComputerChoice());
    await gameManage(value);
  });

  useClientEffect$(() => {
    // Put code here to periodically call updateClock().
  });

  return (
    <>
      <div class='title'>
        <h1>¡¡Piedra, Papel ó Tijera!!</h1>
      </div>
      <ScoreBoard user={info.user} computer={info.computer} />
      <p class='info-game'>{info.result}</p>
      <div class='choices'>
        <div class='choice' onClick$={() => play('r')}>
          <img src='/images/rock.png' />
        </div>
        <div class='choice' onClick$={() => play('p')}>
          <img src='/images/paper.png' />
        </div>
        <div class='choice' onClick$={() => play('s')}>
          <img src='/images/scissors.png' />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
