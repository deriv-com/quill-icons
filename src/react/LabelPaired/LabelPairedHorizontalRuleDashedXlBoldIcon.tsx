import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3C.469 19.125 0 18.656 0 18m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='fbfb40311abb5644a6b1be06dc4e77f2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedXlBoldIcon);
export default ForwardRef;
