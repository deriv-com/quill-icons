import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBadgeCheckSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.469 5.992c-.183.292-.438.392-.766.301-.638-.182-1.212-.036-1.723.437-.473.51-.62 1.085-.437 1.723.091.328-.01.583-.3.766-.584.328-.894.838-.93 1.531.036.693.346 1.203.93 1.531.29.182.391.438.3.766-.182.638-.036 1.212.437 1.723.51.473 1.085.62 1.723.437.328-.091.583.01.766.3.328.584.838.894 1.531.93.693-.036 1.203-.346 1.531-.93.183-.29.438-.391.766-.3.638.164 1.212.018 1.723-.438.473-.51.62-1.084.437-1.722-.091-.328.018-.584.328-.766.565-.328.866-.838.902-1.531-.036-.693-.337-1.203-.902-1.531-.31-.183-.42-.438-.328-.766.182-.638.036-1.212-.438-1.723-.51-.473-1.084-.62-1.722-.437-.328.091-.583-.01-.766-.3-.328-.584-.838-.894-1.531-.93-.693.036-1.203.346-1.531.93ZM7 3.75c1.02.036 1.823.428 2.406 1.176.948-.11 1.796.182 2.543.875.693.747.985 1.595.875 2.543.748.583 1.14 1.385 1.176 2.406-.037 1.02-.428 1.823-1.176 2.406.11.948-.182 1.796-.875 2.543-.747.693-1.595.985-2.543.875-.583.748-1.385 1.14-2.406 1.176-1.02-.037-1.823-.428-2.406-1.176-.948.11-1.796-.182-2.543-.875-.693-.747-.985-1.595-.875-2.543C.428 12.573.036 11.771 0 10.75c.036-1.02.428-1.823 1.176-2.406-.11-.948.182-1.796.875-2.543.747-.693 1.595-.985 2.543-.875C5.177 4.178 5.979 3.786 7 3.75Zm3.09 5.715-3.5 3.5c-.31.255-.62.255-.93 0l-1.75-1.75c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l1.285 1.285L9.16 8.535c.31-.255.62-.255.93 0 .255.31.255.62 0 .93Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmBoldIcon);
export default ForwardRef;
