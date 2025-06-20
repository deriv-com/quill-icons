import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.89 15.863c-.163.192-.437.192-.628.055l-4.157-3.555c-.19-.136-.19-.437-.054-.601a.44.44 0 0 1 .629-.055l4.156 3.527c.191.164.191.438.055.63m-6.042-5.66 5.414-4.594c.191-.136.465-.136.629.055.136.191.136.465-.055.629l-8.148 6.863c.273.438.437.985.437 1.531a3.075 3.075 0 0 1-3.062 3.063A3.057 3.057 0 0 1 0 14.688a3.075 3.075 0 0 1 3.063-3.063c.792 0 1.53.328 2.078.848l2.023-1.723-2.023-1.695c-.547.52-1.286.82-2.078.82A3.057 3.057 0 0 1 0 6.813 3.075 3.075 0 0 1 3.063 3.75c1.667 0 3.062 1.395 3.062 3.09a2.94 2.94 0 0 1-.437 1.531zM3.063 9c.765 0 1.476-.41 1.886-1.094.383-.656.383-1.504 0-2.187-.41-.657-1.12-1.094-1.886-1.094-.793 0-1.504.438-1.915 1.094-.382.683-.382 1.531 0 2.187A2.22 2.22 0 0 0 3.063 9m0 3.5c-.793 0-1.504.438-1.915 1.094-.382.683-.382 1.531 0 2.187a2.22 2.22 0 0 0 1.915 1.094c.765 0 1.476-.41 1.886-1.094.383-.656.383-1.504 0-2.187-.41-.656-1.12-1.094-1.886-1.094' />
    </g>
    <defs>
      <clipPath id='b3168241791fe377dce8fab72e95962f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsSmRegularIcon);
export default ForwardRef;
