import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 6h24.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H1.125Q.095 8.157 0 7.125.095 6.095 1.125 6M1.5 9.75h2.25v10.125q.046.329.375.375h18.75q.329-.046.375-.375V9.75h2.25v10.125q-.046 1.125-.75 1.875-.75.704-1.875.75h-8.25v2.156l3.422 3.422q.656.797 0 1.594-.797.656-1.594 0L13.5 26.719l-2.953 2.953q-.797.656-1.594 0-.655-.797 0-1.594l3.422-3.422V22.5h-8.25Q3 22.454 2.25 21.75q-.703-.75-.75-1.875z' />
    </g>
    <defs>
      <clipPath id='85e8da2b6437db4d52b025ea751bffa0__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlBoldIcon);
export default ForwardRef;
