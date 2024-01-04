import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.938 5.063V16h2.624c.274.018.42.164.438.438-.018.273-.164.419-.438.437H.438c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h2.624V5.883l-1.94 1.285c-.238.128-.438.091-.602-.11-.128-.236-.092-.437.109-.601l2.625-1.75a.47.47 0 0 1 .465-.027.428.428 0 0 1 .219.383Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmRegularIcon);
export default ForwardRef;
