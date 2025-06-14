import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={36}
    viewBox='0 0 25 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.64 9.703A1.57 1.57 0 0 1 .876 7.97a1.59 1.59 0 0 1 1.688-.328l21 9c.562.234.937.797.937 1.359 0 .61-.375 1.172-.937 1.406l-21 9a1.52 1.52 0 0 1-1.688-.375 1.5 1.5 0 0 1-.234-1.687L4.813 18zm5.485 9.047L2 27l19.219-8.25zm15.094-1.5L2 9l4.125 8.25z' />
    </g>
    <defs>
      <clipPath id='e8d622e78c81b43c5752c5c93fbe7dc7__a'>
        <path d='M0 0h25v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopXlRegularIcon);
export default ForwardRef;
