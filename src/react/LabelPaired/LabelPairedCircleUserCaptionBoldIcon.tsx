import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.54 12.875q1.288-1.359 1.335-3.375-.047-2.062-1.43-3.445T6 4.625q-2.062.047-3.445 1.43T1.125 9.5q.046 2.016 1.36 3.375a2.9 2.9 0 0 1 1.078-1.36q.726-.492 1.687-.515h1.5q.96.024 1.688.516.75.515 1.101 1.359m-.962.75h.024a2.03 2.03 0 0 0-.657-1.078q-.492-.399-1.195-.422h-1.5q-.703.024-1.195.422-.493.421-.633 1.078 1.126.726 2.578.75 1.453-.024 2.578-.75M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m0-6.375a.97.97 0 0 0 .82-.469 1 1 0 0 0 0-.937A.97.97 0 0 0 6 7.25a.97.97 0 0 0-.82.469 1 1 0 0 0 0 .937q.28.445.82.469m-2.062-.937q.045-1.173 1.03-1.782 1.032-.562 2.063 0 .985.61 1.032 1.782-.048 1.17-1.032 1.78-1.031.564-2.062 0-.985-.609-1.032-1.78' />
    </g>
    <defs>
      <clipPath id='7a69f1190d8aefcd12ec867b715e7478__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserCaptionBoldIcon);
export default ForwardRef;
