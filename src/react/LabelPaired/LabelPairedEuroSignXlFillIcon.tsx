import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 17.25H1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.313c1.359-3.89 5.156-6.75 9.562-6.75H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.125a7.15 7.15 0 0 0-6.281 3.75H12c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H5.25v1.5H12c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H6.094C7.266 24 9.656 25.5 12.375 25.5H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.125c-4.406 0-8.203-2.812-9.562-6.75H1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h.75v-1.5' />
    </g>
    <defs>
      <clipPath id='b1db523788b9202087d23d253b5791c3__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlFillIcon);
export default ForwardRef;
