import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftXlBoldIcon = (
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
      <path d='M2.625 10.5v.047h11.25c.61 0 1.125.469 1.125 1.125a1.14 1.14 0 0 1-1.125 1.125H5.297l10.828 10.828a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0L3.75 14.344v8.531A1.11 1.11 0 0 1 2.625 24c-.656 0-1.125-.469-1.125-1.125v-11.25c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='ebe7c7b4335f0dfa6baff69d1566c6e2__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlBoldIcon);
export default ForwardRef;
