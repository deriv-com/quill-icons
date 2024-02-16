import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckMdBoldIcon = (
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
      <path d='M13.781 7.219q.438.531 0 1.062l-8.25 8.25q-.531.438-1.062 0l-4.25-4.25q-.438-.531 0-1.062.531-.438 1.062 0L5 14.938l7.719-7.72q.531-.435 1.062 0' />
    </g>
    <defs>
      <clipPath id='e9bf7f243a894ff36d94d1a69cd6e4fa__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckMdBoldIcon);
export default ForwardRef;
