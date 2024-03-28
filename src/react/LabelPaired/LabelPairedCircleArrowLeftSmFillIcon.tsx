import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75M6.316 7.223l-3.062 3.09a.6.6 0 0 0 0 .902l3.062 3.062a.6.6 0 0 0 .903 0c.273-.246.273-.656 0-.93l-1.942-1.94h5.004a.65.65 0 0 0 .656-.657c0-.355-.3-.656-.656-.656H5.277L7.22 8.152c.273-.246.273-.656 0-.93a.644.644 0 0 0-.903 0' />
    </g>
    <defs>
      <clipPath id='f077a24540a93876f69670154d3022dc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftSmFillIcon);
export default ForwardRef;
