import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.969 22.727 11.25 17.14V13.86l6.719-5.587q.585-.468 1.328-.156.664.352.703 1.133v12.5q-.039.78-.703 1.133-.743.312-1.328-.156M10 19.25v2.5q-.039.78-.703 1.133-.743.312-1.328-.156l-7.5-6.25A1.22 1.22 0 0 1 0 15.5q0-.585.469-.977l7.5-6.25q.585-.468 1.328-.156.664.352.703 1.133v10' />
    </g>
    <defs>
      <clipPath id='6b4575eb70ecd99556a6b1db47caa7fe__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgFillIcon);
export default ForwardRef;
