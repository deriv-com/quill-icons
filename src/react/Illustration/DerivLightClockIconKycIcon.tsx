import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightClockIconKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#C7E5E5' clipPath='url(#a2b40b968ccda8876de25633b4f6c598__a)'>
      <path d='M12 .54C5.556.54.333 5.67.333 12S5.556 23.461 12 23.461c6.443 0 11.667-5.131 11.667-11.46C23.66 5.672 18.44.544 12 .538m0 20.513C6.91 21.054 2.784 17 2.784 12S6.91 2.947 12 2.947 21.216 7 21.216 12c-.006 4.998-4.129 9.048-9.216 9.054' />
      <path d='M18.263 11.647h-4.554a1.9 1.9 0 0 0-.664-.653v-5.35a1.09 1.09 0 0 0-1.046-.771c-.484 0-.91.314-1.046.77v5.351a1.96 1.96 0 0 0-.935 2.043 1.99 1.99 0 0 0 1.616 1.58 2.02 2.02 0 0 0 2.075-.926h4.554c.447 0 .933-.024 1.207-.397a1.055 1.055 0 0 0 0-1.25c-.274-.374-.738-.397-1.207-.397' />
    </g>
    <defs>
      <clipPath id='a2b40b968ccda8876de25633b4f6c598__a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightClockIconKycIcon);
export default ForwardRef;
