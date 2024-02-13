import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 6.438q.078-.86.938-.938h4.375q.858.078.937.938-.079.859-.937.937h-1.25v1.914q2.577.352 4.453 1.992l1.132-1.133q.664-.546 1.329 0 .546.664 0 1.329l-1.211 1.21q1.445 2.032 1.484 4.688-.078 3.438-2.383 5.742Q12.438 25.422 9 25.5q-3.438-.078-5.742-2.383Q.954 20.813.875 17.375q.078-3.203 2.07-5.43Q4.976 9.718 8.063 9.29V7.375h-1.25q-.86-.078-.938-.937M9 23.625q1.68 0 3.125-.82A6.5 6.5 0 0 0 14.43 20.5q.82-1.484.82-3.125a6.37 6.37 0 0 0-.82-3.125 6.5 6.5 0 0 0-2.305-2.305A6.2 6.2 0 0 0 9 11.125q-1.68 0-3.125.82A6.5 6.5 0 0 0 3.57 14.25a6.37 6.37 0 0 0-.82 3.125q0 1.64.82 3.125a6.5 6.5 0 0 0 2.305 2.305q1.446.82 3.125.82m.938-9.687V18q-.079.859-.938.938-.86-.079-.937-.938v-4.062Q8.14 13.078 9 13q.859.078.938.938' />
    </g>
    <defs>
      <clipPath id='494becc3657534171b0578130a4d19a3__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchLgBoldIcon);
export default ForwardRef;
