import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownXlBoldIcon = (
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
      <path d='m7.5 25.969 4.172-4.219h-8.39zm-1.078 2.11-6-6a1.52 1.52 0 0 1-.328-1.642A1.54 1.54 0 0 1 1.5 19.5h12c.61 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64l-6 6c-.562.61-1.547.61-2.11 0' />
    </g>
    <defs>
      <clipPath id='d7256f389ab1f187690ead97ac50dfd1__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownXlBoldIcon);
export default ForwardRef;
