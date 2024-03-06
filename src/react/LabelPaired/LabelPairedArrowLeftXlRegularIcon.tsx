import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.234 17.484 8.25-8.25q.516-.468 1.032 0 .468.516 0 1.032L2.578 17.25H20.25q.704.046.75.75-.046.704-.75.75H2.578l6.938 6.984q.468.516 0 1.032-.516.468-1.032 0l-8.25-8.25q-.468-.516 0-1.032' />
    </g>
    <defs>
      <clipPath id='63fe804a301dab4d649eb2416f0362a2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlRegularIcon);
export default ForwardRef;
