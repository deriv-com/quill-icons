import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={30}
    viewBox='0 0 8 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.438 8.313q.039-.9.78-1.368a1.66 1.66 0 0 1 1.563 0q.742.47.782 1.367-.04.9-.782 1.368a1.66 1.66 0 0 1-1.562 0q-.742-.47-.781-1.367m-1.563 5q.078-.86.938-.938H4q.859.078.938.938v10.312h1.875q.859.078.937.938-.078.858-.937.937H1.188q-.86-.079-.938-.937.078-.86.938-.938h1.875V14.25h-1.25q-.86-.079-.938-.937' />
    </g>
    <defs>
      <clipPath id='06ed72b034cd4c9f9aa1c39a58fdf158__a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgBoldIcon);
export default ForwardRef;
