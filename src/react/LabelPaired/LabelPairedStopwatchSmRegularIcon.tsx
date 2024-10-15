import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.875 4.188a.45.45 0 0 1 .438-.438h4.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.75v1.777c1.34.11 2.57.684 3.472 1.559l1.012-1.012a.463.463 0 0 1 .629 0c.164.164.164.438 0 .63l-1.04 1.038a5.64 5.64 0 0 1 1.177 3.445c0 3.145-2.57 5.688-5.688 5.688a5.683 5.683 0 0 1-5.687-5.687 5.67 5.67 0 0 1 5.25-5.66V4.624h-1.75a.43.43 0 0 1-.438-.437m-2.187 7.875c0 1.722.902 3.308 2.406 4.183a4.87 4.87 0 0 0 4.812 0 4.88 4.88 0 0 0 2.406-4.183c0-1.696-.93-3.282-2.406-4.157a4.87 4.87 0 0 0-4.812 0 4.81 4.81 0 0 0-2.407 4.157m5.25-2.626V12.5a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438V9.438A.45.45 0 0 1 6.5 9a.47.47 0 0 1 .438.438' />
    </g>
    <defs>
      <clipPath id='d9646a3b11a43042d9f38449a1c1345b__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchSmRegularIcon);
export default ForwardRef;
