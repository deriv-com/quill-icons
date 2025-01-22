import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.938v3.718l4.867-3.965c.137-.109.301-.191.492-.191.41 0 .766.355.766.766v8.996c0 .41-.355.738-.766.738a.76.76 0 0 1-.492-.164L1.875 11.87v3.691a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437V5.937a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438m5.25.574L1.902 10.75l5.223 4.266z' />
    </g>
    <defs>
      <clipPath id='326a610ad062aa43e5b6967676508339__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmRegularIcon);
export default ForwardRef;
