import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepLgFillIcon = (
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
      <path d='M2.32 22.727q-.624.468-1.367.156Q.29 22.53.25 21.75V9.25q.039-.78.703-1.133.742-.312 1.367.156l7.5 6.25.43.391V9.25q0-.547.352-.898Q10.952 8 11.5 8q.547 0 .898.352.352.35.352.898v12.5q0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898v-5.664l-.43.39z' />
    </g>
    <defs>
      <clipPath id='eacd5aae9710357edec332358484a2a2__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgFillIcon);
export default ForwardRef;
