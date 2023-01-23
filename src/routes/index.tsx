import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const info = useStore({
    result: 'Esperando a la primera jugada...',
    user: 0,
    computer: 0
  });

  return (
    <>
      <div class='title'>
        <h1>¡¡Piedra, Papel ó Tijera!!</h1>
      </div>
      <div class="score-board">
        <div id="user-label" class="badge">user</div>
        <div id="comp-label" class="badge">comp</div>
        <span id="user-score">{ info.user }</span>:<span id="comp-score">{ info.computer}</span>
      </div>
      <p class="info-game">{ info.result }</p>
      <div class='choices'>
        <div class='choice'>
          <img src='../../images/rock.png' />
        </div>
        <div class='choice'>
          <img src='../../images/paper.png' />
        </div>
        <div class='choice'>
          <img src='../../images/scissors.png' />
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
