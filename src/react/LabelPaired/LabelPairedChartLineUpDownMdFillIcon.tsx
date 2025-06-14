import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6v10.5c0 .281.219.5.5.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5A2.47 2.47 0 0 1 0 16.5V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m9.781 1.813-.594-.594a.7.7 0 0 1-.187-.5c0-.375.313-.719.688-.719H14.5c.25 0 .5.25.5.5v2.813c0 .374-.344.687-.719.687a.7.7 0 0 1-.5-.187l-.594-.594-3.5 3.5a.964.964 0 0 1-1.406 0L6.5 10.938l-1.812 1.78a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l2.5-2.5a.964.964 0 0 1 1.407 0L9 10.593zm2 4.406a.74.74 0 0 1 .5-.219c.406 0 .719.344.719.719V15.5c0 .281-.25.5-.5.5h-2.812a.694.694 0 0 1-.688-.687.7.7 0 0 1 .188-.5l.593-.594-1.094-1.094 1.438-1.406 1.063 1.094z' />
    </g>
    <defs>
      <clipPath id='420b9cc4277540e3fb184ab75e00b604__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdFillIcon);
export default ForwardRef;
