import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.695 10.383c.47 1.64.47 5.156.47 5.156s0 3.477-.47 5.156a2.6 2.6 0 0 1-1.875 1.875c-1.68.43-8.32.43-8.32.43s-6.68 0-8.36-.43a2.6 2.6 0 0 1-1.874-1.875c-.47-1.68-.47-5.156-.47-5.156s0-3.516.47-5.156A2.66 2.66 0 0 1 3.14 8.469C4.82 8 11.5 8 11.5 8s6.64 0 8.32.469c.899.234 1.64.976 1.875 1.914m-12.382 8.32 5.546-3.164-5.546-3.164z' />
    </g>
    <defs>
      <clipPath id='ea62a95a17a1fe3b3d55693b49f877cf__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeLgIcon);
export default ForwardRef;
