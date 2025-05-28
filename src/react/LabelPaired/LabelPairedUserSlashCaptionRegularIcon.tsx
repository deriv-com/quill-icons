import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 6.5a2.99 2.99 0 0 1-1.29 2.46l-.608-.491A2.26 2.26 0 0 0 9.75 6.5 2.25 2.25 0 0 0 7.5 4.25c-1.031 0-1.898.703-2.18 1.64l-.61-.492A3 3 0 0 1 7.5 3.5c1.64 0 3 1.36 3 3m1.219 8.25.75.61a.66.66 0 0 1-.422.14H2.93a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 4.172-4.195h.07l.961.75H6.422A3.43 3.43 0 0 0 3 14.75zM.586 3.594l14.273 11.25c.141.117.188.375.047.515a.35.35 0 0 1-.515.07L.14 4.18c-.164-.117-.211-.374-.07-.515.117-.164.374-.21.515-.07' />
    </g>
    <defs>
      <clipPath id='243f81e51c7c23cd35ad4207f32eea10__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashCaptionRegularIcon);
export default ForwardRef;
