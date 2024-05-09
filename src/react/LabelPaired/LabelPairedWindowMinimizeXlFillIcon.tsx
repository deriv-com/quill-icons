import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMinimizeXlFillIcon = (
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
      <path d='M1.5 25.5h21c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-21A1.48 1.48 0 0 1 0 27c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='2fe259b44f69d47f90d6e0ffa4691d82__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeXlFillIcon);
export default ForwardRef;
