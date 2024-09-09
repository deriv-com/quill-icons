import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 6h21c1.64 0 3 1.36 3 3v13.5c0 1.688-1.36 3-3 3h-8.25l.469 1.5H19.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 6 28.5c0-.797.656-1.5 1.5-1.5h3.234l.516-1.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m21 3H3v10.5h21z' />
    </g>
    <defs>
      <clipPath id='bf026b58cc611a38694cbb592179b11a__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopXlFillIcon);
export default ForwardRef;
