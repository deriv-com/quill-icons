import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 9v4.5c0 .844-.703 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 13.5c0-.797.656-1.5 1.5-1.5h3V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m-6 12H6c.797 0 1.5.703 1.5 1.5V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 4.5 27v-3h-3A1.48 1.48 0 0 1 0 22.5c0-.797.656-1.5 1.5-1.5m15-12v3h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H15a1.48 1.48 0 0 1-1.5-1.5V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M15 21h4.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-4.5c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='28d330aab5629ac15f6614bc933b0c57__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlFillIcon);
export default ForwardRef;
