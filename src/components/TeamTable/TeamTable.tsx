import React, { SFC } from 'react';
import { FootballPlayer } from '../../data/types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export interface TeamTableProps {
  players: FootballPlayer[];
}

const TeamTable: SFC<TeamTableProps> = props => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{props.players.map(renderPlayerRow)}</TableBody>
      </Table>
    </Paper>
  );
};

const renderPlayerRow = (player: FootballPlayer) => (
  <TableRow key={player.id}>
    <TableCell component="th" scope="row">
      {player.position}
    </TableCell>
    <TableCell>{player.name}</TableCell>
    <TableCell>{player.team}</TableCell>
  </TableRow>
);

export default TeamTable;
