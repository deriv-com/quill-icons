import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5h3C5.313 5 6 5.688 6 6.5v5A1.5 1.5 0 0 1 4.5 13h-3A1.48 1.48 0 0 1 0 11.5v-5A1.5 1.5 0 0 1 1.5 5m8 6h3c.813 0 1.5.688 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 17.5v-5A1.5 1.5 0 0 1 9.5 11M0 16.5A1.5 1.5 0 0 1 1.5 15h3c.813 0 1.5.688 1.5 1.5v1A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5zM9.5 5h3c.813 0 1.5.688 1.5 1.5v1A1.5 1.5 0 0 1 12.5 9h-3A1.48 1.48 0 0 1 8 7.5v-1A1.5 1.5 0 0 1 9.5 5' />
    </g>
    <defs>
      <clipPath id='ae38cde657f776786f0f803f84ecac77__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnMdFillIcon);
export default ForwardRef;
