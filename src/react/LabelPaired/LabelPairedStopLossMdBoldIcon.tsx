import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.688 16.344q-1.125 0-1.875-.375c-.532-.25-.938-.594-1.313-.969l1.188-1.219c.593.625 1.28.969 2.125.969.437 0 .78-.094.968-.281a.95.95 0 0 0 .344-.75.87.87 0 0 0-.187-.563c-.125-.156-.407-.281-.782-.312l-.843-.125c-.875-.125-1.532-.375-1.938-.813-.406-.406-.625-.969-.625-1.687 0-.375.063-.719.219-1.031.156-.313.344-.563.625-.782.25-.25.593-.406.968-.531a4.5 4.5 0 0 1 1.344-.187c.625 0 1.188.093 1.657.312a3.14 3.14 0 0 1 1.25.875l-1.22 1.219c-.218-.25-.437-.438-.75-.563-.28-.156-.624-.25-1.062-.25-.406 0-.718.094-.906.219-.187.156-.312.344-.312.625s.093.469.25.625c.156.125.406.219.75.25l.843.156c.844.125 1.5.375 1.907.781.437.407.624.97.624 1.688 0 .406-.062.781-.218 1.094-.125.344-.344.625-.625.875q-.422.375-1.031.562a4.7 4.7 0 0 1-1.376.188m4.78-.157V7.813h1.813v6.782h3.188v1.594z' />
    </g>
    <defs>
      <clipPath id='624bab3bc7964169dfcd0f2facd93d33__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossMdBoldIcon);
export default ForwardRef;
