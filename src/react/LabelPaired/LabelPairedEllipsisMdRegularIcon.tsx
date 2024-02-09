import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 12 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 11 12q0-.437.281-.719A.97.97 0 0 1 12 11q.438 0 .719.281A.97.97 0 0 1 13 12m-5 0a.97.97 0 0 1-.281.719A.97.97 0 0 1 7 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 6 12q0-.437.281-.719A.97.97 0 0 1 7 11q.437 0 .719.281A.97.97 0 0 1 8 12m-6 1a.97.97 0 0 1-.719-.281A.97.97 0 0 1 1 12q0-.437.281-.719A.97.97 0 0 1 2 11q.438 0 .719.281A.97.97 0 0 1 3 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 2 13' />
    </g>
    <defs>
      <clipPath id='6bc83e1ac9278e1d5282ee029500651e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisMdRegularIcon);
export default ForwardRef;
