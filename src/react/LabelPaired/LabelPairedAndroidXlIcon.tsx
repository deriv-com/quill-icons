import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.734 20.156q.985-.093 1.125-1.125-.14-1.03-1.125-1.125-1.03.094-1.125 1.125.095 1.032 1.125 1.125m-12.468 0q1.03-.093 1.125-1.125-.095-1.03-1.125-1.125Q6.28 18 6.14 19.031q.14 1.032 1.125 1.125m12.843-6.797q2.954 1.641 4.735 4.407Q26.67 20.484 27 24H0q.329-3.516 2.156-6.234Q3.938 15 6.891 13.359L4.64 9.47A.5.5 0 0 1 4.594 9a.46.46 0 0 1 .422-.234.46.46 0 0 1 .422.234l2.296 3.984A13.7 13.7 0 0 1 13.5 11.72q3 0 5.766 1.265L21.563 9a.46.46 0 0 1 .421-.234.46.46 0 0 1 .422.234.5.5 0 0 1-.047.469z' />
    </g>
    <defs>
      <clipPath id='88b753675c3c6365627dd72ab8f71918__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidXlIcon);
export default ForwardRef;
