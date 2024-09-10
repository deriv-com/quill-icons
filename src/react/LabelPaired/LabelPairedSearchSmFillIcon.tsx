import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchSmFillIcon = (
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
      <path d='M11.375 9.438c0 1.257-.41 2.433-1.094 3.363l3.446 3.472a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-3.474-3.472c-.93.711-2.105 1.094-3.335 1.094A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688m-5.687 3.937c1.394 0 2.68-.738 3.39-1.969a3.9 3.9 0 0 0 0-3.937C8.368 6.266 7.082 5.5 5.688 5.5A3.97 3.97 0 0 0 2.27 7.469a3.9 3.9 0 0 0 0 3.937 3.92 3.92 0 0 0 3.418 1.969' />
    </g>
    <defs>
      <clipPath id='079c35547cb65a55d0962e33cdb14ca7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmFillIcon);
export default ForwardRef;
