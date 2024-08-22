import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtSmFillIcon = (
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
      <path d='M7 5.5a5.25 5.25 0 0 0-5.25 5.25A5.25 5.25 0 0 0 7 16a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875-3.883 0-7-3.117-7-7 0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7v.875a2.626 2.626 0 0 1-2.625 2.625c-.82 0-1.531-.355-2.023-.902-.602.574-1.45.902-2.352.902a3.49 3.49 0 0 1-3.5-3.5c0-1.914 1.559-3.5 3.5-3.5.738 0 1.45.246 2.023.684.165-.137.356-.247.602-.247a.9.9 0 0 1 .875.875v3.063c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875v-.875A5.25 5.25 0 0 0 7 5.5m1.75 5.25c0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531' />
    </g>
    <defs>
      <clipPath id='e7c691fc162c924ca4fdb35b61a3dcc3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtSmFillIcon);
export default ForwardRef;
