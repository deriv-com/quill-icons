import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6c0-1.094.875-2 2-2h5v4c0 .563.438 1 1 1h4v1.469l-2.906 1.187c-.688.25-1.094.906-1.094 1.625 0 1.75.563 4.625 2.938 6.5-.282.157-.626.219-.938.219H2c-1.125 0-2-.875-2-2zm12 2H8V4zm1.219 3.063a.78.78 0 0 1 .531 0l3.75 1.5c.313.124.5.406.5.687 0 2-.812 5.281-4.219 6.719a.97.97 0 0 1-.594 0C9.782 18.53 9 15.25 9 13.25a.78.78 0 0 1 .469-.687zm3.25 2.687L13.5 12.563v5.874c2.125-1.03 2.844-3.093 2.969-4.687' />
    </g>
    <defs>
      <clipPath id='db6b8a112c1bcca1fcc1258141660f21__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldMdFillIcon);
export default ForwardRef;
