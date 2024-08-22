import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankXlFillIcon = (
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
      <path d='M26.953 18c0 .844-.703 1.5-1.5 1.5h-1.5L24 27c0 1.688-1.312 3.047-3 3.047H6c-1.687 0-3-1.36-3-3V19.5H1.5A1.48 1.48 0 0 1 0 18c0-.422.14-.797.469-1.125l12-10.5C12.797 6.047 13.172 6 13.5 6s.703.094.984.328l11.954 10.547c.375.328.562.703.515 1.125' />
    </g>
    <defs>
      <clipPath id='e89c6fb2025dfce8b07f3002a2119744__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlFillIcon);
export default ForwardRef;
