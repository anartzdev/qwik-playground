import { component$ } from '@builder.io/qwik';

interface ScoreBoardProps {
  user: number;
  computer: number;
}

export const ScoreBoard = component$((props: ScoreBoardProps) => {
  const { user, computer } = props;
  return (
    <div class='score-board'>
      <ScoreBoardLabel id='user-label' label='user' />
      <ScoreBoardLabel id='comp-label' label='comp' />
      <ScoreBoardPoints user={{id: 'user', value: user}} computer={{id: 'comp', value: computer}}/>
    </div>
  );
});

interface ScoreBoardLabelProps {
  id: string;
  label: string;
}

export const ScoreBoardLabel = component$((props: ScoreBoardLabelProps) => {
  const { id, label } = props;
  return (
    <div id={id} class='badge'>
      {label}
    </div>
  );
});

interface ScoreBoardPointsProps {
  user: { id: string; value: number };
  computer: { id: string; value: number };
}

export const ScoreBoardPoints = component$((props: ScoreBoardPointsProps) => {
  const { user, computer } = props;
  return (
    <>
        <span id={user.id.concat('-score')}>{user.value}</span>:
      <span id={computer.id.concat('-score')}>{computer.value}</span>
    </>
  );
});
