import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.313 5.281v9.625q.054.602.656.656h11.375q.601.056.656.657-.055.601-.656.656H1.969q-.848-.027-1.395-.574-.546-.547-.574-1.395V5.281q.054-.601.656-.656.602.054.657.656m7.437-.218v1.312q.383 0 .629.246a.85.85 0 0 1 .246.629v2.625a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246v1.313q-.027.41-.437.437-.411-.027-.438-.437V10.75a.85.85 0 0 1-.629-.246A.85.85 0 0 1 7 9.875V7.25q0-.383.246-.629a.85.85 0 0 1 .629-.246V5.063q.027-.411.438-.438.41.027.437.438m1.75 4.812q0-.383.246-.629A.85.85 0 0 1 11.375 9V7.688q.027-.411.438-.438.41.027.437.438V9q.383 0 .629.246a.85.85 0 0 1 .246.629v1.75a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246v1.313q-.027.41-.437.437-.411-.027-.438-.437V12.5a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629zM4.375 7.25V5.938q.027-.411.438-.438.41.027.437.438V7.25q.383 0 .629.246a.85.85 0 0 1 .246.629v3.5a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246v1.313q-.027.41-.437.437-.411-.027-.438-.437V12.5a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629v-3.5q0-.383.246-.629a.85.85 0 0 1 .629-.246' />
    </g>
    <defs>
      <clipPath id='59dd6de80ea8bbff63c6c945e17a63e7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickSmBoldIcon);
export default ForwardRef;
