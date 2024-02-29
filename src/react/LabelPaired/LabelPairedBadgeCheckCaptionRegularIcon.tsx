import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckCaptionRegularIcon = (
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
      <path d='M4.477 5.164v.024a.386.386 0 0 1-.446.164q-.96-.258-1.734.445-.703.774-.445 1.734.07.282-.188.446Q.797 8.445.75 9.5q.047 1.055.938 1.547.234.14.164.422-.258.96.445 1.734.773.703 1.734.445.282-.07.446.188.468.867 1.523.914 1.055-.047 1.547-.937.14-.235.422-.165.96.258 1.734-.445.703-.773.445-1.734-.07-.282.188-.446.867-.468.914-1.523-.047-1.054-.937-1.523a.386.386 0 0 1-.165-.446q.258-.96-.445-1.734-.773-.703-1.734-.445-.282.07-.446-.188Q7.055 4.297 6 4.25q-1.054.047-1.523.914M6 3.5q1.313.046 2.04 1.078 1.241-.21 2.202.68.89.96.68 2.203Q11.953 8.187 12 9.5q-.046 1.313-1.078 2.04.21 1.241-.68 2.202-.96.89-2.203.68Q7.313 15.453 6 15.5q-1.312-.046-2.04-1.078-1.241.21-2.202-.68-.89-.96-.68-2.203Q.047 10.813 0 9.5q.046-1.312 1.078-2.04-.21-1.241.68-2.202.96-.89 2.203-.68Q4.687 3.547 6 3.5m2.508 4.758-3 3q-.258.234-.516 0l-1.5-1.5q-.234-.258 0-.516.258-.234.516 0l1.242 1.219 2.742-2.719q.258-.234.516 0 .234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='14833a33f8f59e0c5672ed5efeb1ed6b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckCaptionRegularIcon);
export default ForwardRef;
