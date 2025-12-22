import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.094 5.719A1.29 1.29 0 0 1 1.25 5h13.5c.469 0 .906.281 1.125.719.188.437.125.968-.187 1.343L10 14.032V18c0 .406-.219.75-.562.906s-.75.125-1.063-.093l-2-1.5c-.25-.188-.375-.47-.375-.813v-2.469L.281 7.062A1.31 1.31 0 0 1 .094 5.72' />
    </g>
    <defs>
      <clipPath id='e79490d40f111009790df32052d7d094__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterMdFillIcon);
export default ForwardRef;
