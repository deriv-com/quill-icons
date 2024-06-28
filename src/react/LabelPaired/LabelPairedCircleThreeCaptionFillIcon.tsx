import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-1.687-9a.555.555 0 0 0-.563.563c0 .328.234.562.563.562h1.546L4.664 8.727a.54.54 0 0 0-.14.609c.093.21.304.351.539.351h1.195a.84.84 0 0 1 .844.844.84.84 0 0 1-.844.844h-.656a.91.91 0 0 1-.774-.422l-.047-.094c-.164-.257-.515-.351-.773-.187s-.352.515-.188.773l.07.094c.352.61 1.008.961 1.735.961h.633a1.97 1.97 0 0 0 1.992-1.969 1.96 1.96 0 0 0-1.758-1.945l1.196-1.102c.164-.164.234-.398.14-.609S7.523 6.5 7.312 6.5z' />
    </g>
    <defs>
      <clipPath id='03faf3de70bd4f2a65f4654dd21a07ca__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeCaptionFillIcon);
export default ForwardRef;
