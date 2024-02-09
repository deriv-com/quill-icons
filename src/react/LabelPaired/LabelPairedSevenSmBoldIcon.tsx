import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenSmBoldIcon = (
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
      <path d='M.125 5.281q.054-.601.656-.656H8.22q.382 0 .574.328.165.329 0 .656L2.23 16.547q-.355.492-.902.246-.491-.356-.219-.902L7.07 5.938H.781Q.18 5.882.125 5.28' />
    </g>
    <defs>
      <clipPath id='1a3ea69518d5c369bdc00be45cdaac17__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmBoldIcon);
export default ForwardRef;
