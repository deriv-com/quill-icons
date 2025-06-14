import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m3.219 19.531-3-3c-.313-.281-.313-.75 0-1.062l3-2.969a.684.684 0 0 1 1.031 0 .684.684 0 0 1 0 1.031L2.531 15.25H13.25A.76.76 0 0 1 14 16a.74.74 0 0 1-.75.75l-10.719.031L4.25 18.5a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0m10.562-11-3 3c-.312.313-.781.313-1.062 0-.313-.281-.313-.75 0-1.062l1.719-1.719H.75A.72.72 0 0 1 0 8a.74.74 0 0 1 .75-.75h10.688l-1.72-1.719c-.312-.281-.312-.75 0-1.062.282-.282.75-.282 1.063 0l3 3.031a.736.736 0 0 1 0 1.031' />
    </g>
    <defs>
      <clipPath id='296cd6c82ba32681cf3c65a795c51a65__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdBoldIcon);
export default ForwardRef;
