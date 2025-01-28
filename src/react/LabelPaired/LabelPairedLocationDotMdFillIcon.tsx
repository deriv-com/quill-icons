import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.719 19.625a.943.943 0 0 1-1.469 0C3.656 17.594 0 12.75 0 10c0-3.312 2.688-6 6-6 3.313 0 6 2.688 6 6 0 2.75-3.656 7.594-5.281 9.625M6 8c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.343-.594.343-1.375 0-2C7.344 8.406 6.687 8 6 8' />
    </g>
    <defs>
      <clipPath id='0278fb582890b845f903df9d4a2874ef__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotMdFillIcon);
export default ForwardRef;
