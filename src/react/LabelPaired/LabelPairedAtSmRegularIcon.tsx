import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4.625q-1.722.026-3.09.848A5.73 5.73 0 0 0 1.723 7.66q-.82 1.368-.848 3.09.027 1.722.848 3.09a5.73 5.73 0 0 0 2.187 2.187q1.368.82 3.09.848.41.027.438.438-.029.41-.438.437-1.968-.027-3.527-.957a6.94 6.94 0 0 1-2.516-2.516Q.027 12.72 0 10.75q.027-1.968.957-3.527a6.94 6.94 0 0 1 2.516-2.516Q5.032 3.777 7 3.75q1.969.027 3.527.957a6.94 6.94 0 0 1 2.516 2.516q.93 1.559.957 3.527v.656q-.027 1.012-.71 1.696-.685.683-1.696.71-.684 0-1.258-.355a2.25 2.25 0 0 1-.848-.902Q8.587 13.758 7 13.813q-1.312-.029-2.16-.903-.875-.848-.902-2.16.027-1.312.902-2.16.848-.875 2.16-.902 1.312.027 2.188.93v-.056q.027-.41.437-.437.41.027.438.438v2.843q.027.657.437 1.094.438.41 1.094.438.656-.028 1.094-.438.41-.437.437-1.094v-.656q-.027-1.722-.848-3.09a5.73 5.73 0 0 0-2.187-2.187Q8.722 4.653 7 4.625m2.188 6.125Q9.16 9.52 8.094 8.863q-1.095-.6-2.188 0-1.065.657-1.093 1.887.027 1.23 1.093 1.887 1.095.6 2.188 0 1.065-.657 1.094-1.887' />
    </g>
    <defs>
      <clipPath id='0a24cfef050e7cd7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtSmRegularIcon);
export default ForwardRef;
