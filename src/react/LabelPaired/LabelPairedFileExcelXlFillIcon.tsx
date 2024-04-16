import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zM7.266 17.766a1.076 1.076 0 0 0-1.547-.282 1.076 1.076 0 0 0-.282 1.547l2.157 3.094-2.157 3.14c-.375.47-.234 1.172.282 1.547a1.076 1.076 0 0 0 1.547-.28L9 24.093l1.688 2.437c.374.516 1.03.657 1.546.282s.657-1.032.282-1.547l-2.157-3.141 2.157-3.094a1.076 1.076 0 0 0-.282-1.547 1.076 1.076 0 0 0-1.546.282L9 20.203z' />
    </g>
    <defs>
      <clipPath id='f5a0d446d7495163d6c3005a8e612447__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelXlFillIcon);
export default ForwardRef;
