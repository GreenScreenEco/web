import styles from "./CompaniesTable.module.css"
import {useMemo} from "react";

export type ScoreSource = {
  identity: string,
  description: string,
}

export type ScoreRating = {
  minValue: number,
  color: string,
  name: string,
}

export type GroupedScores = {
  scoreSource: ScoreSource,
  scores: Score[],
}

export type Score = {
  value: number,
  min: number,
  max: number,
  label: string,
  description: string,
  source: ScoreSource,
}

export type ScoreSummary = {
  main_score: Score,
  score_components: Score[],
}

export type CompanyDetails = {
  name: string,
  scores: ScoreSummary,
}

export function groupScoresBySource(scores: Score[]): GroupedScores[] {
  let result = new Map<string, GroupedScores>()
  for (let score of scores) {
    const resultKey = score.source.identity
    if (result.has(resultKey)) {
      let item = result.get(resultKey)
      item.scores.push(score)
      result.set(resultKey, item)
    } else {
      const item = {
        scoreSource: score.source,
        scores: [score],
      }
      result.set(resultKey, item)
    }
  }

  const resultList = []
  result.forEach(item => resultList.push(item))
  return resultList
}

/** Convert a score's value to a scale of 0-10. */
export function scaleScoreToLocal(score: Score): Score {
  const targetMin = 0;
  const targetMax = 10;
  if (score.min === targetMin && score.max === targetMax) {
    return score;
  }

  // Scale the score value
  let scaledScore = {...score};
  scaledScore.value -= score.min ?? 0;
  scaledScore.value *= (targetMax - targetMin) / (score.max - (score.min ?? 0))
  scaledScore.value += targetMin;

  // Update the new score with the accurate range
  scaledScore.min = targetMin;
  scaledScore.max = targetMax;

  // Truncate to only 1 decimal of precision.
  scaledScore.value = Math.round(scaledScore.value * 10) / 10;

  return scaledScore;
}

export function getRatingForScore(score: Score | null): ScoreRating {
  if (score == null) {
    return {
      minValue: 0.0,
      name: "",
      color: "#CCCCCC",
    };
  }
  score = scaleScoreToLocal(score);
  const all: ScoreRating[] = [
    {
      minValue: 7.0,
      name: "Good",
      color: "#80C080",
    },
    {
      minValue: 5.0,
      name: "Okay",
      color: "#CFCF80",
    },
    {
      minValue: 0.0,
      name: "Bad",
      color: "#CF8080",
    }
  ];
  return all.filter(r => score.value >= r.minValue)[0];
}

type ScoreItemProps = {
  score: Score,
}

function ScoreItem({score}: ScoreItemProps) {
  const scaledScore = scaleScoreToLocal(score)
  const scaledScoreRating = getRatingForScore(scaledScore)

  return (
    <div className={styles.companyScoreItem}>
      <span style={{color: scaledScoreRating.color}}>{scaledScore.value}</span>
      <span>{scaledScore.label}</span>
    </div>
  )
}

type ScoresForSourceProps = {
  scoreSource: ScoreSource,
  scores: Score[],
}

function ScoresForSource({scoreSource, scores}: ScoresForSourceProps) {
  return (
    <div className={styles.companyScoresForSource}>
      <div className={styles.companyScores}>
        {scores.map(score => <ScoreItem key={score.label} score={score} />)}
      </div>
    </div>
  )
}

type CompanyProps = {
  company: CompanyDetails,
}

function Company({company}: CompanyProps) {
  const mainScore = scaleScoreToLocal(company.scores.main_score)
  const mainScoreRating = getRatingForScore(mainScore)

  const scoresBySource = useMemo(() => {
    return groupScoresBySource(company.scores.score_components)
  }, [company])

  return (
    <div className={styles.company}>
      <h4>{company.name} - <span style={{color: mainScoreRating.color}}>{mainScore.value}</span></h4>
      {scoresBySource.map(groupedScore => <ScoresForSource scoreSource={groupedScore.scoreSource} scores={groupedScore.scores} />)}
    </div>
  )
}

type CompaniesTableProps = {
  companies: CompanyDetails[],
}

export default function CompaniesTable({companies}: CompaniesTableProps) {
  return (
    <div className={styles.companiesTable}>
      {companies.map(company => <Company key={company.name} company={company} />)}
    </div>
  )
}