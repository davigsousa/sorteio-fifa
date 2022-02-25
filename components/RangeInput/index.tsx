import { Range, getTrackBackground } from "react-range";
import { CurrentValue, Container, ResultWrapper } from "./styles";

interface RangeInputProps {
  label: string;
  onUpdate: (value: number) => void;
  maxValue: number;
  minValue: number;
  value: number;
}

export function RangeInput({
  label,
  onUpdate,
  maxValue,
  minValue,
  value,
}: RangeInputProps) {
  const updateOverall = (values: number[]) => {
    onUpdate(values[0]);
  };

  return (
    <Container>
      <label>{label}</label>

      <ResultWrapper>
        <Range
          values={[value]}
          onChange={updateOverall}
          step={1}
          min={minValue}
          max={maxValue}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "80%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: [value],
                    colors: ["#30a743", "#ccc"],
                    min: minValue,
                    max: maxValue,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "30px",
                width: "30px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#30a743" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <CurrentValue>{value}</CurrentValue>
      </ResultWrapper>
    </Container>
  );
}

export default RangeInput;
