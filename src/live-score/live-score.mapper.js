import { DateTime } from "luxon";

export const mapToDto = item => {
  const date = item.date && DateTime.fromJSDate(item.date);
  return {
    id: item.id,
    date: date?.isValid ? date.toFormat('yyyy-MM-dd'): undefined,
    homeTeamName: item.homeTeamName,
    awayTeamName: item.awayTeamName,
    homeTeamScore: item.homeTeamScore,
    awayTeamScore: item.awayTeamScore,
  };
};

const mapHomeTeamNameFromDto = dto => dto.homeTeamName?.split(' ').map(word => word.at(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
const mapAwayTeamNameFromDto = dto => dto.awayTeamName?.split(' ').map(word => word.at(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');

const mapDateFromDto = dto => {
  const date = dto.date && DateTime.fromISO(dto.date);
  console.log(date)
  return date?.isValid ? date.toJSDate() : null;
};

export const mapFromDto = dto => ({
  date: dto.date, //mapDateFromDto(dto),
  homeTeamName: mapHomeTeamNameFromDto(dto),
  awayTeamName: mapAwayTeamNameFromDto(dto),
  homeTeamScore: dto.homeTeamScore,
  awayTeamScore: dto.awayTeamScore,
});

export const mapFromPartialDto = dto => ({
  ...dto.date !== undefined ? { date: dto.date } : undefined,
  ...dto.homeTeamName !== undefined ? { homeTeamName: mapHomeTeamNameFromDto(dto) } : undefined,
  ...dto.awayTeamName !== undefined ? { awayTeamName: mapAwayTeamNameFromDto(dto) } : undefined,
  ...dto.homeTeamScore !== undefined ? { homeTeamScore: dto.homeTeamScore } : undefined,
  ...dto.awayTeamScore !== undefined ? { awayTeamScore: dto.awayTeamScore } : undefined,
});