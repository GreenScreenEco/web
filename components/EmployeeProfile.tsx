type Props = {
  fullName: string,
  positionTitle: string,
}

export default function EmployeeProfile({fullName, positionTitle}: Props) {
  return (
    <h6>{fullName} - {positionTitle}</h6>
  )
}