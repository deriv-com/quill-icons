import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 7.5v6.938c.844.421 1.5 1.546 1.5 2.812 0 1.313-.656 2.438-1.5 2.86V27c0 .61-.375 1.172-.937 1.406a1.52 1.52 0 0 1-1.641-.328l-2.063-2.062A12 12 0 0 0 9.375 22.5H9v6c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 3 28.5v-6c-1.687 0-3-1.312-3-3V15c0-1.64 1.313-3 3-3h6.375c3.188 0 6.234-1.266 8.484-3.516l2.063-2.015a1.52 1.52 0 0 1 1.64-.328c.563.234.938.797.938 1.359m-3 3.61C16.734 13.64 13.125 15 9.375 15H9v4.5h.375c3.75 0 7.36 1.406 10.125 3.938V11.11' />
    </g>
    <defs>
      <clipPath id='2ddedd053ae70ab9a8fc776595a0dd42__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornXlFillIcon);
export default ForwardRef;
