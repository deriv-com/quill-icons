import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.688 6.156c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656v-2.871l-4.84 3.39c-.136.11-.3.137-.464.137a.806.806 0 0 1-.82-.82V6.348c0-.465.355-.848.82-.848.164 0 .328.055.465.164l4.84 3.39zm0 4.73v-.245L1.875 7.277v6.973z' />
    </g>
    <defs>
      <clipPath id='26f58dea68d76937413f054cd5a5cdbc__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmBoldIcon);
export default ForwardRef;
