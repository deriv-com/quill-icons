import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 13.25c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375V8.375h-9.75zm6.75-6h1.5l1.5-1.5a.4.4 0 0 0-.375-.375h-.75zm-2.25 0L7.5 5.375H6L4.125 7.25zm-3.75 0L3.75 5.375h-1.5L1.125 6.5v.75zM12 5.75v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5M5.063 9.172c.117-.047.28-.047.375.023l2.25 1.5c.117.07.187.188.187.305 0 .14-.07.258-.187.328l-2.25 1.5c-.094.07-.258.07-.375.024a.41.41 0 0 1-.188-.352v-3c0-.117.07-.258.188-.328' />
    </g>
    <defs>
      <clipPath id='79b2d54c8fed07de0054a063fadc347a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayCaptionBoldIcon);
export default ForwardRef;
