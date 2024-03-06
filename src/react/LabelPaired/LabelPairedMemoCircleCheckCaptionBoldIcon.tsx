import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 4.625q-.352.023-.375.375v9q.023.352.375.375h5.156q.446.657 1.078 1.102a1.2 1.2 0 0 1-.234.023h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h6q.633.024 1.055.445.421.423.445 1.055v3.164q-.609.164-1.125.516V5q-.023-.352-.375-.375zM3.063 6.5h3.375q.514.047.562.563-.047.514-.562.562H3.063q-.516-.047-.563-.562.047-.516.563-.563m0 2.25h3.375q.514.047.562.563-.047.514-.562.562H3.063q-.516-.047-.563-.562.047-.516.563-.563m0 2.25h1.124q.516.047.563.563-.047.514-.562.562H3.063q-.516-.047-.563-.562.047-.516.563-.563m10.687 1.125q0 .915-.445 1.688t-1.242 1.242a3.4 3.4 0 0 1-1.688.445 3.4 3.4 0 0 1-1.687-.445 3.4 3.4 0 0 1-1.243-1.242A3.3 3.3 0 0 1 7 12.125q0-.915.445-1.687.446-.774 1.242-1.243a3.4 3.4 0 0 1 1.688-.445q.89 0 1.688.445.796.47 1.242 1.242.445.774.445 1.688m-1.805-1.008q-.258-.234-.515 0L10 12.523l-.68-.656q-.258-.234-.515 0-.236.258 0 .516l.937.937q.258.236.516 0l1.687-1.687q.236-.258 0-.516' />
    </g>
    <defs>
      <clipPath id='9c30398cd1bf86c3cf04e1cacb891af6__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckCaptionBoldIcon);
export default ForwardRef;
