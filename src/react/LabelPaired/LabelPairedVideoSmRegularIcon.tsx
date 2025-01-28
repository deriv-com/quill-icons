import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 6.375A.88.88 0 0 0 1 7.25v7c0 .492.383.875.875.875h7a.88.88 0 0 0 .875-.875v-7a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75h-7c-.984 0-1.75-.766-1.75-1.75zm14.191 7.766L11.5 13.457v-1.012l3.227 1.805c.027 0 .054.027.082.027.109 0 .191-.082.191-.191V7.44a.187.187 0 0 0-.191-.191c-.028 0-.055.027-.082.027L11.5 9.082V8.07l2.816-1.558c.164-.082.329-.137.493-.137.574 0 1.066.492 1.066 1.066v6.645c0 .574-.492 1.039-1.066 1.039-.164 0-.328-.027-.493-.11' />
    </g>
    <defs>
      <clipPath id='515b40c3516876be3d57172a3ec76a8e__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmRegularIcon);
export default ForwardRef;
