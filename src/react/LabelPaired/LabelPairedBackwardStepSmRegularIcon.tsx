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
      <path d='M1.875 5.938v3.718L6.77 5.664a.7.7 0 0 1 .464-.164q.329 0 .547.219A.74.74 0 0 1 8 6.266v8.968a.74.74 0 0 1-.219.547.74.74 0 0 1-.547.219.7.7 0 0 1-.464-.164l-4.895-3.992v3.719q-.027.41-.437.437-.411-.027-.438-.437V5.937q.027-.41.438-.437.41.027.437.438m5.25.574L1.902 10.75l5.223 4.238z' />
    </g>
    <defs>
      <clipPath id='2ed8da838b7f4239006b3b5482739e85__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmRegularIcon);
export default ForwardRef;
