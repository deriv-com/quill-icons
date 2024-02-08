import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineMdBoldIcon = (
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
      <path d='M.75 5h10.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75.063 5.063.75 5m5.813 4.25H6.53l4 4.25q.438.531-.031 1.031-.531.438-1.031-.031L6.75 11.656v6.594q-.063.687-.75.75-.687-.063-.75-.75v-6.594l-2.719 2.875q-.5.438-1.031.031-.468-.531-.031-1.062l4-4.25A.68.68 0 0 1 6 9q.312 0 .563.25' />
    </g>
    <defs>
      <clipPath id='ee107977da9180854a24accb87e9c54a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdBoldIcon);
export default ForwardRef;
