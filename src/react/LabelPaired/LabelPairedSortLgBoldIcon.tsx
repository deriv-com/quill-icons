import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.984 12.375h6.993L6.5 8.898zM7.36 7.141l5 5c.352.351.47.898.274 1.367a1.28 1.28 0 0 1-1.172.781H1.5a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l5-5a1.205 1.205 0 0 1 1.757 0M2.984 18.625 6.5 22.141l3.477-3.516zm4.375 5.273a1.205 1.205 0 0 1-1.757 0l-5-5a1.26 1.26 0 0 1-.274-1.367A1.28 1.28 0 0 1 1.5 16.75h10c.469 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367z' />
    </g>
    <defs>
      <clipPath id='d7a76eb761ea754c7813fec6129d6ad8__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortLgBoldIcon);
export default ForwardRef;
