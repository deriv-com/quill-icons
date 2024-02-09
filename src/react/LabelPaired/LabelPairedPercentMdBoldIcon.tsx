import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.531 7.531-10 10q-.531.438-1.062 0-.438-.531 0-1.062l10-10q.531-.438 1.062 0 .438.531 0 1.062M3.5 8q-.03.844-.75 1.313-.75.375-1.5 0Q.53 8.844.5 8q.03-.843.75-1.312.75-.375 1.5 0 .72.468.75 1.312m8 8q-.03.844-.75 1.313-.75.375-1.5 0-.72-.469-.75-1.313.03-.844.75-1.312.75-.375 1.5 0 .72.469.75 1.312' />
    </g>
    <defs>
      <clipPath id='8329bfdc0f5fc5e4886cf08b78243d9e__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentMdBoldIcon);
export default ForwardRef;
