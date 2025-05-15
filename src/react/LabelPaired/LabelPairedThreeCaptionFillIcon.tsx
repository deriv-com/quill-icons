import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5c0-.398.328-.75.75-.75h5.625c.305 0 .586.21.68.492a.73.73 0 0 1-.188.82l-3.07 2.813h.516a3.19 3.19 0 0 1 3.187 3.188 3.176 3.176 0 0 1-3.187 3.187H2.71a2.65 2.65 0 0 1-2.344-1.43l-.047-.093a.743.743 0 0 1 .328-1.008.743.743 0 0 1 1.008.328l.047.094c.188.375.586.609 1.008.609h1.852c.914 0 1.687-.75 1.687-1.687 0-.915-.773-1.688-1.687-1.688H2.125a.74.74 0 0 1-.703-.469.73.73 0 0 1 .187-.82L4.68 5.75H1A.74.74 0 0 1 .25 5' />
    </g>
    <defs>
      <clipPath id='126e280e52c181d4cfd4ddf40b7a25d9__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionFillIcon);
export default ForwardRef;
