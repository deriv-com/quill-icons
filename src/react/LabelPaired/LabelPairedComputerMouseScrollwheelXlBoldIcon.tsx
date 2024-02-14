import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 22.5v-9q-.047-2.25-1.547-3.703-1.453-1.5-3.703-1.547h-3q-2.25.047-3.703 1.547-1.5 1.453-1.547 3.703v9q.047 2.25 1.547 3.703 1.453 1.5 3.703 1.547h3q2.25-.047 3.703-1.547 1.5-1.453 1.547-3.703M0 13.5q.094-3.187 2.203-5.297T7.5 6h3q3.187.094 5.297 2.203T18 13.5v9q-.094 3.187-2.203 5.297T10.5 30h-3q-3.187-.094-5.297-2.203T0 22.5zm9-3q.657 0 1.078.422.422.421.422 1.078v1.5q0 .657-.422 1.078Q9.657 15 9 15q-.656 0-1.078-.422Q7.5 14.157 7.5 13.5V12q0-.656.422-1.078Q8.343 10.5 9 10.5' />
    </g>
    <defs>
      <clipPath id='577517895131f6d5de34b10c8a48268c__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlBoldIcon);
export default ForwardRef;
