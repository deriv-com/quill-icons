import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZLgBoldIcon = (
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
      <path d='M2.086 20.227q-.547-.665 0-1.329.664-.546 1.328 0l2.149 2.149V7.687q.078-.859.937-.937.859.078.938.938v13.359l2.148-2.149q.664-.546 1.328 0 .548.665 0 1.329l-3.75 3.75q-.664.546-1.328 0zM14 16.75h5q.585.039.86.547.195.547-.157 1.015l-3.633 4.063H19q.859.078.938.938-.079.858-.938.937h-5a.99.99 0 0 1-.86-.547 1.02 1.02 0 0 1 .157-1.015l3.633-4.063H14q-.86-.078-.937-.937.078-.86.937-.938m2.5-10q.586.039.82.508l3.125 6.25q.313.82-.39 1.25-.82.312-1.25-.39l-.547-1.056h-3.515l-.548 1.055q-.43.703-1.25.43-.703-.469-.39-1.29l3.125-6.25q.273-.507.82-.507m-.82 4.688h1.64l-.82-1.641z' />
    </g>
    <defs>
      <clipPath id='f6ed160d4346f04683a8afda2d23f0bf__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZLgBoldIcon);
export default ForwardRef;
