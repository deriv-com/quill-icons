import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepSmRegularIcon = (
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
      <path d='M7.125 5.938q.027-.411.438-.438.41.027.437.438v9.625q-.027.41-.437.437-.411-.027-.438-.437v-3.72L2.23 15.837a.7.7 0 0 1-.464.164.74.74 0 0 1-.547-.219.74.74 0 0 1-.219-.547V6.266q0-.329.219-.547a.74.74 0 0 1 .547-.219.7.7 0 0 1 .464.164l4.895 3.992zm-5.25.574v8.476l5.223-4.238z' />
    </g>
    <defs>
      <clipPath id='a123c8320346bfd9ff23130734b28ff5__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmRegularIcon);
export default ForwardRef;
