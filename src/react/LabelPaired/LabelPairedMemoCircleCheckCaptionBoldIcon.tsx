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
      <path d='M1.75 4.625A.385.385 0 0 0 1.375 5v9c0 .21.164.375.375.375h5.156q.423.668 1.055 1.125H1.75A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v3.164a3.5 3.5 0 0 0-1.125.516V5a.4.4 0 0 0-.375-.375zM3.063 6.5h3.375A.57.57 0 0 1 7 7.063a.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m0 2.25h3.375A.57.57 0 0 1 7 9.313a.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m0 2.25h1.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m10.687 1.125c0 1.219-.656 2.32-1.687 2.93a3.34 3.34 0 0 1-3.376 0A3.36 3.36 0 0 1 7 12.125c0-1.195.633-2.297 1.688-2.906a3.34 3.34 0 0 1 3.374 0c1.032.61 1.688 1.71 1.688 2.906m-1.805-1.008a.397.397 0 0 0-.539 0L10 12.547l-.68-.68a.397.397 0 0 0-.539 0 .397.397 0 0 0 0 .54l.938.937c.14.14.398.14.539 0l1.687-1.688a.397.397 0 0 0 0-.539' />
    </g>
    <defs>
      <clipPath id='ae3669e2ee58f9c3f05549cd89a832fd__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckCaptionBoldIcon);
export default ForwardRef;
