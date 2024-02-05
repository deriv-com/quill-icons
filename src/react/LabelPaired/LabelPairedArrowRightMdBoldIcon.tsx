import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightMdBoldIcon = (
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
      <path d='m13.781 12.531-5.5 5.25q-.562.438-1.062 0-.438-.562 0-1.062l4.156-3.969H.75Q.063 12.687 0 12q.063-.687.75-.75h10.625L7.25 7.281q-.469-.5-.031-1.062.5-.438 1.062 0l5.5 5.25A.72.72 0 0 1 14 12a.72.72 0 0 1-.219.531' />
    </g>
    <defs>
      <clipPath id='d4424efde6ba29b33a2a7c6541dcd400__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdBoldIcon);
export default ForwardRef;
