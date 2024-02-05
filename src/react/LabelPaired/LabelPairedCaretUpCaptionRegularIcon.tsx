import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.86 7.297 1.046 9.969a.16.16 0 0 0-.047.117q.024.14.164.164h5.672A.18.18 0 0 0 7 10.086a.16.16 0 0 0-.047-.117L4.141 7.297A.25.25 0 0 0 4 7.25a.25.25 0 0 0-.14.047m-.516-.54A.94.94 0 0 1 4 6.5a.94.94 0 0 1 .656.258L7.47 9.43q.28.258.281.656a.9.9 0 0 1-.258.656.9.9 0 0 1-.656.258H1.164a.9.9 0 0 1-.656-.258.9.9 0 0 1-.258-.656q0-.398.281-.68z' />
    </g>
    <defs>
      <clipPath id='b93ab63639f7ceb53b16d9b605d377cb__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionRegularIcon);
export default ForwardRef;
