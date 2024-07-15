import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownXlFillIcon = (
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
      <path d='m6.422 23.578-6-6a1.52 1.52 0 0 1-.328-1.64A1.54 1.54 0 0 1 1.5 15h12c.61 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64l-6 6c-.562.61-1.547.61-2.11 0' />
    </g>
    <defs>
      <clipPath id='cf7a3a98532c10aa345b8652b6fad2a6__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownXlFillIcon);
export default ForwardRef;
