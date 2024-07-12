import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineXlFillIcon = (
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
      <path d='M21 10.5v15c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-15c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m-6.469 8.578-6 6c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L9.845 19.5H1.5A1.48 1.48 0 0 1 0 18c0-.797.656-1.5 1.5-1.5h8.344l-3.422-3.422a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l6 6c.609.563.609 1.548 0 2.11' />
    </g>
    <defs>
      <clipPath id='6dcfcc24039e279d561f0df2d0c1c686__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlFillIcon);
export default ForwardRef;
