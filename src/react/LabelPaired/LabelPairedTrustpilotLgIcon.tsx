import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrustpilotLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.07 19.602-4.57 1.21 6.484 4.688zm5.938-6.446L12.5 20.812 5.977 25.5l2.5-7.617-6.524-4.727H10L12.5 5.5l2.46 7.656z' />
    </g>
    <defs>
      <clipPath id='d7df8944feaac99031fba3de67b96685__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotLgIcon);
export default ForwardRef;
