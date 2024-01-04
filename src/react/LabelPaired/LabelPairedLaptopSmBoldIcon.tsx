import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.25 5.938H3.75c-.273.018-.42.164-.438.437V12.5H2V6.375c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h10.5c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V12.5h-1.313V6.375c-.018-.273-.164-.42-.437-.438ZM2.875 15.563h12.25c.602-.037 1.012-.329 1.23-.876H1.645c.218.547.628.839 1.23.876ZM.25 14.25c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246h15.75c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629c-.018.747-.273 1.367-.766 1.86-.492.492-1.112.747-1.859.765H2.875c-.747-.018-1.367-.273-1.86-.766-.492-.492-.747-1.112-.765-1.859Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmBoldIcon);
export default ForwardRef;
