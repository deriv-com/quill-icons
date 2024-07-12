import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 6.875V8h3.75V6.875A1.88 1.88 0 0 0 5.5 5a1.866 1.866 0 0 0-1.875 1.875M2.125 8V6.875c0-1.852 1.5-3.375 3.375-3.375a3.39 3.39 0 0 1 3.375 3.375V8h.375c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V9.5c0-.82.656-1.5 1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='e574a322275fb7c9117c1f9dd24b0d34__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockCaptionFillIcon);
export default ForwardRef;
