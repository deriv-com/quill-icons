import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenXlFillIcon = (
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
      <path d='M0 9c0-.797.656-1.5 1.5-1.5h12c.516 0 1.031.328 1.266.797a1.44 1.44 0 0 1 0 1.5l-10.5 18c-.422.703-1.313.937-2.063.515-.703-.421-.937-1.312-.515-2.062l9.187-15.75H1.5A1.48 1.48 0 0 1 0 9' />
    </g>
    <defs>
      <clipPath id='b4d5d1ab5d7658ebe67c9d5e33209c2e__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenXlFillIcon);
export default ForwardRef;
