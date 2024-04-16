import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.46 8.984 3.75-3.75a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L2.805 8.75H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.805l2.46 2.484a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L.46 10.04a.723.723 0 0 1 0-1.055' />
    </g>
    <defs>
      <clipPath id='4457d100b775041278b3f52415236529__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionFillIcon);
export default ForwardRef;
