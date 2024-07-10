import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={22}
    viewBox='0 0 15 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.84 4.516 12.086 5.25a1.087 1.087 0 0 1 0 1.996L1.84 17.012c-.93.41-1.887-.63-1.395-1.532l1.914-3.527a.75.75 0 0 1 .602-.41l4.812-.602c.082 0 .165-.082.165-.191a.176.176 0 0 0-.165-.164l-4.812-.602c-.273-.054-.492-.191-.602-.41L.445 6.047C-.047 5.145.91 4.105 1.84 4.516' />
    </g>
    <defs>
      <clipPath id='576c688c2f39fc8a1bb036f9d01745ba__a'>
        <path d='M0 0h15v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopSmFillIcon);
export default ForwardRef;
