type PassStringProps = {
    char: string;
  }

export const PassString = ({char}: PassStringProps) => {
    return (
        <h1>{char}</h1>
    )
}