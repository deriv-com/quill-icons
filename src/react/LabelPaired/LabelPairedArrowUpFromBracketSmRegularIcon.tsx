import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromBracketSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.8 3.887 3.5 3.5c.183.2.183.4 0 .601-.2.183-.4.183-.6 0L6.937 5.254v7.684c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.438-.438V5.255L3.301 7.988c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l3.5-3.5c.2-.183.401-.183.602 0Zm-5.55 9.05v2.626c.018.364.146.674.383.93.255.236.565.364.93.382h7.874c.365-.018.675-.146.93-.383.237-.255.365-.565.383-.93v-2.624c.018-.274.164-.42.438-.438.273.018.419.164.437.438v2.624c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H2.564c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-2.626c.018-.273.164-.419.438-.437.273.018.419.164.437.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmRegularIcon);
export default ForwardRef;
