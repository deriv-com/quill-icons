import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6q0-.437.281-.719A.97.97 0 0 1 3 5q.438 0 .719.281A.97.97 0 0 1 4 6a.97.97 0 0 1-.281.719A.97.97 0 0 1 3 7a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2 6M.5 9.5q.031-.469.5-.5h2q.47.031.5.5V18h2q.47.031.5.5-.03.47-.5.5h-5q-.469-.03-.5-.5.031-.469.5-.5h2v-8H1q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='ec8cb496b6809305a83c25b4891504bb__a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdRegularIcon);
export default ForwardRef;
