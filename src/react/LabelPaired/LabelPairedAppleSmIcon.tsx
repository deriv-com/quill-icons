import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.973 11.106q-.055.163.191.984.246.847 1.477 1.531-.165.52-.575 1.285a6.5 6.5 0 0 1-.984 1.34q-.574.575-1.23.629a2.45 2.45 0 0 1-.985-.246q-.465-.219-1.12-.246-.685.028-1.177.273-.437.191-.875.219-.683-.027-1.285-.656a6.8 6.8 0 0 1-1.039-1.422 11 11 0 0 1-.629-1.34 7 7 0 0 1-.383-2.215Q.414 9.41 1.371 8.508q.93-.903 2.133-.93.684.055 1.34.328.465.191.765.219.219-.027.657-.191.355-.138.82-.274t.93-.11q1.53.138 2.324 1.231-1.395.82-1.367 2.324M7.414 6.62q-.82.957-1.887.93-.054-1.149.684-1.969.356-.383.848-.656a2.5 2.5 0 0 1 1.011-.301q.056.246-.027.766-.11.546-.629 1.23' />
    </g>
    <defs>
      <clipPath id='cd8df1b2d90f827dfdbf9ce72cabc17b__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleSmIcon);
export default ForwardRef;
