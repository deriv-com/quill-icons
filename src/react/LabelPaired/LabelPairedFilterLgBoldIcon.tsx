import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.39c0-.898.703-1.64 1.602-1.64h16.757c.899 0 1.641.742 1.641 1.64 0 .391-.156.743-.39 1.016l-6.485 8.008V23c0 .703-.586 1.25-1.29 1.25-.273 0-.546-.078-.78-.273L7.46 21.125a1.52 1.52 0 0 1-.586-1.21v-2.5L.352 9.405C.117 9.133 0 8.781 0 8.391m2.148.235 6.368 7.852q.234.293.234.585v2.696l2.5 1.992v-4.687c0-.196.04-.391.195-.586l6.407-7.852z' />
    </g>
    <defs>
      <clipPath id='40b2e0dfb95b7725e05ddf9901681364__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterLgBoldIcon);
export default ForwardRef;
