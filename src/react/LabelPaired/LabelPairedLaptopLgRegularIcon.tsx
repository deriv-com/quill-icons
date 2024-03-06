import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20 8H5q-.547 0-.898.352-.352.35-.352.898v10H2.5v-10q.039-1.055.742-1.758T5 6.75h15q1.055.039 1.758.742T22.5 9.25v10h-1.25v-10q0-.547-.352-.898Q20.548 8 20 8M3.008 23h18.984q1.29-.078 1.68-1.25H1.328q.39 1.172 1.68 1.25M0 21.242q.078-.664.742-.742h23.516q.664.078.742.742-.039 1.29-.86 2.149-.858.82-2.148.859H3.008q-1.29-.039-2.11-.86Q.04 22.533 0 21.243' />
    </g>
    <defs>
      <clipPath id='0746a9428ca0e65fe2515b134bc9e519__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopLgRegularIcon);
export default ForwardRef;
