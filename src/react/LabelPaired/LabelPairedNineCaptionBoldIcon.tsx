import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 8A2.62 2.62 0 0 0 4 10.625c.75 0 1.43-.305 1.898-.82l.141-.14A2.67 2.67 0 0 0 6.625 8C6.625 6.57 5.43 5.375 4 5.375A2.636 2.636 0 0 0 1.375 8m2.953 3.75H4A3.73 3.73 0 0 1 .25 8 3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8c0 .984-.375 1.875-.984 2.531l-3.282 4.031c-.187.235-.539.258-.796.07-.235-.187-.258-.538-.07-.796z' />
    </g>
    <defs>
      <clipPath id='16230c8c3154480c83f00a4aa4cde6a2__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionBoldIcon);
export default ForwardRef;
