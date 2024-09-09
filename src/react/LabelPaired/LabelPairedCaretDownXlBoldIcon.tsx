import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.5 21.469 4.172-4.219h-8.39zm1.031 2.11c-.562.608-1.547.608-2.11 0l-6-6a1.52 1.52 0 0 1-.327-1.642A1.54 1.54 0 0 1 1.5 15h12c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64z' />
    </g>
    <defs>
      <clipPath id='1214323c9e7bf25a69c9522c68e4ffd9__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlBoldIcon);
export default ForwardRef;
