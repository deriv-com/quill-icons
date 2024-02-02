import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8.625v5.313l6.992-5.704A.99.99 0 0 1 10.406 8q.47 0 .781.313.313.312.313.78v12.813q0 .469-.312.782a1.06 1.06 0 0 1-.782.312.99.99 0 0 1-.664-.234L2.75 17.063v5.312q-.039.585-.625.625-.585-.039-.625-.625V8.625q.039-.585.625-.625.586.039.625.625m7.5.82L2.79 15.5l7.46 6.055z' />
    </g>
    <defs>
      <clipPath id='41ec518b6aeebac5__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgRegularIcon);
export default ForwardRef;
