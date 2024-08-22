import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 13c0 2.773 2.227 5 5 5 2.695 0 4.922-2.148 5-4.844V13c0-2.734-2.266-5-5-5-2.773 0-5 2.266-5 5m6.29 6.133q-.645.117-1.29.117A6.22 6.22 0 0 1 .25 13 6.243 6.243 0 0 1 6.5 6.75c3.438 0 6.25 2.813 6.25 6.25 0 .078 0 .156-.04.234-.038 1.485-.585 2.93-1.6 4.024l-6.016 6.797c-.235.273-.625.273-.899.039a.58.58 0 0 1-.039-.86z' />
    </g>
    <defs>
      <clipPath id='b9fe5ce5be3540a86faf8f2edffac8d3__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineLgRegularIcon);
export default ForwardRef;
