import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenLgBoldIcon = (
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
      <path d='M.25 7.688c0-.508.39-.938.938-.938h10.625c.312 0 .624.195.78.508.196.273.196.625 0 .937L3.22 23.82a.94.94 0 0 1-1.29.313c-.429-.274-.585-.86-.312-1.29l8.516-14.218H1.188c-.547 0-.938-.39-.938-.937' />
    </g>
    <defs>
      <clipPath id='4a2b45498d7f702e780345c709d601d4__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgBoldIcon);
export default ForwardRef;
