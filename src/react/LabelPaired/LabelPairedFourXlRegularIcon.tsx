import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourXlRegularIcon = (
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
      <path d='M8.156 8.578 1.97 21H13.5v-8.25q.047-.703.75-.75.703.047.75.75V21h2.25q.704.046.75.75-.046.704-.75.75H15v5.25q-.047.704-.75.75-.703-.046-.75-.75V22.5H.75a.76.76 0 0 1-.656-.328.8.8 0 0 1 0-.75l6.75-13.5q.328-.61.984-.328.61.375.328.984' />
    </g>
    <defs>
      <clipPath id='9b5148d4444e39c4b8feb15602a04ff2__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlRegularIcon);
export default ForwardRef;
