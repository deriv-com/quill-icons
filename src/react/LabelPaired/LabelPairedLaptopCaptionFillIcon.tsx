import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 4.25h9c.82 0 1.5.68 1.5 1.5v6H12v-6H3v6H1.5v-6c0-.82.656-1.5 1.5-1.5M.445 12.5h14.086a.47.47 0 0 1 .469.469c0 .984-.82 1.781-1.805 1.781H1.781A1.78 1.78 0 0 1 0 12.969c0-.258.188-.469.445-.469' />
    </g>
    <defs>
      <clipPath id='1658e5ee1427eded365f6b68f313c066__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionFillIcon);
export default ForwardRef;
