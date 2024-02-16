import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepLgFillIcon = (
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
      <path d='m10.719 22.727-7.5-6.25-.469-.391v5.664q0 .547-.352.898Q2.048 23 1.5 23q-.547 0-.898-.352-.352-.35-.352-.898V9.25q0-.547.352-.898Q.952 8 1.5 8q.547 0 .898.352.352.35.352.898v5.664l.469-.39 7.5-6.25q.585-.47 1.328-.157.664.352.703 1.133v12.5q-.039.78-.703 1.133-.743.312-1.328-.156' />
    </g>
    <defs>
      <clipPath id='31cf1b047fc1f5bf5009bb4fafea8b97__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepLgFillIcon);
export default ForwardRef;
